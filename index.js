const startbut = document.getElementById("start");
const equ = document.getElementById("equinox");
const trys = document.getElementById("trys");
const timer = document.getElementById("timer");
const daycat = document.getElementById("daycat");
const nightcat = document.getElementById("nightcat");
const rel = document.getElementById("right_or_wrong");
const the_qs = document.getElementById("thqs");
const qs_section = document.getElementById("qs");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const dayc = document.getElementById("day_char");
const nightc = document.getElementById("night_char");
let ran1 = Math.floor(Math.random() * 4);
let ran2 = Math.floor(Math.random() * 4);
let ran3 = Math.floor(Math.random() * 4);
let ran4 = Math.floor(Math.random() * 4);
let yes = new Audio("sounds/freesound_community-nice-sound-effect-95595.mp3");
let no = new Audio("sounds/eritnhut1992-buzzer-or-wrong-answer-20582.mp3");

let catPosition = -100;
function check() {
  if (ran1 == ran2 || ran1 == ran3 || ran1 == ran4) {
    ran1 = Math.floor(Math.random() * 4);
    check();
  } else if (ran2 == ran3 || ran2 == ran4) {
    ran2 = Math.floor(Math.random() * 4);
    check();
  } else if (ran3 == ran4) {
    ran3 = Math.floor(Math.random() * 4);
    check();
  }
}
check();

let level = 0;
let save = [];

let time = 0;
let hours = 0;
let old;
let questionsList = [
  "Who built the great piramed of Giza",
  "who was the famous female pharaoh of the 18th Dtnasty",
  "What was the capital of ancient Egypt during the Old Kingdom",
  "Who was the first pharaoh of a unified Egypt",
  "Which pharaoh's tomb was discovered by howard carten in 1922?",
  "What was the writing system used by ancient Egyptians called",
  "Who was the last active ruler of the Ptolemaic Kingdom of Egypt?",
  "Which ancient Egyptian pharaoh is famous for the battle of Kadesh",
];
let answerList = [
  "Khufu",
  "Hatshepsut",
  "Memphis",
  "Narmer",
  "Tutankhamun",
  "Hieroglyphics",
  "Cleopatra VII",
  "Ramses II",
];
let choesesList = [
  ["Ramses II", "Khufu", "Tutankhamun", "Djoser"],
  ["Cleopatra VII", "Nefertiti", "Hatshepsut", "Nefertari"],
  ["Thebes", "Alexandria", "Memphis", "Luxor"],
  ["Khafre", "Narmer", "Ramses II", "Akhenaten"],
  ["Tutankhamun", "Khufu", "Thutmose III", "Seti I"],
  ["Cuneiform", "Hieroglyphics", "Latin", "Phoenician"],
  ["Arsinoe II", "Hatshepsut", "Nefertiti", "Cleopatra VII"],
  ["Tutankhamun", "Amenhotep III", "Ramses II", "Djoser"],
];
function checkrightanswer1() {
  thetime();
  save[level - 1] = c1.textContent;
  qs_section.style.display = "none";
  rel.style.display = "block";

  if (c1.textContent == answerList[level - 1]) {
    rel.textContent = "Correct";
    rel.style.color = "green";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
 catPosition += 150;
    dayc.style.right = catPosition + "px";
    yes.play();
  } else {
    rel.textContent = "Wrong";
    rel.style.color = "red";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
    no.play();
  }

  console.log("User answer:", c1.textContent);
  console.log("Correct answer:", answerList[level - 1]);
  console.log("Level:", level);
}
function checkrightanswer2() {
  thetime();

  save[level - 1] = c2.textContent;
  rel.style.display = "block";

  qs_section.style.display = "none";
  if (c2.textContent == answerList[level - 1]) {
    rel.textContent = "Correct";
    rel.style.color = "green";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
 catPosition += 130;
    dayc.style.right = catPosition + "px";
        yes.play();

  } else {
    rel.textContent = "Wrong";
    rel.style.color = "red";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
    no.play();
  }
  console.log("User answer:", c2.textContent);
  console.log("Correct answer:", answerList[level - 1]);
  console.log("Level:", level);
}
function checkrightanswer3() {
  thetime();

  save[level - 1] = c3.textContent;
  rel.style.display = "block";

  qs_section.style.display = "none";
  if (c3.textContent == answerList[level - 1]) {
    rel.textContent = "Correct";
    rel.style.color = "green";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
 catPosition += 140;
    dayc.style.right = catPosition + "px";
        yes.play();

  } else {
    rel.textContent = "Wrong";
    rel.style.color = "red";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
    no.play();
  }
  console.log("User answer:", c3.textContent);
  console.log("Correct answer:", answerList[level - 1]);
  console.log("Level:", level);
}
function checkrightanswer4() {
  thetime();

  save[level - 1] = c4.textContent;
  rel.style.display = "block";

  qs_section.style.display = "none";
  if (c4.textContent == answerList[level - 1]) {
    rel.textContent = "Correct";
    rel.style.color = "green";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
 catPosition += 130;
    dayc.style.right = catPosition + "px";
        yes.play();

  } else {
    rel.textContent = "Wrong";
    rel.style.color = "red";
    setTimeout(() => {
      rel.style.display = "none";
    }, 2000);
    no.play();
  }

  console.log(save);
  console.log("User answer:", c4.textContent);
  console.log("Correct answer:", answerList[level - 1]);
  console.log("Level:", level);
}

function thetime() {
  let alltimer = setInterval(() => {
    if (time == 60) {
      hours++;

      time = 0;
      if (
        (hours == 3 ||
          hours == 6 ||
          hours == 9 ||
          hours == 12 ||
          hours == 15 ||
          hours == 18 ||
          hours == 21 ||
          hours == 23) &&
        time == 0
      ) {
        clearInterval(alltimer);
        the_qs.textContent = questionsList[level];
        level++;
        c1.textContent = choesesList[level - 1][ran1];
        c2.textContent = choesesList[level - 1][ran2];
        c3.textContent = choesesList[level - 1][ran3];
        c4.textContent = choesesList[level - 1][ran4];
        qs_section.style.display = "flex";
        console.log(level);
      }
      timer.textContent = time;
    }

    if (time == 0) {
      timer.textContent = `${hours}:${time}0`;
    } else {
      timer.textContent = `${hours}:${time}`;
    }

    time = time + 10;
  }, 150);
}

startbut.onclick = function () {
  startbut.style.display = "none";
  equ.style.display = "none";
  daycat.style.display = "none";
  nightcat.style.display = "none";
  rel.style.display = "none";
  trys.style.display = "block";
  timer.style.display = "block";
  dayc.style.display = "block";
  nightc.style.display = "block";
    setTimeout(() => {
        catPosition = 90;
        dayc.style.right = catPosition + "px";
    }, 10);

    thetime();
};
