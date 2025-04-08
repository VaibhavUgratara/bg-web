import React from "react";
import { blogPosts, users } from "../data";

const BlogSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-6">Trending Blogs</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {blogPosts.slice(0, 6).map((post) => {
          const author = users.find((user) => user.id === post.authorId);
          return (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{post.content.slice(0, 60)}...</p>
                <div className="flex items-center mt-4 space-x-2">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">{author.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogSection;
