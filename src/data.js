const data = [
    {
      id: 1,
      name: "Jesus Christ",
      path: "Front End",
      score: 50,
    },
    {
      id: 2,
      name: "Holy Mary",
      path: "Back End",
      score: 22,
    },
    {
      id: 3,
      name: "Missing feet",
      path: "Product Design",
      score: 34,
    },
    {
      id: 4,
      name: "Jumping Jacks",
      path: "Back End",
      score: 100,

    },
    {
      id: 5,
      name: "Doe Smith",
      path: "Web 3",
      score: 57,

    }  
]
  
const scoreAll = (result) => {
    const taskScore = (result.score / 100) * 50
  
    const internScores = {
      id: result.id,
    }
    return internScores
}
  
const calcGrade = (result) => {
    let arrayGrades = []
    result.map((item) => {
      arrayGrades.push(scoreAll(item))
      return arrayGrades
    })
  
    const gradeInfo = arrayGrades.map((score, index) => {
      const gradeDetail = result.find((detail) => detail.id === score.id)
  
      if (gradeDetail) {
        return {
          name: gradeDetail.name,
          id: gradeDetail.id,
          grade: index + 1,
          path: gradeDetail.path,
          score: gradeDetail.score,
        }
      }
      return null
    })
  
    return gradeDetail
}
  
  const newData = calcGrade(data)
  
  export { newData }
  
  export default data