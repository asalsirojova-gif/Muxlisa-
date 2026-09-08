const app = document.getElementById("app");

// =========================
// BO'LIMLAR VA RASMLAR
// =========================

const categories = [

  {
    id: "letters",
    title: "🔤 Harflar",
    icon: "assets/icons/harflar.png",

    items: [
      { name: "A", image: "assets/illustrations/letters/a.jpg" },
      { name: "B", image: "assets/illustrations/letters/b.jpg" },
      { name: "Ch", image: "assets/illustrations/letters/ch.jpg" },
      { name: "D", image: "assets/illustrations/letters/d.jpg" },
      { name: "E", image: "assets/illustrations/letters/e.jpg" },
      { name: "F", image: "assets/illustrations/letters/f.jpg" },
      { name: "G", image: "assets/illustrations/letters/g.jpg" },
      { name: "G‘", image: "assets/illustrations/letters/g'.jpg" },
      { name: "H", image: "assets/illustrations/letters/h.jpg" },

      // MUHIM: i.jpg emas!
      { name: "I", image: "assets/illustrations/letters/i1.jpg" },

      { name: "J", image: "assets/illustrations/letters/j.jpg" },
      { name: "K", image: "assets/illustrations/letters/k.jpg" },
      { name: "L", image: "assets/illustrations/letters/l.jpg" },
      { name: "M", image: "assets/illustrations/letters/m.jpg" },
      { name: "N", image: "assets/illustrations/letters/n.jpg" },
      { name: "Ng", image: "assets/illustrations/letters/ng.jpg" },
      { name: "O", image: "assets/illustrations/letters/o.jpg" },
      { name: "O‘", image: "assets/illustrations/letters/o'.jpg" },
      { name: "P", image: "assets/illustrations/letters/p.jpg" },
      { name: "Q", image: "assets/illustrations/letters/q.jpg" },
      { name: "R", image: "assets/illustrations/letters/r.jpg" },
      { name: "S", image: "assets/illustrations/letters/s.jpg" },
      { name: "Sh", image: "assets/illustrations/letters/sh.jpg" },
      { name: "T", image: "assets/illustrations/letters/t.jpg" },
      { name: "U", image: "assets/illustrations/letters/u.jpg" },
      { name: "V", image: "assets/illustrations/letters/v.jpg" },
      { name: "X", image: "assets/illustrations/letters/x.jpg" },
      { name: "Y", image: "assets/illustrations/letters/y.jpg" },
      { name: "Z", image: "assets/illustrations/letters/z.jpg" }
    ]
  },

  {
    id: "numbers",
    title: "🔢 Sonlar",
    icon: "assets/icons/sonlar.png",

    items: [
      { name: "1", image: "assets/illustrations/numbers/1.jpg" },
      { name: "2", image: "assets/illustrations/numbers/2.jpg" },
      { name: "3", image: "assets/illustrations/numbers/3.jpg" },
      { name: "4", image: "assets/illustrations/numbers/4.jpg" },
      { name: "5", image: "assets/illustrations/numbers/5.jpg" },
      { name: "6", image: "assets/illustrations/numbers/6.jpg" },
      { name: "7", image: "assets/illustrations/numbers/7.jpg" },
      { name: "8", image: "assets/illustrations/numbers/8.jpg" },
      { name: "9", image: "assets/illustrations/numbers/9.jpg" },
      { name: "10", image: "assets/illustrations/numbers/10.jpg" }
    ]
  },

  {
    id: "colors",
    title: "🎨 Ranglar",
    icon: "assets/icons/ranglar.png",

    items: [
      { name: "Bej rang", image: "assets/illustrations/colors/Bejrang.jpg" },
      { name: "Kulrang", image: "assets/illustrations/colors/Kulrang.jpg" },
      { name: "Binafsha", image: "assets/illustrations/colors/binafsha.jpg" },
      { name: "Havorang", image: "assets/illustrations/colors/havorang.jpg" },
      { name: "Jigarrang", image: "assets/illustrations/colors/jigarrang.jpg" },
      { name: "Korall rang", image: "assets/illustrations/colors/korallrang.jpg" },
      { name: "Ko‘k", image: "assets/illustrations/colors/ko'k.jpg" },
      { name: "Oq", image: "assets/illustrations/colors/oq.jpg" },
      { name: "Pushti", image: "assets/illustrations/colors/pushti.jpg" },
      { name: "Qizil", image: "assets/illustrations/colors/qizil.jpg" },
      { name: "Qora", image: "assets/illustrations/colors/qora.jpg" },
      { name: "Sariq", image: "assets/illustrations/colors/sariq.jpg" },
      { name: "Yashil", image: "assets/illustrations/colors/yashil.jpg" }
    ]
  },

  {
    id: "shapes",
    title: "🔺 Shakllar",
    icon: "assets/icons/shakllar.png",

    items: [
      { name: "Doira", image: "assets/illustrations/shapes/Doira.jpg" },
      { name: "Kvadrat", image: "assets/illustrations/shapes/Kvadrat.jpg" },
      { name: "Oval", image: "assets/illustrations/shapes/Oval.jpg" },
      { name: "To‘rtburchak", image: "assets/illustrations/shapes/To'rtburchak.jpg" },
      { name: "Uchburchak", image: "assets/illustrations/shapes/Uchburchak.jpg" },
      { name: "Yulduz", image: "assets/illustrations/shapes/Yulduz.jpg" }
    ]
  },

  {
    id: "body",
    title: "👂 Tana a’zolari",
    icon: "assets/icons/tana azolar.png",

    items: [
      { name: "Bosh", image: "assets/illustrations/body/Bosh.jpg" },
      { name: "Burun", image: "assets/illustrations/body/Burun.jpg" },
      { name: "Ko‘z", image: "assets/illustrations/body/Ko'z.jpg" },
      { name: "Og‘iz", image: "assets/illustrations/body/Og'iz.jpg" },
      { name: "Oyoq", image: "assets/illustrations/body/Oyoq.jpg" },
      { name: "Qo‘l", image: "assets/illustrations/body/Qo'l.jpg" },
      { name: "Quloq", image: "assets/illustrations/body/Quloq.jpg" }
    ]
  },

  {
    id: "fruits",
    title: "🍎 Mevalar",
    icon: "assets/icons/mevalar.png",

    items: [
      { name: "Olma", image: "assets/illustrations/fruits/olma.jpg" },
      { name: "Nok", image: "assets/illustrations/fruits/nok.jpg" },
      { name: "Anor", image: "assets/illustrations/fruits/anor.jpg" },
      { name: "Apelsin", image: "assets/illustrations/fruits/apelsin.jpg" },
      { name: "Limon", image: "assets/illustrations/fruits/limon.jpg" },
      { name: "Uzum", image: "assets/illustrations/fruits/uzum.jpg" },
      { name: "Banan", image: "assets/illustrations/fruits/banan.jpg" },
      { name: "Tarvuz", image: "assets/illustrations/fruits/tarvuz.jpg" },
      { name: "Qovun", image: "assets/illustrations/fruits/qovun.jpg" },
      { name: "Qulupnay", image: "assets/illustrations/fruits/qulupnay.jpg" },
      { name: "Olcha", image: "assets/illustrations/fruits/olcha.jpg" },
      { name: "Ananas", image: "assets/illustrations/fruits/ananas.jpg" }
    ]
  },

  {
    id: "nature",
    title: "🌿 Tabiat",
    icon: "assets/icons/tabiat.png",

    items: [
      { name: "O‘rmon", image: "assets/illustrations/nature/Ormon.jpg" },
      { name: "Bulut", image: "assets/illustrations/nature/bulut.jpg" },
      { name: "Daraxt", image: "assets/illustrations/nature/daraxt.jpg" },
      { name: "Daryo", image: "assets/illustrations/nature/daryo.jpg" },
      { name: "Dengiz", image: "assets/illustrations/nature/dengiz.jpg" },
      { name: "Gul", image: "assets/illustrations/nature/gul.jpg" },
      { name: "Kamalak", image: "assets/illustrations/nature/kamalak.jpg" },
      { name: "Quyosh", image: "assets/illustrations/nature/quyosh.jpg" },
      { name: "Qor", image: "assets/illustrations/nature/qor.jpg" },
      { name: "Shamol", image: "assets/illustrations/nature/shamol.jpg" }
    ]
  },

  {
    id: "transport",
    title: "🚗 Transport",
    icon: "assets/icons/transport.png",

    items: [
      { name: "Avtobus", image: "assets/illustrations/transport/avtobus.jpg" },
      { name: "Avtomobil", image: "assets/illustrations/transport/avtomobil.jpg" },
      { name: "Kema", image: "assets/illustrations/transport/kema.jpg" },
      { name: "Mototsikl", image: "assets/illustrations/transport/mototsikl.jpg" },
      { name: "Poyezd", image: "assets/illustrations/transport/poyezd.jpg" },
      { name: "Samolyot", image: "assets/illustrations/transport/samalyot.jpg" },
      { name: "Traktor", image: "assets/illustrations/transport/traktor.jpg" },
      { name: "Velosiped", image: "assets/illustrations/transport/velosiped.jpg" },
      { name: "Vertolyot", image: "assets/illustrations/transport/vertalyot.jpg" }
    ]
  },

  {
    id: "time",
    title: "⏰ Vaqt",
    icon: "assets/icons/vaqt.png",

    items: [
      { name: "Chizma soat", image: "assets/illustrations/time/chizma soat.jpg" },
      { name: "Kalendar", image: "assets/illustrations/time/kalendar.jpg" },
      { name: "Kun va tun", image: "assets/illustrations/time/kun va tun.jpg" },
      { name: "Qum soat", image: "assets/illustrations/time/qum soat.jpg" },
      { name: "Sana", image: "assets/illustrations/time/sana.jpg" },
      { name: "Sekundomer", image: "assets/illustrations/time/sekundomer.jpg" },
      { name: "Soat", image: "assets/illustrations/time/soat.jpg" }
    ]
  }
];


