import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const Footer = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedinFilled
          stroke={2}
          className='h-full w-full text-neutral-500 dark:text-neutral-300'
        />
      ),
      href: "https://www.linkedin.com/in/thejas-m-s-10a2901a7/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "https://github.com/thejasms1603",
    },
    {
      title: "Mail",
      icon: (
        <IconMail className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "mailto:thejasabhi705@gmail.com",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "https://x.com/ThejasGowda03",
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscordFilled className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "https://discord.gg/zEqgUWJR",
    },
  ];
  return (
    <footer className='w-full pt-10 mb-[100px] md:mb-10' id='contact'>
      <div className='flex items-center flex-col gap-10'>
        <h1 className='heading lg:max-w-[45vw]'>
          Contact me <span className='text-purple'>let&apos;s discuss</span> how
          I can contribute to your team
        </h1>
        <div className='flex items-center justify-center my-10 w-full'>
          <FloatingDock items={links} />
        </div>
      </div>
      <p className='md:text-base text-sm md:font-normal font-light text-center'>
        Copyright © 2025 Thejas
      </p>
    </footer>
  );
};


export default Footer;
