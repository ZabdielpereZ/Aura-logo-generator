import React, { useState } from "react";
import LikeButton from "./LikeButton";

const CommentSection = () => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments((prevComments) => [...prevComments, comment]);
    setComment("");
  };

  console.log("Comments state:", comments); // Debugging log

  return (
    <div className="comment-section">
      <ul className="pb-4 pt-4 font-mono">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-start pb-5 ">
          <textarea
            className="border rounded-md p-4 text-white placeholder-white bg-[#38c292]"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
          />
          <button
            type="submit"
            className="p-2 ml-4 text-[#023] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#38c292] dark:hover:bg-[#217658] dark:focus:ring-green-900"
          >
            Submit
          </button>
          <div className="pl-5">
            <LikeButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
