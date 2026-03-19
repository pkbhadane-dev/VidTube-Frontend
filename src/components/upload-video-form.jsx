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
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/hooks/useAuth";
import { useToggleStore } from "@/store/useToggleStore";
import { useState } from "react";
import { useVideoUpload } from "@/hooks/useVideo";

export function UploadVideoForm({ className, ...props }) {
  const { setCancelVideoUploadForm } = useToggleStore();

  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
  });
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const { mutate, isPending } = useVideoUpload();

  const handleOnChange = (e) => {
    e.preventDefault();
    setVideoData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", videoData.title);
    data.append("description", videoData.description);
    if (videoFile) data.append("videoFile", videoFile);
    if (thumbnail) data.append("thumbnail", thumbnail);

    mutate(data);
  };

  return (
    <div
      className={cn(
        `fixed inset-0 z-100 flex flex-col justify-center items-center h-full gap-6 bg-white/30 backdrop-blur-lg`,
        className,
      )}
      {...props}
    >
      <Card className="bg-[#161B22] w-2xl text-[#FFFFFF]">
        <span className="absolute px-6 py-2">
          <MdCancel
            onClick={setCancelVideoUploadForm}
            className="text-2xl cursor-pointer"
          />
        </span>
        <CardHeader className="text-center">
          <div>
            <CardTitle className="text-xl">Create your account</CardTitle>
          </div>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Title</FieldLabel>
                <Input
                  onChange={handleOnChange}
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Description</FieldLabel>
                <Input
                  onChange={handleOnChange}
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Enter description"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Video File</FieldLabel>
                <Input
                  onChange={(e) => setVideoFile(e.target.files[0])}
                  id="videoFile"
                  type="file"
                  name="videoFile"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="avatar">Thumbnail</FieldLabel>
                <Input
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  onChange={(e) => setThumbnail(e.target.files[0])}
                />
              </Field>

              <Field>
                <Button
                  className="bg-[#7000FF] shadow-[0px_0px_15px_rgba(255, 0, 0, 0.4)] hover:shadow-xl hover:shadow-[#7000FF] cursor-pointer "
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? "Uploading" : "Upload"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
