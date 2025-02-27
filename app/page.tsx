import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

const page = () => {
  return (
    <main className='relative bg-black-100 flex text-white justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Journey/>
        <Projects/>
        <TechStack />
        <Footer/>
      </div>
    </main>
  );
};

export default page;
