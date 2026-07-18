import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  eventType?: string;
  participants?: string;
  eventDate?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clip = (v: unknown, max = 500) => String(v ?? "").trim().slice(0, max);

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const firstName = clip(body.firstName, 120);
  const lastName = clip(body.lastName, 120);
  const email = clip(body.email, 200);
  const phone = clip(body.phone, 40);
  const message = clip(body.message, 4000);
  const eventType = clip(body.eventType, 80);
  const participants = clip(body.participants, 80);
  const eventDate = clip(body.eventDate, 80);

  if (!firstName || !lastName || !email || !message || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 422 }
    );
  }

  const supabase = getSupabase();

  // Graceful degrade: without a configured database the form still succeeds.
  if (!supabase) {
    console.info("[contact] received (no DB configured):", { email });
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("leads").insert({
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    message,
    event_type: eventType || null,
    participants: participants || null,
    event_date: eventDate || null,
    source: "devis_evenementiel",
  });

  if (error) {
    console.error("[contact] supabase insert error:", error.message);
    return NextResponse.json({ ok: false, error: "storage" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
