import Expenses from "@/components/Expenses";
import Revenues from "@/components/Revenues";
import { Text } from "@/components/ui/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-[85vh] px-4 overflow-y-auto w-screens">
      <div className="border-b-2 border-black pb-4 mb-4">
        <Text variant={"heading1bold"}>Dashboard</Text>
      </div>
      <Expenses />
      <Revenues />
    </div>
  );
}
