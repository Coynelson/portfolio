import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/app.layout.tsx", [
    index("routes/home.route.tsx"),
    route("theme-selector", "components/ui/theme.select.tsx"),
    route("navigation", "components/navigation.tsx"),
    route("button", "components/ui/button.tsx"),
    route("chip", "components/ui/chip.tsx"),
  ]),
] satisfies RouteConfig;
