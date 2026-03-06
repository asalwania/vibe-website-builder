"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job invoked successfully!");
      },
    }),
  );
  return (
    <div>
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: "Ajay" })}
      >
        Invoke Background Job
      </Button>
    </div>
  );
}
