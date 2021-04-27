import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { BackgroundImage } from "gatsby-background-image"

// importの順番大事！！
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"
import * as imgLessonStyles from "../styles/img-lesson.module.css"

export default function ImgLesson({ data }) {
  const image = getImage(data.file)
  const bgImage = convertToBgImage(image)

  return (
    <header className="masthead">
      <div className={`container ${imgLessonStyles.rlt}`}>
        <div className={`siteheading ${imgLessonStyles.abs}`}>
          <h1 className={`${imgLessonStyles.tw}`}>Clean Blog</h1>
          <span className="subheading">A Blog Theme by Start Bootstrap</span>
        </div>
        <div className={`${imgLessonStyles.abs}`}>
          <StaticImage
            src="../images/home-bg.jpg"
            alt="Background"
            placeholder="blurred"
            layout="full-width"
          />
        </div>
      </div>

      {/* <figure>
        <GatsbyImage image={image} alt="" />
      </figure> */}
    </header>
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
