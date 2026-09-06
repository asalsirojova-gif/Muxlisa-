const $ = s => document.querySelector(s);
const app = $('#app');
const backBtn = $('#backBtn');
const toast = $('#toast');
let route = 'home';
let selectedCategory = null;
let lessonIndex = 0;
let deferredPrompt = null;

const categories = [
  {id:'letters',name:'Harflar',desc:'O‘zbek alifbosi',tone:'pink',symbol:'A',items:[
    ['A','Anor'],['B','Buloq'],['D','Daraxt'],['E','Eshik'],['F','Fonар'],['G','Gul'],['H','Havo'],['I','Idish'],['J','Javon'],['K','Kitob'],['L','Lola'],['M','Mashina'],['N','Non'],['O','Olma'],['P','Paxta'],['Q','Qalam'],['R','Ruchka'],['S','Soat'],['T','Tarvuz'],['U','Uzum'],['V','Vaza'],['X','Xat'],['Y','Yulduz'],['Z','Zang'],['O‘','O‘rik'],['G‘','G‘isht'],['Sh','Shahar'],['Ch','Choynak'],['Ng','Tong']].map((x,i)=>({id:String(i+1),label:x[0],name:x[1],say:`${x[0]} — ${x[1]}`}))},
  {id:'numbers',name:'Sonlar',desc:'1 dan 10 gacha',tone:'yellow',symbol:'1',items:[['1','Bir'],['2','Ikki'],['3','Uch'],['4','To‘rt'],['5','Besh'],['6','Olti'],['7','Yetti'],['8','Sakkiz'],['9','To‘qqiz'],['10','O‘n']].map((x,i)=>({id:String(i+1),label:x[0],name:x[1],say:x[1]}))},
  {id:'colors',name:'Ranglar',desc:'10 ta asosiy rang',tone:'mint',symbol:'●',items:['Qizil','Sariq','Yashil','Ko‘k','Pushti','Binafsha','To‘q sariq','Havorang','Oq','Qora'].map((x,i)=>({id:String(i+1),label:'●',name:x,say:x}))},
  {id:'shapes',name:'Shakllar',desc:'Geometrik shakllar',tone:'blue',symbol:'◇',items:['Doira','Uchburchak','Kvadrat','To‘g‘ri to‘rtburchak','Oval','Yulduz'].map((x,i)=>({id:String(i+1),label:['○','△','□','▭','⬭','★'][i],name:x,say:x}))},
  {id:'body',name:'Tana a’zolari',desc:'Ta’limiy ikonlar',tone:'purple',symbol:'◉',poster:'assets/illustrations/body-poster.png',items:['Ko‘z','Quloq','Burun','Og‘iz','Qo‘l','Oyoq','Bosh'].map((x,i)=>({id:String(i+1),label:['◉','◖','◡','⌣','✋','◟','◯'][i],name:x,say:x}))},
  {id:'time',name:'Vaqt',desc:'Soatni o‘rganamiz',tone:'orange',symbol:'◷',poster:'assets/illustrations/time-poster.png',items:[['1:00','Soat bir'],['3:00','Soat uch'],['6:00','Soat olti'],['9:00','Soat to‘qqiz'],['12:00','Soat o‘n ikki']].map((x,i)=>({id:String(i+1),label:x[0],name:x[1],say:x[1]}))},
  {id:'animals',name:'Hayvonlar',desc:'Hayvonlarni taniymiz',tone:'green',symbol:'♧',items:['Mushuk','It','Quyon','Sher','Fil','Panda','Kapalak','Baliq'].map((x,i)=>({id:String(i+1),label:'✿',name:x,say:x}))},
  {id:'fruits',name:'Mevalar',desc:'Mazali mevalar',tone:'pink',symbol:'◒',items:['Olma','Nok','Apelsin','Banan','Uzum','Tarvuz','Qulupnay','Kivi'].map((x,i)=>({id:String(i+1),label:'●',name:x,say:x}))},
  {id:'nature',name:'Tabiat',desc:'Atrofimizdagi tabiat',tone:'sky',symbol:'✿',poster:'assets/illustrations/nature-poster.png',items:['Quyosh','Bulut','Yomg‘ir','Kamalak','Tog‘','Daraxt','Gul','Daryo','Dengiz','O‘tloq','Olov','Qor','Shamol','O‘rmon','Oy va yulduzlar'].map((x,i)=>({id:String(i+1),label:'✿',name:x,say:x}))},
  {id:'transport',name:'Transport',desc:'Transport vositalari',tone:'yellow',symbol:'▰',poster:'assets/illustrations/transport-poster.png',items:['Avtomobil','Avtobus','Yong‘in mashinasi','Tez yordam','Politsiya mashinasi','Mototsikl','Velosiped','Samolyot','Kema','Poyezd','Vertolyot','Havo shari','Traktor','Samosval','Yaxta'].map((x,i)=>({id:String(i+1),label:'▰',name:x,say:x}))}
];

