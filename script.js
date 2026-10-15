// ⚠️ MODIFIER ICI : numéros WhatsApp (format international, sans + ni espaces, ex: 21620123456)
const CONFIG = {
  teacher1: { phone: " 58078339" },   // Aram
  teacher2: { phone: "95718187" }    // Yassine Bourbia
};

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
    t2Name: "Yassine", t2Role: "Ingénieur en mécatronique",
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
    msg1: "Bonjour Aram, je suis intéressé par vos cours particuliers.",
    msg2: "Bonjour Yassine, je suis intéressé par vos cours particuliers."
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
    t2Name: "Yassine", t2Role: "Mechatronics Engineer",
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
    msg1: "Hello Aram, I'm interested in your private lessons.",
    msg2: "Hello Yassine, I'm interested in your private lessons."
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
    t2Name: "ياسين ", t2Role: "مهندس ميكاترونيك",
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
    msg1: "مرحبا آرام، أنا مهتم بالدروس الخصوصية.",
    msg2: "مرحبا ياسين، أنا مهتم بالدروس الخصوصية."
  }
};

function setLang(lang) {
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t[el.dataset.i18nHtml]; });
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  const l1 = wa(CONFIG.teacher1.phone, t.msg1), l2 = wa(CONFIG.teacher2.phone, t.msg2);
  ["wa1", "wa1b"].forEach(id => document.getElementById(id).href = l1);
  ["wa2", "wa2b"].forEach(id => document.getElementById(id).href = l2);
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
