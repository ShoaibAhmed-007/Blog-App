"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Post({
  post,
  id,
  isHomePage,
}: {
  post: Post;
  isHomePage: boolean;
  id: string;
}) {
  const router = useRouter();
  const clickHandle = (): void => {
    router.push(`/Pages/posts/${id}`);
  };

  return (
    <div
      onClick={clickHandle}
      className="flex flex-col gap-2 border-2 border-black  rounded-xl mt-4 w-72 py-10 px-4"
    >
      <img src={post.img} alt={post.title} className="h-40"></img>
      <h1 className="text-xl">{post.title}</h1>
      <p>{isHomePage ? post.smallDesc : post.summary}</p>
    </div>
  );
}
