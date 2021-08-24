import React from "react"
import "../styles/index.scss"

import Helmet from "../components/Helmet/Helmet.js"
import Introduction from "../components/Introduction/Introduction.js"
import About from "../components/About/Index.js"
import Experience from "../components/Experience/Index.js"
import Contact from "../components/Contact/Index.js"

export default function Index() {
  return (
    <div className="root">
      <Helmet />
      <Introduction />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}
