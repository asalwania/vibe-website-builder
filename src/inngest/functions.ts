import { inngest } from "@/inngest/client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("waiting for 2 seconds", "30s");
    return { message: `Hello, ${event.data.email}!` };
  },
);
