const Education = () => {
  return (
    <>
      <section className="text-center">
        <h3 className="mb-8 text-4xl mt-28 md:text-5xl font-Montserrat">
          Education
        </h3>
        <div className="flex flex-col gap-5 py-6 mx-auto shadow-2xl md:max-w-2xl md:gap-9 md:px-8 rounded-2xl">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-950">College</span>
            <h1 className="text-lg font-medium text-slate-700">
              ITER, Siksha 'O' Anusandhan
            </h1>
            <span className="text-sm"> 9 CGPA</span>

            <span className="text-lg text-slate-500">Bhubaneswar</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-950">
              12<sup>th</sup> Science
            </span>
            <h1 className="text-lg font-medium text-slate-700">
              St. Paul's School
            </h1>
            <span className="text-sm"> 82% Percentage</span>
            <span className="text-lg text-slate-500">Rourkela</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-950">
              10<sup>th</sup> Science
            </span>
            <h1 className="text-lg font-medium text-slate-700">
              St. Paul's School
            </h1>
            <span className="text-sm"> 78% Percentage</span>
            <span className="text-lg text-slate-500">Rourkela</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
