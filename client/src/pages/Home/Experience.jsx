import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

export default function Experience() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const { title, period, company, description } = experience;
  return (
    <div>
      <Container>
        <SectionTitle title={"Experiences"} />
        {experience.map((exp) => (
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          
          <div className="p-6">
            <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {exp.title}
            </h4>
            <h5 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {exp.company}
            </h5>
            <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
              {exp.description}
            </p>
            <p className="block font-sans text-black text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {exp.period}
            </p>
          </div>
        </div>
      ))}

      </Container>
    </div>
  );
}

// {experience.map((exp) => (
//   <div key={exp._id} >
//     <div className="relative w-1/2 rounded-xl bg-primary bg-opacity-60 bg-clip-border text-gray-700 shadow-md gap-5 m-4">
//       <div className="m-6">
//         <h3 className="mb-2 block text-tertiary font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//           {exp.title}
//         </h3>
//         <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//           {exp.period}
//         </p>
//         <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//           {exp.company}
//         </p>
//         <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//           {exp.description}
//         </p>
//       </div>
//     </div>
//   </div>
// ))}