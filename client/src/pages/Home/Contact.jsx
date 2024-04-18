import React from 'react'
import { useSelector } from "react-redux";
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

export default function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const { name, email, mobile, age, address} = contact;
  return (
    <div>
    <Container>
    <SectionTitle title={"Data"}/>
    <h1>Name: {name || ""}</h1>
     <h1>Email: {email || ""}</h1>
     <h1>Phone number: {mobile || ""}</h1>
     <h1>Age: {age || ""}</h1>
     <h1>Adress: {address || ""}</h1>
    </Container>
    </div>

  )
}
