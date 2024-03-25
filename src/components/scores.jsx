import React from "react"

const Scores = ({ color, result, grade }) => {
  return (
    <div className={color}>
      <h2>{result}</h2>
      <h1>{grade}</h1>
    </div>
  )
}

export default Scores