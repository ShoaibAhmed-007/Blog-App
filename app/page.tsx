"use client";
import Navbar from "@/app/Components/Navbar";
import Footer from "./Components/Footer";
import PostList from "./Components/PostList";
import React, { useState } from "react";
import { posts } from "./data/post";
import Post from "./Components/Post";

let featuredPost = posts[0];

const Page = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Navbar />
      <header className="bg-purple-400 w-full py-8 flex flex-col items-center text-white">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg mt-2">
          Your source for the latest updates and articles.
        </p>
      </header>

      {featuredPost && (
        <div className="text-center py-6">
          <h2 className="text-2xl font-semibold">Featured Post</h2>
          <div className="flex flex-col items-center gap-2 border border-gray-200 rounded-lg shadow-lg mt-4 w-72 mx-auto bg-white p-4 cursor-pointer">
            <Post
              key={featuredPost.id}
              id={featuredPost.id}
              post={featuredPost}
              isHomePage={true}
            />
          </div>
        </div>
      )}

      <main className="bg-gray-100 flex flex-col items-center py-8">
        <section className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
          <input
            type="text"
            placeholder="Search..."
            className="mt-4 p-2 rounded-md border border-gray-300 text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 cursor-pointer">
            <PostList posts={posts} isHomePage={true} search={search} />
          </div>
        </section>

        <section className="bg-slate-400 w-full py-8 text-center text-white mt-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="max-w-2xl mx-auto">
            This blog covers various topics and updates from the author. Stay
            tuned for more interesting articles!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
