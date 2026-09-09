const A = 'assets/';

const categories = [
 {
   id: 'letters',
   name: 'Harflar',
   icon: 'harflar.png',
   cls: 'pink',
   folder: 'letters',
   items: [
     ['A', 'a.jpg', 'Anor'], ['B', 'b.jpg', 'Bola'], ['Ch', 'ch.jpg', 'Choy'],
     ['D', 'd.jpg', 'Daraxt'], ['E', 'e.jpg', 'Eshik'], ['F', 'f.jpg', 'Fil'],
     ['G', 'g.jpg', 'Gul'], ['G‘', "g'.jpg", 'G‘oz'], ['H', 'h.jpg', 'Havo'],
     ['I', 'i1.jpg', 'Ilon'], ['J', 'j.jpg', 'Jo‘ja'], ['K', 'k.jpg', 'Kitob'],
     ['L', 'l.jpg', 'Lola'], ['M', 'm.jpg', 'Meva'], ['N', 'n.jpg', 'Non'],
     ['Ng', 'ng.jpg', 'Tong'], ['O', 'o.jpg', 'Olma'], ['O‘', "o'.jpg", 'O‘rik'],
     ['P', 'p.jpg', 'Paxta'], ['Q', 'q.jpg', 'Quyon'], ['R', 'r.jpg', 'Rang'],
     ['S', 's.jpg', 'Suv'], ['Sh', 'sh.jpg', 'Shamol'], ['T', 't.jpg', 'Tog‘'],
     ['U', 'u.jpg', 'Uzum'], ['V', 'v.jpg', 'Vatan'], ['X', 'x.jpg', 'Xurmo'],
     ['Y', 'y.jpg', 'Yulduz'], ['Z', 'z.jpg', 'Zebra']
   ]
 },
 {
   id: 'numbers',
   name: 'Sonlar',
   icon: 'sonlar.png',
   cls: 'blue',
   folder: 'numbers',
   items: [1,2,3,4,5,6,7,8,9,10].map(n => [String(n), n + '.jpg', numberWord(n)])
 },
 {
   id: 'colors',
   name: 'Ranglar',
   icon: 'ranglar.png',
   cls: 'yellow',
   folder: 'colors',
   items: [
     ['Bejrang', 'bejrang.jpg'], ['Kulrang', 'Kulrang.jpg'], ['Binafsha', 'binafsha.jpg'],
     ['Havorang', 'havorang.jpg'], ['Jigarrang', 'jigarrang.jpg'], ['Koral rang', 'korallrang.jpg'],
     ['Ko‘k', "ko'k.jpg"], ['Kumushrang', 'kumushrang.jpg'], ['Oltinrang', 'oltinrang.jpg'],
     ['Oq', 'oq.jpg'], ['Osmonrang', 'osmonrang.jpg'], ['Pushti', 'pushti.jpg'],
     ['Qizil', 'qizil.jpg'], ['Qora', 'qora.jpg'], ['Sariq', 'sariq.jpg'],
     ['To‘q sariq', "to'q sariq.jpg"], ['To‘q ko‘k', "to'qkok.jpg"],
     ['Turkuazrang', 'turkuazrang.jpg'], ['Yashil', 'yashil.jpg'], ['Zangori', 'zangori.jpg']
   ]
 },
 {
   id: 'shapes',
   name: 'Geometrik shakllar',
   icon: 'shakllar.png',
   cls: 'purple',
   folder: 'shapes',
   items: [
     ['Doira', 'Doira.jpg'], ['Kvadrat', 'Kvadrat.jpg'], ['Oval', 'Oval.jpg'],
     ['To‘rtburchak', "To'rtburchak.jpg"], ['Uchburchak', 'Uchburchak.jpg'], ['Yulduz', 'Yulduz.jpg']
   ]
 },
 {
   id: 'body',
   name: 'Tana a’zolari',
   icon: 'tana azolar.png',
   cls: 'mint',
   folder: 'body',
   items: [
     ['Bosh', 'Bosh.jpg'], ['Burun', 'Burun.jpg'], ['Ko‘z', "Ko'z.jpg"],
     ['Og‘iz', "Og'iz.jpg"], ['Oyoq', 'Oyoq.jpg'], ['Qo‘l', "Qo'l.jpg"], ['Quloq', 'Quloq.jpg']
   ]
 },
 {
   id: 'time',
   name: 'Vaqt',
   icon: 'vaqt.png',
   cls: 'orange',
   folder: 'time',
   items: [
     ['Chizma soat', 'chizma soat.jpg'], ['Kalendar', 'kalendar.jpg'],
     ['Kun va tun', 'kun va tun.jpg'], ['Qum soat', 'qum soat.jpg'],
     ['Sana', 'sana.jpg'], ['Sekundomer', 'sekundomer.jpg'],
     ['Soat', 'soat.jpg'], ['Soat 1', 'soat1.jpg']
   ]
 },
 {
   id: 'fruits',
   name: 'Mevalar',
   icon: 'mevalar.png',
   cls: 'pink',
   folder: 'fruits',
   items: [
     ['Ananas', 'ananas.jpg'], ['Anor', 'anor.jpg'], ['Apelsin', 'apelsin.jpg'],
     ['Banan', 'banan.jpg'], ['Behi', 'behi.jpg'], ['Kivi', 'kivi.jpg'],
     ['Limon', 'limon.jpg'], ['Nok', 'nok.jpg'], ['Olcha', 'olcha.jpg'],
     ['Olma', 'olma.jpg'], ['Olxo‘ri', "olxo'ri.jpg"], ['Qovun', 'qovun.jpg'],
     ['Qulupnay', 'qulupnay.jpg'], ['Tarvuz', 'tarvuz.jpg'], ['Uzum', 'uzum.jpg'],
     ['Xurmo', 'xurmo.jpg']
   ]
 },
 {
   id: 'nature',
   name: 'Tabiat',
   icon: 'tabiat.png',
   cls: 'mint',
   folder: 'nature',
   items: [
     ['O‘rmon', 'Ormon.jpg'], ['Oy va yulduzlar', 'Oyva yulduzlar.jpg'],
     ['Bulut', 'bulut.jpg'], ['Daraxt', 'daraxt.jpg'], ['Daryo', 'daryo.jpg'],
     ['Dengiz', 'dengiz.jpg'], ['Gul', 'gul.jpg'], ['Kamalak', 'kamalak.jpg'],
     ['Olov', 'olov.jpg'], ['O‘tloq', "o'tloq.jpg"], ['Qor', 'qor.jpg'],
     ['Quyosh', 'quyosh.jpg'], ['Shamol', 'shamol.jpg'], ['Tog‘', "tog'.jpg"],
     ['Yomg‘ir', 'yomgir.jpg']
   ]
 },
 {
   id: 'transport',
   name: 'Transport',
   icon: 'transport.png',
   cls: 'blue',
   folder: 'transport',
   items: [
     ['Avtobus', 'avtobus.jpg'], ['Avtomobil', 'avtomobil.jpg'], ['Havo shari', 'havoshari.jpg'],
     ['Kema', 'kema.jpg'], ['Mototsikl', 'mototsikl.jpg'], ['Politsiya mashinasi', 'politshiyamashinasi.jpg'],
     ['Poyezd', 'poyezd.jpg'], ['Samolyot', 'samalyot.jpg'], ['Samosval', 'samasval.jpg'],
     ['Tez yordam', 'tezyordam.jpg'], ['Traktor', 'traktor.jpg'], ['Velosiped', 'velosiped.jpg'],
     ['Vertolyot', 'vertalyot.jpg'], ['Yaxta', 'yaxta.jpg'], ['Yong‘in mashinasi', 'yonginmashinasi.jpg']
   ]
 }
];

