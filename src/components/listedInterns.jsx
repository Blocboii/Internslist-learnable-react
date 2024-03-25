import React, { useState } from "react"
import data, { newData } from "../data"
import cardsIntern from "./cardsIntern"
import "../styles/listedInterns.css"
import lookupIntern from "./lookupIntern"
import BlankImage from "./BlankImage"

const listedInterns = () => {
  const [selectIntern, setSelectIntern] = useState(null)

  return (
    <div className="displayBlock">
      {selectIntern !== "Display" ? (
        <div className="listedInterns">
          <div>
            <h1 className="h1">Interns List</h1>
          </div>
          <div
            className="findIntern"
            onClick={() => setSelectIntern("Display")}
          >
            View Interns Scores
          </div>
          <div className="scroll">
            {newData.map((item) => (
              <div
                className="internBlock"
                onClick={() => setSelectIntern(item)}
                key={item.id}
              >
                <div>
                  {item.name} ({item.path.slice(0, 1).toUpperCase()})
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="internsDisplay">
        {selectIntern && selectIntern !== "Display" ? (
          <cardsIntern result={selectIntern} moreresult={data} />
        ) : selectIntern && selectIntern === "Display" ? (
          <lookupIntern result={newData} setDisplay={setSelectIntern} />
        ) : (
          <BlankImage />
        )}
      </div>
    </div>
  )
}

export default listedInterns
