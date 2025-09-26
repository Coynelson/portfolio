import { useRouteLoaderData } from "react-router";

export function useTheme() {
    const {colorScheme} = useRouteLoaderData("root")
    return colorScheme
}