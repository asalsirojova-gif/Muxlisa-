const app = document.getElementById("app");
const backBtn = document.getElementById("backBtn");
const soundBtn = document.getElementById("globalSoundBtn");
const installBar = document.getElementById("installBar");
const installBtn = document.getElementById("installBtn");
const toast = document.getElementById("toast");


// ========================================
// BOLAJONLAR — BARCHA BO'LIMLAR
// ========================================

const categories = [

  // ---------------- HARFLAR ----------------

  {
    id: "letters",
    title: "Harflar",
    emoji: "🔤",
    icon: "assets/icons/harflar.png",
    items: [
      ["A", "a.jpg"],
      ["B", "b.jpg"],
      ["Ch", "ch.jpg"],
      ["D", "d.jpg"],
      ["E", "e.jpg"],
      ["F", "f.jpg"],
      ["G", "g.jpg"],
      ["G‘", "g‘.jpg"],
      ["H", "h.jpg"],
      ["I", "i1.jpg"],
      ["J", "j.jpg"],
      ["K", "k.jpg"],
      ["L", "l.jpg"],
      ["M", "m.jpg"],
      ["N", "n.jpg"],
      ["Ng", "ng.jpg"],
      ["O", "o.jpg"],
      ["O‘", "o‘.jpg"],
      ["P", "p.jpg"],
      ["Q", "q.jpg"],
      ["R", "r.jpg"],
      ["S", "s.jpg"],
      ["Sh", "sh.jpg"],
      ["T", "t.jpg"],
      ["U", "u.jpg"],
      ["V", "v.jpg"],
      ["X", "x.jpg"],
      ["Y", "y.jpg"],
      ["Z", "z.jpg"]
    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/letters/" + item[1]
    }))
  },


  // ---------------- SONLAR ----------------

  {
    id: "numbers",
    title: "Sonlar",
    emoji: "🔢",
    icon: "assets/icons/sonlar.png",
    items: [
      "1", "2", "3", "4", "5",
      "6", "7", "8", "9", "10"
    ].map(number => ({
      name: number,
      image: `assets/illustrations/numbers/${number}.jpg`
    }))
  },


  // ---------------- RANGLAR ----------------

  {
    id: "colors",
    title: "Ranglar",
    emoji: "🌈",
    icon: "assets/icons/ranglar.png",
    items: [

      ["Bejrang", "Bejrang .jpg"],
      ["Kulrang", "Kulrang.jpg"],
      ["Binafsha", "binafsha.jpg"],
      ["Havorang", "havorang.jpg"],
      ["Jigarrang", "jigarrang.jpg"],
      ["Korall rang", "koralrang.jpg"],
      ["Ko‘k", "ko‘k.jpg"],
      ["Kumushrang", "kumushrang.jpg"],
      ["Oltinrang", "oltinrang.jpg"],
      ["Oq", "oq.jpg"],
      ["Osmonrang", "osmonrang.jpg"],
      ["Pushti", "pushti.jpg"],
      ["Qizil", "qizil.jpg"],
      ["Qora", "qora.jpg"],
      ["Sariq", "sariq.jpg"],
      ["To‘q sariq", "to‘q sarie.jpg"],
      ["To‘q ko‘k", "to‘qkok.jpg"],
      ["Turkuazrang", "turkuazrang.jpg"],
      ["Yashil", "yashil.jpg"],
      ["Zangori", "zangori.jpg"]

    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/colors/" + item[1]
    }))
  },


  // ---------------- SHAKLLAR ----------------

  {
    id: "shapes",
    title: "Shakllar",
    emoji: "🔺",
    icon: "assets/icons/shakllar.png",
    items: [

      ["Doira", "Doira.jpg"],
      ["Kvadrat", "Kvadrat.jpg"],
      ["Oval", "Oval.jpg"],
      ["To‘rtburchak", "To'rtburchak.jpg"],
      ["Uchburchak", "Uchburchak.jpg"],
      ["Yulduz", "Yulduz.jpg"]

    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/shapes/" + item[1]
    }))
  },


  // ---------------- TANA A'ZOLARI ----------------

  {
    id: "body",
    title: "Tana a’zolari",
    emoji: "🖐️",
    icon: "assets/icons/tana azolar.png",
    items: [

      ["Bosh", "Bosh.jpg"],
      ["Burun", "Burun.jpg"],
      ["Ko‘z", "Ko'z.jpg"],
      ["Og‘iz", "Og'iz.jpg"],
      ["Oyoq", "Oyoq.jpg"],
      ["Qo‘l", "Qo'l.jpg"],
      ["Quloq", "Quloq.jpg"]

    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/body/" + item[1]
    }))
  },


  // ---------------- MEVALAR ----------------

  {
    id: "fruits",
    title: "Mevalar",
    emoji: "🍎",
    icon: "assets/icons/mevalar .png",
    items: [

      ["Ananas", "ananas.jpg"],
      ["Anor", "anor.jpg"],
      ["Apelsin", "apelsin.jpg"],
      ["Banan", "banan.jpg"],
      ["Behi", "behi.jpg"],
      ["Kivi", "kivi.jpg"],
      ["Limon", "limon.jpg"],
      ["Nok", "nok.jpg"],
      ["Olcha", "olcha.jpg"],
      ["Olma", "olma.jpg"],
      ["Olxo‘ri", "olxo‘ri.jpg"],
      ["Qovun", "qovun.jpg"],
      ["Qulupnay", "qulupnay.jpg"],
      ["Tarvuz", "tarvuz.jpg"],
      ["Uzum", "uzum.jpg"],
      ["Xurmo", "xurmo.jpg"]

    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/fruits/" + item[1]
    }))
  },


  // ---------------- TABIAT ----------------

  {
    id: "nature",
    title: "Tabiat",
    emoji: "🌳",
    icon: "assets/icons/tabiat.png",
    items: [

      ["O‘rmon", "Ormon.jpg"],
      ["Oy va yulduzlar", "Oyva yulduzlar.jpg"],
      ["Bulut", "bulut.jpg"],
      ["Daraxt", "daraxt.jpg"],
      ["Daryo", "daryo.jpg"],
      ["Dengiz", "dengiz.jpg"],
      ["Gul", "gul.jpg"],
      ["Kamalak", "kamalak.jpg"],
      ["Olov", "olov.jpg"],
      ["O‘tloq", "o‘tloq.jpg"],
      ["Qor", "qor.jpg"],
      ["Quyosh", "quyosh.jpg"],
      ["Shamol", "shamol.jpg"],
      ["Tog‘", "tog‘.jpg"],
      ["Yomg‘ir", "yomgir.jpg"]

    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/nature/" + item[1]
    }))
  },


  // ---------------- TRANSPORT ----------------

  {
    id: "transport",
    title: "Transport",
    emoji: "🚗",
    icon: "assets/icons/transport.png",
    items: [

      ["Avtobus", "avtobus.jpg"],
      ["Avtomobil", "avtomobil.jpg"],
      ["Havo shari", "havoshari.jpg"],
      ["Kema", "kema.jpg"],
      ["Mototsikl", "mototsikl.jpg"],
      ["Politsiya mashinasi", "politsiyamashinasi.jpg"],
      ["Poyezd", "poyezd.jpg"],
      ["Samolyot", "samalyot.jpg"],
      ["Samosval", "samasval.jpg"],
      ["Tezyordam", "tezyordam.jpg"],
      ["Traktor", "traktor.jpg"],
      ["Velosiped", "velosiped.jpg"],
      ["Vertalyot", "vertalyot.jpg"],
      ["Yaxta", "yaxta.jpg"],
      ["Yong‘in mashinasi", "yonginmashinasi.jpg"]

    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/transport/" + item[1]
    }))
  },


  // ---------------- VAQT ----------------

  {
    id: "time",
    title: "Vaqt",
    emoji: "⏰",
    icon: "assets/icons/vaqt.png",
    items: [

      ["Chizma soat", "chizma soat.jpg"],
      ["Kalendar", "kalendar.jpg"],
      ["Kun va tun", "kun va tun.jpg"],
      ["Qum soat", "qum soat.jpg"],
      ["Sana", "sana.jpg"],
      ["Sekundomer", "sekundomer.jpg"],
      ["Soat", "soat.jpg"],
      ["Soat 1", "soat1.jpg"]

    ].map(item => ({
      name: item[0],
      image: "assets/illustrations/time/" + item[1]
    }))
  }

];


