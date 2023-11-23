import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"));
const Works = dynamic(() => import("@/components/Works"));
const Contact = dynamic(() => import("@/components/Contact"));
// import Certificate from '@/components/Certificate'

export default function Home() {
  return (
    <main
      className="max-w-full
    mx-auto relative z-0"
    >
      <div className="paddingAll max-w-full bg-black-hole2 bg-fixed bg-cover
    bg-no-repeat bg-center">
        <About />
      </div>
      <div className="paddingAll max-w-full bg-sunset bg-fixed bg-cover
    bg-no-repeat bg-center">
        <Works />
      </div>
      <div className="paddingAll max-w-full bg-sunset2 bg-fixed bg-cover
    bg-no-repeat bg-center">
        <Contact />
      </div>
    </main>
  );
}
