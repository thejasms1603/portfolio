import { skills } from "@/data";
import { Button } from "./ui/moving-border";

const TechStack = () => {
  return (
    <section id='techstack'>
      <h1 className='heading'>Tech Stack</h1>
      <div className='flex justify-between gap-6 py-3'>
        <div className="justify-center items-center flex">
          <p className='text-xl py-3 text-justify'>
            I&apos;m passionate about building scalable and high-performance
            applications using modern technologies. My expertise spans across {" "}
            <span className="text-purple">frontend and backend development</span>, I love turning ideas
            into reality with code! 🚀
          </p>
        </div>
        <div className='flex flex-wrap gap-4 py-5 items-center justify-center'>
          {skills.map((skill, i) => (
            <Button
              key={i}
              className='flex items-center gap-2 border p-2 rounded-full bg-white dark:bg-black shadow-sm hover:shadow-md transition-all size-[5rem]'
            >
              <img src={skill.icon} alt={skill.name} className='w-6 h-6' />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;