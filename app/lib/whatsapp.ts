export const WHATSAPP_NUMBER = "919625663269";

export function buildWhatsAppUrl(fields: Iterable<[string, FormDataEntryValue]>, introduction: string, page: string) {
  const labels: Record<string, string> = { name: "Name", email: "Email", message: "Message" };
  const details = Array.from(fields).flatMap(([key, value]) => {
    if (typeof value !== "string" || !value.trim()) return [];
    const label = labels[key] ?? key;
    return [`${label}: ${value.trim()}`];
  });
  const message = [introduction, details.join("\n"), `Page: ${page}`].filter(Boolean).join("\n\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