const posterExists = src => src ? `<img src="${src}" alt="${src.includes('body')?'Tana a’zolari':src.includes('time')?'Vaqt':src.includes('nature')?'Tabiat':'Transport'} crochet uslubidagi namuna">` : '';
function setNav(){document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.route===route));backBtn.classList.toggle('hidden',route==='home'||route==='lessons'||route==='quiz'||route==='ranking')}
function speak(text){ if(!('speechSynthesis' in window)){showToast('Bu brauzer ovoz funksiyasini qo‘llab-quvvatlamaydi.');return;} speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.lang='uz-UZ';u.rate=.85;u.pitch=1.05;speechSynthesis.speak(u); }
function showToast(t){toast.textContent=t;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2300)}
function yarnLabel(item){return `<div class="lesson-symbol">${item.label}</div>`}
function render(){setNav();if(route==='home')home();else if(route==='lessons')lessons();else if(route==='category')category();else if(route==='quiz')quiz();else if(route==='ranking')ranking();app.focus({preventScroll:true})}
function home(){app.innerHTML=`<section class="hero"><h2>O‘ynab o‘rganamiz! 🧶</h2><p>Harflar, sonlar, ranglar va boshqa ko‘plab mavzularni yumshoq crochet uslubida o‘rganing.</p><button class="hero-badge" id="startLessons">Darslarni boshlash →</button></section><h2 class="section-title">Darslar</h2><section class="category-grid">${categories.map(c=>`<button class="category-card ${c.tone}" data-category="${c.id}"><div class="category-visual">${c.poster?posterExists(c.poster):`<span class="yarn-symbol">${c.symbol}</span>`}</div><h3>${c.name}</h3><p>${c.desc}</p></button>`).join('')}</section>`;$('#startLessons').onclick=()=>go('lessons');bindCategories()}
function lessons(){app.innerHTML=`<div class="page-head"><div><h2>Darslar</h2><p>Kerakli bo‘limni tanlang.</p></div></div><section class="category-grid">${categories.map(c=>`<button class="category-card ${c.tone}" data-category="${c.id}"><div class="category-visual">${c.poster?posterExists(c.poster):`<span class="yarn-symbol">${c.symbol}</span>`}</div><h3>${c.name}</h3><p>${c.items.length} ta dars</p></button>`).join('')}</section>`;bindCategories()}
function bindCategories(){document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{selectedCategory=categories.find(c=>c.id===b.dataset.category);lessonIndex=0;go('category')})}
function category(){const c=selectedCategory;if(!c){go('lessons');return}const item=c.items[lessonIndex];const pct=((lessonIndex+1)/c.items.length)*100;app.innerHTML=`<div class="page-head"><div><h2>${c.name}</h2><p>${lessonIndex+1} / ${c.items.length}</p></div><button class="sound-btn" id="lessonSpeak">♪</button></div><div class="progress"><span style="width:${pct}%"></span></div>${c.poster&&lessonIndex===0?`<div class="poster">${posterExists(c.poster)}</div>`:''}<section class="lesson-card"><div class="lesson-image">${yarnLabel(item)}</div><h3 class="lesson-word">${item.name}</h3><p class="lesson-caption">Bosib tinglang va yodlab oling.</p><div class="lesson-actions"><button class="secondary" id="speakItem">♪ Tinglash</button><button class="primary" id="nextItem">Keyingi →</button></div></section><div class="pager"><button id="prevItem" ${lessonIndex===0?'disabled':''}>← Oldingi</button><button id="toQuiz">Quizga o‘tish</button></div>`;const doSpeak=()=>speak(item.say);$('#lessonSpeak').onclick=doSpeak;$('#speakItem').onclick=doSpeak;$('#nextItem').onclick=()=>{lessonIndex=(lessonIndex+1)%c.items.length;render()};$('#prevItem').onclick=()=>{if(lessonIndex>0){lessonIndex--;render()}};$('#toQuiz').onclick=()=>go('quiz')}
function quizPool(){return [
 {q:'A — qaysi so‘z?',visual:'A',answers:['Anor','Banan','Daraxt','Soat'],correct:0},
 {q:'5 soni qanday o‘qiladi?',visual:'5',answers:['Olti','Besh','To‘rt','Yetti'],correct:1},
 {q:'Qaysi rang yashil?',visual:'●',answers:['Qizil','Sariq','Yashil','Ko‘k'],correct:2},
 {q:'Uchburchakni toping.',visual:'△',answers:['Doira','Uchburchak','Kvadrat','Oval'],correct:1},
 {q:'Olma qaysi bo‘limga kiradi?',visual:'●',answers:['Mevalar','Vaqt','Transport','Shakllar'],correct:0},
 {q:'Soat 3:00 qanday aytiladi?',visual:'3:00',answers:['Soat bir','Soat uch','Soat olti','Soat to‘qqiz'],correct:1},
 {q:'Daraxt qaysi mavzuga mos?',visual:'✿',answers:['Tabiat','Sonlar','Vaqt','Transport'],correct:0},
 {q:'Samolyot nima?',visual:'▰',answers:['Meva','Hayvon','Transport','Rang'],correct:2},
 {q:'Qaysi biri tana a’zosi?',visual:'◉',answers:['Quloq','Kema','Uzum','Kamalak'],correct:0},
 {q:'10 soni qanday o‘qiladi?',visual:'10',answers:['To‘qqiz','O‘n','Yetti','Sakkiz'],correct:1},
 {q:'O‘ — qaysi so‘z?',visual:'O‘',answers:['O‘rik','Olma','Uzum','Paxta'],correct:0},
 {q:'Yulduz qaysi shakl?',visual:'★',answers:['Oval','Yulduz','Doira','Kvadrat'],correct:1}
 ]}
