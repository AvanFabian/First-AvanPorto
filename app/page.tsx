import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"));
const Works = dynamic(() => import("@/components/Works"));
const Contact = dynamic(() => import("@/components/Contact"));
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
