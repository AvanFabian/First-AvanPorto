import "@/styles/globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"));

export const metadata: Metadata = {
  title: "Fabian Daniswara",
  description: "Build custom web applications or maintain react website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative z-0 black-blue-gradient">
          <div
            className="relative bg-black-hole bg-fixed bg-cover
            bg-no-repeat bg-center"
          >
            <Navbar />
            <Hero />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
