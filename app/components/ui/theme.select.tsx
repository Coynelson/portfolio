import type { ActionFunctionArgs } from "react-router";
import { Form, data } from "react-router";
import { setColorScheme } from "~/lib/theme.server";
import type { Route } from "./+types/theme.select";
import { GiSun, GiMoon, GiSolarSystem } from "react-icons/gi";
import { useTheme } from "~/lib/use.theme";

const validColorSchemes = ["light", "dark", "system"] as const;

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let colorScheme = formData.get("color-scheme");

  if (
    typeof colorScheme !== "string" ||
    !validColorSchemes.includes(colorScheme as any)
  ) {
    return data({ error: "Invalid color scheme" }, { status: 400 });
  }

  return data(null, {
    headers: { "Set-Cookie": await setColorScheme(colorScheme) },
  });
}

export function ThemeSelect() {
  const currentTheme = useTheme();

  return (
    <>
      <Form
        navigate={false}
        method="POST"
        action="/theme-selector"
        className="p-10"
      >
        <div
          className={`fixed top-0 right-0 p-1 z-50 bg-zinc-400 rounded-md shadow-lg flex gap-1.5 m-4 inset-shadow-sm inset-shadow-gray-600 ${
            currentTheme === "dark" || currentTheme === "system"
              ? "shadow-white/60 border-gray-500 border-2"
              : "shadow-gray-700/60 border-gray-300 border-2"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <button
              type="submit"
              name="color-scheme"
              value="dark"
              className={`p-2 rounded-md transition-all cursor-pointer duration-200 ease-in hover:scale-110 ${
                currentTheme === "dark"
                  ? "bg-black border-2 border-gray-100 shadow-lg text-white inset-shadow-sm inset-shadow-gray-300"
                  : "bg-gray-100 text-black border-2 border-gray-600 inset-shadow-sm inset-shadow-gray-600"
              }`}
              aria-label="Dark theme"
            >
              <GiMoon />
            </button>
            <button
              type="submit"
              name="color-scheme"
              value="light"
              className={`p-2 rounded-md transition-all cursor-pointer duration-200 ease-in hover:scale-110 ${
                currentTheme === "light"
                  ? "bg-black border-2 border-gray-100 shadow-lg text-white inset-shadow-sm inset-shadow-gray-300"
                  : "bg-gray-100 text-black border-2 border-gray-600 inset-shadow-sm inset-shadow-gray-600"
              }`}
              aria-label="Light theme"
            >
              <GiSun />
            </button>
            <button
              type="submit"
              name="color-scheme"
              value="system"
              className={`p-2 rounded-md transition-all cursor-pointer duration-200 ease-in hover:scale-110 ${
                currentTheme === "system"
                  ? "bg-black border-2 border-gray-100 shadow-lg text-white inset-shadow-sm inset-shadow-gray-300"
                  : "bg-gray-100 text-black border-2 border-gray-600 inset-shadow-sm inset-shadow-gray-600"
              }`}
              aria-label="System theme"
            >
              <GiSolarSystem />
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}
