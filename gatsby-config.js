module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "takuseno.github.io",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-TET9VJQMDR",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
