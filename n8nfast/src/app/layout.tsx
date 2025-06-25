// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Tải font Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Metadata của trang
export const metadata: Metadata = {
  title: "n8nfast - Hosting n8n",
  description: "Hosting n8n nhanh chóng và an toàn",
  keywords: "n8n, hosting, automation, cloud, server",
  openGraph: {
    title: "n8nfast - Hosting n8n",
    description: "Hosting n8n nhanh chóng và an toàn",
    url: "https://n8nfast.com", // URL trang web của bạn
    siteName: "n8nfast",
    images: [
      {
        url: "/images/og-image.png", // Đường dẫn tới hình ảnh og cho Open Graph
        width: 1200,
        height: 630,
        alt: "n8nfast Hosting n8n",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Thêm metadata cho các Open Graph, Twitter và SEO */}
      </head>
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
