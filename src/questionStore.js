const Question = require('./models/Question');

const questionStore = [
  // Easy Questions (5 marks each)
  new Question("What is the capital of France?", "Geography", "World Capitals", "Easy", 5),
  new Question("Who wrote Romeo and Juliet?", "Literature", "Shakespeare", "Easy", 5),
  new Question("What is the square root of 64?", "Mathematics", "Algebra", "Easy", 5),
  new Question("Which planet is known as the Red Planet?", "Astronomy", "Planets", "Easy", 5),
  new Question("What is the main component of air?", "Science", "Chemistry", "Easy", 5),
  new Question("What is the largest mammal on Earth?", "Biology", "Animals", "Easy", 5),
  new Question("In what year did World War I begin?", "History", "World Wars", "Easy", 5),
  new Question("What is the chemical symbol for gold?", "Chemistry", "Elements", "Easy", 5),
  new Question("Who painted the Mona Lisa?", "Art", "Paintings", "Easy", 5),
  new Question("What is the primary color of a stop sign?", "General Knowledge", "Traffic Signs", "Easy", 5),

  // Hard Questions (15 marks each)
  new Question("Explain the theory of relativity proposed by Albert Einstein.", "Physics", "Theories", "Hard", 15),
  new Question("Solve the following differential equation: dy/dx = 2x", "Mathematics", "Calculus", "Hard", 15),
  new Question("Discuss the impact of climate change on biodiversity.", "Environmental Science", "Climate Change", "Hard", 15),
  new Question("Examine the causes and consequences of the Great Depression.", "History", "Economic Crises", "Hard", 15),
  new Question("Describe the process of protein synthesis in cells.", "Biology", "Genetics", "Hard", 15),
  new Question("Discuss the principles of object-oriented programming.", "Computer Science", "Programming", "Hard", 15),
  new Question("Explain the concept of black holes in astrophysics.", "Astronomy", "Astrophysics", "Hard", 15),

  // Medium Questions (10 marks each)
  new Question("What is the main function of the mitochondria in a cell?", "Biology", "Cell Biology", "Medium", 10),
  new Question("Solve the quadratic equation: ax^2 + bx + c = 0", "Mathematics", "Algebra", "Medium", 10),
  new Question("Discuss the main themes in Shakespeare's Hamlet.", "Literature", "Shakespeare", "Medium", 10),
  new Question("Explain the process of photosynthesis in plants.", "Botany", "Photosynthesis", "Medium", 10),
  new Question("Describe the structure and function of the human respiratory system.", "Anatomy", "Respiratory System", "Medium", 10),
  new Question("What are the major causes of global warming?", "Environmental Science", "Global Warming", "Medium", 10),
  new Question("Discuss the events leading to the American Revolution.", "History", "American Revolution", "Medium", 10),
  new Question("Explain the principles of supply and demand in economics.", "Economics", "Microeconomics", "Medium", 10),
  new Question("What is the importance of the periodic table in chemistry?", "Chemistry", "Periodic Table", "Medium", 10),
  new Question("Compare and contrast classical and operant conditioning in psychology.", "Psychology", "Behaviorism", "Medium", 10),
  // Easy Questions (5 marks each)
new Question("Who is the author of 'To Kill a Mockingbird'?", "Literature", "Novels", "Easy", 5),
new Question("What is the smallest prime number?", "Mathematics", "Number Theory", "Easy", 5),
new Question("Name the largest ocean on Earth.", "Geography", "Oceans", "Easy", 5),
new Question("What is the powerhouse of the cell?", "Biology", "Cell Biology", "Easy", 5),
new Question("Who developed the theory of evolution?", "Biology", "Evolution", "Easy", 5),
new Question("What is the currency of Japan?", "Economics", "Currencies", "Easy", 5),
new Question("In which year did Christopher Columbus reach the Americas?", "History", "Exploration", "Easy", 5),
new Question("Define the concept of inertia in physics.", "Physics", "Mechanics", "Easy", 5),
new Question("Who painted 'Starry Night'?", "Art", "Paintings", "Easy", 5),
new Question("What is the capital of Australia?", "Geography", "World Capitals", "Easy", 5),

// Hard Questions (15 marks each)
new Question("Explain the principles of quantum mechanics.", "Physics", "Quantum Mechanics", "Hard", 15),
new Question("Discuss the impact of artificial intelligence on society.", "Computer Science", "Artificial Intelligence", "Hard", 15),
new Question("Examine the causes and consequences of the Industrial Revolution.", "History", "Industrial Revolution", "Hard", 15),
new Question("Discuss the role of enzymes in biological processes.", "Biology", "Biochemistry", "Hard", 15),
new Question("Explain the concept of cybersecurity and its importance.", "Cybersecurity", "Computer Science", "Hard", 15),
new Question("Describe the process of cell division: mitosis and meiosis.", "Biology", "Cell Biology", "Hard", 15),
new Question("Discuss the major theories of personality in psychology.", "Psychology", "Personality", "Hard", 15),

// Medium Questions (10 marks each)
new Question("Define the concept of demand and supply in economics.", "Economics", "Microeconomics", "Medium", 10),
new Question("Explain the process of continental drift and plate tectonics.", "Geology", "Plate Tectonics", "Medium", 10),
new Question("Discuss the impact of global trade on developing countries.", "Economics", "International Trade", "Medium", 10),
new Question("What are the functions of the human nervous system?", "Anatomy", "Nervous System", "Medium", 10),
new Question("Describe the characteristics of the Romantic literary movement.", "Literature", "Romanticism", "Medium", 10),
new Question("Explain the process of data normalization in databases.", "Database Management", "Normalization", "Medium", 10),
new Question("Discuss the role of the United Nations in international relations.", "Political Science", "International Organizations", "Medium", 10),
new Question("Define the concept of entropy in thermodynamics.", "Physics", "Thermodynamics", "Medium", 10),
new Question("Explain the process of genetic engineering in biotechnology.", "Biotechnology", "Genetic Engineering", "Medium", 10),
new Question("Discuss the major types of chemical reactions in chemistry.", "Chemistry", "Chemical Reactions", "Medium", 10),
];

module.exports = questionStore;