// ========================================
// HOLAT
// ========================================

let currentPage = "home";
let currentCategory = null;
let currentIndex = 0;

let soundEnabled = true;
let quizScore = 0;
let quizIndex = 0;


// ========================================
// RASM YO'LI
// ========================================

function imagePath(path) {
  return encodeURI(path);
}


// ========================================
// TOAST XABARI
// ========================================

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);

}


// ========================================
// OVOZ
// ========================================

function speak(text) {

  if (!soundEnabled) return;

  if ("speechSynthesis" in window) {

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "uz-UZ";
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

}


// ========================================
// YUQORI TUGMALAR
// ========================================

backBtn.addEventListener("click", () => {

  if (currentPage === "lesson") {
    showLessons();
  } else {
    showHome();
  }

});


soundBtn.addEventListener("click", () => {

  soundEnabled = !soundEnabled;

  soundBtn.textContent =
    soundEnabled ? "🔊" : "🔇";

  showToast(
    soundEnabled
      ? "Ovoz yoqildi 🔊"
      : "Ovoz o‘chirildi 🔇"
  );

});


// ========================================
// PASTKI MENYU
// ========================================

document.querySelectorAll(".nav-btn").forEach(button => {

  button.addEventListener("click", () => {

    const route = button.dataset.route;

    if (route === "home") {
      showHome();
    }

    if (route === "lessons") {
      showLessons();
    }

    if (route === "quiz") {
      startQuiz();
    }

    if (route === "ranking") {
      showRanking();
    }

  });

});


function setActiveNav(route) {

  document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.route === route
      );

    });

}


