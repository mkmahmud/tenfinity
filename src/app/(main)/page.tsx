"use client";


import Hero from "@/components/home/Hero";
import TopCategories from "@/components/home/TopCategories";
import LookBook from "@/components/home/LookBook";
import Testimonial from "@/components/home/Testimonial";
import OurStory from "@/components/home/OurStory";

export default function Home() {


  return (
    <main>

      <Hero />
      {/* Placeholder sections to demonstrate scrolling/links */}
      <TopCategories />
      {/* Look Book */}
      {/* Our Story */}
      <OurStory />
      <LookBook />

      {/*  Testimonial*/}
      <Testimonial />

    </main>
  );
}
