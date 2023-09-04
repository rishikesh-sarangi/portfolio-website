import { MdModeNight } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between py-10 mb-12">
        <h1 className="text-2xl font-Karla ">rishikesh.dev</h1>
        <ul className="flex items-center gap-5">
          <li>
            <MdModeNight className="text-xl cursor-pointer" />
          </li>
          <li>
            <a
              href="#"
              class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
            >
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Resume
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
