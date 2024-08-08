"use client";
import React from "react";
import Post from "./Post";

const PostList = ({
  posts,
  isHomePage,
  search,
}: {
  posts: Post[];
  isHomePage: boolean;
  search: string;
}) => {
  return (
    <>
      {posts.map((post) => {
        if (post.title.toLowerCase().includes(search.toLowerCase())) {
          return (
            <Post
              key={post.id}
              id={post.id}
              post={post}
              isHomePage={isHomePage}
            />
          );
        }
      })}
    </>
  );
};

export default PostList;
