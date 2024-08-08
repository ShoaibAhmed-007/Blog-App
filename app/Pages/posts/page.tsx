"use client";
import Navbar from "@/app/Components/Navbar";
import React, { useState } from "react";
import PostList from "@/app/Components/PostList";
import Footer from "@/app/Components/Footer";
import { posts } from "@/app/data/post";

const Page = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Navbar />
      <header className="bg-purple-400 w-full flex flex-col items-center py-4 gap-2">
        <h1 className="text-3xl font-bold text-white">Recent Posts</h1>
        <p className="text-lg text-white">
          Discover our latest articles and updates
        </p>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 p-2 rounded-lg border border-gray-300 focus:outline-none  focus:ring focus:ring-purple-300"
        />
      </header>
      <main className="bg-gray-100 flex flex-col justify-between items-center text-center  py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 cursor-pointer">
          <PostList posts={posts} isHomePage={true} search={search} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
