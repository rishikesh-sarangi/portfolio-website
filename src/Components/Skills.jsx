import {
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoFirebase,
} from "react-icons/bi";
import { SiSvelte, SiSupabase } from "react-icons/si";
import { BsGit } from "react-icons/bs";
const Skills = () => {
  return (
    <>
      <section className="text-center">
        <h3 className="mb-8 text-4xl mt-28 md:text-5xl font-Montserrat">
          Skills
        </h3>
        <div className="grid grid-cols-3 gap-4 py-6 mx-auto shadow-2xl md:max-w-2xl md:gap-12 md:px-8 rounded-2xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLogoJava className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">Java</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLogoPython className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">Python</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLogoJavascript className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">JavaScript</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLogoReact className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">React</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <SiSvelte className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">Svelte</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLogoTailwindCss className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">Tailwind</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BiLogoFirebase className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">Firebase</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <SiSupabase className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">Supabase</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BsGit className="text-5xl md:text-6xl" />
            <div className="text-lg text-slate-700">Git/Github</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
