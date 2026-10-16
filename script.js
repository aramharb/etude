// ⚠️ MODIFIER ICI : numéros WhatsApp (format international, sans + ni espaces, ex: 21620123456)
const CONFIG = {
  1: { phone: "58078339", nameKey: "t1Name", subjects: ["mMath", "mCS"] },           // Aram
  2: { phone: "95718187", nameKey: "t2Name", subjects: ["mMath", "mPhys", "mMeca"] } // Yassine Bourbia
};
const CLASSES = ["c7", "c8", "c9", "c1", "c2", "c3", "cBac"];

const wa = (phone, text) => {
  let n = phone.replace(/\D/g, "");
  if (n.length === 8) n = "216" + n; // numéro tunisien local -> international
  return "https://wa.me/" + n + "?text=" + encodeURIComponent(text);
};

const I18N = {
  fr: {
    brand: "Cours Ingénieurs",
    badge: "🇹🇳 Cours particuliers en Tunisie",
    title: "Réussis tes études avec des <em>ingénieurs</em>",
    lead: "Maths, physique, mécanique et informatique : des explications claires, des exercices corrigés et un suivi personnalisé pour le collège, le lycée et le Bac.",
    ctaMain: "💬 Choisis ton professeur", ctaSub: "Voir les matières",
    stat1: "Ingénieurs", stat2: "Matières", stat3: "Suivi personnalisé",
    teamTitle: "Tes professeurs", teamSub: "Deux ingénieurs passionnés, une seule mission : ta réussite.",
    t1Name: "Aram", t1Role: "Ingénieur en informatique",
    t1Desc: "Algorithmique, programmation, bases de données et maths expliquées simplement avec des exemples concrets.",
    t2Name: "Yassine Bourbia", t2Role: "Ingénieur en mécatronique",
    t2Desc: "Des cours de maths, physique et mécanique avec une vraie vision d'ingénieur : méthode, rigueur et applications.",
    mMath: "📐 Mathématiques", mCS: "💻 Informatique", mPhys: "⚛️ Physique", mMeca: "⚙️ Mécanique",
    wa: "Contacter sur WhatsApp",
    subTitle: "Matières enseignées",
    sMath: "Mathématiques", sMathD: "Analyse, algèbre, géométrie, probabilités.",
    sPhys: "Physique", sPhysD: "Mécanique, électricité, optique, exercices type Bac.",
    sMeca: "Mécanique", sMecaD: "Génie mécanique et technologie (Bac technique).",
    sCS: "Informatique", sCSD: "Algorithmique, programmation, bases de données.",
    whyTitle: "Pourquoi nous choisir ?",
    w1: "Méthode claire", w1d: "On va à l'essentiel pour que tu comprennes vraiment, pas seulement par cœur.",
    w2: "Exercices corrigés", w2d: "Séries, devoirs et sujets de Bac corrigés pas à pas.",
    w3: "Suivi personnalisé", w3d: "Le rythme s'adapte à ton niveau, en groupe ou en individuel.",
    w4: "Présentiel ou en ligne", w4d: "Choisis la formule qui t'arrange, on s'organise ensemble.",
    lvlTitle: "Pour tous les niveaux",
    l1: "Collège", l2: "Lycée", l3: "Bac",
    locTitle: "Où nous trouver ?", locSub: "Cours en présentiel dans ces zones :",
    loc1: "Korba", loc1d: "Nabeul", loc2: "L'Aouina", loc2d: "Tunis",
    finTitle: "Prêt à progresser ?",
    finSub: "Écris-nous maintenant sur WhatsApp, la première prise de contact est gratuite.",
    t1Short: "💬 Aram", t2Short: "💬 Yassine",
    regTitle: "Inscription chez {t}", fName: "Ton nom", fClass: "Ta classe", fSubject: "Matière à étudier", fSend: "Envoyer sur WhatsApp",
    c7: "7ème année", c8: "8ème année", c9: "9ème année", c1: "1ère année secondaire", c2: "2ème année secondaire", c3: "3ème année secondaire", cBac: "Bac",
    msg: "Bonjour {t}, je m'appelle {n}, je suis en {c} et je souhaite des cours de {s}."
  },
  en: {
    brand: "Engineer Tutors",
    badge: "🇹🇳 Private tutoring in Tunisia",
    title: "Ace your studies with <em>engineers</em>",
    lead: "Math, physics, mechanics and computer science: clear explanations, solved exercises and personal follow-up for middle school, high school and the Baccalaureate.",
    ctaMain: "💬 Pick your tutor", ctaSub: "See subjects",
    stat1: "Engineers", stat2: "Subjects", stat3: "Personal follow-up",
    teamTitle: "Your tutors", teamSub: "Two passionate engineers, one mission: your success.",
    t1Name: "Aram", t1Role: "Computer Engineer",
    t1Desc: "Algorithms, programming, databases and math explained simply with real examples.",
    t2Name: "Yassine Bourbia", t2Role: "Mechatronics Engineer",
    t2Desc: "Math, physics and mechanics lessons with a true engineer's mindset: method, rigor and real applications.",
    mMath: "📐 Mathematics", mCS: "💻 Computer Science", mPhys: "⚛️ Physics", mMeca: "⚙️ Mechanics",
    wa: "Contact on WhatsApp",
    subTitle: "Subjects we teach",
    sMath: "Mathematics", sMathD: "Calculus, algebra, geometry, probability.",
    sPhys: "Physics", sPhysD: "Mechanics, electricity, optics, exam-style exercises.",
    sMeca: "Mechanics", sMecaD: "Mechanical engineering and technology (technical Bac).",
    sCS: "Computer Science", sCSD: "Algorithms, programming, databases.",
    whyTitle: "Why choose us?",
    w1: "Clear method", w1d: "We focus on what matters so you truly understand, not just memorize.",
    w2: "Solved exercises", w2d: "Worksheets, homework and exam papers solved step by step.",
    w3: "Personal follow-up", w3d: "The pace adapts to your level, in group or one-on-one.",
    w4: "In person or online", w4d: "Pick the format that suits you, we'll organize together.",
    lvlTitle: "For every level",
    l1: "Middle school", l2: "High school", l3: "Baccalaureate",
    locTitle: "Where to find us", locSub: "In-person lessons in these areas:",
    loc1: "Korba", loc1d: "Nabeul", loc2: "L'Aouina", loc2d: "Tunis",
    finTitle: "Ready to improve?",
    finSub: "Message us now on WhatsApp, the first contact is free.",
    t1Short: "💬 Aram", t2Short: "💬 Yassine",
    regTitle: "Sign up with {t}", fName: "Your name", fClass: "Your grade", fSubject: "Subject to study", fSend: "Send on WhatsApp",
    c7: "7th grade", c8: "8th grade", c9: "9th grade", c1: "1st year high school", c2: "2nd year high school", c3: "3rd year high school", cBac: "Baccalaureate",
    msg: "Hello {t}, my name is {n}, I'm in {c} and I'd like lessons in {s}."
  },
  ar: {
    brand: "دروس المهندسين",
    badge: "🇹🇳 دروس خصوصية في تونس",
    title: "انجح في دراستك مع <em>مهندسين</em>",
    lead: "رياضيات، فيزياء، ميكانيك وإعلامية: شرح واضح، تمارين مصححة ومتابعة شخصية للإعدادي والثانوي والباكالوريا.",
    ctaMain: "💬 اختار أستاذك", ctaSub: "شوف المواد",
    stat1: "مهندسين", stat2: "مواد", stat3: "متابعة شخصية",
    teamTitle: "أساتذتك", teamSub: "مهندسين اثنين، مهمة وحدة: نجاحك.",
    t1Name: "آرام", t1Role: "مهندس إعلامية",
    t1Desc: "خوارزميات، برمجة، قواعد بيانات ورياضيات بشرح بسيط وأمثلة من الواقع.",
    t2Name: "ياسين بوربية",t2Role: "مهندس ميكاترونيك",
    t2Desc: "دروس في الرياضيات والفيزياء والميكانيك بعقلية مهندس: منهجية، دقة وتطبيقات.",
    mMath: "📐 رياضيات", mCS: "💻 إعلامية", mPhys: "⚛️ فيزياء", mMeca: "⚙️ ميكانيك",
    wa: "تواصل عبر واتساب",
    subTitle: "المواد اللي نقرّيوها",
    sMath: "الرياضيات", sMathD: "تحليل، جبر، هندسة، احتمالات.",
    sPhys: "الفيزياء", sPhysD: "ميكانيك، كهرباء، بصريات، تمارين على طريقة الباك.",
    sMeca: "الميكانيك", sMecaD: "هندسة ميكانيكية وتكنولوجيا (باك تقني).",
    sCS: "الإعلامية", sCSD: "خوارزميات، برمجة، قواعد بيانات.",
    whyTitle: "علاش تختارنا؟",
    w1: "منهجية واضحة", w1d: "نمشيو للأهم باش تفهم بالحق موش تحفظ برك.",
    w2: "تمارين مصححة", w2d: "سلاسل، فروض وامتحانات باك مصححة خطوة بخطوة.",
    w3: "متابعة شخصية", w3d: "الإيقاع يتأقلم مع مستواك، في مجموعة أو فردي.",
    w4: "حضوري أو عن بعد", w4d: "اختار الطريقة اللي تناسبك ونتفاهمو.",
    lvlTitle: "لكل المستويات",
    l1: "إعدادي", l2: "ثانوي", l3: "باكالوريا",
    locTitle: "وين تلقانا؟", locSub: "دروس حضورية في المناطق هذي:",
    loc1: "قربة", loc1d: "نابل", loc2: "العوينة", loc2d: "تونس",
    finTitle: "حاضر تتحسن؟",
    finSub: "اكتبلنا توا على واتساب، أول تواصل مجاني.",
    t1Short: "💬 آرام", t2Short: "💬 ياسين",
    regTitle: "التسجيل عند {t}", fName: "اسمك", fClass: "قسمك", fSubject: "المادة اللي تحب تقراها", fSend: "ابعث عبر واتساب",
    c7: "السابعة أساسي", c8: "الثامنة أساسي", c9: "التاسعة أساسي", c1: "الأولى ثانوي", c2: "الثانية ثانوي", c3: "الثالثة ثانوي", cBac: "باكالوريا",
    msg: "مرحبا {t}، اسمي {n}، نقرا في {c} ونحب نتعلم {s}."
  }
};

