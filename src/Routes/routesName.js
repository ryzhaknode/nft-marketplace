export const ROUTES = {
  mainPage: "/",
  cardPage: (id) => (id ? `gallery/${id}` : "gallery/id"),
  profilePage: "/profile",
  statisticPage: "/statistic",
};
