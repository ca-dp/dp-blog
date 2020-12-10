export const config = {
  siteMeta: {
    title: "Developer Productivity Blog",
    teamName: "CyberAgent, Inc.",
    description: "RSS based blog.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://ca-dp.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://www.cyberagent.co.jp/",
    },
    {
      title: "GitHub",
      href: "https://github.com/ca-dp",
    },
  ],
};
