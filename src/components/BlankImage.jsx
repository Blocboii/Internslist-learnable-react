import React from "react"
import "../styles/BlankImage.css"

const BlankImage = () => {
  return (
    <div className="blank">
      <img
        className="blankState"
        src={require("")}
        alt="blankState"
      />
    </div>
  )
}

export default BlankImage