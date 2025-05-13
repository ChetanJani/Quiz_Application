document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question:
        "In 2019, Which popular singer was awarded the Bharat Ratna award?",
      options: [
        "Lata Mangeshkar",
        "Asha Bhosle",
        "Bhupen Hazarika",
        "Manna Dey",
      ],
      answer: "Bhupen Hazarika",
    },
    {
      question:
        "The world’s nation 5G mobile network was launched by which country?",
      options: ["Japan", "Asia", "South Korea", "Malaysia"],
      answer: "South Korea",
    },
    {
      question: "The green planet in the solar system is?",
      options: ["Mars", "Uranus", "Venus", "Earth"],
      answer: "Uranus",
    },
  ];

  let currentIndex = 0;
  let score = 0;
  let ans = "";

  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextBtn = document.getElementById("next-btn");
  const scoreDisplay = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");

  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    showQuestions();
  }

  function showQuestions() {
    let q = questions[currentIndex];
    questionText.textContent = q.question;
    choicesList.textContent = "";
    q.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        choicesList.appendChild(li);
        li.addEventListener('click', () => {
            nextBtn.classList.remove("hidden");
            ans = option;
        })
    })
  }

  nextBtn.addEventListener('click', () => {
    if(ans == questions[currentIndex].answer){
        score++;
    }
    nextBtn.classList.add("hidden");
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestions();
    }
    else{
        showResult();
    }
  })

  function showResult(){
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.innerHTML = `${score} out of ${currentIndex}`;
    currentIndex = 0;
    score = 0;
    restartBtn.addEventListener('click', () => {
        startBtn.classList.remove("hidden");
        resultContainer.classList.add("hidden");
    })
  }
});
