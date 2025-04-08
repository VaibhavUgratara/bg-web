import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import UserCarousel from "../components/UserCarousel";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <div>
      <UserCarousel />
      <BlogSection /> 

    </div>
  )
}
