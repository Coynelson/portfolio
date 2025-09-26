import { createCookie } from "react-router";
import { createTypedCookie } from "remix-utils/typed-cookie";
import { z } from "zod";


const cookie = createCookie("color-scheme", {
  path: "/",
  sameSite: "lax",
  httpOnly: true,
  secrets: [process.env.COOKIE_SECRET ?? "secret"],
});


export const schema = z
  .enum(["dark", "light", "system"]) 
  .default("system") 
  .catch("system"); 


const typedCookie = createTypedCookie({ cookie, schema });


export async function getColorScheme(request: Request) {
  const colorScheme: string = await typedCookie.parse(request.headers.get("Cookie"));
  return colorScheme ?? "system";
}

export async function setColorScheme(colorScheme: string) {
  return await typedCookie.serialize(colorScheme);
}