// ========================================
// BOSH SAHIFA
// ========================================

function showHome() {

  currentPage = "home";

  currentCategory = null;

  backBtn.classList.add("hidden");

  setActiveNav("home");


  app.innerHTML = `

    <section class="home-container">

      <div class="welcome-box wool-card">

        <img
          class="home-logo"
          src="${imagePath("assets/icons/logo.png")}"
          alt="Bolajonlar"
        >

        <h2>Bolajonlar! 🧶</h2>

        <p>
          O‘ynab, ko‘rib va tinglab
          yangi bilimlarni o‘rganamiz!
        </p>

        <button
          class="button primary-button"
          data-action="lessons"
        >
          Boshlaymiz! 🚀
        </button>

      </div>


      <h2 class="section-title">
        📚 Bo‘limlarni tanlang
      </h2>


      <div class="categories">

        ${categories.map(category => `

          <button
            class="category"
            data-category="${category.id}"
          >

            <img
              src="${imagePath(category.icon)}"
              alt="${category.title}"
            >

            <h3>
              ${category.emoji}
              ${category.title}
            </h3>

          </button>

        `).join("")}

      </div>


      <div class="home-actions">

        <button
          class="button primary-button"
          data-action="quiz"
        >
          🧠 Quiz o‘ynash
        </button>


        <button
          class="button secondary-button"
          data-action="ranking"
        >
          🏆 Reyting
        </button>

      </div>

    </section>

  `;


  addPageEvents();

}


// ========================================
// DARS BO'LIMLARI
// ========================================

function showLessons() {

  currentPage = "lessons";

  backBtn.classList.add("hidden");

  setActiveNav("lessons");


  app.innerHTML = `

    <section class="home-container">

      <div class="page-title">

        <h2>
          📚 Darslar
        </h2>

        <p>
          O‘zingizga yoqqan bo‘limni tanlang
        </p>

      </div>


      <div class="categories">

        ${categories.map(category => `

          <button
            class="category"
            data-category="${category.id}"
          >

            <img
              src="${imagePath(category.icon)}"
              alt="${category.title}"
            >

            <h3>
              ${category.emoji}
              ${category.title}
            </h3>

          </button>

        `).join("")}

      </div>

    </section>

  `;


  addPageEvents();

}


// ========================================
// BO'LIMNI OCHISH
// ========================================

