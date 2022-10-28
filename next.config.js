/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: function () {
    return {
      "/Blog/ReadMoreBlog": {
        page: "/Blog/[locale]",
        query: { locale: "ReadMoreBlog" },
      },
    };
  },
};

module.exports = nextConfig;
