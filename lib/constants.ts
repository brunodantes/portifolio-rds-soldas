export const WHATSAPP_NUMBER = "5511961522280";
export const WHATSAPP_DISPLAY = "11 96152-2280";
export const CONTACT_EMAIL = "rdrsolda@gmail.com";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
