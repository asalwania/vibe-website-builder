"use client";

import React from "react";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  loading?: boolean;
}

const Client: React.FC<Props> = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.hello.queryOptions({ text: "Ajay & Alka" }),
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default Client;
