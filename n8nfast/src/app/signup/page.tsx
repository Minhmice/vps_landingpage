import { SignUpForm } from "@/components/sign-up-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <img
            src="/assets/Logo (gradient).png"
            alt="n8nFast Logo"
            className="size-10"
          />
        </a>
        <SignUpForm />
      </div>
    </div>
  );
}
