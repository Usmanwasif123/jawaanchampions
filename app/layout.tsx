import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Jawan Champions",
  description: "Center for physical education and leadership",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 p-0">
      <head>
        {/* Add Google Fonts or any other custom fonts here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Microsport&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
