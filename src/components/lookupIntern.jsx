import React from "react"
import "../styles/lookupIntern.css"
import Scores from "./scores"

const lookupIntern = ({ result, setResult }) => {
  return (
    <div>
      <div className="displayGrade">
      <Scores
          color={"internsGrade High"}
          result={result[0].name}
         grade={result[0].grade}
        />
        <Scores
          color={"internsGrade Mid"}
          result={result[1].name}
         grade={result[1].grade}
        />
        <Scores
          color={"internsGrade low"}
          result={result[2].name}
         grade={result[2].grade}
        />
      </div>
      <div className="navig">
        <p className="name navigItems">Name</p>
        <p className="board navigItems">grade</p>
        <p className="path navigItems">Path</p>
        <p className="board navigItems end">Total Score</p>
      </div>
      {result.map((item) => (
        <div onClick={() => setResult(item)} className="displayInternsList">
          <p className="name cursor">{item.name}</p>
          <p className="board">{item.grade}</p>
          <p className="path">{item.path}</p>
          <p className="board end">{item.scoreTotal}%</p>
        </div>
      ))}
    </div>
  )
}

export default lookupIntern