function openCategory(id) {

  currentCategory =
    categories.find(
      category => category.id === id
    );

  if (!currentCategory) return;

  currentIndex = 0;

  showLesson();

}


// ========================================
// BITTA DARS
// ========================================

function showLesson() {

  if (!currentCategory) {
    showLessons();
    return;
  }


  currentPage = "lesson";

  backBtn.classList.remove("hidden");

  setActiveNav("lessons");


  const item =
    currentCategory.items[currentIndex];


  const progress =
    Math.round(
      ((currentIndex + 1) /
      currentCategory.items.length) * 100
    );


  app.innerHTML = `

    <section class="lesson-container">

      <div class="lesson-top">

        <span class="lesson-category">
          ${currentCategory.emoji}
          ${currentCategory.title}
        </span>

        <span>
          ${currentIndex + 1}
          /
          ${currentCategory.items.length}
        </span>

      </div>


      <div class="progress-bar">

        <div
          class="progress-fill"
          style="width:${progress}%"
        ></div>

      </div>


      <div class="lesson-card wool-card">

        <img
          class="lesson-image"
          src="${imagePath(item.image)}"
          alt="${item.name}"
        >


        <h1 class="lesson-title">
          ${item.name}
        </h1>


        <button
          class="button primary-button"
          data-speak="${item.name}"
        >
          🔊 Tinglash
        </button>


        <div class="navigation-buttons">

          <button
            class="button secondary-button"
            data-action="previous"
            ${currentIndex === 0 ? "disabled" : ""}
          >
            ← Oldingi
          </button>


          <button
            class="button primary-button"
            data-action="next"
            ${currentIndex ===
              currentCategory.items.length - 1
              ? "disabled"
              : ""
            }
          >
            Keyingi →
          </button>

        </div>


        <button
          class="small-home-button"
          data-action="lessons"
        >
          📚 Barcha darslar
        </button>

      </div>

    </section>

  `;


  addPageEvents();

  speak(item.name);

}


// ========================================
// OLDINGI DARS
// ========================================

function previousLesson() {

  if (currentIndex > 0) {

    currentIndex--;

    showLesson();

  } else {

    showToast("Bu birinchi rasm 🙂");

  }

}


// ========================================
// KEYINGI DARS
// ========================================

function nextLesson() {

  if (
    currentIndex <
    currentCategory.items.length - 1
  ) {

    currentIndex++;

    showLesson();

  } else {

    showToast("Bu oxirgi rasm 🎉");

  }

}


// ========================================
// QUIZ SAVOLLARI
// ========================================

const questions = [

  {
    question: "1 + 1 nechchi bo‘ladi?",
    answers: ["1", "2", "3", "4"],
    correct: 1
  },

  {
    question: "Olma qaysi bo‘limga kiradi?",
    answers: [
      "Mevalar",
      "Transport",
      "Ranglar",
      "Vaqt"
    ],
    correct: 0
  },

  {
    question: "Qizil bu nima?",
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
      "Shakllar",
      "Ranglar"
    ],
    correct: 1
  },

  {
    question: "Doira nima?",
    answers: [
      "Shakl",
      "Meva",
      "Transport",
      "Rang"
    ],
    correct: 0
  },

  {
    question: "Kamalak qaysi bo‘limga kiradi?",
    answers: [
      "Vaqt",
      "Tabiat",
      "Harflar",
      "Sonlar"
    ],
    correct: 1
  },

  {
    question: "5 dan keyin qaysi son keladi?",
    answers: [
      "4",
      "5",
      "6",
      "7"
    ],
    correct: 2
  }

];


// ========================================
// QUIZNI BOSHLASH
// ========================================

function startQuiz() {

  currentPage = "quiz";

  quizScore = 0;

  quizIndex = 0;

  backBtn.classList.remove("hidden");

  setActiveNav("quiz");

  showQuestion();

}


// ========================================
// SAVOLNI KO'RSATISH
// ========================================

