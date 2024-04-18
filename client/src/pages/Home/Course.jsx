import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

export default function Course() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { course } = portfolioData;

  return (
    <Container>
      <SectionTitle title={"Courses"} />

      {course.map((courses) => (
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img src={courses.image} alt="image" />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {courses.title}
            </h4>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              {courses.description}
            </p>
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              <a href={courses.link}>Link </a>
            </button>
          </div>
        </div>
      ))}

    </Container>
  );
}
