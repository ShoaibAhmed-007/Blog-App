"use client";
import React from "react";
import { useParams } from "next/navigation";
import { posts } from "@/app/data/post";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

export default function page() {
  const { postId } = useParams();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
        <div className="w-11/12 md:w-3/4 lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{post.summary}</p>
          <p className="text-base text-gray-600">{post.smallDesc}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
