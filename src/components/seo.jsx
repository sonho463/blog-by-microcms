import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
	const { site } = useStaticQuery(graphql`
	query {
		site {
			siteMetadata {
				description
				lang
				title
			}
		}
	}
	`)

	const title = props.pagetitle ? `${props.pagetitle} | ${site.siteMetadata.title}` : site.siteMetadata.title
	const description = props.pagedesc || site.siteMetadata.description

  return (
    <Helmet>
      <html lang={site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
