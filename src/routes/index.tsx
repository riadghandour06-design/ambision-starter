import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ambision" },
      { name: "description", content: "Ambision starter project." },
      { property: "og:title", content: "Ambision" },
      { property: "og:description", content: "Ambision starter project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>Ambision</h1>
    </div>
  );
}
