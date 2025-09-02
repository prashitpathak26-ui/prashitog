// 15 Flags for each difficulty
const quizData = {
  easy: [
    { flag: "https://flagcdn.com/w320/fr.png", answer: "France", options: ["France", "Italy", "Russia", "Netherlands"] },
    { flag: "https://flagcdn.com/w320/jp.png", answer: "Japan", options: ["Japan", "China", "South Korea", "Vietnam"] },
    { flag: "https://flagcdn.com/w320/in.png", answer: "India", options: ["India", "Ireland", "Iran", "Italy"] },
    { flag: "https://flagcdn.com/w320/us.png", answer: "United States", options: ["United States", "UK", "Australia", "Canada"] },
    { flag: "https://flagcdn.com/w320/br.png", answer: "Brazil", options: ["Brazil", "Argentina", "Portugal", "Mexico"] },
    { flag: "https://flagcdn.com/w320/gb.png", answer: "United Kingdom", options: ["UK", "USA", "New Zealand", "Australia"] },
    { flag: "https://flagcdn.com/w320/ca.png", answer: "Canada", options: ["Canada", "UK", "USA", "Switzerland"] },
    { flag: "https://flagcdn.com/w320/au.png", answer: "Australia", options: ["Australia", "New Zealand", "South Africa", "UK"] },
    { flag: "https://flagcdn.com/w320/ru.png", answer: "Russia", options: ["Russia", "Slovakia", "France", "Serbia"] },
    { flag: "https://flagcdn.com/w320/de.png", answer: "Germany", options: ["Germany", "Belgium", "Austria", "Spain"] },
    { flag: "https://flagcdn.com/w320/es.png", answer: "Spain", options: ["Spain", "Portugal", "Romania", "Colombia"] },
    { flag: "https://flagcdn.com/w320/it.png", answer: "Italy", options: ["Italy", "Mexico", "Ireland", "Iran"] },
    { flag: "https://flagcdn.com/w320/mx.png", answer: "Mexico", options: ["Mexico", "Italy", "Brazil", "Spain"] },
    { flag: "https://flagcdn.com/w320/ar.png", answer: "Argentina", options: ["Argentina", "Uruguay", "Chile", "Brazil"] },
    { flag: "https://flagcdn.com/w320/pt.png", answer: "Portugal", options: ["Portugal", "Spain", "Italy", "Brazil"] }
  ],
  medium: [
    { flag: "https://flagcdn.com/w320/se.png", answer: "Sweden", options: ["Sweden", "Norway", "Finland", "Denmark"] },
    { flag: "https://flagcdn.com/w320/no.png", answer: "Norway", options: ["Norway", "Denmark", "Sweden", "Iceland"] },
    { flag: "https://flagcdn.com/w320/dk.png", answer: "Denmark", options: ["Denmark", "Norway", "Sweden", "Iceland"] },
    { flag: "https://flagcdn.com/w320/fi.png", answer: "Finland", options: ["Finland", "Sweden", "Norway", "Estonia"] },
    { flag: "https://flagcdn.com/w320/nl.png", answer: "Netherlands", options: ["Netherlands", "France", "Luxembourg", "Russia"] },
    { flag: "https://flagcdn.com/w320/be.png", answer: "Belgium", options: ["Belgium", "Germany", "Austria", "France"] },
    { flag: "https://flagcdn.com/w320/ch.png", answer: "Switzerland", options: ["Switzerland", "Denmark", "Austria", "Canada"] },
    { flag: "https://flagcdn.com/w320/pl.png", answer: "Poland", options: ["Poland", "Indonesia", "Monaco", "Austria"] },
    { flag: "https://flagcdn.com/w320/tr.png", answer: "Turkey", options: ["Turkey", "Tunisia", "Albania", "Morocco"] },
    { flag: "https://flagcdn.com/w320/gr.png", answer: "Greece", options: ["Greece", "Finland", "Argentina", "Uruguay"] },
    { flag: "https://flagcdn.com/w320/cn.png", answer: "China", options: ["China", "Vietnam", "North Korea", "Japan"] },
    { flag: "https://flagcdn.com/w320/kr.png", answer: "South Korea", options: ["South Korea", "Japan", "China", "Philippines"] },
    { flag: "https://flagcdn.com/w320/id.png", answer: "Indonesia", options: ["Indonesia", "Monaco", "Poland", "Singapore"] },
    { flag: "https://flagcdn.com/w320/vn.png", answer: "Vietnam", options: ["Vietnam", "China", "North Korea", "Laos"] },
    { flag: "https://flagcdn.com/w320/za.png", answer: "South Africa", options: ["South Africa", "Kenya", "Nigeria", "Ghana"] }
  ],
  hard: [
    { flag: "https://flagcdn.com/w320/ke.png", answer: "Kenya", options: ["Kenya", "Uganda", "Ethiopia", "Tanzania"] },
    { flag: "https://flagcdn.com/w320/ng.png", answer: "Nigeria", options: ["Nigeria", "Ghana", "Cameroon", "Kenya"] },
    { flag: "https://flagcdn.com/w320/eg.png", answer: "Egypt", options: ["Egypt", "Sudan", "Morocco", "Tunisia"] },
    { flag: "https://flagcdn.com/w320/ma.png", answer: "Morocco", options: ["Morocco", "Algeria", "Tunisia", "Egypt"] },
    { flag: "https://flagcdn.com/w320/et.png", answer: "Ethiopia", options: ["Ethiopia", "Kenya", "Uganda", "Tanzania"] },
    { flag: "https://flagcdn.com/w320/gh.png", answer: "Ghana", options: ["Ghana", "Cameroon", "Nigeria", "Senegal"] },
    { flag: "https://flagcdn.com/w320/sn.png", answer: "Senegal", options: ["Senegal", "Mali", "Guinea", "Gabon"] },
    { flag: "https://flagcdn.com/w320/tn.png", answer: "Tunisia", options: ["Tunisia", "Turkey", "Algeria", "Morocco"] },
    { flag: "https://flagcdn.com/w320/ir.png", answer: "Iran", options: ["Iran", "Iraq", "Afghanistan", "Pakistan"] },
    { flag: "https://flagcdn.com/w320/iq.png", answer: "Iraq", options: ["Iraq", "Iran", "Syria", "Jordan"] },
    { flag: "https://flagcdn.com/w320/sa.png", answer: "Saudi Arabia", options: ["Saudi Arabia", "Iran", "Pakistan", "UAE"] },
    { flag: "https://flagcdn.com/w320/ae.png", answer: "UAE", options: ["UAE", "Kuwait", "Qatar", "Bahrain"] },
    { flag: "https://flagcdn.com/w320/jo.png", answer: "Jordan", options: ["Jordan", "Palestine", "Lebanon", "Syria"] },
    { flag: "https://flagcdn.com/w320/lb.png", answer: "Lebanon", options: ["Lebanon", "Syria", "Jordan", "Palestine"] },
    { flag: "https://flagcdn.com/w320/pk.png", answer: "Pakistan", options: ["Pakistan", "India", "Bangladesh", "Afghanistan"] }
  ],
  veryHard: [
    { flag: "https://flagcdn.com/w320/bh.png", answer: "Bahrain", options: ["Bahrain", "Qatar", "Kuwait", "Oman"] },
    { flag: "https://flagcdn.com/w320/qa.png", answer: "Qatar", options: ["Qatar", "Bahrain", "Kuwait", "Saudi Arabia"] },
    { flag: "https://flagcdn.com/w320/bt.png", answer: "Bhutan", options: ["Bhutan", "Nepal", "Myanmar", "Sri Lanka"] },
    { flag: "https://flagcdn.com/w320/fj.png", answer: "Fiji", options: ["Fiji", "Tonga", "Samoa", "Vanuatu"] },
    { flag: "https://flagcdn.com/w320/mv.png", answer: "Maldives", options: ["Maldives", "Mauritius", "Sri Lanka", "Seychelles"] },
    { flag: "https://flagcdn.com/w320/la.png", answer: "Laos", options: ["Laos", "Cambodia", "Vietnam", "Thailand"] },
    { flag: "https://flagcdn.com/w320/kh.png", answer: "Cambodia", options: ["Cambodia", "Laos", "Vietnam", "Thailand"] },
    { flag: "https://flagcdn.com/w320/mn.png", answer: "Mongolia", options: ["Mongolia", "Kazakhstan", "China", "Russia"] },
    { flag: "https://flagcdn.com/w320/kz.png", answer: "Kazakhstan", options: ["Kazakhstan", "Mongolia", "Uzbekistan", "Kyrgyzstan"] },
    { flag: "https://flagcdn.com/w320/uz.png", answer: "Uzbekistan", options: ["Uzbekistan", "Kazakhstan", "Turkmenistan", "Kyrgyzstan"] },
    { flag: "https://flagcdn.com/w320/tj.png", answer: "Tajikistan", options: ["Tajikistan", "Uzbekistan", "Kyrgyzstan", "Kazakhstan"] },
    { flag: "https://flagcdn.com/w320/kg.png", answer: "Kyrgyzstan", options: ["Kyrgyzstan", "Kazakhstan", "Tajikistan", "Uzbekistan"] },
    { flag: "https://flagcdn.com/w320/pw.png", answer: "Palau", options: ["Palau", "Micronesia", "Marshall Islands", "Kiribati"] },
    { flag: "https://flagcdn.com/w320/ws.png", answer: "Samoa", options: ["Samoa", "Tonga", "Fiji", "Kiribati"] },
    { flag: "https://flagcdn.com/w320/to.png", answer: "Tonga", options: ["Tonga", "Samoa", "Fiji", "Vanuatu"] }
  ]
};

let currentQuestion = 0;
let score = 0;
let questions = [];

const startArea = document.getElementById("startArea");
const flagEl = document.getElementById("flag");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const quizArea = document.getElementById("quizArea");

// Popup
const popup = document.createElement("div");
popup.classList.add("popup");
popup.innerText = "🎉 Congratulations 🥳";
document.body.appendChild(popup);

function startQuiz() {
  let selectedDifficulty = document.getElementById("difficulty").value;
  questions = quizData[selectedDifficulty];
  currentQuestion = 0;
  score = 0;

  startArea.style.display = "none";
  quizArea.style.display = "block";
  flagEl.style.display = "block";

  loadQuestion();
}

function loadQuestion() {
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  flagEl.src = q.flag;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    resultEl.textContent = "✅ Correct!";
    score++;
    showPopup();
  } else {
    resultEl.textContent = "❌ Wrong! Correct answer: " + q.answer;
  }
  nextBtn.style.display = "block";
}

function showPopup() {
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 1200);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  flagEl.style.display = "none";
  optionsEl.innerHTML = "";
  resultEl.textContent = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `🎉 You scored ${score} out of ${questions.length}`;
}
