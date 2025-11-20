import React, { useState, useEffect } from "react";
import CommentForm from "../components/CommentForm";
import { useParams, Link } from "react-router-dom";
import { useUsername } from "../login/authWrapper/AuthContext";

const IndividualPostPage = () => {
  const { id } = useParams();
  const username = useUsername();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((postData) => {
        setPost(postData);
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
      })
      .then((res) => res.json())
      .then((userData) => setUser(userData))
      .catch((error) => console.error("Error fetching posts:", error));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((apiComments) => {
        const normalized = apiComments.map((c) => ({
          id: c.id,
          name: c.name,
          comment: c.body,
        }));
        setComments(normalized);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [id]);

  const handleNewComments = ({ name, comment }) => {
    if (!name?.trim() || !comment?.trim()) return;

    fetch(`https://jsonplaceholder.typicode.com/posts/{postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        postId: Number(id),
        name: name.trim(),
        body: comment.trim(),
      }),
    })
      .then((res) => res.json())
      .then((created) => {
        console.log("POST created:", created);

        setComments((prev) => [
          ...prev,
          { id: created.id, name: created.name, comment: created.body },
        ]);
      })

      .catch((err) => {
        console.error("Post failed:", err);

        setComments((prev) => [
          ...prev,
          { id: Date.now(), name: name.trim(), comment: comment.trim() },
        ]);
      });
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center place-items-center">
      <article className="m-10">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <small>
          By {user ? user.name : "Loading..."}
          {user?.email ? ` (${user.email})` : ""}
        </small>
      </article>

      {username ? (
        <>
          <CommentForm onSubmit={handleNewComments} />

          {comments.length > 0 ? (
            <div className="w-full">
              {comments.map((c) => (
                <div key={c.id} className="bg-[#DCD6E7] p-4 rounded-md m-4">
                  {" "}
                  <h1>{c.name}</h1>
                  <p>{c.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </>
      ) : (
        <div className="mt-4 text-sm text-black text-center">
          <p>
            You must be logged in to view comments and leave a comment. Login{" "}
            <Link to="/login" className="text-blue underline">
              Here.
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default IndividualPostPage;
