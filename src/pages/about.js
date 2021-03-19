import React from "react"
import Headers from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Headers headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
      <Headers headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}