/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Nunito Sans',
              variants: ['400', '700', '900'],
            },
            {
              family: 'Roboto',
              variants: ['300', '400', '500'],
            },
            {
              family: 'Poppins',
              variants: ['400'],
            },
            {
              family: 'Ubuntu',
              variants: ['400'],
            },
          ],
        },
      },
    },
  ],
};
