import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MdCancel } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useToggleStore } from "@/store/useToggleStore";
import { useState } from "react";
import { useUpdateVideo, useVideoUpload } from "@/hooks/useVideo";
import { ProgressBar } from "./progress-bar";

export function UpdateVideoForm({ className, ...props }) {
  const { setVideoUpdateForm, selectedVideo, isProcessing } = useToggleStore();

  const [title, setTitle] = useState(`${selectedVideo?.title}` || "");
  const [description, setDescription] = useState(
    `${selectedVideo?.description}` || "",
  );
  const [thumbnail, setThumbnail] = useState(null);

  const { mutate: updateVideo, isPending } = useUpdateVideo();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", title);
    data.append("description", description);
    if (thumbnail) data.append("thumbnail", thumbnail);

    updateVideo({ videoData: data, videoId: selectedVideo._id });
  };

  return (
    <div
      className={cn(
        `fixed inset-0 z-100 flex flex-col justify-center items-center w-3/4 m-auto h-full gap-6 bg-white/30 backdrop-blur-lg`,
        className,
      )}
      {...props}
    >
      <Card className="bg-[#161B22] w-xs md:w-md lg:w-2xl text-[#FFFFFF]">
        <span className="absolute px-6 py-2">
          <MdCancel
            onClick={(e) => setVideoUpdateForm(false)}
            className="text-2xl cursor-pointer"
          />
        </span>
        <CardHeader className="text-center">
          <div>
            <CardTitle className="text-xl">Update your video</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <textarea
                className="h-30 file:text-foreground placeholder:text-muted-foreground p-2.5 border rounded-md focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 outline-none border-[#30363D] resize-none"
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  type="text"
                  value={description}
                  name="description"
                  placeholder="Enter description"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="thumbnail">
                  Click here to update Thumbnail
                </FieldLabel>
                <Input
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setThumbnail(e.target.files[0]);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </Field>

              <Field>
                <Button
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#7000FF] shadow-[0px_0px_15px_rgba(255, 0, 0, 0.4)] hover:shadow-xl hover:shadow-[#7000FF] cursor-pointer "
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? "Processing" : "Upload"}
                </Button>
                <div className=" text-center">
                  {!isProcessing && <ProgressBar />}
                </div>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
