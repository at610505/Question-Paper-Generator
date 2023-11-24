// src/generators/questionPaperGenerator.js
const shuffleArray = require('../utils/shuffle');

function generateQuestionPaper(questions, totalMarks, difficultyDistribution) {
  const questionPaper = [];

  difficultyDistribution.forEach(({ difficulty, percentage,marks }) => {
    const count = Math.ceil((percentage / 100) * (totalMarks/marks));

    const filteredQuestions = questions.filter(
      (question) => question.difficulty === difficulty
    );

    // Shuffle the questions array to randomize question selection
    const shuffledQuestions = shuffleArray(filteredQuestions);

    questionPaper.push(...shuffledQuestions.slice(0, count));
  });

  return questionPaper;
}

module.exports = generateQuestionPaper;
