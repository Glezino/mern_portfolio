import React from 'react'
import { useSelector } from "react-redux";
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

export default function Project() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  const { title, description, image, link, technologies } = project;
  return (
    <Container>
    <SectionTitle title={"Projects"}/>
    {project.map((projects) => (
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img src={projects.image} alt="image" />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {projects.title}
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              {projects.description}
            </p>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            </p>
            <div className="flex gap-5 justify-center sm:flex-col">
        {projects.technologies.map((tech, index) => (
          <div className=" border-2 border-slate-500 py-1 px-2 m-2 text-center ">
            <h1 className="text-slate-500 font-semibold"> {tech}</h1>
          </div>
        ))}
      </div>

            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              <a href={projects.link}>Link </a>
            </button>
          </div>
        </div>
      ))}
    
    </Container>
  
  )
}
