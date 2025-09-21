import { Navigation } from "~/components/navigation";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="flex">
      <div className="h-screen sm:border-r sm:border-border">
        <Navigation />
      </div>

      <main className="max-h screen overflow-y-auto w-full container mx-auto">
        <div className="px-4 md:px-10 w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