// =========================
// BOSH SAHIFA
// =========================

function showHome() {

  app.innerHTML = `
    <div class="header">

      <div class="logo-area">

        <img
          src="assets/icons/logo.png"
          alt="Logo"
        >

        <div class="logo-text">
          <h1>Bolajonlar</h1>
          <p>O‘ynab o‘rganamiz!</p>
        </div>

      </div>

    </div>


    <div class="home-container">

      <div class="welcome-box wool-card">

        <h2>O‘ynab o‘rganamiz! 🧶</h2>

        <p>
          Qiziqarli rasmlar bilan
          yangi bilimlarni o‘rganing!
        </p>

      </div>


      <div class="categories">

        ${categories.map(category => `

          <button
            class="category"
            onclick="openCategory('${category.id}')"
          >

            <img
              src="${category.icon}"
              alt="${category.title}"
            >

            <h3>${category.title}</h3>

          </button>

        `).join("")}

      </div>


      <br>


      <button
        class="button primary-button"
        style="width:100%; margin-bottom:10px"
        onclick="startQuiz()"
      >
        🧠 Quiz o‘ynash
      </button>


      <button
        class="button secondary-button"
        style="width:100%"
        onclick="showRanking()"
      >
        🏆 Reyting
      </button>

    </div>
  `;
}


