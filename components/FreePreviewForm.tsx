"use client";

import { FormEvent, useMemo, useState } from "react";
import { PHONE_DASHED, PHONE_TEXT_URL } from "@/lib/site";

const businessTypes = [
  "Contractor / home services",
  "Cleaning company",
  "Lawn care / property services",
  "Restaurant / food truck",
  "Cabin / vacation rental",
  "Daycare / education",
  "Local shop",
  "Other local business",
];

const goals = [
  "More calls",
  "More quote requests",
  "Look more professional",
  "Show up better on Google",
  "Replace an old website",
  "Turn Facebook info into a real website",
  "Booking / rental inquiries",
  "Not sure yet",
];

const initialForm = {
  name: "",
  businessName: "",
  phoneOrEmail: "",
  currentLink: "",
  businessType: "",
  serviceArea: "",
  mainGoal: "",
  services: "",
  notes: "",
};

export default function FreePreviewForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const message = useMemo(() => {
    return `Free website preview request

Name:
${form.name || "Not provided"}

Business name:
${form.businessName || "Not provided"}

Best contact:
${form.phoneOrEmail || "Not provided"}

Current website / Facebook / Google link:
${form.currentLink || "Not provided"}

Business type:
${form.businessType || "Not provided"}

Service area:
${form.serviceArea || "Not provided"}

Main goal:
${form.mainGoal || "Not provided"}

Main services / offers:
${form.services || "Not provided"}

Extra notes:
${form.notes || "Not provided"}`;
  }, [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/free-preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "The message could not be sent.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : `Something went wrong. You can still text ${PHONE_DASHED}.`
      );
    }
  }

  return (
    <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker mb-4">Preview request form</p>

            <h2 className="text-balance text-4xl leading-tight md:text-6xl">
              Send the info straight from this page.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
            Fill this out and it sends the preview request directly to me. The
            message preview shows exactly what will be sent.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Your name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Business name
                </label>
                <input
                  value={form.businessName}
                  onChange={(e) => updateField("businessName", e.target.value)}
                  autoComplete="organization"
                  placeholder="Business name"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Best phone or email
                </label>
                <input
                  value={form.phoneOrEmail}
                  onChange={(e) => updateField("phoneOrEmail", e.target.value)}
                  autoComplete="email"
                  placeholder="Phone or email"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Current website / Facebook / Google link
                </label>
                <input
                  value={form.currentLink}
                  onChange={(e) => updateField("currentLink", e.target.value)}
                  autoComplete="url"
                  placeholder="Paste a link if you have one"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Business type
                </label>
                <select
                  value={form.businessType}
                  onChange={(e) => updateField("businessType", e.target.value)}
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                >
                  <option value="">Choose one</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Service area
                </label>
                <input
                  value={form.serviceArea}
                  onChange={(e) => updateField("serviceArea", e.target.value)}
                  autoComplete="address-level2"
                  placeholder="Example: Glenwood, Hot Springs, Arkadelphia"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Main goal
                </label>
                <select
                  value={form.mainGoal}
                  onChange={(e) => updateField("mainGoal", e.target.value)}
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                >
                  <option value="">Choose one</option>
                  {goals.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Main services / offers
                </label>
                <textarea
                  value={form.services}
                  onChange={(e) => updateField("services", e.target.value)}
                  placeholder="Example: remodeling, decks, flooring, repairs, free estimates..."
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-[var(--text-soft)]">
                  Extra notes
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  placeholder="Anything specific you want the preview to show?"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send preview request"}
              </button>

              <a href={PHONE_TEXT_URL} className="btn btn-secondary">
                Text instead
              </a>
            </div>

            {status === "success" && (
              <p className="mt-5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-800">
                Sent. I’ll look it over and follow up with you.
              </p>
            )}

            {status === "error" && (
              <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
                {errorMessage}
              </p>
            )}
          </form>

          <div className="premium-shell rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-medium text-[var(--text-main)]">
              Message preview
            </p>

            <div className="mt-5 max-h-[620px] overflow-auto rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-5">
              <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-[var(--text-soft)]">
                {message}
              </pre>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[var(--text-main)] p-5 text-white">
              <p className="text-sm leading-7 text-white/70">
                This sends through the site form. If it ever gives an error, you
                can still text me directly at {PHONE_DASHED}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}