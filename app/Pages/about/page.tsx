"use client";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 flex flex-col items-center py-8 px-4">
        <section className="w-full max-w-screen-lg text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About This Blog</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to our blog! This space is dedicated to sharing insights,
            tips, and stories on a variety of topics. Whether you are looking
            for the latest trends in technology, tutorials on web development,
            or personal anecdotes from our author, you will find it here.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our goal is to provide valuable information that inspires and
            educates our readers. We believe in the power of knowledge and
            strive to create a community where everyone can learn and grow
            together.
          </p>
        </section>

        <section className="w-full max-w-screen-lg text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Meet the Author</h2>
          <p className="text-lg text-gray-700 mb-6">
            Hi, I'm Shoaib! am a dedicated BSCS student with a passion for
            programming and a keen interest in becoming a full stack web
            developer. I thrive on new challenges and am always eager to learn
            and adopt new technologies. My enthusiasm for coding drives me to
            constantly improve my skills and take on exciting opportunities in
            the tech industry.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            When I'm not coding or writing, you can find me exploring new
            technologies, working on personal projects, or enjoying a good book.
          </p>
        </section>

        <section className="w-full max-w-screen-lg text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We invite you to explore our posts, share your thoughts, and join
            our growing community. Together, we can navigate the world of
            technology and creativity.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for visiting, and we hope you enjoy the content we create!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