// =========================
// BO'LIMNI OCHISH
// =========================

let currentCategory = null;
let currentIndex = 0;


function openCategory(id) {

  currentCategory =
    categories.find(
      category => category.id === id
    );

  currentIndex = 0;

  showLesson();
}


// =========================
// DARSNI KO'RSATISH
// =========================

function showLesson() {

  const item =
    currentCategory.items[currentIndex];


  app.innerHTML = `

    <div class="header">

      <button
        class="button secondary-button"
        onclick="showHome()"
      >
        ←
      </button>


      <div class="logo-text">

        <h1>
          ${currentCategory.title}
        </h1>

      </div>


      <div></div>

    </div>


    <div class="lesson-container">

      <div class="lesson-card">

        <img
          class="lesson-image"
          src="${item.image}"
          alt="${item.name}"
        >


        <h2 class="lesson-title">
          ${item.name}
        </h2>


        <button
          class="button primary-button"
          onclick="speak('${item.name}')"
        >
          🔊 Tinglash
        </button>


        <div class="navigation-buttons">

          <button
            class="button secondary-button"
            onclick="previousLesson()"
          >
            ← Oldingi
          </button>


          <button
            class="button primary-button"
            onclick="nextLesson()"
          >
            Keyingi →
          </button>

        </div>

      </div>

    </div>
  `;
}


