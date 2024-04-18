import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";

export default function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { lottieURL, description1, description2, skills } = about;

  return (
    <Container>
      <SectionTitle title={"About"} />
      <div className="flex items-center sm:flex-col ">
        <div className="flex flex-col w-2/3 gap-5 sm:w-full ">
          <p>{description1 || ""}</p>
          <p>{description2 || ""}</p>
        </div>
        <dotlottie-player
          src={lottieURL || ""}
          background="transparent"
          speed="1.5"
          style={{ width: 300, height: 300 }}
          loop
          autoplay
        ></dotlottie-player>
      </div>

      <div className="flex gap-5 justify-center sm:flex-col">
        {skills.map((skill, index) => (
          <div className=" border-2 border-tertiary py-3 px-5 text-center ">
            <h1 className="text-tertiary"> {skill}</h1>
          </div>
        ))}
      </div>
    </Container>
  );
}
