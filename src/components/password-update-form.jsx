import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MdCancel } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { usePasswordChange } from "@/hooks/useAuth";

export const PasswordUpdateForm = ({
  className,
  setShowPasswordForm,
  showPasswordForm,
  setShowModel,
  ...props
}) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { mutate, isPending, isSuccess } = usePasswordChange();

  if (isSuccess) {
    setShowPasswordForm(false);
    setShowModel(false)
  }

  const handleOnhange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div
      className={cn(
        `fixed inset-0 z-100 flex flex-col justify-center items-center w-full m-auto h-full gap-6 bg-white/30 backdrop-blur-lg`,
        className,
      )}
      {...props}
    >
      <Card className="bg-[#161B22] z-100  w-xs md:w-md lg:w-2xl text-[#FFFFFF]">
        <span className="absolute px-6 py-2">
          <MdCancel
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="text-2xl cursor-pointer"
          />
        </span>
        <CardHeader className="text-center">
          <div>
            <CardTitle className="text-xl">Change your password</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="oldPassword">Old Password</FieldLabel>
                <Input
                  onChange={handleOnhange}
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  placeholder="Old Password"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="newPassword">New password</FieldLabel>
                <Input
                  onChange={handleOnhange}
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Passeord
                </FieldLabel>
                <Input
                  onChange={handleOnhange}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </Field>

              <Field>
                <Button
                  className="bg-[#7000FF] shadow-[0px_0px_15px_rgba(255, 0, 0, 0.4)] hover:shadow-xl hover:shadow-[#7000FF] cursor-pointer "
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? "Processing" : "Upload"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
