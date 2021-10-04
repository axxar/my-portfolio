import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-scroll";
import { RoughNotation } from "react-rough-notation";

const Navbar = () =>  {
  return (
    <div className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="ml-3 text-xl">
            Akshar P.
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="mx-5 text-gray-400 hover:text-white">
            <RoughNotation type="bracket" padding={[2, 4]} brackets={['left', 'right']}color="#FFFFFF" iterations={1} show={true} animationDelay={800} animationDuration={1000} >
              Past Work
            </RoughNotation>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className="mx-5 text-gray-400 hover:text-white">
            <RoughNotation type="bracket" padding={[2, 4]} brackets={['left', 'right']}color="#FFFFFF" iterations={1} show={true} animationDelay={800} animationDuration={1000} >
              Skills
            </RoughNotation>
          </Link>
          <Link to="testimonials" spy={true} smooth={true} offset={-50} duration={500} className="mx-5 text-gray-400 hover:text-white">
            <RoughNotation type="bracket" padding={[2, 4]} brackets={['left', 'right']}color="#FFFFFF" iterations={1} show={true} animationDelay={800} animationDuration={1000} >
              Testimonials
            </RoughNotation>
          </Link>
        </nav>
        <RoughNotation type="circle" padding={5} color="#FFFFFF" iterations={3} show={true} animationDelay={800} animationDuration={1000} >
          <a href="#contact" className="inline-flex items-center text-gray-400 bg-gray-800 border-0 py-1 px-3 text-base mt-4 md:mt-0 hover:text-white">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </RoughNotation>
      </div>
    </div>
  );
}

export default Navbar;
