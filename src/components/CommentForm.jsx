import React from "react";
import { useState } from "react";
<<<<<<< HEAD

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
=======
import { useUsername } from "../login/authWrapper/AuthContext";
const CommentForm = ({ onSubmit }) => {
  const username = useUsername();
  const [name, setName] = useState(username);
>>>>>>> e248458 (feat: added landing page)
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      onSubmit({
        name: name.trim(),
        comment: comment.trim(),
      });

      setName("");
      setComment("");
    }
  };
  return (
<<<<<<< HEAD
    <form
      className="flex flex-col gap-4 justify-center place-items-center"
      >
      <label htmlFor="name" className="text-xl underline">
=======
    <form className="flex flex-col gap-4 justify-center place-items-center">
      {/* <label htmlFor="name" className="text-xl underline">
>>>>>>> e248458 (feat: added landing page)
        {" "}
        Name{" "}
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="p-2 rounded-md text-center"
<<<<<<< HEAD
      ></input>
=======
      ></input> */}
>>>>>>> e248458 (feat: added landing page)

      <label htmlFor="comment" className="text-xl underline">
        {" "}
        Comment{" "}
      </label>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter comment"
        className="p-2 rounded-md text-center"
      ></input>

      <button onClick={handleSubmit} className="mb-4">
        {" "}
        Submit comment{" "}
      </button>
    </form>
  );
};

export default CommentForm;
