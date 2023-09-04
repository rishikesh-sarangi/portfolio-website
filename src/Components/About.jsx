const About = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="mb-4 text-4xl text-center mt-36 md:text-5xl font-Montserrat">
          About Me
        </h3>
        <div className="flex flex-col max-w-5xl gap-5 mx-auto text-lg md:text-xl">
          <p className="leading-8 text-gray-800">
            Hello! I'm <span className="text-red-500">Rishikesh Sarangi</span>,
            a hardworking and aspiring web developer on a journey of continuous
            growth and learning. My passion lies in creating beautiful and
            functional web applications, and I'm currently honing my skills in
            technologies like <span className="text-teal-700">React</span> and
            <span className="text-teal-700"> Tailwind CSS</span> to achieve that
            goal. I'm extremely motivated to work and I always give my 100% in
            any project I work on.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
