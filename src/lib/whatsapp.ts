// Ubah nomor WhatsApp di sini (format internasional tanpa + atau spasi)
export const WA_NUMBER = "6287713750093";
export const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
