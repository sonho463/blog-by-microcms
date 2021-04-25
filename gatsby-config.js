/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  /* Your site config here */
	siteMetadata: {
			title: `Blog By microCMS`,
			siteUrl: 'https://blog-by-microcms.netlify.app',
			description: `これは、GatsbyとmicroCMSで作ったブログです。`,
			author: `そんほんす`
	},
  plugins: [
		`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		`gatsby-background-image`,
		{
			resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
			},
		}
	],
}
