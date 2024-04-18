import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Container";

export default function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, caption, description } = intro;

  return (
    <Container>
      <h1 className="text-3xl sm:text-lg">{welcomeText || ""}</h1>
      <h1 className="text-9xl sm:text-5xl text-primary font-bold">{firstName || ""} {lastName || ""}</h1>
      <h1 className="text-4xl sm:text-xl font-semibold">{caption || ""}</h1>
      <p className="text-lg">{description || ""}</p>
    </Container>
  );
}
