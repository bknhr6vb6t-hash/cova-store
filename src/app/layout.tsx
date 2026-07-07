import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COVA | Wear Confidence",
  description: "Tienda de ropa premium con diseño minimalista y calidad superior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* El menú de navegación arriba */}
        <Navbar />
        
        {/* El contenido principal que empuja al footer hacia abajo */}
        <main className="flex-grow">{children}</main>
        
        {/* El pie de página al final */}
        <Footer />
      </body>
    </html>
  );
}