let quizState=null;
function quiz(){if(!quizState){const pool=quizPool().sort(()=>Math.random()-.5).slice(0,10);quizState={pool,index:0,score:0,answered:false}}const s=quizState;if(s.index>=s.pool.length){quizResult();return}const q=s.pool[s.index];app.innerHTML=`<section class="quiz-card"><div class="quiz-top"><div><b>Quiz</b><div class="progress" style="margin-top:8px;width:180px"><span style="width:${((s.index)/10)*100}%"></span></div></div><div class="score-pill">⭐ ${s.score}/10</div></div><div class="question-visual"><span class="yarn-symbol">${q.visual}</span></div><h2 class="question">${s.index+1}. ${q.q}</h2><div class="answers">${q.answers.map((a,i)=>`<button class="answer" data-answer="${i}">${a}</button>`).join('')}</div></section>`;document.querySelectorAll('[data-answer]').forEach(btn=>btn.onclick=()=>answerQuiz(+btn.dataset.answer))}
function answerQuiz(i){if(quizState.answered)return;quizState.answered=true;const q=quizState.pool[quizState.index];const buttons=document.querySelectorAll('[data-answer]');buttons.forEach((b,idx)=>{b.disabled=true;if(idx===q.correct)b.classList.add('correct');if(idx===i&&i!==q.correct)b.classList.add('wrong')});if(i===q.correct){quizState.score++;speak('To‘g‘ri! Ajoyib!')}else speak('Xato. Yana harakat qilamiz.');setTimeout(()=>{quizState.index++;quizState.answered=false;render()},850)}
function quizResult(){const s=quizState;const msg=s.score===10?'10/10 — Ajoyib!':s.score>=8?`${s.score}/10 — Juda yaxshi!`:`${s.score}/10 — Yana mashq qilamiz!`;app.innerHTML=`<section class="quiz-card quiz-result"><div class="trophy">🏆</div><h2>TABRIKLAYMIZ!</h2><div class="result-score">${s.score}/10</div><p>${msg}</p><div class="name-row"><input id="playerName" maxlength="24" placeholder="Ismingiz"><button id="saveRank" class="primary">Reytingga qo‘shish</button></div><button id="restartQuiz" class="secondary" style="width:100%;margin-top:14px">Yana o‘ynash</button></section>`;$('#saveRank').onclick=()=>saveRank(s.score);$('#restartQuiz').onclick=()=>{quizState=null;render()}}
function getRanks(){try{return JSON.parse(localStorage.getItem('bolajonlar-ranking')||'[]')}catch{return[]}}
function saveRank(score){const name=$('#playerName').value.trim();if(!name){showToast('Ismingizni kiriting.');return}const ranks=getRanks();ranks.push({name,score,date:Date.now()});ranks.sort((a,b)=>b.score-a.score||a.date-b.date);localStorage.setItem('bolajonlar-ranking',JSON.stringify(ranks.slice(0,10)));showToast('Natija saqlandi!');quizState=null;go('ranking')}
function ranking(){const ranks=getRanks();app.innerHTML=`<section class="ranking-card"><div class="page-head"><div><h2>Reyting</h2><p>Eng yuqori 10 ta natija shu qurilmada saqlanadi.</p></div></div>${ranks.length?`<div class="rank-list">${ranks.map((r,i)=>`<div class="rank-item"><span class="rank-medal">${['🥇','🥈','🥉'][i]||'⭐'}</span><b>${escapeHtml(r.name)}</b><span class="rank-score">${r.score}/10</span></div>`).join('')}</div>`:`<div class="empty">Hali natijalar yo‘q. Quizni ishlab birinchi bo‘ling!</div>`}</section>`}
function escapeHtml(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function go(next){route=next;render();window.scrollTo({top:0,behavior:'smooth'})}
backBtn.onclick=()=>{if(route==='category')go('lessons');else go('home')};
document.querySelectorAll('.nav-btn').forEach(b=>b.onclick=()=>{if(b.dataset.route==='quiz')quizState=null;go(b.dataset.route)});
$('#globalSoundBtn').onclick=()=>speak('Bolajonlar. O‘ynab o‘rganamiz!');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBar').hidden=false});$('#installBtn').onclick=async()=>{if(!deferredPrompt){showToast('O‘rnatish menyusini brauzer orqali oching.');return}deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBar').hidden=true};
window.addEventListener('appinstalled',()=>{$('#installBar').hidden=true});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
render();
