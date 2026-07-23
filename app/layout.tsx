import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export const metadata: Metadata = {
  title: "DOMRA — Cuidado dental en Paraguay",
  description:
    "Productos de cuidado e higiene dental con envío a todo el Paraguay. Pagás al recibir.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
