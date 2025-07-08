import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hypno Website",
  description: "Made with Care <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
