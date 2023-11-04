/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route(":teamId", "teams/layout.tsx", () => {
        route("season/:seasonCode", "teams/season.tsx");
        route("players", "teams/players.tsx");
        route("stats/:seasonCode", "teams/stats.tsx");
      });
    });
  },
};
