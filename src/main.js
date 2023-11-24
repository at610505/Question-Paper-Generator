
const Question = require('./models/question');
const questionStore = require('./questionStore');

const generateQuestionPaper = require('./generators/questionPaperGenerator');

const totalMarks = 100;
const difficultyDistribution = [
  { difficulty: 'Easy', percentage: 20, marks: 5 },
  { difficulty: 'Medium', percentage: 50, marks: 10 },
  { difficulty: 'Hard', percentage: 30, marks: 15 },
];

// Generate question paper
const questionPaper = generateQuestionPaper(questionStore, totalMarks, difficultyDistribution);

let countMarks = 0;
questionPaper.forEach((question, index) => {
    countMarks += question.marks;
    if (countMarks = totalMarks) {
        console.log(`${index + 1}. ${question.question} (${question.marks} marks)`);
    }
});

// // Display the question paper
// console.log(questionPaper);
