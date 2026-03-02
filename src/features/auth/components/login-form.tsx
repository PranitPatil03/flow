"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Eye } from "lucide-react";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
    }, {
      onSuccess: () => {
        router.push("/workflows");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };

  const signInGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    }, {
      onSuccess: () => {
        router.push("/workflows");
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    });
  };

  const onSubmit = async (values: LoginFormValues) => {
    await authClient.signIn.email({
      email: values.email,
      password: values.password,
      callbackURL: "/workflows",
    }, {
      onSuccess: () => {
        router.push("/workflows");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message);
      },
    });
  };

  const isPending = form.formState.isSubmitting;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center text-center mb-8">
        <Link href="/" className="text-gray-500 text-base mb-2 hover:text-gray-800 transition-colors">Flow</Link>
        <h1 className="text-[26px] font-semibold text-gray-900 mb-2">Login to your account</h1>
        <p className="text-sm text-gray-400 max-w-[280px]">Sign in to access your workflow automation dashboard.</p>
      </div>

      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 rounded-xl bg-white border-gray-200 placeholder:text-gray-400 focus-visible:ring-indigo-500 text-sm px-4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="h-12 rounded-xl bg-white border-gray-200 placeholder:text-gray-400 focus-visible:ring-indigo-500 text-sm px-4 pr-10"
                        {...field}
                      />
                      <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl text-base font-medium bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.6)] border-0 mt-2 transition-all" 
              disabled={isPending}
            >
              Log in
            </Button>
          </form>
        </Form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-[10px] font-medium tracking-wider uppercase text-gray-400">
            <span className="bg-[#fcfcfc] px-4">
              Or authorize with
            </span>
          </div>
        </div>

        <div className="flex gap-4 w-full">
          <Button
            onClick={signInGithub}
            variant="outline"
            className="flex-1 h-12 rounded-xl bg-white border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
            type="button"
            disabled={isPending}
          >
            <Image alt="GitHub" src="/logos/github.svg" width={18} height={18} />
            GitHub
          </Button>

          <Button
            onClick={signInGoogle}
            variant="outline"
            className="flex-1 h-12 rounded-xl bg-white border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
            type="button"
            disabled={isPending}
          >
            <Image alt="Google" src="/logos/google.svg" width={18} height={18} />
            Google
          </Button>
        </div>

        <div className="text-center text-sm text-gray-400 mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-gray-900 font-semibold hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
