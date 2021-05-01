import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

// importの順番大事！！
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

export default function ImgLesson({ data }) {

	const image = getImage(data.file)

  return (
    <container>
      <h1 className="blockquote text-danger">Lesson of Gatsby-plugin-image</h1>
      <StaticImage
        src="../images/home-bg.jpg"
        alt="Background"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
      <figure>
        <GatsbyImage image={image} alt="" />
      </figure>




    </container>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "home-bg.jpg" }) {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`
