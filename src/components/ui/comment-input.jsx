import { usePostComment } from "@/hooks/useComment";
import { useState } from "react";

export const CommentInput = ({ videoId }) => {
  const [commentData, setCommentData] = useState({ comment: "" });
  const { mutate, isPending } = usePostComment();

  const handleOnChange = (e) => {
    setCommentData({
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!commentData?.comment.trim()) return;
    mutate(
      { commentData: commentData, videoId: videoId },
      {
        onSuccess: () => {
          setCommentData({ comment: "" });
        },
      },
    );
  };

  return (
    <div className="flex gap-4 mb-8">
      <div className="w-10 h-10 rounded-full bg-purple-600 shrink-0 flex items-center justify-center font-bold">
        U
      </div>

      <div className="flex-1">
        <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            type="text"
            name="comment"
            value={commentData?.comment}
            placeholder="Add a comment..."
            className="w-full bg-transparent border-b border-zinc-700 py-2 focus:border-purple-500 focus:outline-none transition-all text-sm text-zinc-200"
          />
          <div className="flex justify-end gap-3 mt-3">
            <button className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm font-semibold bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-500 transition-all"
            >
              {isPending ? "Posting..." : "Comment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