function showQuestion() {

  if (quizIndex >= questions.length) {

    showQuizResult();

    return;

  }


  const question =
    questions[quizIndex];


  app.innerHTML = `

    <section class="quiz-container">

      <div class="quiz-card wool-card">

        <div class="quiz-progress">

          <span>
            🧠 Savol
            ${quizIndex + 1}
            /
            ${questions.length}
          </span>

          <span>
            ⭐ ${quizScore}
          </span>

        </div>


        <div class="progress-bar">

          <div
            class="progress-fill"
            style="
              width:
              ${((quizIndex + 1) /
              questions.length) * 100}%
            "
          ></div>

        </div>


        <h2 class="quiz-question">

          ${question.question}

        </h2>


        <div class="answers">

          ${question.answers.map(
            (answer, index) => `

              <button
                class="answer"
                data-answer="${index}"
              >

                ${answer}

              </button>

            `
          ).join("")}

        </div>

      </div>

    </section>

  `;


  document
    .querySelectorAll("[data-answer]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          checkAnswer(
            Number(button.dataset.answer)
          );

        }
      );

    });

}


// ========================================
// JAVOBNI TEKSHIRISH
// ========================================

function checkAnswer(answerIndex) {

  const question =
    questions[quizIndex];


  if (
    answerIndex === question.correct
  ) {

    quizScore++;

    showToast("To‘g‘ri! 🎉");

  } else {

    showToast("Keyingi safar albatta! 💪");

  }


  document
    .querySelectorAll(".answer")
    .forEach(button => {

      button.disabled = true;

    });


  setTimeout(() => {

    quizIndex++;

    showQuestion();

  }, 900);

}


// ========================================
// QUIZ NATIJASI
// ========================================

function showQuizResult() {

  const percent =
    Math.round(
      (quizScore / questions.length) * 100
    );


  let message = "";

  if (percent === 100) {

    message = "Ajoyib! Siz haqiqiy bilimdonsiz! 🏆";

  } else if (percent >= 70) {

    message = "Juda yaxshi natija! 🌟";

  } else if (percent >= 40) {

    message = "Yaxshi! Yana mashq qiling! 💪";

  } else {

    message = "Yana bir bor urinib ko‘ring! 😊";

  }


  app.innerHTML = `

    <section class="quiz-container">

      <div
        class="quiz-card wool-card result-card"
      >

        <div class="result-trophy">
          🏆
        </div>


        <h2>
          Quiz tugadi!
        </h2>


        <h1 class="score">

          ${quizScore}
          /
          ${questions.length}

        </h1>


        <p>
          ${message}
        </p>


        <input
          id="playerName"
          class="name-input"
          type="text"
          maxlength="20"
          placeholder="Ismingizni yozing"
        >


        <button
          id="saveScoreBtn"
          class="button primary-button"
        >

          🏆 Reytingga qo‘shish

        </button>


        <button
          id="restartQuizBtn"
          class="button secondary-button"
        >

          🔄 Qayta o‘ynash

        </button>

      </div>

    </section>

  `;


  document
    .getElementById("saveScoreBtn")
    .addEventListener(
      "click",
      saveScore
    );


  document
    .getElementById("restartQuizBtn")
    .addEventListener(
      "click",
      startQuiz
    );

}


// ========================================
// NATIJANI SAQLASH
// ========================================

function saveScore() {

  const input =
    document.getElementById("playerName");


  const name =
    input.value.trim();


  if (!name) {

    showToast("Avval ismingizni yozing ✍️");

    input.focus();

    return;

  }


  const ranking =
    JSON.parse(
      localStorage.getItem(
        "bolajonlarRanking"
      ) || "[]"
    );


  ranking.push({

    name: name,

    score: quizScore,

    total: questions.length,

    date: new Date().toLocaleDateString()

  });


  ranking.sort(
    (a, b) => b.score - a.score
  );


  const bestRanking =
    ranking.slice(0, 50);


  localStorage.setItem(
    "bolajonlarRanking",
    JSON.stringify(bestRanking)
  );


  showToast("Natijangiz saqlandi! 🎉");


  setTimeout(() => {

    showRanking();

  }, 500);

}


// ========================================
// REYTING
// ========================================