let currentLang = "fr", currentTeacher = null;
const dlg = document.getElementById("regDialog");
const fClass = document.getElementById("fClass"), fSubject = document.getElementById("fSubject");

// (re)build form texts and options in the current language, keeping the selection
function fillForm() {
  const t = I18N[currentLang], cfg = CONFIG[currentTeacher];
  const opts = (sel, keys) => {
    const prev = sel.selectedIndex;
    sel.innerHTML = "";
    keys.forEach(k => sel.add(new Option(t[k], k)));
    sel.selectedIndex = Math.max(prev, 0);
  };
  opts(fClass, CLASSES);
  opts(fSubject, cfg.subjects);
  document.getElementById("regTitle").textContent = t.regTitle.replace("{t}", t[cfg.nameKey]);
}

document.querySelectorAll("[data-teacher]").forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  currentTeacher = a.dataset.teacher;
  fClass.selectedIndex = -1; fSubject.selectedIndex = -1;
  fillForm();
  dlg.showModal();
}));
document.getElementById("regClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => { currentTeacher = null; });

document.getElementById("regForm").addEventListener("submit", e => {
  e.preventDefault();
  const t = I18N[currentLang], cfg = CONFIG[currentTeacher];
  const text = t.msg
    .replace("{t}", t[cfg.nameKey])
    .replace("{n}", document.getElementById("fName").value.trim())
    .replace("{c}", t[fClass.value])
    .replace("{s}", t[fSubject.value].replace(/^\S+\s/, ""));
  window.open(wa(cfg.phone, text), "_blank", "noopener");
  dlg.close();
});

function setLang(lang) {
  currentLang = lang;
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t[el.dataset.i18nHtml]; });
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  if (currentTeacher) fillForm();
  document.title = t.brand + " – " + t.badge.replace(/^\S+\s/, "");
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
setLang(I18N[saved] ? saved : "fr");
document.getElementById("year").textContent = new Date().getFullYear();

// scroll reveal
document.querySelectorAll(".teacher,.card,.why,.pills span,section h2").forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
