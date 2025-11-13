import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogPostsPage = () => {
  const [blogs, setPosts] = useState([]);

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Error fetching posts:', error));
}, []);

  return (
    <div className="flex flex-col justify-center place-items-center">
      {blogs.map((b) => {
        return (
          <article key={b.id} className="m-4 shadow-2xl">
            <h2>{b.title}</h2>
            <p>{b.body}</p>
            <small>
              By {b.userId}
            </small>
            <br></br>
            <button className="mb-[-10px]">
              {" "}
              <Link to={`/blog/${b.id}`}>view post</Link>{" "}
            </button>
            <section style={{ marginTop: "1rem" }}></section>
          </article>
        );
      })}
    </div>
  );
};

export default BlogPostsPage;
