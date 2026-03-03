import { Comment } from "./ui/comment";
import { CommentInput } from "./ui/comment-input";

export const CommentSection = () => {
  const dummyComments = [
    {
      id: 1,
      user: "Rahul",
      time: "2 hours ago",
      text: "Brilliant tutorial! This Deep Galactic theme looks amazing.",
      likes: "1.2K",
    },
    {
      id: 2,
      user: "Sneha",
      time: "5 hours ago",
      text: "Can you please share the GitHub repo for this project?",
      likes: "45",
    },
    {
      id: 3,
      user: "Amit",
      time: "1 day ago",
      text: "The sidebar transition is so smooth. Great job!",
      likes: "12",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-6">
        {dummyComments.length} Comments
      </h2>

      <CommentInput />

      <div className="space-y-2">
        {dummyComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};
