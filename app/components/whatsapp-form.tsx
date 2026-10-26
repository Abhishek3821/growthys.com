"use client";

import type { ComponentPropsWithoutRef, FormEvent } from "react";
import { buildWhatsAppUrl } from "../lib/whatsapp";

type Props = Omit<ComponentPropsWithoutRef<"form">, "onSubmit" | "action" | "method"> & { introduction: string };

export default function WhatsAppForm({ introduction, children, ...props }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const field of Array.from(form.elements)) {
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        if (field.required && !field.value.trim()) {
          field.setCustomValidity("Please fill in this field.");
          field.reportValidity();
          field.setCustomValidity("");
          return;
        }
      }
    }
    if (!form.reportValidity()) return;
    const destination = buildWhatsAppUrl(new FormData(form), introduction, window.location.pathname);
    window.location.assign(destination);
  }

  return <form {...props} onSubmit={handleSubmit}>{children}</form>;
}
