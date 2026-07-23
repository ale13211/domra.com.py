export const siteConfig = {
  nombre: "DOMRA",
  whatsapp: "595900000000", // reemplazar por el número real, formato 595xxxxxxxxx
  instagram: "https://www.instagram.com/domrapy/",
  dominio: "domra.com.py",
  mensajeWhatsapp: "Hola, te escribo desde la web de DOMRA",
};

export function linkWhatsapp(mensaje?: string) {
  const texto = encodeURIComponent(mensaje ?? siteConfig.mensajeWhatsapp);
  return `https://wa.me/${siteConfig.whatsapp}?text=${texto}`;
}

export function formatoGuarani(valor: number) {
  return "₲ " + valor.toLocaleString("es-PY");
}
