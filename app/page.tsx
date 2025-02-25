import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

const page = () => {
  return (
    <main className='relative bg-black-100 flex text-white justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
        <TechStack />
        <Journey />
      </div>
    </main>
  );
};

export default page;
