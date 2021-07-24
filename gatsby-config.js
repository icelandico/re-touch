module.exports = {
  pathPrefix: "/re-touch",
  siteMetadata: {
    title: "Re-Touch",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
