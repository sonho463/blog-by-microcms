import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

const GbiBridged = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <div style={{height: 400}}>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
        className=""
      >
        <div className="">
          <div className="">
            <div className="">
              <div
                className="d-flex flex-column justify-content-center align-items-center text-white"
                style={{ minHeight: 600, minWidth: 860 }}
              >
                <h1 className="">背景画像が設定できた！</h1>
                <p className="subheading">さてさてうまくいきますか</p>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}
export default GbiBridged
