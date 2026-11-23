import { z } from "zod";
import { and, desc, eq } from "drizzle-orm";
import { quoteFields } from "../../quote";
import type { QuoteFields } from "../../quote";
import { getChatGPTUser } from "../../chatgpt-auth";
import { getDb } from "../../../db";
import { quotes } from "../../../db/schema";

export const dynamic = "force-dynamic";

function json(data: unknown, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "private, no-store" } });
}

function record(row: typeof quotes.$inferSelect) {
  return { ...(JSON.parse(row.payload) as QuoteFields), id: row.id, updatedAt: row.updatedAt };
}

function validId(value: unknown): value is string {
  return typeof value === "string" && /^[a-f0-9-]{36}$/i.test(value);
}

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return json({ error: "Sign in with ChatGPT to load your quotes." }, 401);
  try {
    const rows = await getDb().select().from(quotes)
      .where(eq(quotes.ownerId, user.userId)).orderBy(desc(quotes.updatedAt));
    return json(rows.map(record));
  } catch (error) {
    console.error("Quote list unavailable", error);
    return json({ error: "The quote list couldn't load. Try again." }, 500);
  }
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return json({ error: "Sign in with ChatGPT to save quotes." }, 401);
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return json({ error: "Send quote fields as JSON." }, 415);
  }
  const input = await request.json().catch(() => null);
  const result = quoteFields.extend({ id: z.string().uuid().optional() }).safeParse(input);
  if (!result.success) return json({ error: result.error.errors[0].message }, 400);
  const { id, ...fields } = result.data;
  const values = { payload: JSON.stringify(fields), updatedAt: new Date().toISOString() };
  try {
    const db = getDb();
    if (id) {
      const [updated] = await db.update(quotes).set(values)
        .where(and(eq(quotes.id, id), eq(quotes.ownerId, user.userId))).returning();
      if (!updated) return json({ error: "Quote could not be found." }, 404);
      return json(record(updated));
    }
    const [created] = await db.insert(quotes)
      .values({ ...values, id: crypto.randomUUID(), ownerId: user.userId }).returning();
    return json(record(created), 201);
  } catch (error) {
    console.error("Quote save unavailable", error);
    return json({ error: "The quote couldn't be saved. Try again." }, 500);
  }
}

export async function DELETE(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return json({ error: "Sign in with ChatGPT to manage quotes." }, 401);
  const id = new URL(request.url).searchParams.get("id");
  if (!validId(id)) return json({ error: "Invalid quote ID." }, 400);
  try {
    const [deleted] = await getDb().delete(quotes)
      .where(and(eq(quotes.id, id), eq(quotes.ownerId, user.userId))).returning({ id: quotes.id });
    return deleted ? json({ id: deleted.id }) : json({ error: "Quote could not be found." }, 404);
  } catch (error) {
    console.error("Quote deletion unavailable", error);
    return json({ error: "The quote couldn't be deleted. Try again." }, 500);
  }
}