function showRanking() {

  currentPage = "ranking";

  backBtn.classList.remove("hidden");

  setActiveNav("ranking");


  const ranking =
    JSON.parse(
      localStorage.getItem(
        "bolajonlarRanking"
      ) || "[]"
    );


  app.innerHTML = `

    <section class="ranking-container">

      <div class="ranking-card wool-card">

        <div class="ranking-header">

          <img
            src="${imagePath(
              "assets/icons/reyting.png"
            )}"
            alt="Reyting"
          >

          <div>

            <h2>
              🏆 Reyting
            </h2>

            <p>
              Eng yaxshi bilimdonlar
            </p>

          </div>

        </div>


        ${ranking.length === 0
          ? `

            <div class="empty-ranking">

              <div>🏆</div>

              <h3>
                Hali natijalar yo‘q
              </h3>

              <p>
                Quiz o‘ynab birinchi
                o‘rinni egallang!
              </p>

              <button
                class="button primary-button"
                data-action="quiz"
              >
                Quiz boshlash 🧠
              </button>

            </div>

          `

          :

          `

            <div class="ranking-list">

              ${ranking.map(
                (player, index) => `

                  <div class="ranking-item">

                    <div class="rank-number">

                      ${
                        index === 0
                          ? "🥇"
                          : index === 1
                          ? "🥈"
                          : index === 2
                          ? "🥉"
                          : index + 1
                      }

                    </div>


                    <div class="player-info">

                      <strong>
                        ${escapeHtml(player.name)}
                      </strong>

                      <small>
                        ${player.date}
                      </small>

                    </div>


                    <div class="player-score">

                      ${player.score}
                      /
                      ${player.total}

                      ⭐

                    </div>

                  </div>

                `
              ).join("")}

            </div>


            <button
              id="clearRankingBtn"
              class="button secondary-button"
            >

              🗑 Reytingni tozalash

            </button>

          `

        }

      </div>

    </section>

  `;


  addPageEvents();


  const clearButton =
    document.getElementById(
      "clearRankingBtn"
    );


  if (clearButton) {

    clearButton.addEventListener(
      "click",
      () => {

        if (
          confirm(
            "Reytingni tozalashni xohlaysizmi?"
          )
        ) {

          localStorage.removeItem(
            "bolajonlarRanking"
          );

          showRanking();

          showToast(
            "Reyting tozalandi"
          );

        }

      }
    );

  }

}


// ========================================
// XAVFSIZ MATN
// ========================================

function escapeHtml(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


// ========================================
// SAHIFA TUGMALARI
// ========================================

function addPageEvents() {

  document
    .querySelectorAll("[data-category]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openCategory(
            button.dataset.category
          );

        }
      );

    });


  document
    .querySelectorAll("[data-speak]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          speak(
            button.dataset.speak
          );

        }
      );

    });


  document
    .querySelectorAll("[data-action]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const action =
            button.dataset.action;


          if (action === "home") {
            showHome();
          }


          if (action === "lessons") {
            showLessons();
          }


          if (action === "quiz") {
            startQuiz();
          }


          if (action === "ranking") {
            showRanking();
          }


          if (action === "previous") {
            previousLesson();
          }


          if (action === "next") {
            nextLesson();
          }

        }
      );

    });

}


// ========================================
// TELEFONGA O'RNATISH
// ========================================

let deferredPrompt = null;


window.addEventListener(
  "beforeinstallprompt",
  event => {

    event.preventDefault();

    deferredPrompt = event;

    if (installBar) {

      installBar.hidden = false;

    }

  }
);


if (installBtn) {

  installBtn.addEventListener(
    "click",
    async () => {

      if (!deferredPrompt) {

        showToast(
          "Brauzer menyusidan ilovani o‘rnating 📱"
        );

        return;

      }


      deferredPrompt.prompt();


      await deferredPrompt.userChoice;


      deferredPrompt = null;


      if (installBar) {

        installBar.hidden = true;

      }

    }
  );

}


// ========================================
// SERVICE WORKER
// ========================================

if (
  "serviceWorker" in navigator
) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register("service-worker.js")
        .catch(error => {

          console.log(
            "Service Worker xatosi:",
            error
          );

        });

    }
  );

}


// ========================================
// ILOVANI BOSHLASH
// ========================================

showHome();
