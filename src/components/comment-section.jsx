import { useFetchComment } from "@/hooks/useComment";
import { Comment } from "./ui/comment";
import { CommentInput } from "./ui/comment-input";

export const CommentSection = ({ videoId }) => {

    const { data:comments } = useFetchComment(videoId);
  // console.log(comments);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-6">
        {comments?.length} Comments
      </h2>

      <CommentInput videoId={videoId} />

      <div className="space-y-2">
        {comments?.map((comment) => (
          <Comment key={comment._id} comments={comment} />
        ))}
      </div>
    </div>
  );
};
