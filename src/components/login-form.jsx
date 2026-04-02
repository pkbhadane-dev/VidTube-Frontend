import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLogin } from "@/hooks/useAuth";
import { Link } from "react-router";


export function LoginForm({ className, ...props }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate, isPending } = useLogin();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#161B22]  text-[#FFFFFF]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <FieldGroup>
              <Field>
                <Button
                  className="bg-[#7000FF] shadow-[0px_0px_15px_rgba(255, 0, 0, 0.4)] hover:shadow-xl hover:shadow-[#7000FF] "
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                <span className=" text-black">Or continue with</span>
              </FieldSeparator>
              <div className=" flex flex-row">
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    onChange={handleOnChange}
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Field>
                <span className="mt-7 p-2 bg-white text-black  rounded-2xl">
                  OR
                </span>
                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input
                    onChange={handleOnChange}
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    required
                  />
                </Field>
              </div>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  onChange={handleOnChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </Field>
              <Field>
                <Button
                  className="bg-[#7000FF] shadow-[0px_0px_15px_rgba(255, 0, 0, 0.4)] hover:shadow-xl hover:shadow-[#7000FF] cursor-pointer "
                  type="submit"
                >
                  Login
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link className="text-white" to = "/signup">
                    Sign up
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
