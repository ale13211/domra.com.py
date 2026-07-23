import { linkWhatsapp, siteConfig } from "@/data/config";

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-20 text-center">
      <h1 className="text-2xl font-semibold text-marca mb-4">Hablemos</h1>
      <p className="text-gray-600 mb-8">
        Escribinos por WhatsApp y te respondemos a la brevedad.
      </p>
      <a
        href={linkWhatsapp()}
        target="_blank"
        className="inline-block bg-marca text-white px-6 py-3 rounded-md text-sm"
      >
        Escribir por WhatsApp
      </a>
      <div className="text-sm text-gray-500 mt-6">
        Instagram: {siteConfig.instagram}
      </div>
    </div>
  );
}
