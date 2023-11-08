import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
// import Certificate from '@/components/Certificate'

export default function Home() {
  return (
    <main className="paddingAll max-w-7xl
    mx-auto relative z-0">
      <About />
      <Works />
      <Contact />
    </main>
  );
}
