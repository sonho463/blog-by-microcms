import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Seo from "../components/Seo"

// importの順番大事！！
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <meta name="description" content />
      <meta name="author" content />
      <title></title> */}
      {/* Bootstrap core CSS */}
      {/* <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
      {/* Custom fonts for this template */}
      {/* <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" /> */}
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
        rel="stylesheet"
        type="text/css"
      />
      {/* Custom styles for this template */}
      {/* <link href="css/clean-blog.min.css" rel="stylesheet" /> */}
      {/* Navigation */}
      <Seo
				pagetitle = "Contact"
				pagedesc = "これはコンタクトページ"
			/>
			<nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            Start Bootstrap
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Page Header */}
      <header className="masthead">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Contact</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#">Start Bootstrap</a>
                on September 24, 2019
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#">Start Bootstrap</a>
                on September 18, 2019
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#">Start Bootstrap</a>
                on August 24, 2019
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#">Start Bootstrap</a>
                on July 8, 2019
              </p>
            </div>
            <hr />
            {/* Pager */}
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <StaticImage
          src="../images/home-bg.jpg"
          alt="Background"
          placeholder="blurred"
          // layout="fixed"
          width={200}
          height={200}
        />
      </figure>
      <hr />
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fab fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">
                Copyright © Your Website 2020
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Bootstrap core JavaScript */}
      {/* Custom scripts for this template */}
    </>
  )
}
