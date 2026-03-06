import { inngest } from "@/inngest/client";
import { gemini, openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets",
      model: gemini({ model: "gemini-2.5-flash" }),
      // model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(`${event.data.value}`);

    return { output };
  },
);
