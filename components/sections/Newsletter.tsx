"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2 } from "lucide-react";

/**
 * Capture d'e-mails (newsletter). Poste sur /api/contact avec source
 * « newsletter » — réutilise l'infra Supabase `leads`. Des valeurs de nom /
 * message par défaut sont envoyées pour satisfaire le schéma existant.
 * Rendu dans le Footer (présent sur tout le site).
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Abonné",
          lastName: "Newsletter",
          email,
          message: "Inscription à la newsletter SY&CO",
          source: "newsletter",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setState("sent");
      setEmail("");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/15 md:flex md:items-center md:justify-between md:gap-10">
      <div className="mb-6 max-w-md md:mb-0">
        <h3 className="font-heading text-xl font-bold text-white">
          Restez informé·e
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          Nouvelles sessions Form’Action, rencontres Meet &amp; Share et
          calendrier 2027 : recevez nos actualités directement par e-mail.
        </p>
      </div>

      {state === "sent" ? (
        <div className="flex items-center gap-3 text-white">
          <CheckCircle2 className="h-6 w-6 text-orange" />
          <p className="font-heading text-sm font-bold">
            Merci ! Votre inscription est bien enregistrée.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Votre adresse e-mail
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-teal" />
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full rounded-full border-0 py-3 pl-12 pr-4 text-sm text-ink outline-none ring-2 ring-transparent transition focus:ring-orange"
              />
            </div>
            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-orange/90 disabled:opacity-70"
            >
              {state === "loading" ? "Envoi…" : "S'inscrire"}
              <Send className="h-4 w-4" />
            </button>
          </div>
          {state === "error" && (
            <p className="mt-3 text-sm text-orange">
              Une erreur est survenue. Merci de réessayer.
            </p>
          )}
          <p className="mt-3 text-xs text-white/60">
            En vous inscrivant, vous acceptez notre{" "}
            <Link
              href="/politique-de-confidentialite"
              className="underline underline-offset-2 hover:text-white"
            >
              politique de confidentialité
            </Link>
            . Désinscription à tout moment.
          </p>
        </form>
      )}
    </div>
  );
}