// =========================
// OLDINGI
// =========================

function previousLesson() {

  if (currentIndex > 0) {

    currentIndex--;

    showLesson();

  } else {

    showToast(
      "Bu birinchi rasm!"
    );

  }
}


// =========================
// KEYINGI
// =========================

function nextLesson() {

  if (
    currentIndex <
    currentCategory.items.length - 1
  ) {

    currentIndex++;

    showLesson();

  } else {

    showToast(
      "Bu oxirgi rasm!"
    );

  }
}


// =========================
// OVOZ
// =========================

function speak(text) {

  if ("speechSynthesis" in window) {

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "uz-UZ";

    speech.rate = 0.8;

    window.speechSynthesis.speak(
      speech
    );

  }
}


// =========================
// XABAR
// =========================

function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.innerText = message;

  toast.style.display = "block";


  setTimeout(() => {

    toast.style.display = "none";

  }, 2000);
}


// =========================
// QUIZ
// =========================

let quizScore = 0;
let quizQuestion = 0;


const questions = [

  {
    question: "1 + 1 nechchi?",
    answers: ["1", "2", "3", "4"],
    correct: 1
  },

  {
    question: "Olma nima?",
    answers: [
      "Meva",
      "Transport",
      "Rang",
      "Vaqt"
    ],
    correct: 0
  },

  {
    question: "Qizil nima?",
    answers: [
      "Hayvon",
      "Rang",
      "Transport",
      "Meva"
    ],
    correct: 1
  },

  {
    question: "Samolyot qaysi bo‘limga kiradi?",
    answers: [
      "Mevalar",
      "Transport",
      "Ranglar",
      "Shakllar"
    ],
    correct: 1
  },

  {
    question: "Doira nima?",
    answers: [
      "Shakl",
      "Meva",
      "Hayvon",
      "Transport"
    ],
    correct: 0
  }

];


function startQuiz() {

  quizScore = 0;

  quizQuestion = 0;

  showQuestion();
}


function showQuestion() {

  if (
    quizQuestion >= questions.length
  ) {

    showQuizResult();

    return;
  }


  const question =
    questions[quizQuestion];


  app.innerHTML = `

    <div class="quiz-container">

      <div class="quiz-card">

        <h2>
          🧠 Quiz
        </h2>


        <p>
          Savol
          ${quizQuestion + 1}
          /
          ${questions.length}
        </p>


        <br>


        <h3>
          ${question.question}
        </h3>


        ${question.answers.map(
          (answer, index) => `

          <button
            class="answer"
            onclick="checkAnswer(${index})"
          >

            ${answer}

          </button>

        `
        ).join("")}


      </div>

    </div>
  `;
}


function checkAnswer(answerIndex) {

  const question =
    questions[quizQuestion];


  if (
    answerIndex === question.correct
  ) {

    quizScore++;

    showToast(
      "To‘g‘ri! 🎉"
    );

  } else {

    showToast(
      "Yana urinib ko‘ring!"
    );

  }


  setTimeout(() => {

    quizQuestion++;

    showQuestion();

  }, 700);
}


// =========================
// QUIZ NATIJASI
// =========================

function showQuizResult() {

  app.innerHTML = `

    <div class="quiz-container">

      <div
        class="quiz-card"
        style="text-align:center"
      >

        <h1>
          🏆
        </h1>


        <h2>
          Quiz tugadi!
        </h2>


        <h1>
          ${quizScore}
          /
          ${questions.length}
        </h1>


        <br>


        <input
          id="playerName"
          placeholder="Ismingizni yozing"
          style="
            width:100%;
            padding:15px;
            border-radius:15px;
            border:2px solid #f0ddd5;
            font-size:16px;
          "
        >


        <br>
        <br>


        <button
          class="button primary-button"
          style="width:100%"
          onclick="saveScore()"
        >

          🏆 Reytingga qo‘shish

        </button>


        <br>
        <br>


        <button
          class="button secondary-button"
          onclick="showHome()"
        >

          Bosh sahifa

        </button>

      </div>

    </div>
  `;
}


// =========================
// REYTINGNI SAQLASH
// =========================

function saveScore() {

  const nameInput =
   
