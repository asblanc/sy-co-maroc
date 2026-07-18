import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();

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
    source: "contact_form",
  });

  if (error) {
    console.error("[contact] supabase insert error:", error.message);
    return NextResponse.json({ ok: false, error: "storage" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
