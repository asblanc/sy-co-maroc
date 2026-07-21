"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, Send, CheckCircle2 } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/Button";

/** Contact page form + coordinates. Submits to the /api/contact route. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setSent(true);
    } catch {
      setError(
        `Une erreur est survenue. Merci de réessayer ou de nous écrire à ${contactInfo.email}.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      {/* Form */}
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
        <h2 className="mb-2 font-heading text-2xl font-bold text-teal">
          Nous contacter
        </h2>
        <p className="mb-8 text-base leading-relaxed text-ink/80">
          Une formation à réserver, un projet pour votre équipe ou une simple
          question&nbsp;? Décrivez-nous votre besoin&nbsp;: notre équipe revient
          vers vous rapidement pour construire le parcours adapté.
        </p>

        {sent ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-teal/5 py-14 text-center">
            <CheckCircle2 className="h-14 w-14 text-teal" />
            <p className="font-heading text-lg font-bold text-teal">
              Merci&nbsp;! Votre demande a bien été envoyée.
            </p>
            <p className="max-w-sm text-sm text-ink/70">
              Notre équipe vous recontacte rapidement pour répondre à votre
              demande.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <Field label="Prénom" name="firstName" />
            <Field label="Nom" name="lastName" />
            <Field label="Email" name="email" type="email" />
            <Field label="Téléphone" name="phone" type="tel" />

            <div>
              <label
                htmlFor="eventType"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                Votre besoin
              </label>
              <select
                id="eventType"
                name="eventType"
                defaultValue=""
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              >
                <option value="" disabled>
                  Sélectionnez…
                </option>
                <option>FormAction — Formation résidentielle</option>
                <option>Meet &amp; Share — Rencontre entre pairs</option>
                <option>Formation sur mesure (intra-entreprise)</option>
                <option>Coaching / accompagnement conseil</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="participants"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                Nombre de participants
              </label>
              <select
                id="participants"
                name="participants"
                defaultValue=""
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              >
                <option value="" disabled>
                  Sélectionnez…
                </option>
                <option>1 (moi-même)</option>
                <option>2 à 5</option>
                <option>5 à 15</option>
                <option>15 à 50</option>
                <option>Plus de 50</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="eventDate"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                Dates ou période souhaitée
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="text"
                placeholder="Ex : session 2027, ou une période souhaitée"
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                Votre besoin en quelques mots
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Objectifs, thématique, profils concernés, contexte…"
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>
            {error && (
              <p className="sm:col-span-2 rounded-xl bg-pink/10 px-4 py-3 text-sm text-pink">
                {error}
              </p>
            )}
            <div className="sm:col-span-2">
              <Button type="submit" variant="pink" size="lg" disabled={submitting}>
                {submitting ? "Envoi…" : "Envoyer ma demande"}{" "}
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Coordinates */}
      <aside className="flex flex-col gap-5">
        <div className="rounded-3xl bg-teal p-8 text-white">
          <h3 className="mb-6 font-heading text-lg font-bold">Coordonnées</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <span>
                {contactInfo.address}
                <br />
                {contactInfo.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-orange" />
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                className="hover:text-orange"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-orange" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-orange"
              >
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-black/5 bg-peach/25 p-8">
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-teal">
            Rayonnement
          </p>
          <p className="mt-2 text-sm text-ink/80">{contactInfo.reach}</p>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  full,
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}
