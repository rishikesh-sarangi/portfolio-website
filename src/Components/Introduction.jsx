import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import rishikesh from "../Assets/rishikesh.jpeg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";

const Introduction = () => {
  const [isClicked, setisClicked] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setisClicked(false);
    }, 2000);
    // console.log(isClicked);
    return () => {
      clearTimeout(timer1);
    };
  }, [isClicked]);

  return (
    <>
      <div className="text-center">
        <h2 className="py-2 text-5xl font-medium tracking-wide text-red-600 md:text-6xl font-Montserrat">
          Rishikesh Sarangi
        </h2>
        <h3 className="py-2 text-2xl md:text-3xl">Student & Developer</h3>
        <p className="max-w-xl py-5 mx-auto text-lg leading-8 text-gray-800 md:text-xl">
          An aspiring web developer, pursuing a B. Tech. in CSE at ITER, Siksha
          'O' Anusandhan. I am currently learning React and looking for
          internship oppurtunities.
        </p>
      </div>
      <div className="flex justify-center gap-10 py-3 text-5xl text-slate-800">
        <a
          className="transition-all cursor-pointer hover:scale-125"
          href="https://github.com/rishikesh-sarangi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="transition-all cursor-pointer hover:scale-125"
          href="https://www.linkedin.com/in/rishikesh-sarangi-869176265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <CopyToClipboard text="rishikeshsarangi70@gmail.com">
          <HiEnvelope
            className={`hover:scale-125 transition-all cursor-pointer ${
              isClicked
                ? "transition ease-in-out text-green-500"
                : "transition ease-in-out "
            }`}
            onClick={() => setisClicked(true)}
          />
        </CopyToClipboard>
      </div>
      <div className="relative mt-5">
        {isClicked && (
          <p className="absolute px-4 py-2 text-sm transform -translate-x-1/2 bg-green-300 rounded-md left-1/2">
            Mail copied to Clipboard !
          </p>
        )}
      </div>
      <div className="text-center">
        <div className="inline-flex mt-20 overflow-hidden bg-gray-200 rounded-full w-72 h-72">
          <img
            src={rishikesh}
            alt="Profile Avatar"
            className="w-full h-full scale-y-125 "
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
