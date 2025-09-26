import type { ActionFunctionArgs } from "react-router";
import { Form, data } from "react-router";
import { setColorScheme } from "~/components/theme.server";
import { useTheme } from "~/lib/use-theme";

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  const colorScheme = formData.get("color-scheme");
if (typeof colorScheme !== "string") {
  return new Response("Invalid theme", { status: 400 });
}
return new Response(null, {
  headers: {
    "Set-Cookie": await setColorScheme(colorScheme),
  },
});
}
// let colorScheme = formData.get("color-scheme");
//   return data(null, {
//     headers: { "Set-Cookie": await setColorScheme(colorScheme), },
//   })

export function ThemeSelect() {
  const theme = useTheme();
  return (
    <Form
      method="post"
      action="/theme-selector"
      className="flex items-center gap-3 bg-card px-4 py-2 rounded-lg shadow-md border border-border"
    >
      <label htmlFor="theme" className="text-sm text-muted-foreground">
        Theme:
      </label>
      <select
        id="theme"
        name="color-scheme"
        className="bg-background text-foreground border border-border rounded px-3 py-1 focus:outline-none focus:ring focus:ring-ring"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/80 transition"
      >
        Apply
      </button>
    </Form>
  );
}