function numberWord(n) {
  return ['', 'Bir', 'Ikki', 'Uch', 'To‘rt', 'Besh', 'Olti', 'Yetti', 'Sakkiz', 'To‘qqiz', 'O‘n'][n];
}

const app = document.getElementById('app');
const back = document.getElementById('backBtn');
let voiceOn = true;
let history = ['home'];

function imgPath(c, file) {
  return A + 'illustrations/' + c.folder + '/' + file;
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
}

function speak(text) {
  if (!voiceOn || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'uz-UZ';
  u.rate = 0.85;
  speechSynthesis.speak(u);
}

function safeImg(src, alt) {
  return `<img src="${src}" alt="${esc(alt)}" loading="lazy" onerror="this.style.display='none';this.insertAdjacentHTML('afterend','<div class=empty-image>Rasm topilmadi</div>')">`;
}

function setNav(id) {
  document.querySelectorAll('.bottom-nav button').forEach(b => b.classList.toggle('active', b.dataset.nav === id));
}

function route(view, push = true) {
  if (push && history[history.length - 1] !== view) history.push(view);
  back.style.visibility = view === 'home' ? 'hidden' : 'visible';
  const nav = view.split(':')[0];
  setNav(['home', 'lessons', 'quiz', 'ranking'].includes(nav) ? nav : 'lessons');

  if (view === 'home') return home();
  if (view === 'lessons') return lessons();
  if (view === 'quiz') return startQuiz();
  if (view === 'ranking') return ranking();
  if (view.startsWith('lesson:')) return lesson(view.slice(7));
  if (view.startsWith('detail:')) {
    const [, cid, i] = view.split(':');
    return detail(cid, +i);
  }
}

function home() {
  app.innerHTML = `<section class="hero"><h1>Bolajonlar</h1><p>O‘ynab o‘rganamiz! 🧶</p></section><h2 class="section-title">Nimani o‘rganamiz?</h2><div class="cards">${categories.map(c => `<button class="lesson-card ${c.cls}" onclick="route('lesson:${c.id}')">${safeImg(A + 'icons/' + c.icon, c.name)}<b>${c.name}</b><small>${c.items.length} ta rasm</small></button>`).join('')}</div>`;
}

function lessons() {
  app.innerHTML = `<h1 class="section-title">📚 Darslar</h1><p class="section-subtitle">Rasmni tanlang va o‘rganing.</p><div class="cards">${categories.map(c => `<button class="lesson-card ${c.cls}" onclick="route('lesson:${c.id}')">${safeImg(A + 'icons/' + c.icon, c.name)}<b>${c.name}</b></button>`).join('')}</div>`;
}

function lesson(id) {
  const c = categories.find(x => x.id === id);
  if (!c) return home();
  app.innerHTML = `<div class="lesson-head">${safeImg(A + 'icons/' + c.icon, c.name)}<div><h1>${c.name}</h1><div class="section-subtitle">${c.items.length} ta rasm</div></div></div>${id === 'time' ? `<button class="secondary" onclick="clockGame()">🕐 Soat mashqi</button>` : ''}<div class="grid-items">${c.items.map((it, i) => `<button class="image-card" onclick="route('detail:${id}:${i}')">${safeImg(imgPath(c, it[1]), it[0])}<b>${it[0]}</b><span class="speak" onclick="event.stopPropagation();speak('${esc(it[0])}')">🔊 Eshitish</span></button>`).join('')}</div>`;
}

function detail(cid, i) {
  const c = categories.find(x => x.id === cid);
  const it = c.items[i];
  const text = it[2] ? `${it[0]} — ${it[2]}` : it[0];
  app.innerHTML = `<div class="detail">${safeImg(imgPath(c, it[1]), it[0])}<h1>${it[0]}</h1>${it[2] ? `<p>${it[2]}</p>` : ''}<button class="primary" onclick="speak('${esc(text)}')">🔊 Tinglash</button></div>`;
}

function clockGame() {
  const times = [[1, 0], [3, 0], [6, 0], [9, 0], [12, 0]];
  const t = times[Math.floor(Math.random() * times.length)];
  const h = t[0];
  const m = t[1];
  const degH = ((h % 12) + m / 60) * 30;
  const degM = m * 6;
  app.innerHTML = `<h1 class="section-title">Soat mashqi</h1><div class="detail"><p>Bu soat nechchi bo‘ldi?</p><div class="clock" style="--hour:${degH}deg;--minute:${degM}deg"><div class="clock-dot"></div></div><div class="answers">${[1, 3, 6, 9].map(x => `<button class="answer ${x === h ? 'correct-answer' : ''}" onclick="clockAnswer(this,${x === h})">${x}:00</button>`).join('')}</div></div>`;
}

function clockAnswer(el, ok) {
  el.classList.add(ok ? 'correct' : 'wrong');
  if (ok) speak('To‘g‘ri! Ajoyib!');
  else speak('Yana urinib ko‘ring');
}

function quizPool() {
  return categories.flatMap(c => c.items.map((it, i) => ({ c, it, i }))).filter(x => x.c.id !== 'time');
}

function shuffle(a) {
  return [...a].sort(() => Math.random() - 0.5);
}

let quizState = null;

function startQuiz() {
  const pool = shuffle(quizPool());
  quizState = { q: pool.slice(0, 10), i: 0, score: 0, locked: false };
  renderQuestion();
}

function renderQuestion() {
  const s = quizState;
  if (s.i >= s.q.length) return quizResult();
  const q = s.q[s.i];
  const same = q.c.items;
  let wrong = shuffle(same.filter(x => x !== q.it)).slice(0, 3).map(x => x[0]);
  let opts = shuffle([q.it[0], ...wrong]);
  app.innerHTML = `<div class="quiz-top"><b>⭐ Ball: ${s.score}/${s.q.length}</b><span>${s.i + 1}/${s.q.length}</span></div><div class="question-card"><p>Rasmda nima tasvirlangan?</p>${safeImg(imgPath(q.c, q.it[1]), q.it[0])}<div class="answers">${opts.map(o => `<button class="answer" onclick="answerQuiz(this,'${esc(o)}')">${o}</button>`).join('')}</div></div>`;
}

function answerQuiz(btn, val) {
  const s = quizState;
  if (s.locked) return;
  s.locked = true;
  const q = s.q[s.i];
  const ok = val === q.it[0];
  btn.classList.add(ok ? 'correct' : 'wrong');
  if (ok) {
    s.score++;
    speak('To‘g‘ri! Ajoyib!');
  } else {
    speak('Yana mashq qilamiz');
    document.querySelectorAll('.answer').forEach(b => {
      if (b.textContent === q.it[0]) b.classList.add('correct');
    });
  }
  setTimeout(() => {
    s.i++;
    s.locked = false;
    renderQuestion();
  }, 850);
}

function quizResult() {
  const s = quizState;
  const msg = s.score === 10 ? 'Ajoyib!' : s.score >= 8 ? 'Juda yaxshi!' : 'Yana mashq qilamiz!';
  app.innerHTML = `<div class="result"><div style="font-size:60px">🏆</div><h1>TABRIKLAYMIZ!</h1><div class="score">${s.score}/10</div><p>${msg}</p><div class="name-form"><input id="playerName" maxlength="24" placeholder="Ismingiz"><button class="primary" onclick="saveScore(${s.score})">Reytingga qo‘shish</button></div><p><button class="secondary" onclick="startQuiz()">Yana o‘ynash</button></p></div>`;
}

function getScores() {
  try {
    return JSON.parse(localStorage.getItem('bolajonlar_scores') || '[]');
  } catch {
    return [];
  }
}

function saveScore(score) {
  const name = (document.getElementById('playerName').value.trim() || 'Mehmon').slice(0, 24);
  const scores = [...getScores(), { name, score, date: Date.now() }].sort((a, b) => b.score - a.score || a.date - b.date).slice(0, 10);
  localStorage.setItem('bolajonlar_scores', JSON.stringify(scores));
  route('ranking');
}

function ranking() {
  const s = getScores();
  app.innerHTML = `<h1 class="section-title">🏆 Reyting</h1><p class="section-subtitle">Qurilmadagi eng yaxshi 10 natija</p><div class="ranking-list">${s.length ? s.map((x, i) => `<div class="rank-row"><span>${['🥇', '🥈', '🥉'][i] || '#' + (i + 1)} ${esc(x.name)}</span><b>${x.score}/10</b></div>`).join('') : `<div class="result"><h2>Hali natija yo‘q</h2><p>Quizni ishlab birinchi bo‘ling!</p><button class="primary" onclick="route('quiz')">Quizni boshlash</button></div>`}</div>`;
}

document.querySelectorAll('[data-nav]').forEach(b => b.addEventListener('click', () => route(b.dataset.nav)));
back.addEventListener('click', () => {
  if (history.length > 1) {
    history.pop();
    route(history[history.length - 1], false);
  }
});
document.getElementById('brandBtn').onclick = () => route('home');
document.getElementById('soundToggle').onclick = function () {
  voiceOn = !voiceOn;
  this.textContent = voiceOn ? '🔊' : '🔇';
};

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
route('home', false);
