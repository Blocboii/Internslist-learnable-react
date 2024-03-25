import React from "react"
import "../styles/cardsIntern.css"
import Scores from "./scores"
import { newData } from "../data"

const cardsIntern = ({ result }) => {
  const interninfo = newData.filter((data) => data.id === result.id)
  let ans = Math.ceil((interninfo[0].score / 100) * 50)
  ans = 50 - ans

  return (
    <div className="cardsIntern">
      <div className="card">
        <h1>Interns Information</h1>
        <div className="result-area">
          <div className="result">
            <h3>Interns Name: {result.name}</h3>
            <h3>Path: {result.path} </h3>
          </div>
        </div>
      </div>
      <div className="activity-area">
        <div className="activity">
          <h4>Interns Activity</h4>
          <div className="area">
            <div className="area1">
              <p>Weeks Completed: 12/15</p>
              <p>Task Score: {result.score}%</p>

            </div>
            <div className="area2">
              <div className="container">
                <div className="out">
                  <div className="in">
                    <div id="num">{interninfo[0].score}%</div>
                  </div>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width={"160px"}
                  height={"160px"}
                >
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset={"0%"} stopColor="#e1e"></stop>
                      <stop offset={"100%"} stopColor="#63e"></stop>
                    </linearGradient>
                  </defs>
                  <circle
                    style={{
                      fill: "none",
                      stroke: "url(#GradientColor)",
                      strokeWidth: "20px",
                      strokeDasharray: 400,
                      strokeDashoffset: `${ans}`,
                      animation: "anim 2s linear forwards",
                    }}
                    cx={"70"}
                    cy={"70"}
                    r={"60"}
                    strokeLinecap="head"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Scores
          color={"internsGrade"}
          result={"InternsGrade"}
          grade={interninfo[0].rank}
        />
      </div>
    </div>
  )
}

export default cardsIntern