const WIDTH = 1280;
const HEIGHT = 720;
const PLAYER_SPEED = 165;
const GAME_TIME_LIMIT = 180;
const BOSS_INTRO_TIME = 5;

const DEPLOY_ZONE = { x: 32, y: 600, w: 160, h: 160 };
const SPEED_BUTTON = { x: 1074, y: 2, w: 90, h: 90 };
const PAUSE_BUTTON = { x: 1166, y: 2, w: 90, h: 90 };
const PLAYER_SIZE = { w: 28, h: 28 };
const DRAWER_INTERACT_ZONE = { x: 1020, y: 285, w: 255, h: 205 };
const WELCOME_TEA_ZONE = { x: 86, y: 345, w: 325, h: 175 };
const WELCOME_DAD_DREAM_ZONE = { x: 620, y: 210, w: 365, h: 205 };
const DREAM_BUBBLE_CENTER = { x: 810, y: 300 };
const DRAWER_LAYER_X = 455;
const DRAWER_LAYER_Y = 313;
const DRAWER_LAYER_MAX_OFFSET = 120;
const WALLET_CENTER = { x: 850, y: 700 };
const MONEY_BILL_START = { x: DRAWER_LAYER_X + 250, y: DRAWER_LAYER_Y + 92 };
const WAKE_GRACE_TIME = 1.5;
const DREAM_BUBBLE_TIME = 2.05;
const DREAM_BUBBLE_REVEAL_START = 0.54;
const DREAM_CROSSFADE_START = 0.34;
const DREAM_CROSSFADE_END = 0.92;
const RESTART_TRANSITION_TIME = 0.78;
const WELCOME_PICK_TOTAL_TIME = 1.8;
const FAIL_INTRO_TIME = 0.65;
const FAIL_HINT_DELAY = 1.15;
const FAIL_ANIM_TIME = 2.6;
const COMPLETE_ENTER_TIME = 0.9;
const COMPLETE_HOLD_TIME = 1.0;
const COMPLETE_EXIT_TIME = 0.9;

const IMAGE_SIZES = {
  wei: { w: 108, h: 144 },
  weiStart: { w: 134, h: 220 },
  dad: { w: 330, h: 143 },
  pillowZ: { w: 42, h: 150 },
  pillowX: { w: 76, h: 78 },
  pillowC: { w: 78, h: 68 },
  bossIntro: { w: 370, h: 119 },
  speedButton: { w: 90, h: 90 },
  pauseButton: { w: 90, h: 90 },
  continueButton: { w: 98, h: 98 },
  costBar: { w: 192, h: 90 },
  weikaCard: { w: 127, h: 139 },
  deploy: { w: 160, h: 160 },
  wallet: { w: 140, h: 184 },
  takeButton: { w: 92, h: 119 },
  moneyBill: { w: 234, h: 234 },
  complete: { w: 1280, h: 599 },
  failSay: { w: 1280, h: 720 },
  welcomeLoop: { w: 241, h: 293 },
};

const PLAYER_START_MIDBOTTOM = { x: 88, y: 688 };
const START_ANIM_OFFSET = { x: -4.5, y: 6.2 };
const IDLE_DRAW_OFFSET = { x: -0.5, y: 2.2 };
const WALK_DRAW_OFFSET = { x: -0.5, y: 2.2 };
const PLAYER_INTRO_DURATION = 1.00;
const WALK_FRAME_COUNT = 9;
const WALK_FRAME_TIME = 0.085;
const LOCK_WALK_FRAME_INDEX = null;
const DAD_PRESSURE_MIN = 25;
const DAD_PRESSURE_RED_LINE = 75;
const STAGE_RULES = {
  bedroom_before: { pressureFloor: 25, movePressure: 1, eventMin: 8, eventMax: 14 },
  drawer_closeup: { pressureFloor: 30, movePressure: 1, eventMin: 7, eventMax: 11 },
  bedroom_after: { pressureFloor: 40, movePressure: 1.35, eventMin: 5, eventMax: 9 },
};
const WALK_FRAME_ANCHOR_OFFSETS = [
  { x: 1.5, y: 4 },
  { x: 1.5, y: 4 },
  { x: 1, y: 4 },
  { x: 0, y: 2 },
  { x: -0.5, y: 0 },
  { x: -0.5, y: 2 },
  { x: 0.5, y: 4 },
  { x: 1, y: 3 },
  { x: 1.5, y: 3 },
];
const DRAWER_JAM_POINTS = [25, 50, 75];
const DRAWER_JAM_WAIT = 0.8;
const TAKE_DURATIONS = {
  1: 1.15,
  5: 2.6,
  10: 4.4,
};

const TAKE_BUTTONS = [
  { amount: 1, key: "take1", x: 510, y: 506 },
  { amount: 5, key: "take5", x: 660, y: 506 },
  { amount: 10, key: "take10", x: 810, y: 506 },
];

const DRAWER_PILLOW_PLACEMENTS = {
  pillowZ: { x: 1120, y: 150, angle: -20, scale: 1.2, size: IMAGE_SIZES.pillowZ },
  pillowX: { x: 1120, y: 360, angle: -4, scale: 1.3, size: IMAGE_SIZES.pillowX },
  pillowC: { x: 1120, y: 530, angle: -4, scale: 1.3, size: IMAGE_SIZES.pillowC },
};

const PILLOW_ITEMS = [
  { id: "Z", key: "pillowZ", x: 835, y: 555, angle: 22, size: IMAGE_SIZES.pillowZ, zone: { x: 785, y: 490, w: 100, h: 130 }, drop: 35 },
  { id: "X", key: "pillowX", x: 925, y: 512, angle: 22, size: IMAGE_SIZES.pillowX, zone: { x: 875, y: 462, w: 110, h: 100 }, drop: 60 },
  { id: "C", key: "pillowC", x: 1015, y: 470, angle: 22, size: IMAGE_SIZES.pillowC, zone: { x: 960, y: 420, w: 115, h: 105 }, drop: 100 },
];

const TEXT = {
  deployMessage: "\u62d6\u52a8\u53f3\u4e0b\u89d2\u89d2\u8272\u5361\u5230\u5de6\u4e0b\u89d2\u9ad8\u53f0\uff0c\u5f00\u59cb\u884c\u52a8",
  deployHint: "\u8bf7\u5c06\u7ef4\u7ef4\u7f8e\u90e8\u7f72\u5728\u5de6\u4e0b\u89d2\u9ad8\u53f0\u4e0a",
  deploySubHint: "\u62d6\u52a8\u53f3\u4e0b\u89d2\u89d2\u8272\u5361\u5230\u5de6\u4e0b\u89d2\u9ad8\u53f0\uff0c\u5f00\u59cb\u884c\u52a8",
  deployed: "\u90e8\u7f72\u5b8c\u6210\u3002\u7528 WASD \u6216\u65b9\u5411\u952e\u8f7b\u58f0\u79fb\u52a8",
  paused: "\u6682\u505c\u4e2d",
  door: "\u95e8\u53e3\u533a\u57df\uff1a\u540e\u9762\u63a5\u5165\u62ff\u94b1\u548c\u9003\u79bb\u6210\u529f\u903b\u8f91",
  drawerExit: "\u5df2\u62ff\u5230\u94b1\uff0c\u56de\u5230\u95e8\u53e3\u64a4\u79bb",
  success: "\u64a4\u79bb\u6210\u529f",
  gameOver: "\u7238\u7238\u9192\u4e86",
  pillowUsed: "\u62b1\u6795\u751f\u6548\uff0c\u7238\u7238\u70e6\u8e81\u5ea6\u4e0b\u964d",
};

const TUTORIAL_TEXT = {
  move: "\u7528 WASD \u6216\u65b9\u5411\u952e\u79fb\u52a8",
  pillow: "\u70b9\u51fb\u62b1\u6795\u4f7f\u7528",
  drawer: "\u6309\u4f4f E \u5f00\u5173\u67dc\u95e8",
};

const DOOR_EXIT_POINTS = [
  [109, 656],
  [95, 459],
  [0, 700],
];

const OBSTACLE_POLYGONS = [
  [
    [0, 699],
    [104, 657],
    [67, 1],
    [0, 0],
  ],
  [
    [70, 0],
    [414, 0],
    [428, 318],
    [360, 333],
    [360, 410],
    [98, 488],
  ],
  [
    [690, 140],
    [1095, 140],
    [1095, 300],
    [1064, 309],
    [1054, 438],
    [755, 557],
    [369, 463],
    [365, 333],
    [690, 276],
  ],
  [
    [1125, 200],
    [1253, 204],
    [1280, 488],
    [1055, 462],
    [1063, 307],
    [1124, 297],
  ],
];

const ACTIVE_OBSTACLE_POLYGON_INDICES = [0, 1, 2, 3];

const FLOOR_ZONES = [
  {
    name: "Pillow Zone",
    points: [
      [1015, 458],
      [1165, 493],
      [992, 589],
      [798, 552],
    ],
    noiseMultiplier: 0.45,
  },
  {
    name: "Right Carpet",
    points: [
      [1015, 457],
      [1278, 511],
      [1110, 638],
      [759, 558],
    ],
    noiseMultiplier: 0.52,
  },
  {
    name: "Carpet",
    points: [
      [105, 489],
      [322, 444],
      [899, 589],
      [697, 691],
    ],
    noiseMultiplier: 0.55,
  },
  {
    name: "Wood Floor",
    points: [
      [0, 64],
      [1280, 64],
      [1280, 720],
      [0, 720],
    ],
    noiseMultiplier: 1.85,
  },
];

const ASSETS = {
  bedroom: "pic/bedroom.png",
  weiIdle: "pic/wei_idle.gif",
  weiWalk: "pic/web/wei_walk_last.png",
  weiIdleBack: "pic/wei_idle_back.gif",
  weiWalkBack: "pic/wei_walk_back.gif",
  weiStart: "pic/start.gif",
  dadSleeping: "pic/sleeping.gif",
  dadResleeping: "pic/resleeping.gif",
  pillowZ: "pic/hoederer_weapon.png",
  pillowX: "pic/U_chan.png",
  pillowC: "pic/Ines_pillow.png",
  bossIntro: "pic/introduce.png",
  topStats: "pic/xuetiao.png",
  speed2x: "pic/2beisu.png",
  speed1x: "pic/yibeisu.png",
  pauseButton: "pic/zanting.png",
  continueButton: "pic/jixu.png",
  costBar: "pic/feiyongtiao.png",
  weikaCard: "pic/weika.png",
  deployIdle: "pic/baitai.png",
  deployActive: "pic/gaotai.png",
  drawerCloseupBg: "pic/drawer_closeup_bg.png",
  drawerInner: "pic/drawer_inner.png",
  drawerFront: "pic/drawer_front.png",
  wallet: "pic/qianbao.png",
  moneyBill: "pic/1.png",
  take1: "pic/1yuan.png",
  take5: "pic/5yuan.png",
  take10: "pic/10yuan.png",
  takeStop: "pic/stop.png",
  complete: "pic/complete.png",
  failSay: "pic/failsay.png",
  welcomeLoop: "pic/allright2.gif",
  welcomeLeftLoop: "pic/allright_left.gif",
  welcomeDrawerLoop: "pic/allright.gif",
  welcomePickLoop: "pic/pick.gif",
  welcomeTeaLoop: "pic/drinktea.gif",
};

const AUDIO = {
  welcomeMusic: "music/welcome.mp3",
  gameMusic: "music/game1.mp3",
  drawerJam: "voice/drawer.wav",
  drawerMove: "voice/open_drawer.wav",
  drawerClose: "voice/drawer-close.wav",
  pillowHit: "voice/pillow-hit.wav",
  dadTurn: "voice/hoederer/aen.mp3",
  failVoice: "voice/failed.wav",
  successVoice: "voice/completed.wav",
  dadDreams: ["voice/hoederer/yume_1.mp3", "voice/hoederer/yume_2.mp3", "voice/hoederer/yume_4.mp3", "voice/hoederer/yume_5.mp3"],
  money: {
    1: "voice/1yuan.mp3",
    2: "voice/2yuan.mp3",
    3: "voice/3yuan.mp3",
    4: "voice/4yuan.mp3",
    5: "voice/5yuan.mp3",
    6: "voice/6yuan.mp3",
    10: "voice/10yuan.mp3",
  },
};

const DREAM_VIDEOS = ["video/xizhilang.mp4", "video/dabaojian.mp4"];

const canvas = document.querySelector("#game");
let ctx = canvas.getContext("2d");
const pillowOverlayCanvas = document.createElement("canvas");
pillowOverlayCanvas.width = WIDTH;
pillowOverlayCanvas.height = HEIGHT;
pillowOverlayCanvas.className = "pillow-overlay";
const pillowOverlayCtx = pillowOverlayCanvas.getContext("2d");
document.body.appendChild(pillowOverlayCanvas);
const failBackdropCanvas = document.createElement("canvas");
failBackdropCanvas.width = WIDTH;
failBackdropCanvas.height = HEIGHT;
const failBackdropCtx = failBackdropCanvas.getContext("2d");
const introGif = document.createElement("img");
introGif.className = "intro-gif";
introGif.alt = "";
document.body.appendChild(introGif);
const idleGif = document.createElement("img");
idleGif.className = "idle-gif";
idleGif.alt = "";
document.body.appendChild(idleGif);
const walkBackGif = document.createElement("img");
walkBackGif.className = "walk-back-gif";
walkBackGif.alt = "";
document.body.appendChild(walkBackGif);
const dadGif = document.createElement("img");
dadGif.className = "dad-gif";
dadGif.alt = "";
document.body.appendChild(dadGif);
const welcomeGif = document.createElement("img");
welcomeGif.className = "welcome-gif";
welcomeGif.alt = "";
document.body.appendChild(welcomeGif);
const welcomeFrame = document.createElement("div");
welcomeFrame.className = "welcome-frame";
for (let i = 0; i < 8; i += 1) welcomeFrame.appendChild(document.createElement("span"));
document.body.appendChild(welcomeFrame);
const welcomeStartButton = document.createElement("button");
welcomeStartButton.className = "welcome-start";
welcomeStartButton.type = "button";
welcomeStartButton.textContent = "开始行动";
document.body.appendChild(welcomeStartButton);
const deployHintText = document.createElement("div");
deployHintText.className = "deploy-hint";
deployHintText.textContent = TEXT.deployHint;
document.body.appendChild(deployHintText);
const tutorialHintText = document.createElement("div");
tutorialHintText.className = "tutorial-hint";
document.body.appendChild(tutorialHintText);
const summaryHomeButton = document.createElement("button");
summaryHomeButton.className = "summary-home";
summaryHomeButton.type = "button";
summaryHomeButton.textContent = "回到主界面";
document.body.appendChild(summaryHomeButton);
const dreamOverlay = document.createElement("div");
dreamOverlay.className = "dream-overlay";
const dreamBubbleFx = document.createElement("div");
dreamBubbleFx.className = "dream-bubble-fx";
const dreamStage = document.createElement("div");
dreamStage.className = "dream-stage";
const dreamBackdropVideo = document.createElement("video");
dreamBackdropVideo.className = "dream-backdrop-video";
dreamBackdropVideo.playsInline = true;
dreamBackdropVideo.autoplay = true;
dreamBackdropVideo.muted = true;
dreamBackdropVideo.controls = false;
const dreamVideo = document.createElement("video");
dreamVideo.className = "dream-main-video";
dreamVideo.playsInline = true;
dreamVideo.autoplay = true;
dreamVideo.muted = false;
dreamVideo.controls = false;
dreamVideo.volume = 0.95;
dreamVideo.addEventListener("loadedmetadata", fitDreamStageToVideo);
const dreamSound = document.createElement("button");
dreamSound.className = "dream-sound";
dreamSound.type = "button";
dreamSound.textContent = "♪";
const dreamClose = document.createElement("button");
dreamClose.className = "dream-close";
dreamClose.type = "button";
dreamClose.textContent = "x";
dreamOverlay.appendChild(dreamBackdropVideo);
dreamStage.appendChild(dreamVideo);
dreamStage.appendChild(dreamSound);
dreamStage.appendChild(dreamClose);
dreamOverlay.appendChild(dreamStage);
document.body.appendChild(dreamOverlay);
document.body.appendChild(dreamBubbleFx);
const images = {};
const walkFrames = [];
const sounds = {};
const keys = {};
let lastTime = performance.now();
let audioUnlocked = false;

dreamVideo.addEventListener("ended", () => {
  if (!state.dreamOpen) return;
  closeDreamOverlay({ ended: true });
});

dreamClose.addEventListener("click", () => {
  closeDreamOverlay();
});

dreamSound.addEventListener("click", () => {
  setDreamMuted(!dreamVideo.muted);
  dreamVideo.play().catch(() => {});
});

welcomeStartButton.addEventListener("click", () => {
  unlockAudio();
  if (state.gameState === "WELCOME" && !state.dreamOpen && !state.dreamTransitionActive) enterDeployScreen();
});

summaryHomeButton.addEventListener("click", () => {
  if (state.gameState === "SUCCESS_SUMMARY") resetGame();
});

const state = {
  gameState: "WELCOME",
  viewMode: "bedroom_before",
  welcomeTimer: 0,
  welcomeChild: { x: 640, y: 700, scale: 0.95 },
  welcomeFacing: "right",
  welcomeDragging: false,
  welcomeDragOffset: { x: 0, y: 0 },
  welcomeWasInDrawerZone: false,
  welcomePickTimer: 0,
  welcomePickNonce: 0,
  dreamOpen: false,
  dreamIndex: 0,
  dreamNextIndex: 0,
  dreamRetriggerTimer: 0,
  dreamSequenceDone: false,
  dreamArmed: true,
  dreamTransitionActive: false,
  dreamTransitionTimer: 0,
  dreamTransitionVideoReady: false,
  dreamMuted: false,
  player: { x: 74, y: 660, w: PLAYER_SIZE.w, h: PLAYER_SIZE.h },
  playerMoving: false,
  playerDeployed: false,
  playerIntroActive: false,
  playerIntroTimer: 0,
  walkFrameTimer: 0,
  deployDragging: false,
  deployDragPos: { x: 88, y: 688 },
  noise: 0,
  noiseVelocity: 0,
  dadPressure: 25,
  sleepDepth: 100,
  sleepSensitivity: 1,
  dadPose: "sleeping",
  eventTimer: 10,
  eventFlash: 0,
  dangerWindowTimer: 0,
  dangerWindowMultiplier: 1,
  dangerWindowLabel: "",
  gameTimer: GAME_TIME_LIMIT,
  bossIntroTimer: BOSS_INTRO_TIME,
  speedMultiplier: 1,
  paused: false,
  moveHintDone: false,
  pillowHintDone: false,
  drawerHintDone: false,
  message: TEXT.deployMessage,
  messageTimer: 4,
  drawerProgress: 0,
  drawerOpen: false,
  drawerActive: false,
  drawerMode: "opening",
  drawerIsPulling: false,
  drawerJammed: false,
  drawerJamIndex: 0,
  drawerJamWaitTimer: 0,
  hardPullFeedback: 0,
  takeActive: false,
  takeAmount: 0,
  takeProgress: 0,
  moneyTakenTotal: 0,
  moneyPopups: [],
  moneyFlights: [],
  wakeGraceTimer: 0,
  successTimer: 0,
  failTimer: 0,
  summaryTimer: 0,
  restartTransitionTimer: 0,
  restartTransitionSwapped: false,
  usedPillows: new Set(),
  usedPillowLabels: [],
  pillowFlights: [],
};

function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = "auto";
    image.loading = "eager";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

async function loadAssets() {
  await Promise.all(
    Object.entries(ASSETS).map(async ([key, src]) => {
      images[key] = await loadImage(src);
    }),
  );
  await Promise.all(
    Array.from({ length: WALK_FRAME_COUNT }, async (_, index) => {
      const frameName = String(index).padStart(3, "0");
      walkFrames[index] = await loadImage(`pic/web/wei_walk_${frameName}.png`);
    }),
  );
  loadSounds();
}

function loadSounds() {
  sounds.welcomeMusic = loadSound(AUDIO.welcomeMusic);
  if (sounds.welcomeMusic) {
    sounds.welcomeMusic.loop = true;
    sounds.welcomeMusic.volume = 0.24;
  }
  sounds.gameMusic = loadSound(AUDIO.gameMusic);
  if (sounds.gameMusic) {
    sounds.gameMusic.loop = true;
    sounds.gameMusic.volume = 0.22;
  }
  sounds.dadTurn = loadSound(AUDIO.dadTurn);
  sounds.drawerJam = loadSound(AUDIO.drawerJam);
  sounds.drawerMove = loadSound(AUDIO.drawerMove);
  if (sounds.drawerMove) {
    sounds.drawerMove.loop = true;
    sounds.drawerMove.volume = 0.5;
  }
  sounds.drawerClose = loadSound(AUDIO.drawerClose);
  sounds.pillowHit = loadSound(AUDIO.pillowHit);
  sounds.failVoice = loadSound(AUDIO.failVoice);
  sounds.successVoice = loadSound(AUDIO.successVoice);
  sounds.dadDreams = AUDIO.dadDreams.map(loadSound).filter(Boolean);
  sounds.money = Object.fromEntries(Object.entries(AUDIO.money).map(([amount, src]) => [amount, loadSound(src)]));
}

function loadSound(src) {
  const audio = new Audio(src);
  audio.preload = "auto";
  return audio;
}

function playSound(sound) {
  if (!sound) return;
  const audio = sound.cloneNode();
  audio.volume = 0.92;
  audio.play().catch(() => {});
}

function playRandomSound(list) {
  if (!list?.length) return;
  playSound(list[Math.floor(Math.random() * list.length)]);
}

function unlockAudio() {
  audioUnlocked = true;
  updateWelcomeMusic();
  updateGameMusic();
}

function updateWelcomeMusic() {
  const music = sounds.welcomeMusic;
  if (!music) return;
  const shouldPlay = audioUnlocked && state.gameState === "WELCOME" && !state.dreamOpen;
  if (shouldPlay) music.play().catch(() => {});
  else music.pause();
}

function stopWelcomeMusic() {
  const music = sounds.welcomeMusic;
  if (!music) return;
  music.pause();
}

function updateGameMusic() {
  const music = sounds.gameMusic;
  if (!music) return;
  const shouldPlay =
    audioUnlocked &&
    !state.paused &&
    state.gameState !== "WELCOME" &&
    state.gameState !== "GAME_OVER" &&
    state.gameState !== "SUCCESS" &&
    state.gameState !== "SUCCESS_SUMMARY";
  if (shouldPlay) music.play().catch(() => {});
  else music.pause();
}

function stopGameMusic() {
  const music = sounds.gameMusic;
  if (!music) return;
  music.pause();
}

function startDrawerMoveSound() {
  const sound = sounds.drawerMove;
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function stopDrawerMoveSound() {
  const sound = sounds.drawerMove;
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
}

function playMoneySound(amount) {
  const exact = sounds.money?.[amount];
  if (exact) {
    playSound(exact);
    return;
  }
  const fallbackAmount = [10, 5, 1].find((candidate) => amount >= candidate);
  if (fallbackAmount) playSound(sounds.money?.[fallbackAmount]);
}

function replayStartGif() {
  if (isBlockingCharacterDom()) return;
  positionIntroGif();
  introGif.src = `${ASSETS.weiStart}?play=${Date.now()}`;
  introGif.style.display = "block";
}

function hideStartGif() {
  introGif.style.display = "none";
  introGif.removeAttribute("src");
}

function showIdleGif() {
  if (isBlockingCharacterDom()) return;
  const src = getIdleGifSrc();
  if (!idleGif.src.endsWith(src)) idleGif.src = src;
  positionIdleGif();
  idleGif.style.display = "block";
}

function hideIdleGif() {
  idleGif.style.display = "none";
}

function showWalkBackGif() {
  if (isBlockingCharacterDom()) return;
  if (!walkBackGif.src.endsWith(ASSETS.weiWalkBack)) walkBackGif.src = ASSETS.weiWalkBack;
  positionWalkBackGif();
  walkBackGif.style.display = "block";
}

function hideWalkBackGif() {
  walkBackGif.style.display = "none";
}

function showWelcomeGif() {
  const src = getWelcomeGifSrc();
  if (!welcomeGif.src.endsWith(src)) welcomeGif.src = src;
  positionWelcomeOverlays();
  welcomeGif.style.display = "block";
  welcomeFrame.style.display = "block";
  welcomeStartButton.style.display = "block";
}

function hideWelcomeGif() {
  welcomeGif.style.display = "none";
  welcomeFrame.style.display = "none";
  welcomeStartButton.style.display = "none";
}

function isBlockingCharacterDom() {
  return state.gameState === "GAME_OVER" || state.gameState === "SUCCESS" || state.gameState === "SUCCESS_SUMMARY" || state.gameState === "RESTART_TRANSITION";
}

function hideGameplayCharacterGifs() {
  hideIdleGif();
  hideWalkBackGif();
  hideStartGif();
}

function showDadGif() {
  if (!shouldShowBedroomDadGif()) {
    hideDadGif();
    return;
  }
  const src = state.dadPose === "resleeping" ? ASSETS.dadResleeping : ASSETS.dadSleeping;
  if (!dadGif.src.endsWith(src)) dadGif.src = src;
  positionDadGif();
  dadGif.style.display = "block";
}

function hideDadGif() {
  dadGif.style.display = "none";
  dadGif.style.opacity = "";
}

function showDeployHint() {
  if (state.playerDeployed) {
    hideDeployHint();
    return;
  }
  positionDeployHint();
  deployHintText.style.display = "block";
}

function hideDeployHint() {
  deployHintText.style.display = "none";
  deployHintText.style.opacity = "";
}

function showTutorialHint(text) {
  tutorialHintText.textContent = text;
  positionTutorialHint();
  tutorialHintText.style.display = "block";
}

function hideTutorialHint() {
  tutorialHintText.style.display = "none";
}

function withCanvasContext(nextCtx, draw) {
  const previousCtx = ctx;
  ctx = nextCtx;
  draw();
  ctx = previousCtx;
}

function positionPillowOverlay() {
  const canvasRect = canvas.getBoundingClientRect();
  pillowOverlayCanvas.style.left = `${canvasRect.left}px`;
  pillowOverlayCanvas.style.top = `${canvasRect.top}px`;
  pillowOverlayCanvas.style.width = `${canvasRect.width}px`;
  pillowOverlayCanvas.style.height = `${canvasRect.height}px`;
}

function clearPillowOverlay() {
  pillowOverlayCtx.clearRect(0, 0, WIDTH, HEIGHT);
  pillowOverlayCanvas.style.display = "none";
}

function updateTutorialHint() {
  if (
    state.gameState === "WELCOME" ||
    state.gameState === "GAME_OVER" ||
    state.gameState === "SUCCESS" ||
    state.gameState === "SUCCESS_SUMMARY" ||
    state.gameState === "RESTART_TRANSITION" ||
    state.paused ||
    !state.playerDeployed ||
    state.playerIntroActive
  ) {
    hideTutorialHint();
    return;
  }

  if (state.viewMode === "drawer_closeup") {
    if (!state.drawerHintDone) showTutorialHint(TUTORIAL_TEXT.drawer);
    else hideTutorialHint();
    return;
  }

  if (!state.pillowHintDone && pillowInPlayerRange()) {
    showTutorialHint(TUTORIAL_TEXT.pillow);
    return;
  }

  if (!state.moveHintDone) {
    showTutorialHint(TUTORIAL_TEXT.move);
    return;
  }

  hideTutorialHint();
}

function shouldShowBedroomDadGif() {
  return (
    state.viewMode !== "drawer_closeup" &&
    (state.gameState === "WELCOME" ||
      state.gameState === "NAVIGATION" ||
      state.gameState === "APPROACH_DRAWER" ||
      state.gameState === "RETREAT")
  );
}

function showSummaryHomeButton() {
  positionSummaryHomeButton();
  summaryHomeButton.style.display = "block";
}

function hideSummaryHomeButton() {
  summaryHomeButton.style.display = "none";
}

function openDreamOverlay(index = state.dreamNextIndex) {
  if (state.dreamOpen) return;
  state.dreamOpen = true;
  state.dreamArmed = false;
  state.dreamRetriggerTimer = 0;
  state.welcomeDragging = false;
  setDreamMuted(state.dreamMuted);
  dreamOverlay.style.display = "grid";
  welcomeStartButton.style.display = "none";
  stopWelcomeMusic();
  playDreamVideo(index);
}

function prepareDreamBubbleOverlay(index = state.dreamNextIndex) {
  if (dreamOverlay.style.display !== "grid") {
    setDreamMuted(state.dreamMuted);
    dreamOverlay.style.display = "grid";
    stopWelcomeMusic();
    state.dreamIndex = index;
    dreamStage.removeAttribute("style");
    dreamBackdropVideo.removeAttribute("src");
    dreamVideo.removeAttribute("src");
    dreamBackdropVideo.load();
    dreamVideo.load();
  }
  dreamOverlay.classList.add("is-bubble-transition");
  dreamOverlay.classList.remove("is-dream-reveal");
  dreamBubbleFx.classList.add("is-active");
  state.dreamTransitionVideoReady = false;
  updateDreamBubbleClip();
}

function updateDreamBubbleClip() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  const centerX = canvasRect.left + DREAM_BUBBLE_CENTER.x * scaleX;
  const centerY = canvasRect.top + DREAM_BUBBLE_CENTER.y * scaleY;
  const t = clamp(state.dreamTransitionTimer / DREAM_BUBBLE_TIME, 0, 1);
  const maxRadius = Math.hypot(window.innerWidth, window.innerHeight) * 1.12;
  const expandT = clamp(t / DREAM_BUBBLE_REVEAL_START, 0, 1);
  const crossfadeT = clamp((t - DREAM_CROSSFADE_START) / (DREAM_CROSSFADE_END - DREAM_CROSSFADE_START), 0, 1);
  const welcomeFadeT = clamp((t - 0.18) / 0.64, 0, 1);
  const radius = lerp(18, maxRadius, easeOutCubic(expandT));
  const stageAlpha = easeOutCubic(crossfadeT);
  const welcomeAlpha = 1 - easeInCubic(welcomeFadeT);
  const overlayAlpha = lerp(0.08, 0.58, stageAlpha);
  const bubbleAlpha = t < DREAM_BUBBLE_REVEAL_START ? 0.18 + 0.82 * easeOutCubic(expandT) : 1 - 0.72 * stageAlpha;
  dreamOverlay.style.setProperty("--dream-bubble-x", `${centerX}px`);
  dreamOverlay.style.setProperty("--dream-bubble-y", `${centerY}px`);
  dreamOverlay.style.setProperty("--dream-overlay-alpha", `${overlayAlpha}`);
  dreamOverlay.style.setProperty("--dream-stage-alpha", `${stageAlpha}`);
  dreamBubbleFx.style.setProperty("--dream-bubble-x", `${centerX}px`);
  dreamBubbleFx.style.setProperty("--dream-bubble-y", `${centerY}px`);
  dreamBubbleFx.style.setProperty("--dream-bubble-radius", `${radius}px`);
  dreamBubbleFx.style.setProperty("--dream-bubble-alpha", `${bubbleAlpha}`);
  canvas.style.opacity = `${welcomeAlpha}`;
  dadGif.style.opacity = `${welcomeAlpha}`;
  welcomeGif.style.opacity = `${welcomeAlpha}`;
  welcomeFrame.style.opacity = `${welcomeAlpha}`;
  welcomeStartButton.style.opacity = `${welcomeAlpha}`;
}

function playDreamVideo(index) {
  state.dreamIndex = index;
  dreamStage.removeAttribute("style");
  dreamBackdropVideo.src = DREAM_VIDEOS[index];
  dreamVideo.src = DREAM_VIDEOS[index];
  dreamBackdropVideo.load();
  dreamVideo.load();
  dreamBackdropVideo.currentTime = 0;
  dreamVideo.currentTime = 0;
  dreamBackdropVideo.muted = true;
  dreamVideo.muted = state.dreamMuted;
  dreamVideo.volume = 0.95;
  dreamBackdropVideo.play().catch(() => {});
  dreamVideo.play().catch(() => {});
}

function cueDreamVideo(index) {
  state.dreamIndex = index;
  dreamStage.removeAttribute("style");
  dreamBackdropVideo.src = DREAM_VIDEOS[index];
  dreamVideo.src = DREAM_VIDEOS[index];
  dreamBackdropVideo.load();
  dreamVideo.load();
  dreamBackdropVideo.currentTime = 0;
  dreamVideo.currentTime = 0;
  dreamBackdropVideo.muted = true;
  dreamVideo.muted = state.dreamMuted;
  dreamVideo.volume = 0.95;
  dreamBackdropVideo.pause();
  dreamVideo.pause();
}

function resumeDreamVideo() {
  dreamBackdropVideo.play().catch(() => {});
  dreamVideo.play().catch(() => {});
}

function closeDreamOverlay(options = {}) {
  const ended = options.ended === true;
  const currentIndex = state.dreamIndex;
  state.dreamOpen = false;
  dreamOverlay.style.display = "none";
  dreamOverlay.classList.remove("is-bubble-transition");
  dreamOverlay.classList.remove("is-dream-reveal");
  dreamBubbleFx.classList.remove("is-active");
  dreamBackdropVideo.pause();
  dreamVideo.pause();
  dreamBackdropVideo.removeAttribute("src");
  dreamVideo.removeAttribute("src");
  dreamBackdropVideo.load();
  dreamVideo.load();
  dreamOverlay.style.removeProperty("--dream-bubble-x");
  dreamOverlay.style.removeProperty("--dream-bubble-y");
  dreamOverlay.style.removeProperty("--dream-overlay-alpha");
  dreamOverlay.style.removeProperty("--dream-stage-alpha");
  dreamBubbleFx.style.removeProperty("--dream-bubble-radius");
  dreamBubbleFx.style.removeProperty("--dream-bubble-x");
  dreamBubbleFx.style.removeProperty("--dream-bubble-y");
  dreamBubbleFx.style.removeProperty("--dream-bubble-alpha");
  canvas.style.opacity = "";
  dadGif.style.opacity = "";
  welcomeGif.style.opacity = "";
  welcomeFrame.style.opacity = "";
  welcomeStartButton.style.opacity = "";
  state.dreamTransitionVideoReady = false;
  if (state.gameState === "WELCOME") {
    welcomeStartButton.style.display = "block";
    updateWelcomeMusic();
  }
  if (!ended) {
    state.dreamRetriggerTimer = 0;
    state.dreamArmed = false;
    return;
  }
  if (currentIndex < DREAM_VIDEOS.length - 1) {
    state.dreamNextIndex = currentIndex + 1;
    state.dreamRetriggerTimer = 1;
  } else {
    state.dreamNextIndex = 0;
    state.dreamRetriggerTimer = 0;
    state.dreamSequenceDone = true;
  }
}

function setDreamMuted(muted) {
  state.dreamMuted = muted;
  dreamVideo.muted = muted;
  dreamSound.textContent = muted ? "♪" : "♫";
  dreamSound.classList.toggle("is-on", !muted);
  dreamSound.setAttribute("aria-label", muted ? "打开梦境声音" : "关闭梦境声音");
}

function fitDreamStageToVideo() {
  const videoW = dreamVideo.videoWidth || 1280;
  const videoH = dreamVideo.videoHeight || 720;
  const maxW = window.innerWidth * 0.94;
  const maxH = window.innerHeight * 0.94;
  const scale = Math.min(maxW / videoW, maxH / videoH);
  dreamStage.style.width = `${Math.max(320, videoW * scale)}px`;
  dreamStage.style.height = `${Math.max(220, videoH * scale)}px`;
}

function positionIntroGif() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  const midbottomX = state.player.x + state.player.w / 2 + START_ANIM_OFFSET.x;
  const midbottomY = state.player.y + state.player.h + START_ANIM_OFFSET.y;
  const left = canvasRect.left + (midbottomX - IMAGE_SIZES.weiStart.w / 2) * scaleX;
  const top = canvasRect.top + (midbottomY - IMAGE_SIZES.weiStart.h) * scaleY;
  introGif.style.left = `${left}px`;
  introGif.style.top = `${top}px`;
  introGif.style.width = `${IMAGE_SIZES.weiStart.w * scaleX}px`;
  introGif.style.height = `${IMAGE_SIZES.weiStart.h * scaleY}px`;
}

function positionIdleGif() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  const midbottomX = state.player.x + state.player.w / 2 + IDLE_DRAW_OFFSET.x;
  const midbottomY = state.player.y + state.player.h + IDLE_DRAW_OFFSET.y;
  const left = canvasRect.left + (midbottomX - IMAGE_SIZES.wei.w / 2) * scaleX;
  const top = canvasRect.top + (midbottomY - IMAGE_SIZES.wei.h) * scaleY;
  idleGif.style.left = `${left}px`;
  idleGif.style.top = `${top}px`;
  idleGif.style.width = `${IMAGE_SIZES.wei.w * scaleX}px`;
  idleGif.style.height = `${IMAGE_SIZES.wei.h * scaleY}px`;
}

function positionWalkBackGif() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  const midbottomX = state.player.x + state.player.w / 2 + WALK_DRAW_OFFSET.x;
  const midbottomY = state.player.y + state.player.h + WALK_DRAW_OFFSET.y;
  walkBackGif.style.left = `${canvasRect.left + (midbottomX - IMAGE_SIZES.wei.w / 2) * scaleX}px`;
  walkBackGif.style.top = `${canvasRect.top + (midbottomY - IMAGE_SIZES.wei.h) * scaleY}px`;
  walkBackGif.style.width = `${IMAGE_SIZES.wei.w * scaleX}px`;
  walkBackGif.style.height = `${IMAGE_SIZES.wei.h * scaleY}px`;
}

function positionDadGif() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  const config = getBedroomDadConfig();
  const w = IMAGE_SIZES.dad.w * config.scale * scaleX;
  const h = IMAGE_SIZES.dad.h * config.scale * scaleY;
  dadGif.style.left = `${canvasRect.left + config.x * scaleX - w / 2}px`;
  dadGif.style.top = `${canvasRect.top + config.y * scaleY - h / 2}px`;
  dadGif.style.width = `${w}px`;
  dadGif.style.height = `${h}px`;
  dadGif.style.transform = `rotate(${config.angle}deg)`;
}

function positionDeployHint() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  deployHintText.style.left = `${canvasRect.left + (WIDTH / 2) * scaleX}px`;
  deployHintText.style.top = `${canvasRect.top + (HEIGHT / 2 - 45) * scaleY}px`;
  deployHintText.style.fontSize = `${Math.max(22, 42 * scaleY)}px`;
  deployHintText.style.transform = "translate(-50%, 0)";
}

function positionTutorialHint() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  tutorialHintText.style.left = `${canvasRect.left + (WIDTH / 2) * scaleX}px`;
  tutorialHintText.style.top = `${canvasRect.top + 666 * scaleY}px`;
  tutorialHintText.style.fontSize = `${Math.max(17, 26 * scaleY)}px`;
  tutorialHintText.style.transform = "translate(-50%, 0)";
}

function welcomeCharacterRect() {
  const w = IMAGE_SIZES.welcomeLoop.w * state.welcomeChild.scale;
  const h = IMAGE_SIZES.welcomeLoop.h * state.welcomeChild.scale;
  return {
    x: state.welcomeChild.x - w / 2,
    y: state.welcomeChild.y - h,
    w,
    h,
  };
}

function welcomeChildFootPoint() {
  return { x: state.welcomeChild.x, y: state.welcomeChild.y };
}

function welcomeChildInDrawerZone() {
  return rectContains(DRAWER_INTERACT_ZONE, welcomeChildFootPoint());
}

function welcomeChildInTeaZone() {
  return rectContains(WELCOME_TEA_ZONE, welcomeChildFootPoint());
}

function welcomeChildInDadDreamZone() {
  return rectContains(WELCOME_DAD_DREAM_ZONE, welcomeChildFootPoint());
}

function updateWelcomeDrawerPick(dt) {
  const inDrawerZone = welcomeChildInDrawerZone();
  if (inDrawerZone && !state.welcomeWasInDrawerZone) {
    state.welcomePickTimer = WELCOME_PICK_TOTAL_TIME;
    state.welcomePickNonce += 1;
  } else if (!inDrawerZone) {
    state.welcomePickTimer = 0;
  }
  state.welcomeWasInDrawerZone = inDrawerZone;
  if (state.welcomePickTimer > 0) state.welcomePickTimer = Math.max(0, state.welcomePickTimer - dt);
}

function getWelcomeGifSrc() {
  if (state.welcomePickTimer > 0) return `${ASSETS.welcomePickLoop}?play=${state.welcomePickNonce}`;
  if (welcomeChildInTeaZone()) return ASSETS.welcomeTeaLoop;
  if (welcomeChildInDrawerZone()) return ASSETS.welcomeDrawerLoop;
  return state.welcomeFacing === "left" ? ASSETS.welcomeLeftLoop : ASSETS.welcomeLoop;
}

function welcomeFrameRect() {
  const rect = welcomeCharacterRect();
  return { x: rect.x - 18, y: rect.y - 16, w: rect.w + 36, h: rect.h + 32 };
}

function positionWelcomeOverlays() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  const character = welcomeCharacterRect();
  const frame = welcomeFrameRect();

  welcomeGif.style.left = `${canvasRect.left + character.x * scaleX}px`;
  welcomeGif.style.top = `${canvasRect.top + character.y * scaleY}px`;
  welcomeGif.style.width = `${character.w * scaleX}px`;
  welcomeGif.style.height = `${character.h * scaleY}px`;

  welcomeFrame.style.left = `${canvasRect.left + frame.x * scaleX}px`;
  welcomeFrame.style.top = `${canvasRect.top + frame.y * scaleY}px`;
  welcomeFrame.style.width = `${frame.w * scaleX}px`;
  welcomeFrame.style.height = `${frame.h * scaleY}px`;

  const buttonW = 180 * scaleX;
  const buttonH = 46 * scaleY;
  welcomeStartButton.style.left = `${canvasRect.left + (WIDTH / 2) * scaleX - buttonW / 2}px`;
  welcomeStartButton.style.top = `${canvasRect.top + 652 * scaleY - buttonH / 2}px`;
  welcomeStartButton.style.width = `${buttonW}px`;
  welcomeStartButton.style.height = `${buttonH}px`;
  welcomeStartButton.style.fontSize = `${Math.max(15, 24 * scaleY)}px`;
}

function positionSummaryHomeButton() {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvasRect.width / WIDTH;
  const scaleY = canvasRect.height / HEIGHT;
  const buttonW = 220 * scaleX;
  const buttonH = 48 * scaleY;
  summaryHomeButton.style.left = `${canvasRect.left + WIDTH / 2 * scaleX - buttonW / 2}px`;
  summaryHomeButton.style.top = `${canvasRect.top + 520 * scaleY - buttonH / 2}px`;
  summaryHomeButton.style.width = `${buttonW}px`;
  summaryHomeButton.style.height = `${buttonH}px`;
  summaryHomeButton.style.fontSize = `${Math.max(16, 24 * scaleY)}px`;
}

function updateWelcomeGifVariant() {
  const src = getWelcomeGifSrc();
  if (!welcomeGif.src.endsWith(src)) welcomeGif.src = src;
}

function updateDreamTrigger(dt) {
  if (state.gameState !== "WELCOME") return;
  const inZone = welcomeChildInDadDreamZone();
  if (!inZone) {
    state.dreamArmed = true;
    state.dreamRetriggerTimer = 0;
    state.dreamSequenceDone = false;
    state.dreamNextIndex = 0;
    if (state.dreamTransitionActive) {
      state.dreamTransitionActive = false;
      state.dreamTransitionTimer = 0;
      closeDreamOverlay();
    }
    return;
  }
  if (state.dreamOpen || state.dreamSequenceDone) return;
  if (state.dreamTransitionActive) {
    state.dreamTransitionTimer += dt;
    updateDreamBubbleClip();
    const transitionRatio = clamp(state.dreamTransitionTimer / DREAM_BUBBLE_TIME, 0, 1);
    if (!state.dreamTransitionVideoReady && transitionRatio >= DREAM_CROSSFADE_START) {
      state.dreamTransitionVideoReady = true;
      dreamOverlay.classList.add("is-dream-reveal");
      cueDreamVideo(state.dreamNextIndex);
    }
    if (state.dreamTransitionTimer >= DREAM_BUBBLE_TIME) {
      state.dreamTransitionActive = false;
      state.dreamTransitionTimer = 0;
      state.dreamOpen = true;
      dreamOverlay.classList.remove("is-bubble-transition");
      dreamOverlay.classList.remove("is-dream-reveal");
      dreamBubbleFx.classList.remove("is-active");
      dreamOverlay.style.removeProperty("--dream-bubble-x");
      dreamOverlay.style.removeProperty("--dream-bubble-y");
      dreamOverlay.style.setProperty("--dream-overlay-alpha", "0.58");
      dreamOverlay.style.removeProperty("--dream-stage-alpha");
      dreamBubbleFx.style.removeProperty("--dream-bubble-radius");
      dreamBubbleFx.style.removeProperty("--dream-bubble-x");
      dreamBubbleFx.style.removeProperty("--dream-bubble-y");
      dreamBubbleFx.style.removeProperty("--dream-bubble-alpha");
      canvas.style.opacity = "";
      dadGif.style.opacity = "";
      welcomeGif.style.opacity = "";
      welcomeFrame.style.opacity = "";
      welcomeStartButton.style.opacity = "";
      resumeDreamVideo();
    }
    return;
  }
  if (state.dreamRetriggerTimer > 0) {
    state.dreamRetriggerTimer = Math.max(0, state.dreamRetriggerTimer - dt);
    if (state.dreamRetriggerTimer <= 0 && welcomeChildInDadDreamZone()) startDreamBubbleTransition();
    return;
  }
  if (state.dreamArmed) startDreamBubbleTransition();
}

function startDreamBubbleTransition() {
  state.dreamArmed = false;
  state.dreamTransitionActive = true;
  state.dreamTransitionTimer = 0;
  state.welcomeDragging = false;
  prepareDreamBubbleOverlay(state.dreamNextIndex);
}

function getIdleGifSrc() {
  return state.viewMode === "bedroom_after" ? ASSETS.weiIdleBack : ASSETS.weiIdle;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function rectContains(rect, point) {
  return point.x >= rect.x && point.x <= rect.x + rect.w && point.y >= rect.y && point.y <= rect.y + rect.h;
}

function pointInPolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;
  let j = polygon.length - 1;
  for (let i = 0; i < polygon.length; i += 1) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const crosses = yi > y !== yj > y;
    if (crosses) {
      const xIntersect = ((xj - xi) * (y - yi)) / ((yj - yi) || 1e-9) + xi;
      if (x < xIntersect) inside = !inside;
    }
    j = i;
  }
  return inside;
}

function playerFootPoint() {
  return [state.player.x + state.player.w / 2, state.player.y + state.player.h];
}

function footHitsObstacle() {
  const foot = playerFootPoint();
  return ACTIVE_OBSTACLE_POLYGON_INDICES.some((index) => pointInPolygon(foot, OBSTACLE_POLYGONS[index]));
}

function currentFloor() {
  const foot = playerFootPoint();
  return FLOOR_ZONES.find((zone) => pointInPolygon(foot, zone.points)) ?? FLOOR_ZONES.at(-1);
}

function currentStageRules() {
  return STAGE_RULES[state.viewMode] || STAGE_RULES.bedroom_before;
}

function easeOutCubic(t) {
  return 1 - (1 - clamp(t, 0, 1)) ** 3;
}

function easeInCubic(t) {
  return clamp(t, 0, 1) ** 3;
}

function easeInOutSine(t) {
  return -(Math.cos(Math.PI * clamp(t, 0, 1)) - 1) / 2;
}

function lerp(a, b, t) {
  return a + (b - a) * clamp(t, 0, 1);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function resetEventTimer() {
  const rules = currentStageRules();
  state.eventTimer = randomBetween(rules.eventMin, rules.eventMax);
}

function pressureGainWithDanger(base) {
  if (base <= 0) return base;
  const depthFactor = lerp(1.28, 0.86, state.sleepDepth / 100);
  const sensitivityFactor = state.sleepSensitivity;
  let gain = base * depthFactor * sensitivityFactor;
  if (state.dangerWindowTimer > 0) gain = gain * state.dangerWindowMultiplier + 8;
  return gain;
}

function updateDadSleepDepth(dt, activelyMakingNoise) {
  if (state.gameState === "SUCCESS" || state.gameState === "GAME_OVER") return;
  if (activelyMakingNoise) {
    const eventStress = state.dangerWindowLabel === "turn" ? 1.45 : state.dangerWindowLabel === "dream" ? 1.18 : 1;
    state.sleepDepth = clamp(state.sleepDepth - dt * 8.5 * eventStress, 0, 100);
  } else {
    state.sleepDepth = clamp(state.sleepDepth + dt * 5.2, 0, 100);
  }
  state.sleepSensitivity = lerp(state.sleepSensitivity, 1, dt * 0.42);
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * WIDTH,
    y: ((event.clientY - rect.top) / rect.height) * HEIGHT,
  };
}

function getCardRect() {
  return { x: WIDTH - IMAGE_SIZES.weikaCard.w, y: 583, w: IMAGE_SIZES.weikaCard.w, h: IMAGE_SIZES.weikaCard.h };
}

function drawText(text, x, y, size = 20, color = "#e8eaee", align = "left") {
  ctx.save();
  ctx.font = `${size}px Yaoguang, Microsoft YaHei, sans-serif`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = "top";
  ctx.shadowColor = "rgba(0, 0, 0, 0.62)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function drawUiText(text, x, y, size = 20, color = "#e8eaee", align = "left", baseline = "top") {
  ctx.save();
  ctx.font = `700 ${size}px Arial, Microsoft YaHei, sans-serif`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = baseline;
  ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function drawBar(x, y, w, h, ratio, color) {
  const fillW = w * clamp(ratio, 0, 1);
  ctx.save();
  const bgGradient = ctx.createLinearGradient(0, y, 0, y + h);
  bgGradient.addColorStop(0, "rgba(104, 105, 104, 0.62)");
  bgGradient.addColorStop(0.48, "rgba(61, 62, 64, 0.76)");
  bgGradient.addColorStop(1, "rgba(28, 29, 32, 0.78)");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(x, y, w, h);

  if (fillW > 0) {
    const isDanger = state.dadPressure >= DAD_PRESSURE_RED_LINE;
    const fillGradient = ctx.createLinearGradient(0, y, 0, y + h);
    fillGradient.addColorStop(0, isDanger ? "#ff6868" : "#a94a4a");
    fillGradient.addColorStop(0.34, isDanger ? "#d92c33" : "#8f3336");
    fillGradient.addColorStop(1, isDanger ? "#8c131e" : "#5f2024");
    ctx.fillStyle = fillGradient;
    ctx.fillRect(x, y, fillW, h);

    ctx.fillStyle = isDanger ? "rgba(255, 230, 218, 0.36)" : "rgba(222, 184, 174, 0.17)";
    ctx.fillRect(x, y + 1, fillW, Math.max(1, h * 0.28));
    ctx.fillStyle = isDanger ? "rgba(72, 8, 12, 0.24)" : "rgba(34, 8, 10, 0.34)";
    ctx.fillRect(x, y + h - 2, fillW, 2);

    const shineW = Math.min(26, fillW);
    const shine = ctx.createLinearGradient(x + fillW - shineW, 0, x + fillW, 0);
    shine.addColorStop(0, "rgba(255, 255, 255, 0)");
    shine.addColorStop(1, isDanger ? "rgba(255, 235, 218, 0.28)" : "rgba(255, 220, 205, 0.12)");
    ctx.fillStyle = shine;
    ctx.fillRect(x + fillW - shineW, y, shineW, h);
  }

  const warningX = x + w * 0.75;
  ctx.strokeStyle = "rgba(235, 230, 216, 0.52)";
  ctx.beginPath();
  ctx.moveTo(warningX, y - 4);
  ctx.lineTo(warningX, y + h + 4);
  ctx.stroke();
  ctx.strokeStyle = "rgba(234, 234, 228, 0.34)";
  ctx.strokeRect(x, y, w, h);
  ctx.restore();
}

function drawImageCentered(image, centerX, centerY, w, h) {
  if (!image) return;
  ctx.drawImage(image, centerX - w / 2, centerY - h / 2, w, h);
}

function drawRotated(image, centerX, centerY, angleDeg, scale, w, h) {
  if (!image) return;
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((angleDeg * Math.PI) / 180);
  ctx.scale(scale, scale);
  ctx.drawImage(image, -w / 2, -h / 2, w, h);
  ctx.restore();
}

function drawBedroom() {
  if (images.bedroom) ctx.drawImage(images.bedroom, 0, 0, WIDTH, HEIGHT);
  else {
    ctx.fillStyle = "#121419";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  showDadGif();
  drawPlayer();
  drawEventFlashOverlay(0.19);
}

function drawWelcomeScreen() {
  if (images.bedroom) ctx.drawImage(images.bedroom, 0, 0, WIDTH, HEIGHT);
  else {
    ctx.fillStyle = "#121419";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  showDadGif();
  drawWelcomeDreamBubbles();
  drawDreamBubbleTransition();
  showWelcomeGif();
}

function drawWelcomeDreamBubbles() {
  if (state.dreamOpen) return;
  const inZone = welcomeChildInDadDreamZone();
  const alphaBase = inZone ? 0.78 : 0.34;
  const bubbles = [
    { x: 890, y: 232, r: 10, drift: 0 },
    { x: 925, y: 204, r: 15, drift: 1.7 },
    { x: 968, y: 176, r: 24, drift: 3.4 },
  ];

  ctx.save();
  for (const bubble of bubbles) {
    const t = state.welcomeTimer * 1.4 + bubble.drift;
    const y = bubble.y + Math.sin(t) * 5;
    const x = bubble.x + Math.cos(t * 0.8) * 4;
    ctx.globalAlpha = alphaBase * (0.72 + 0.22 * Math.sin(t + 1));
    ctx.fillStyle = "rgba(255, 248, 255, 0.3)";
    ctx.strokeStyle = "rgba(255, 234, 255, 0.72)";
    ctx.lineWidth = 2;
    ctx.shadowColor = "rgba(255, 188, 244, 0.5)";
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(x, y, bubble.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  ctx.globalAlpha = alphaBase;
  drawUiText("Zzz", 952, 164 + Math.sin(state.welcomeTimer * 1.6) * 4, 22, "rgba(255, 245, 255, 0.86)", "center", "middle");
  ctx.restore();
}

function drawDreamBubbleTransition() {
  if (!state.dreamTransitionActive) return;
  const t = clamp(state.dreamTransitionTimer / DREAM_BUBBLE_TIME, 0, 1);
  const expandT = clamp(t / DREAM_BUBBLE_REVEAL_START, 0, 1);
  const revealT = clamp((t - DREAM_BUBBLE_REVEAL_START) / (1 - DREAM_BUBBLE_REVEAL_START), 0, 1);
  const eased = easeOutCubic(expandT);
  const center = DREAM_BUBBLE_CENTER;
  const maxRadius = 980;
  const radius = lerp(24, maxRadius, eased);
  const bubblePresence = t < DREAM_BUBBLE_REVEAL_START ? eased : 1 - easeOutCubic(revealT);

  ctx.save();
  ctx.fillStyle = `rgba(255, 248, 255, ${0.02 + 0.26 * bubblePresence})`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.globalCompositeOperation = "lighter";

  const edge = ctx.createRadialGradient(center.x, center.y, radius * 0.72, center.x, center.y, radius);
  edge.addColorStop(0, "rgba(255, 255, 255, 0)");
  edge.addColorStop(0.78, `rgba(255, 250, 255, ${0.18 * bubblePresence})`);
  edge.addColorStop(1, `rgba(255, 236, 255, ${0.34 * bubblePresence})`);
  ctx.fillStyle = edge;
  ctx.beginPath();
  ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
  ctx.fill();

  const glow = ctx.createRadialGradient(center.x, center.y, 20, center.x, center.y, 360 * eased);
  glow.addColorStop(0, `rgba(255, 255, 255, ${0.22 * bubblePresence})`);
  glow.addColorStop(0.5, `rgba(255, 226, 255, ${0.14 * bubblePresence})`);
  glow.addColorStop(1, "rgba(255, 226, 255, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.restore();
}

function drawWelcomeLoopCharacter() {
  const image = images.weiIdle;
  if (!image) return;
  const rect = welcomeCharacterRect();
  const frame = welcomeFrameRect();

  ctx.drawImage(image, rect.x, rect.y, rect.w, rect.h);
  drawTransformFrame(frame);
}

function drawTransformFrame(frame) {
  ctx.save();
  ctx.strokeStyle = "rgba(216, 220, 218, 0.58)";
  ctx.lineWidth = 1;
  ctx.shadowColor = "rgba(0, 0, 0, 0.28)";
  ctx.shadowBlur = 2;
  ctx.strokeRect(frame.x, frame.y, frame.w, frame.h);
  ctx.beginPath();
  ctx.moveTo(frame.x, frame.y);
  ctx.lineTo(frame.x + frame.w, frame.y + frame.h);
  ctx.moveTo(frame.x + frame.w, frame.y);
  ctx.lineTo(frame.x, frame.y + frame.h);
  ctx.stroke();

  ctx.fillStyle = "rgba(236, 238, 232, 0.78)";
  const handles = [
    [frame.x, frame.y],
    [frame.x + frame.w / 2, frame.y],
    [frame.x + frame.w, frame.y],
    [frame.x, frame.y + frame.h / 2],
    [frame.x + frame.w, frame.y + frame.h / 2],
    [frame.x, frame.y + frame.h],
    [frame.x + frame.w / 2, frame.y + frame.h],
    [frame.x + frame.w, frame.y + frame.h],
  ];
  for (const [x, y] of handles) ctx.fillRect(x - 3, y - 3, 6, 6);
  ctx.restore();
}

function drawDrawerCloseup() {
  if (images.drawerCloseupBg) ctx.drawImage(images.drawerCloseupBg, 0, 0, WIDTH, HEIGHT);
  else {
    ctx.fillStyle = "#131112";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  drawDrawerDad();
  drawUsedPillowsNearDad("drawer_closeup");
  drawPillowFlights();
  drawWallet();
  drawDrawerProgressMeter();
  drawDrawerLayers();
  drawTakeMoneyButtons();
  drawMoneyFlights();
  drawMoneyPopups();
  drawDrawerResourcePillows();
  drawHardPullOverlay();
  drawEventFlashOverlay(0.23);
}

function drawEventFlashOverlay(maxAlpha) {
  if (state.eventFlash <= 0) return;
  const alpha = maxAlpha * clamp(state.eventFlash, 0, 1);
  ctx.save();
  ctx.fillStyle = `rgba(225, 82, 82, ${alpha})`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.restore();
}

function drawRescueOverlay() {
  if (state.wakeGraceTimer <= 0 || state.gameState === "GAME_OVER") return;
  const ratio = clamp(state.wakeGraceTimer / WAKE_GRACE_TIME, 0, 1);
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 85);

  ctx.save();
  ctx.fillStyle = `rgba(215, 34, 43, ${0.2 + pulse * 0.12})`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const boxW = 298;
  const boxH = 50;
  const boxX = WIDTH / 2 - boxW / 2;
  const boxY = 86;
  ctx.fillStyle = `rgba(196, 28, 38, ${0.34 + pulse * 0.18})`;
  ctx.strokeStyle = `rgba(255, 112, 120, ${0.72 + pulse * 0.25})`;
  ctx.lineWidth = 2;
  ctx.shadowColor = "rgba(255, 35, 48, 0.68)";
  ctx.shadowBlur = 16 + pulse * 14;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 6);
  ctx.fill();
  ctx.stroke();

  ctx.shadowBlur = 0;
  ctx.fillStyle = "rgba(255, 216, 216, 0.16)";
  ctx.fillRect(boxX + 10, boxY + boxH - 9, (boxW - 20) * ratio, 4);
  ctx.restore();

  drawRescuePillowFrames();
  drawUiText(`补救时间 ${state.wakeGraceTimer.toFixed(1)}s`, WIDTH / 2, boxY + boxH / 2 - 3, 25, "#ff4b4f", "center", "middle");
}

function usedPillowPlacement(index, viewMode = state.viewMode) {
  const placements =
    viewMode === "drawer_closeup"
      ? [
          { x: 112, y: 300, angle: -35, scale: 1.3 },
          { x: 145, y: 342, angle: -22, scale: 1.3 },
          { x: 88, y: 372, angle: 8, scale: 1.3 },
        ]
      : [
          { x: 700, y: 300, angle: -22, scale: 0.9 },
          { x: 760, y: 276, angle: -10, scale: 0.82 },
          { x: 730, y: 340, angle: 8, scale: 1 },
        ];
  return placements[Math.min(index, placements.length - 1)];
}

function drawUsedPillowsNearDad(viewMode = state.viewMode) {
  state.usedPillowLabels.forEach((id, index) => {
    const pillow = PILLOW_ITEMS.find((item) => item.id === id);
    if (!pillow) return;
    const placement = usedPillowPlacement(index, viewMode);
    drawPillowImage(pillow.key, placement.x, placement.y, placement.angle, placement.scale, pillow.size);
  });
}

function drawPillowFlights() {
  for (const flight of state.pillowFlights) {
    if (flight.viewMode !== state.viewMode) continue;
    const pillow = PILLOW_ITEMS.find((item) => item.id === flight.id);
    if (!pillow) continue;
    const t = clamp(flight.timer / flight.duration, 0, 1);
    const eased = easeOutCubic(t);
    const arc = Math.sin(t * Math.PI) * 70;
    const x = flight.start.x + (flight.target.x - flight.start.x) * eased;
    const y = flight.start.y + (flight.target.y - flight.start.y) * eased - arc;
    const angle = flight.start.angle + (flight.target.angle - flight.start.angle) * eased;
    const scale = flight.start.scale + (flight.target.scale - flight.start.scale) * eased;
    drawPillowImage(pillow.key, x, y, angle, scale, pillow.size);
  }
}

function getDadImage() {
  return state.dadPose === "resleeping" ? images.dadResleeping : images.dadSleeping;
}

function getBedroomDadConfig() {
  // Canvas and Pygame rotate in opposite visual directions for these assets.
  return state.dadPose === "resleeping"
    ? { x: 755, y: 295, angle: 170, scale: 0.85 }
    : { x: 755, y: 315, angle: 160, scale: 0.85 };
}

function drawDad() {
  const image = getDadImage();
  const config = getBedroomDadConfig();
  drawRotated(image, config.x, config.y, config.angle, config.scale, IMAGE_SIZES.dad.w, IMAGE_SIZES.dad.h);
}

function drawDrawerDad() {
  const image = getDadImage();
  drawRotated(image, 130, 330, 90, 1.8, IMAGE_SIZES.dad.w, IMAGE_SIZES.dad.h);
}

function drawPillows() {
  for (const pillow of PILLOW_ITEMS) {
    drawPillowImage(pillow.key, pillow.x, pillow.y, pillow.angle, 1, pillow.size, state.usedPillows.has(pillow.id));
  }
}

function drawPillowOverlay() {
  const shouldShow =
    state.viewMode !== "drawer_closeup" &&
    !["WELCOME", "GAME_OVER", "SUCCESS", "SUCCESS_SUMMARY", "RESTART_TRANSITION"].includes(state.gameState);
  if (!shouldShow) {
    clearPillowOverlay();
    return;
  }
  positionPillowOverlay();
  pillowOverlayCtx.clearRect(0, 0, WIDTH, HEIGHT);
  withCanvasContext(pillowOverlayCtx, () => {
    drawUsedPillowsNearDad();
    drawPillowFlights();
    drawPillows();
  });
  pillowOverlayCanvas.style.display = "block";
}

function drawPillowImage(key, x, y, angle, scale, size, dimmed = false) {
  const image = images[key];
  if (!image) return;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.scale(scale, scale);
  if (dimmed) ctx.filter = "brightness(35%) opacity(70%)";
  ctx.drawImage(image, -size.w / 2, -size.h / 2, size.w, size.h);
  ctx.restore();
}

function drawDrawerResourcePillows() {
  for (const [key, placement] of Object.entries(DRAWER_PILLOW_PLACEMENTS)) {
    const id = key.replace("pillow", "");
    drawPillowImage(key, placement.x, placement.y, placement.angle, placement.scale, placement.size, state.usedPillows.has(id));
  }
}

function drawRescuePillowFrames() {
  if (state.wakeGraceTimer <= 0 || state.gameState === "GAME_OVER" || state.viewMode !== "drawer_closeup") return;
  const available = PILLOW_ITEMS.some((pillow) => !state.usedPillows.has(pillow.id));
  if (!available) return;
  const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 130);

  ctx.save();
  ctx.lineWidth = 2;
  ctx.strokeStyle = `rgba(255, 82, 92, ${0.38 + pulse * 0.2})`;
  ctx.shadowColor = "rgba(255, 45, 58, 0.42)";
  ctx.shadowBlur = 7 + pulse * 5;
  ctx.strokeRect(1060, 80, 158, 540);
  ctx.restore();
}

function drawWallet() {
  drawRotated(images.wallet, WALLET_CENTER.x, WALLET_CENTER.y, 30, 1, IMAGE_SIZES.wallet.w, IMAGE_SIZES.wallet.h);
}

function drawDrawerLayers() {
  const progress = clamp(state.drawerProgress, 0, 100);
  const shake = Math.round(10 * state.hardPullFeedback);
  const shakeX = shake > 0 ? Math.round((Math.random() * 2 - 1) * shake) : 0;
  const shakeY = shake > 0 ? Math.round((Math.random() * 2 - 1) * shake) : 0;
  const frontY = DRAWER_LAYER_Y + Math.round(DRAWER_LAYER_MAX_OFFSET * (progress / 100)) + shakeY;

  if (images.drawerInner && progress > 3) {
    const visibleHeight = Math.min(images.drawerInner.height, Math.round(images.drawerInner.height * progress / 100));
    ctx.save();
    ctx.translate(DRAWER_LAYER_X, DRAWER_LAYER_Y - 2);
    ctx.rotate((-0.6 * Math.PI) / 180);
    ctx.drawImage(
      images.drawerInner,
      0,
      0,
      images.drawerInner.width,
      visibleHeight,
      0,
      0,
      images.drawerInner.width,
      visibleHeight,
    );
    ctx.restore();
  }

  if (images.drawerFront) ctx.drawImage(images.drawerFront, DRAWER_LAYER_X + shakeX, frontY);
  else {
    ctx.fillStyle = "#865f3a";
    ctx.fillRect(DRAWER_LAYER_X, frontY, 500, 112);
  }
}

function drawHardPullOverlay() {
  if (state.hardPullFeedback <= 0) return;
  ctx.save();
  ctx.fillStyle = `rgba(230, 40, 38, ${0.37 * state.hardPullFeedback})`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.restore();
}

function drawTakeMoneyButtons() {
  const enabled = state.drawerOpen && !state.drawerActive && !state.takeActive;
  for (const button of TAKE_BUTTONS) {
    const image = images[button.key];
    ctx.save();
    if (!enabled && !(state.takeActive && state.takeAmount === button.amount)) ctx.globalAlpha = 0.45;
    if (image) ctx.drawImage(image, button.x, button.y, IMAGE_SIZES.takeButton.w, IMAGE_SIZES.takeButton.h);
    else {
      ctx.fillStyle = "#523f2c";
      ctx.fillRect(button.x, button.y, IMAGE_SIZES.takeButton.w, IMAGE_SIZES.takeButton.h);
      drawUiText(String(button.amount), button.x + 46, button.y + 58, 28, "#fff", "center", "middle");
    }
    ctx.restore();

    if (state.takeActive && state.takeAmount === button.amount) {
      const iconH = IMAGE_SIZES.takeButton.h * 0.77;
      const overlayH = iconH * (1 - clamp(state.takeProgress / 100, 0, 1));
      if (overlayH > 0) {
        ctx.fillStyle = "rgba(246, 182, 82, 0.47)";
        ctx.fillRect(button.x, button.y + iconH - overlayH, IMAGE_SIZES.takeButton.w, overlayH);
      }
      if (images.takeStop) ctx.drawImage(images.takeStop, button.x, button.y, IMAGE_SIZES.takeButton.w, IMAGE_SIZES.takeButton.h);
    }
  }
}

function drawMoneyPopups() {
  for (const popup of state.moneyPopups) {
    const t = clamp(popup.timer / popup.duration, 0, 1);
    const eased = easeOutCubic(t);
    const y = popup.y - 48 * eased;
    ctx.save();
    ctx.globalAlpha = 1 - Math.max(0, (t - 0.72) / 0.28);
    ctx.font = "800 44px Arial, Microsoft YaHei, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(255, 214, 102, 0.72)";
    ctx.shadowBlur = 14;
    ctx.lineWidth = 7;
    ctx.strokeStyle = "rgba(58, 31, 5, 0.92)";
    ctx.strokeText(`+${popup.amount}`, popup.x, y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(255, 246, 196, 0.88)";
    ctx.strokeText(`+${popup.amount}`, popup.x, y);
    ctx.fillStyle = "#ffd76a";
    ctx.fillText(`+${popup.amount}`, popup.x, y);
    ctx.restore();
  }
}

function drawMoneyFlights() {
  const bill = images.moneyBill;
  if (!bill) return;
  for (const flight of state.moneyFlights) {
    const t = clamp(flight.timer / flight.duration, 0, 1);
    const eased = easeOutCubic(t);
    const arc = Math.sin(t * Math.PI) * 80;
    const x = flight.start.x + (flight.target.x - flight.start.x) * eased;
    const y = flight.start.y + (flight.target.y - flight.start.y) * eased - arc;
    const angle = flight.startAngle + flight.spin * t;
    const scale = 1.25 + (0.25 - 1.25) * eased;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.scale(scale, scale);
    ctx.drawImage(bill, -IMAGE_SIZES.moneyBill.w / 2, -IMAGE_SIZES.moneyBill.h / 2, IMAGE_SIZES.moneyBill.w, IMAGE_SIZES.moneyBill.h);
    ctx.restore();
  }
}

function drawDrawerProgressMeter() {
  const x = 360;
  const y = 112;
  const totalH = 150;
  const progress = clamp(state.drawerProgress, 0, 100);
  const fillFromBottom = (totalH * progress) / 100;
  const fills = ["#cf6f26", "#e28930", "#f0aa47", "#f8cd69"];
  const topW = 70;
  const bottomW = 34;
  const gap = 5;
  const centerX = x + topW / 2;

  function widthAt(localY) {
    return topW + (bottomW - topW) * (localY / totalH);
  }

  function trapezoid(topY, bottomY, inset = 0) {
    const topWidth = widthAt(topY) - inset * 2;
    const bottomWidth = widthAt(bottomY) - inset * 2;
    return [
      [centerX - topWidth / 2, y + topY],
      [centerX + topWidth / 2, y + topY],
      [centerX + bottomWidth / 2, y + bottomY],
      [centerX - bottomWidth / 2, y + bottomY],
    ];
  }

  function drawPoly(points, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) ctx.lineTo(points[i][0], points[i][1]);
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  for (let index = 0; index < 4; index += 1) {
    const segTop = (index * totalH) / 4 + (index > 0 ? gap / 2 : 0);
    const segBottom = ((index + 1) * totalH) / 4 - (index < 3 ? gap / 2 : 0);
    drawPoly(trapezoid(segTop, segBottom).map(([px, py]) => [px + 5, py + 5]), "rgba(0,0,0,0.32)");

    const fillTop = totalH - fillFromBottom;
    const visibleTop = Math.max(segTop, fillTop);
    if (visibleTop < segBottom) drawPoly(trapezoid(visibleTop, segBottom, 1), fills[index]);
    drawPoly(trapezoid(segTop, segBottom), null, "rgb(255,232,174)");
  }

  ctx.save();
  ctx.strokeStyle = "rgb(255,244,203)";
  ctx.lineWidth = 2;
  for (const mark of DRAWER_JAM_POINTS) {
    const localY = totalH - (totalH * mark) / 100;
    const markY = y + localY;
    const markW = widthAt(localY);
    ctx.beginPath();
    ctx.moveTo(centerX - markW / 2 + 6, markY);
    ctx.lineTo(centerX + markW / 2 - 6, markY);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPlayer() {
  if (!state.playerDeployed) return;
  if (state.playerIntroActive) {
    hideIdleGif();
    positionIntroGif();
    return;
  }

  if (!state.playerMoving) {
    hideWalkBackGif();
    showIdleGif();
    return;
  }

  hideIdleGif();
  if (state.viewMode === "bedroom_after") {
    showWalkBackGif();
    return;
  }
  hideWalkBackGif();
  const image = getPlayerImage();
  if (image) {
    const baseOffset = IDLE_DRAW_OFFSET;
    const frameOffset = getWalkFrameAnchorOffset();
    ctx.drawImage(
      image,
      state.player.x + state.player.w / 2 + baseOffset.x + frameOffset.x - IMAGE_SIZES.wei.w / 2,
      state.player.y + state.player.h + baseOffset.y + frameOffset.y - IMAGE_SIZES.wei.h,
      IMAGE_SIZES.wei.w,
      IMAGE_SIZES.wei.h,
    );
    return;
  }

  ctx.fillStyle = "#f0e19a";
  ctx.fillRect(state.player.x, state.player.y, state.player.w, state.player.h);
}

function getPlayerImage() {
  if (!state.playerMoving) return null;
  return walkFrames[getWalkFrameIndex()] || images.weiWalk;
}

function getWalkFrameIndex() {
  if (Number.isInteger(LOCK_WALK_FRAME_INDEX)) return clamp(LOCK_WALK_FRAME_INDEX, 0, walkFrames.length - 1);
  return Math.floor(state.walkFrameTimer / WALK_FRAME_TIME) % walkFrames.length;
}

function getWalkFrameAnchorOffset() {
  return WALK_FRAME_ANCHOR_OFFSETS[getWalkFrameIndex()] || { x: 0, y: 0 };
}

function drawDeployUi() {
  if (state.playerDeployed) {
    hideDeployHint();
    return;
  }

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.42)";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.restore();

  const platform = state.deployDragging ? images.deployActive : images.deployIdle;
  if (platform) ctx.drawImage(platform, DEPLOY_ZONE.x, DEPLOY_ZONE.y, IMAGE_SIZES.deploy.w, IMAGE_SIZES.deploy.h);
  else {
    ctx.fillStyle = "#314050";
    ctx.fillRect(DEPLOY_ZONE.x, DEPLOY_ZONE.y, DEPLOY_ZONE.w, DEPLOY_ZONE.h);
  }

  if (images.costBar) ctx.drawImage(images.costBar, WIDTH - IMAGE_SIZES.costBar.w, 508, IMAGE_SIZES.costBar.w, IMAGE_SIZES.costBar.h);

  const cardRect = getCardRect();
  if (images.weikaCard) ctx.drawImage(images.weikaCard, cardRect.x, cardRect.y, cardRect.w, cardRect.h);

  if (state.deployDragging && images.weiIdle) {
    ctx.drawImage(
      images.weiIdle,
      state.deployDragPos.x - IMAGE_SIZES.wei.w / 2,
      state.deployDragPos.y - IMAGE_SIZES.wei.h,
      IMAGE_SIZES.wei.w,
      IMAGE_SIZES.wei.h,
    );
  }

  showDeployHint();
}

function drawTopStats() {
  const topTimerCenterOffsetX = -70;
  const topTimerCenterOffsetY = 0;
  if (images.topStats) {
    const x = WIDTH / 2 - images.topStats.width / 2;
    ctx.drawImage(images.topStats, x, 0);
    drawUiText(`${state.moneyTakenTotal}/???`, x + 170, 35, 30, "#eeeeec", "center", "middle");
    const minutes = Math.floor(state.gameTimer / 60);
    const seconds = Math.floor(state.gameTimer % 60);
    const timerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    drawTimerGlow(x + topTimerCenterOffsetX, 36 + topTimerCenterOffsetY, timerText);
    drawUiText(timerText, x + topTimerCenterOffsetX, 36 + topTimerCenterOffsetY, 30, "#f4f4f2", "center", "middle");
  } else {
    drawUiText(`${state.moneyTakenTotal}/???`, 538, 35, 30, "#eeeeec", "center", "middle");
    drawTimerGlow(324, 36 + topTimerCenterOffsetY, "03:00");
    drawUiText("03:00", 324, 36 + topTimerCenterOffsetY, 30, "#f4f4f2", "center", "middle");
  }

  drawBar(365, 76, 550, 8, state.dadPressure / 100, state.dadPressure >= 75 ? "#c82d2f" : "#a73436");
}

function drawTimerGlow(centerX, centerY, text) {
  ctx.save();
  ctx.font = "700 30px Arial, Microsoft YaHei, sans-serif";
  const metrics = ctx.measureText(text);
  const w = metrics.width + 22;
  const h = 44;
  const x = centerX - w / 2;
  const y = centerY - h / 2;
  for (const [inflate, alpha] of [
    [16, 0.08],
    [10, 0.14],
    [4, 0.22],
    [0, 0.34],
  ]) {
    ctx.fillStyle = `rgba(210, 32, 42, ${alpha})`;
    ctx.fillRect(x - inflate / 2, y - inflate / 2, w + inflate, h + inflate);
  }
  ctx.restore();
}

function drawBossIntro() {
  if (state.bossIntroTimer <= 0) return;
  if (images.bossIntro) ctx.drawImage(images.bossIntro, 919, 78, IMAGE_SIZES.bossIntro.w, IMAGE_SIZES.bossIntro.h);

  const ratio = clamp(state.bossIntroTimer / BOSS_INTRO_TIME, 0, 1);
  ctx.save();
  ctx.strokeStyle = "rgba(245, 246, 244, 0.96)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(1252, 140, 22, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ratio);
  ctx.stroke();
  ctx.restore();
}

function drawControls() {
  const speedImage = state.speedMultiplier === 2 ? images.speed1x : images.speed2x;
  const pauseImage = state.paused ? images.continueButton : images.pauseButton;
  if (speedImage) ctx.drawImage(speedImage, SPEED_BUTTON.x, SPEED_BUTTON.y, IMAGE_SIZES.speedButton.w, IMAGE_SIZES.speedButton.h);
  if (pauseImage) {
    const size = state.paused ? IMAGE_SIZES.continueButton : IMAGE_SIZES.pauseButton;
    drawImageCentered(pauseImage, PAUSE_BUTTON.x + 45, PAUSE_BUTTON.y + 45, size.w, size.h);
  }

  if (!state.paused) return;

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.restore();
  drawText("PAUSE", WIDTH / 2, 282, 78, "rgba(235,235,232,0.86)", "center");
  drawText(TEXT.paused, WIDTH / 2, 350, 20, "rgba(225,225,222,0.8)", "center");
}

function drawHud() {
  drawTopStats();
  drawBossIntro();
  drawControls();
  drawRescueOverlay();
  if (state.gameState === "SUCCESS") drawSuccessOverlay();
  if (state.gameState === "SUCCESS_SUMMARY") drawSuccessSummaryOverlay();
  if (state.gameState === "GAME_OVER") drawFailOverlay();
}

function drawSuccessOverlay() {
  ctx.save();
  const complete = images.complete;
  if (complete) {
    const totalTime = COMPLETE_ENTER_TIME + COMPLETE_HOLD_TIME + COMPLETE_EXIT_TIME;
    const timer = Math.min(state.successTimer, totalTime);
    const imageW = IMAGE_SIZES.complete.w;
    const imageH = IMAGE_SIZES.complete.h;
    const startX = -imageW / 2;
    const middleX = WIDTH / 2;
    const endX = WIDTH + imageW / 2;
    let centerX = endX;

    if (timer < COMPLETE_ENTER_TIME) {
      centerX = lerp(startX, middleX, easeOutCubic(timer / COMPLETE_ENTER_TIME));
    } else if (timer < COMPLETE_ENTER_TIME + COMPLETE_HOLD_TIME) {
      centerX = middleX;
    } else if (timer < totalTime) {
      const exitTimer = timer - COMPLETE_ENTER_TIME - COMPLETE_HOLD_TIME;
      centerX = lerp(middleX, endX, easeInCubic(exitTimer / COMPLETE_EXIT_TIME));
    }

    if (timer < totalTime) ctx.drawImage(complete, centerX - imageW / 2, HEIGHT / 2 - imageH / 2, imageW, imageH);
    drawUiText(`拿到 ${state.moneyTakenTotal} 元`, WIDTH / 2, HEIGHT - 46, 24, "#fff4c4", "center", "middle");
  } else {
    ctx.fillStyle = "rgba(0, 0, 0, 0.38)";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    drawUiText(TEXT.success, WIDTH / 2, HEIGHT / 2 - 24, 54, "#f2f2ee", "center", "middle");
    drawUiText("Money: " + state.moneyTakenTotal, WIDTH / 2, HEIGHT / 2 + 36, 28, "#ffd47a", "center", "middle");
  }
  ctx.restore();
}

function drawFailOverlay() {
  ctx.save();
  const progress = easeOutCubic(Math.min(1, state.failTimer / FAIL_INTRO_TIME));
  failBackdropCtx.clearRect(0, 0, WIDTH, HEIGHT);
  failBackdropCtx.drawImage(canvas, 0, 0);

  ctx.globalAlpha = lerp(0.2, 0.96, progress);
  ctx.filter = `blur(${lerp(2, 9, progress)}px) saturate(0.78) brightness(0.82)`;
  ctx.drawImage(failBackdropCanvas, -16, -16, WIDTH + 32, HEIGHT + 32);
  ctx.filter = "none";
  ctx.globalAlpha = 1;

  const redWash = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  redWash.addColorStop(0, `rgba(31, 13, 23, ${lerp(0.22, 0.42, progress)})`);
  redWash.addColorStop(0.45, `rgba(88, 18, 24, ${lerp(0.18, 0.36, progress)})`);
  redWash.addColorStop(1, `rgba(26, 16, 18, ${lerp(0.18, 0.34, progress)})`);
  ctx.fillStyle = redWash;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const vignette = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 170, WIDTH / 2, HEIGHT / 2, 725);
  vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
  vignette.addColorStop(0.68, `rgba(24, 5, 9, ${0.18 * progress})`);
  vignette.addColorStop(1, `rgba(0, 0, 0, ${0.46 * progress})`);
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  if (images.failSay) {
    const scale = lerp(1.08, 1, progress);
    const yOffset = lerp(-18, 0, progress);
    ctx.globalAlpha = lerp(0.16, 1, progress);
    ctx.drawImage(
      images.failSay,
      WIDTH / 2 - (IMAGE_SIZES.failSay.w * scale) / 2,
      HEIGHT / 2 - (IMAGE_SIZES.failSay.h * scale) / 2 + yOffset,
      IMAGE_SIZES.failSay.w * scale,
      IMAGE_SIZES.failSay.h * scale,
    );
    ctx.globalAlpha = 1;
  } else {
    drawUiText(TEXT.gameOver, WIDTH / 2, HEIGHT / 2 - 20, 54, "#f2f2ee", "center", "middle");
  }

  if (state.failTimer >= FAIL_HINT_DELAY) {
    const alpha = Math.min(1, (state.failTimer - FAIL_HINT_DELAY) / 0.35);
    ctx.globalAlpha = alpha;
    drawUiText("按 R 或点击重开", WIDTH / 2, HEIGHT - 46, 24, "#f4f4f0", "center", "middle");
  }
  ctx.restore();
}

function drawSuccessSummaryOverlay() {
  const fade = easeOutCubic(Math.min(1, state.summaryTimer / 0.5));
  ctx.save();
  ctx.fillStyle = `rgba(0, 0, 0, ${0.44 * fade})`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.globalAlpha = fade;
  drawUiText("本次收获", WIDTH / 2, 290, 36, "rgba(255, 248, 235, 0.9)", "center", "middle");
  ctx.font = "800 74px Arial, Microsoft YaHei, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(255, 214, 102, 0.68)";
  ctx.shadowBlur = 18;
  ctx.lineWidth = 8;
  ctx.strokeStyle = "rgba(52, 28, 5, 0.82)";
  ctx.strokeText(`${state.moneyTakenTotal} 元`, WIDTH / 2, 365);
  ctx.fillStyle = "#ffd76a";
  ctx.fillText(`${state.moneyTakenTotal} 元`, WIDTH / 2, 365);
  ctx.restore();
  showSummaryHomeButton();
}

function drawRestartTransitionOverlay() {
  const half = RESTART_TRANSITION_TIME / 2;
  const timer = clamp(state.restartTransitionTimer, 0, RESTART_TRANSITION_TIME);
  const alpha = timer <= half ? timer / half : 1 - (timer - half) / half;
  ctx.save();
  ctx.fillStyle = `rgba(0, 0, 0, ${clamp(alpha, 0, 1)})`;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.restore();
}

function exitDrawerWithMoney() {
  state.viewMode = "bedroom_after";
  state.gameState = "RETREAT";
  state.moneyTakenTotal = Math.max(1, state.moneyTakenTotal);
  state.drawerProgress = 0;
  state.drawerOpen = false;
  state.drawerActive = false;
  state.drawerIsPulling = false;
  state.dadPressure = Math.max(state.dadPressure, currentStageRules().pressureFloor);
  resetEventTimer();
  state.playerMoving = false;
  state.message = TEXT.drawerExit;
  state.messageTimer = 2;
  hideIdleGif();
}

function handleDrawerClick(point) {
  if (usePillow(pillowAtPoint(point))) return;

  const button = TAKE_BUTTONS.find((item) =>
    rectContains({ x: item.x, y: item.y, w: IMAGE_SIZES.takeButton.w, h: IMAGE_SIZES.takeButton.h }, point),
  );
  if (button) {
    if (state.takeActive && state.takeAmount === button.amount) cancelTakeMoney();
    else startTakeMoney(button.amount);
  }
}

function startDrawerAction(mode) {
  if (state.drawerActive || state.takeActive) return;
  if (state.drawerJamWaitTimer > 0) {
    state.hardPullFeedback = Math.min(1, state.hardPullFeedback + 0.35);
    state.dadPressure = Math.min(100, state.dadPressure + pressureGainWithDanger(4));
    state.noiseVelocity += 0.18 + Math.random() * 0.06;
    return;
  }
  state.drawerMode = mode;
  state.drawerActive = true;
  state.drawerIsPulling = true;
  state.gameState = "APPROACH_DRAWER";
  startDrawerMoveSound();
}

function startTakeMoney(amount) {
  if (!state.drawerOpen || state.drawerActive || state.takeActive) return;
  state.takeActive = true;
  state.takeAmount = amount;
  state.takeProgress = 0;
  state.gameState = "MONEY_ACTION";
}

function stopDrawerAction() {
  if (!state.drawerActive) return;
  state.drawerActive = false;
  state.drawerIsPulling = false;
  stopDrawerMoveSound();
  if (state.drawerJammed && state.drawerMode === "opening") state.drawerJamWaitTimer = DRAWER_JAM_WAIT;
}

function completeTakeMoney() {
  const got = state.takeAmount;
  state.moneyTakenTotal += got;
  launchMoneyReward(got);
  playMoneySound(got);
  state.takeActive = false;
  state.takeAmount = 0;
  state.takeProgress = 0;
  state.gameState = "RETREAT";
}

function cancelTakeMoney() {
  if (!state.takeActive) return;
  const partial = Math.floor(state.takeAmount * (state.takeProgress / 100) * 0.65);
  if (partial > 0) {
    state.moneyTakenTotal += partial;
    launchMoneyReward(partial);
    playMoneySound(partial);
  }
  state.takeActive = false;
  state.takeAmount = 0;
  state.takeProgress = 0;
  state.gameState = state.moneyTakenTotal > 0 ? "RETREAT" : "MONEY_ACTION";
}

function launchMoneyReward(amount) {
  state.moneyPopups.push({
    amount,
    timer: 0,
    duration: 0.95,
    x: MONEY_BILL_START.x,
    y: MONEY_BILL_START.y,
  });
  state.moneyFlights.push({
    timer: 0,
    duration: 0.82,
    start: MONEY_BILL_START,
    target: WALLET_CENTER,
    startAngle: Math.random() * 36 - 18,
    spin: (Math.random() < 0.5 ? -1 : 1) * (260 + Math.random() * 160),
  });
}

function updateDrawer(dt) {
  state.hardPullFeedback = Math.max(0, state.hardPullFeedback - dt * 3);
  if (state.drawerJamWaitTimer > 0) {
    state.drawerJamWaitTimer = Math.max(0, state.drawerJamWaitTimer - dt);
    if (state.drawerJamWaitTimer <= 0) {
      state.drawerJammed = false;
      state.drawerJamIndex = Math.min(state.drawerJamIndex + 1, DRAWER_JAM_POINTS.length);
    }
  }

  if (!state.drawerActive) return;
  state.drawerIsPulling = true;

  if (state.drawerMode === "closing") {
    state.drawerProgress -= 34 * dt;
  } else {
    if (state.drawerJammed) {
      state.noiseVelocity += 0.22 + Math.random() * 0.08;
      state.dadPressure = Math.min(100, state.dadPressure + pressureGainWithDanger(36) * dt);
      state.hardPullFeedback = Math.min(1, state.hardPullFeedback + dt * 2.8);
      stopDrawerMoveSound();
      return;
    }
    state.drawerProgress += 28 * dt;
    if (state.drawerJamIndex < DRAWER_JAM_POINTS.length) {
      const jamPoint = DRAWER_JAM_POINTS[state.drawerJamIndex];
      if (state.drawerProgress >= jamPoint) {
        state.drawerProgress = jamPoint;
        state.drawerJammed = true;
        stopDrawerMoveSound();
        playSound(sounds.drawerJam);
        state.hardPullFeedback = Math.max(state.hardPullFeedback, 0.45);
        return;
      }
    }
  }

  state.noiseVelocity += 0.11 + Math.random() * 0.05;
  state.dadPressure = Math.min(100, state.dadPressure + pressureGainWithDanger(20 + state.noise * 0.075) * dt);

  if (state.drawerProgress >= 100) {
    state.drawerProgress = 100;
    state.drawerOpen = true;
    state.drawerActive = false;
    state.drawerIsPulling = false;
    stopDrawerMoveSound();
    state.gameState = "MONEY_ACTION";
  } else if (state.drawerProgress <= 0) {
    state.drawerProgress = 0;
    state.drawerOpen = false;
    state.drawerActive = false;
    state.drawerIsPulling = false;
    stopDrawerMoveSound();
    playSound(sounds.drawerClose);
    state.drawerMode = "opening";
    if (state.moneyTakenTotal > 0) exitDrawerWithMoney();
    else {
      state.viewMode = "bedroom_before";
      state.gameState = "NAVIGATION";
      state.drawerJammed = false;
      state.drawerJamIndex = 0;
      state.drawerJamWaitTimer = 0;
      resetEventTimer();
    }
  }
}

function updateTakeMoney(dt) {
  if (!state.takeActive) return;
  const duration = TAKE_DURATIONS[state.takeAmount] || 2.5;
  state.takeProgress += (100 * dt) / duration;
  const curve = (state.takeProgress / 100) ** 2;
  state.noiseVelocity += (0.13 + curve * 0.18) * (1 + state.takeAmount / 12);
  state.dadPressure = Math.min(
    100,
    state.dadPressure + pressureGainWithDanger(7.2 + state.takeAmount * 0.48 + state.noise * 0.055) * dt,
  );
  if (state.takeProgress >= 100) completeTakeMoney();
}

function usePillow(pillow) {
  if (!pillow || state.usedPillows.has(pillow.id)) return false;
  state.pillowHintDone = true;
  state.usedPillows.add(pillow.id);
  playSound(sounds.pillowHit);
  launchPillowFlight(pillow);
  state.dadPressure = Math.max(0, state.dadPressure - pillow.drop);
  if (state.dadPressure < 100) state.wakeGraceTimer = 0;
  state.message = TEXT.pillowUsed;
  state.messageTimer = 1.4;
  return true;
}

function launchPillowFlight(pillow) {
  const viewMode = state.viewMode;
  const drawerPlacement = DRAWER_PILLOW_PLACEMENTS[pillow.key];
  const start =
    viewMode === "drawer_closeup"
      ? { x: drawerPlacement.x, y: drawerPlacement.y, angle: drawerPlacement.angle, scale: drawerPlacement.scale }
      : { x: pillow.x, y: pillow.y, angle: pillow.angle, scale: 1 };
  const target = usedPillowPlacement(state.usedPillowLabels.length + state.pillowFlights.length, viewMode);
  state.pillowFlights.push({
    id: pillow.id,
    viewMode,
    timer: 0,
    duration: 0.65,
    start,
    target,
  });
}

function pillowAtPoint(point) {
  if (state.viewMode === "drawer_closeup") return drawerPillowAtPoint(point);
  return PILLOW_ITEMS.find((pillow) => {
    if (state.usedPillows.has(pillow.id)) return false;
    return rectContains(
      {
        x: pillow.x - pillow.size.w / 2,
        y: pillow.y - pillow.size.h / 2,
        w: pillow.size.w,
        h: pillow.size.h,
      },
      point,
    );
  });
}

function drawerPillowAtPoint(point) {
  return PILLOW_ITEMS.find((pillow) => {
    if (state.usedPillows.has(pillow.id)) return false;
    const placement = DRAWER_PILLOW_PLACEMENTS[pillow.key];
    const w = pillow.size.w * placement.scale;
    const h = pillow.size.h * placement.scale;
    return rectContains({ x: placement.x - w / 2, y: placement.y - h / 2, w, h }, point);
  });
}

function pillowInPlayerRange() {
  const [x, y] = playerFootPoint();
  return PILLOW_ITEMS.find((pillow) => !state.usedPillows.has(pillow.id) && rectContains(pillow.zone, { x, y }));
}

function updatePillowFlights(dt) {
  const remaining = [];
  for (const flight of state.pillowFlights) {
    flight.timer += dt;
    if (flight.timer >= flight.duration) state.usedPillowLabels.push(flight.id);
    else remaining.push(flight);
  }
  state.pillowFlights = remaining;
}

function updateMoneyEffects(dt) {
  state.moneyPopups = state.moneyPopups
    .map((popup) => ({ ...popup, timer: popup.timer + dt }))
    .filter((popup) => popup.timer < popup.duration);
  state.moneyFlights = state.moneyFlights
    .map((flight) => ({ ...flight, timer: flight.timer + dt }))
    .filter((flight) => flight.timer < flight.duration);
}

function triggerDadEvent() {
  resetEventTimer();
  if (Math.random() < 0.55) {
    playSound(sounds.dadTurn);
    state.dadPose = state.dadPose === "sleeping" ? "resleeping" : "sleeping";
    state.dadPressure = Math.min(100, state.dadPressure + 4);
    state.sleepDepth = Math.max(0, state.sleepDepth - 22);
    state.sleepSensitivity = Math.max(state.sleepSensitivity, 1.26);
    state.dangerWindowTimer = randomBetween(4.4, 5.0);
    state.dangerWindowMultiplier = 4;
    state.dangerWindowLabel = "turn";
    state.eventFlash = state.dangerWindowTimer;
    state.message = "爸爸翻身了，先停一下";
    state.messageTimer = 1.7;
  } else {
    playRandomSound(sounds.dadDreams);
    state.dadPressure = Math.min(100, state.dadPressure + 2);
    state.sleepDepth = Math.max(0, state.sleepDepth - 10);
    state.sleepSensitivity = Math.max(state.sleepSensitivity, 1.1);
    state.dangerWindowTimer = randomBetween(4.0, 4.6);
    state.dangerWindowMultiplier = 2.8;
    state.dangerWindowLabel = "dream";
    if (Math.random() < 0.45) state.dadPose = state.dadPose === "sleeping" ? "resleeping" : "sleeping";
    state.eventFlash = state.dangerWindowTimer;
    state.message = "爸爸在说梦话，先停一下";
    state.messageTimer = 1.7;
  }
}

function updateDadEvents(dt) {
  if (state.gameState === "SUCCESS" || state.gameState === "GAME_OVER") return;
  state.eventTimer -= dt;
  if (state.eventTimer <= 0) triggerDadEvent();
  state.eventFlash = Math.max(0, state.eventFlash - dt);
  if (state.dangerWindowTimer > 0) {
    state.dangerWindowTimer = Math.max(0, state.dangerWindowTimer - dt);
    if (state.dangerWindowTimer <= 0) {
      state.dangerWindowMultiplier = 1;
      state.dangerWindowLabel = "";
    }
  }
}

function updateWakeAndFailure(dt) {
  if (state.gameState === "SUCCESS" || state.gameState === "GAME_OVER") return;

  if (state.gameTimer <= 0) {
    triggerGameOver();
    return;
  }

  if (state.dadPressure >= 100) {
    if (state.wakeGraceTimer <= 0) state.wakeGraceTimer = WAKE_GRACE_TIME;
  } else {
    state.wakeGraceTimer = 0;
  }

  if (state.wakeGraceTimer > 0) {
    state.wakeGraceTimer -= dt;
    if (state.wakeGraceTimer <= 0 && state.dadPressure >= 100) triggerGameOver();
  }
}

function triggerGameOver() {
  state.gameState = "GAME_OVER";
  state.failTimer = 0;
  state.playerMoving = false;
  state.drawerActive = false;
  state.drawerIsPulling = false;
  state.drawerJammed = false;
  state.takeActive = false;
  state.takeProgress = 0;
  state.dangerWindowTimer = 0;
  state.eventFlash = 0;
  stopGameMusic();
  stopDrawerMoveSound();
  playSound(sounds.failVoice);
  hideGameplayCharacterGifs();
  clearPillowOverlay();
}

function triggerSuccess() {
  state.gameState = "SUCCESS";
  state.successTimer = 0;
  state.summaryTimer = 0;
  state.playerMoving = false;
  state.drawerActive = false;
  state.takeActive = false;
  state.dangerWindowTimer = 0;
  state.eventFlash = 0;
  state.wakeGraceTimer = 0;
  state.dadPose = "sleeping";
  state.sleepSensitivity = 1;
  stopGameMusic();
  stopDrawerMoveSound();
  playSound(sounds.successVoice);
  hideGameplayCharacterGifs();
  clearPillowOverlay();
}

function enterDeployScreen() {
  state.gameState = "NAVIGATION";
  state.viewMode = "bedroom_before";
  state.welcomeTimer = 0;
  state.welcomeDragging = false;
  closeDreamOverlay();
  state.paused = false;
  state.message = TEXT.deployMessage;
  state.messageTimer = 4;
  resetEventTimer();
  stopWelcomeMusic();
  updateGameMusic();
  stopDrawerMoveSound();
  hideWelcomeGif();
  hideIdleGif();
  hideWalkBackGif();
  hideStartGif();
}

function resetGame() {
  resetRunState("WELCOME");
}

function resetRunState(nextState = "WELCOME") {
  Object.keys(keys).forEach((key) => {
    keys[key] = false;
  });
  state.gameState = nextState;
  state.viewMode = "bedroom_before";
  state.welcomeTimer = 0;
  state.welcomeChild = { x: 640, y: 700, scale: 0.95 };
  state.welcomeFacing = "right";
  state.welcomeDragging = false;
  state.welcomeDragOffset = { x: 0, y: 0 };
  state.welcomeWasInDrawerZone = false;
  state.welcomePickTimer = 0;
  state.welcomePickNonce = 0;
  state.dreamOpen = false;
  state.dreamIndex = 0;
  state.dreamNextIndex = 0;
  state.dreamRetriggerTimer = 0;
  state.dreamSequenceDone = false;
  state.dreamArmed = true;
  state.dreamTransitionActive = false;
  state.dreamTransitionTimer = 0;
  state.dreamTransitionVideoReady = false;
  state.player = { x: 74, y: 660, w: PLAYER_SIZE.w, h: PLAYER_SIZE.h };
  state.playerMoving = false;
  state.playerDeployed = false;
  state.playerIntroActive = false;
  state.playerIntroTimer = 0;
  state.walkFrameTimer = 0;
  state.deployDragging = false;
  state.deployDragPos = { x: 88, y: 688 };
  state.noise = 0;
  state.noiseVelocity = 0;
  state.dadPressure = DAD_PRESSURE_MIN;
  state.sleepDepth = 100;
  state.sleepSensitivity = 1;
  state.dadPose = "sleeping";
  state.eventFlash = 0;
  state.dangerWindowTimer = 0;
  state.dangerWindowMultiplier = 1;
  state.dangerWindowLabel = "";
  state.gameTimer = GAME_TIME_LIMIT;
  state.bossIntroTimer = BOSS_INTRO_TIME;
  state.speedMultiplier = 1;
  state.paused = false;
  state.moveHintDone = false;
  state.pillowHintDone = false;
  state.drawerHintDone = false;
  state.message = TEXT.deployMessage;
  state.messageTimer = 4;
  state.drawerProgress = 0;
  state.drawerOpen = false;
  state.drawerActive = false;
  state.drawerMode = "opening";
  state.drawerIsPulling = false;
  state.drawerJammed = false;
  state.drawerJamIndex = 0;
  state.drawerJamWaitTimer = 0;
  state.hardPullFeedback = 0;
  state.takeActive = false;
  state.takeAmount = 0;
  state.takeProgress = 0;
  state.moneyTakenTotal = 0;
  state.moneyPopups = [];
  state.moneyFlights = [];
  state.wakeGraceTimer = 0;
  state.successTimer = 0;
  state.failTimer = 0;
  state.summaryTimer = 0;
  state.restartTransitionTimer = 0;
  state.restartTransitionSwapped = false;
  state.usedPillows = new Set();
  state.usedPillowLabels = [];
  state.pillowFlights = [];
  resetEventTimer();
  closeDreamOverlay();
  stopGameMusic();
  stopDrawerMoveSound();
  hideSummaryHomeButton();
  hideIdleGif();
  hideWalkBackGif();
  hideStartGif();
}

function restartToDeploy() {
  if (state.gameState === "RESTART_TRANSITION") return;
  Object.keys(keys).forEach((key) => {
    keys[key] = false;
  });
  state.gameState = "RESTART_TRANSITION";
  state.restartTransitionTimer = 0;
  state.restartTransitionSwapped = false;
  state.playerMoving = false;
  state.drawerActive = false;
  state.drawerIsPulling = false;
  state.takeActive = false;
  stopGameMusic();
  stopDrawerMoveSound();
  hideIdleGif();
  hideWalkBackGif();
  hideStartGif();
}

function finishRestartToDeploy() {
  const timer = state.restartTransitionTimer;
  resetRunState("NAVIGATION");
  state.restartTransitionTimer = timer;
  state.restartTransitionSwapped = true;
  state.playerDeployed = false;
  state.message = TEXT.deployMessage;
  state.messageTimer = 4;
  hideWelcomeGif();
  stopWelcomeMusic();
  updateGameMusic();
}

function update(dt) {
  if (state.gameState === "RESTART_TRANSITION") {
    state.restartTransitionTimer = Math.min(RESTART_TRANSITION_TIME, state.restartTransitionTimer + dt);
    if (!state.restartTransitionSwapped && state.restartTransitionTimer >= RESTART_TRANSITION_TIME / 2) {
      state.restartTransitionSwapped = true;
      finishRestartToDeploy();
      state.gameState = "RESTART_TRANSITION";
    }
    if (state.restartTransitionTimer >= RESTART_TRANSITION_TIME) {
      state.gameState = "NAVIGATION";
      state.restartTransitionTimer = 0;
      state.restartTransitionSwapped = false;
    }
    return;
  }

  if (state.gameState === "WELCOME") {
    state.welcomeTimer += dt;
    updateWelcomeDrawerPick(dt);
    updateWelcomeGifVariant();
    updateDreamTrigger(dt);
    positionWelcomeOverlays();
    hideIdleGif();
    hideWalkBackGif();
    hideStartGif();
    return;
  }

  hideWelcomeGif();

  if (!state.paused) state.bossIntroTimer = Math.max(0, state.bossIntroTimer - dt);
  if (state.gameState === "SUCCESS") {
    state.playerMoving = false;
    hideWalkBackGif();
    state.successTimer += dt;
    if (state.successTimer >= COMPLETE_ENTER_TIME + COMPLETE_HOLD_TIME + COMPLETE_EXIT_TIME) {
      state.gameState = "SUCCESS_SUMMARY";
      state.summaryTimer = 0;
      state.wakeGraceTimer = 0;
      state.dangerWindowTimer = 0;
      state.eventFlash = 0;
      state.dadPose = "sleeping";
      state.sleepSensitivity = 1;
    }
    return;
  }
  if (state.gameState === "SUCCESS_SUMMARY") {
    state.summaryTimer += dt;
    hideWalkBackGif();
    return;
  }
  if (state.gameState === "GAME_OVER") {
    state.failTimer += dt;
    hideWalkBackGif();
    return;
  }
  if (state.paused || !state.playerDeployed) {
    state.playerMoving = false;
    hideWalkBackGif();
    return;
  }

  state.gameTimer = Math.max(0, state.gameTimer - dt);
  if (state.messageTimer > 0) state.messageTimer -= dt;
  updatePillowFlights(dt);
  updateMoneyEffects(dt);
  updateDadEvents(dt);
  if (state.playerIntroActive) {
    state.playerIntroTimer += dt;
    state.playerMoving = false;
    if (state.playerIntroTimer >= PLAYER_INTRO_DURATION) {
      state.playerIntroActive = false;
      hideStartGif();
      showIdleGif();
    }
    return;
  }

  if (state.viewMode === "drawer_closeup") {
    state.playerMoving = false;
    hideWalkBackGif();
    updateDrawer(dt);
    updateTakeMoney(dt);
    state.noise += state.noiseVelocity;
    state.noiseVelocity *= 0.86;
    state.noise = clamp(state.noise - 10 * dt, 0, 100);
    updateDadSleepDepth(dt, state.drawerActive || state.takeActive);
    if (!state.drawerActive && !state.takeActive) {
      state.dadPressure = Math.max(currentStageRules().pressureFloor, state.dadPressure - 8 * dt);
    }
    updateWakeAndFailure(dt);
    return;
  }

  const move = { x: 0, y: 0 };
  if (keys.KeyW || keys.ArrowUp) move.y -= 1;
  if (keys.KeyS || keys.ArrowDown) move.y += 1;
  if (keys.KeyA || keys.ArrowLeft) move.x -= 1;
  if (keys.KeyD || keys.ArrowRight) move.x += 1;

  const length = Math.hypot(move.x, move.y);
  state.playerMoving = false;
  if (length > 0) {
    move.x /= length;
    move.y /= length;
    const oldX = state.player.x;
    const oldY = state.player.y;
    const speed = PLAYER_SPEED * state.speedMultiplier;
    const dx = Math.round(move.x * speed * dt);
    const dy = Math.round(move.y * speed * dt);

    state.player.x = clamp(state.player.x + dx, 18, 18 + (WIDTH - 36) - state.player.w);
    if (footHitsObstacle()) state.player.x = oldX;
    state.player.y = clamp(state.player.y + dy, 68, 68 + (HEIGHT - 82) - state.player.h);
    if (footHitsObstacle()) state.player.y = oldY;

    state.playerMoving = state.player.x !== oldX || state.player.y !== oldY;
    if (state.playerMoving) {
      const floor = currentFloor();
      const stage = currentStageRules();
      state.walkFrameTimer += dt;
      state.noiseVelocity += 0.055 * floor.noiseMultiplier;
      const pressureGain = pressureGainWithDanger((4.2 + state.noise * 0.07) * floor.noiseMultiplier * stage.movePressure);
      state.dadPressure = Math.min(100, state.dadPressure + pressureGain * dt * state.speedMultiplier);
    } else {
      state.walkFrameTimer = 0;
    }
  } else {
    state.walkFrameTimer = 0;
  }

  state.noise += state.noiseVelocity;
  state.noiseVelocity *= 0.86;
  state.noise = clamp(state.noise - 10 * dt, 0, 100);
  updateDadSleepDepth(dt, state.playerMoving);
  if (!state.playerMoving) state.dadPressure = Math.max(currentStageRules().pressureFloor, state.dadPressure - 8 * dt);
  updateWakeAndFailure(dt);

  if (pointInPolygon(playerFootPoint(), DOOR_EXIT_POINTS)) {
    if (state.moneyTakenTotal > 0) {
      triggerSuccess();
      return;
    }
    state.message = TEXT.door;
    state.messageTimer = 0.5;
  }

  if (state.moneyTakenTotal <= 0 && rectContains(DRAWER_INTERACT_ZONE, { x: playerFootPoint()[0], y: playerFootPoint()[1] })) {
    state.viewMode = "drawer_closeup";
    state.gameState = "APPROACH_DRAWER";
    state.playerMoving = false;
    state.dadPressure = Math.max(state.dadPressure, currentStageRules().pressureFloor);
    resetEventTimer();
    hideIdleGif();
    hideWalkBackGif();
  }
}

function render() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  clearPillowOverlay();
  if (state.gameState !== "SUCCESS_SUMMARY") hideSummaryHomeButton();
  if (state.gameState === "WELCOME" || state.viewMode === "drawer_closeup" || state.gameState === "SUCCESS" || state.gameState === "SUCCESS_SUMMARY" || state.gameState === "GAME_OVER") {
    hideDeployHint();
  }
  if (state.gameState === "RESTART_TRANSITION") {
    hideDadGif();
    hideDeployHint();
    hideTutorialHint();
    drawBedroom();
    drawDeployUi();
    drawRestartTransitionOverlay();
    return;
  }

  if (state.gameState === "WELCOME") {
    hideTutorialHint();
    drawWelcomeScreen();
    return;
  }

  hideWelcomeGif();
  if (state.gameState === "GAME_OVER" || state.gameState === "SUCCESS" || state.gameState === "SUCCESS_SUMMARY") {
    hideGameplayCharacterGifs();
  }
  if (state.viewMode === "drawer_closeup") {
    hideDadGif();
    hideIdleGif();
    hideWalkBackGif();
    drawDrawerCloseup();
  } else {
    drawBedroom();
    drawDeployUi();
  }
  drawHud();
  drawPillowOverlay();
  updateTutorialHint();
}

function frame(now) {
  const dt = Math.min(0.05, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  render();
  requestAnimationFrame(frame);
}

canvas.addEventListener("pointerdown", (event) => {
  const point = getCanvasPoint(event);
  if (state.gameState === "RESTART_TRANSITION") {
    event.preventDefault();
    return;
  }
  if (state.gameState === "WELCOME") {
    unlockAudio();
    if (state.dreamOpen || state.dreamTransitionActive) {
      event.preventDefault();
      return;
    }
    const frame = welcomeFrameRect();
    if (rectContains(frame, point)) {
      state.welcomeDragging = true;
      state.welcomeDragOffset = {
        x: point.x - state.welcomeChild.x,
        y: point.y - state.welcomeChild.y,
      };
      canvas.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    return;
  }
  if (state.gameState === "GAME_OVER") {
    restartToDeploy();
    event.preventDefault();
    return;
  }
  if (state.gameState === "SUCCESS") return;
  if (state.gameState === "SUCCESS_SUMMARY") {
    event.preventDefault();
    return;
  }
  if (rectContains(SPEED_BUTTON, point)) {
    state.speedMultiplier = state.speedMultiplier === 1 ? 2 : 1;
    return;
  }
  if (rectContains(PAUSE_BUTTON, point)) {
    state.paused = !state.paused;
    if (state.paused) stopDrawerMoveSound();
    else if (state.drawerActive) startDrawerMoveSound();
    updateGameMusic();
    return;
  }
  if (state.paused) return;
  if (state.viewMode === "drawer_closeup") {
    handleDrawerClick(point);
    return;
  }
  if (state.playerDeployed && state.viewMode !== "drawer_closeup" && usePillow(pillowAtPoint(point))) {
    return;
  }
  if (!state.playerDeployed && rectContains(getCardRect(), point)) {
    state.deployDragging = true;
    state.deployDragPos = point;
    canvas.setPointerCapture(event.pointerId);
  }
});

canvas.addEventListener("pointermove", (event) => {
  if (state.gameState === "WELCOME" && state.welcomeDragging) {
    if (state.dreamTransitionActive) {
      state.welcomeDragging = false;
      event.preventDefault();
      return;
    }
    const point = getCanvasPoint(event);
    const rect = welcomeCharacterRect();
    const nextX = clamp(point.x - state.welcomeDragOffset.x, rect.w / 2, WIDTH - rect.w / 2);
    const nextY = clamp(point.y - state.welcomeDragOffset.y, rect.h, HEIGHT + 14);
    if (Math.abs(nextX - state.welcomeChild.x) > 1.5) state.welcomeFacing = nextX < state.welcomeChild.x ? "left" : "right";
    state.welcomeChild.x = nextX;
    state.welcomeChild.y = nextY;
    updateWelcomeGifVariant();
    positionWelcomeOverlays();
    event.preventDefault();
    return;
  }
  if (!state.deployDragging) return;
  state.deployDragPos = getCanvasPoint(event);
});

canvas.addEventListener("pointerup", (event) => {
  if (state.gameState === "WELCOME" && state.welcomeDragging) {
    state.welcomeDragging = false;
    event.preventDefault();
    return;
  }
  if (!state.deployDragging) return;
  const point = getCanvasPoint(event);
  state.deployDragging = false;
  if (rectContains(DEPLOY_ZONE, point)) {
    state.player.x = PLAYER_START_MIDBOTTOM.x - state.player.w / 2;
    state.player.y = PLAYER_START_MIDBOTTOM.y - state.player.h;
    replayStartGif();
    state.playerDeployed = true;
    state.playerIntroActive = true;
    state.playerIntroTimer = 0;
    state.playerMoving = false;
    hideIdleGif();
    hideDeployHint();
    state.message = TEXT.deployed;
    state.messageTimer = 2.5;
  }
});

window.addEventListener("keydown", (event) => {
  keys[event.code] = true;
  if (state.gameState === "RESTART_TRANSITION") {
    event.preventDefault();
    return;
  }
  if (state.gameState === "WELCOME") {
    unlockAudio();
    if (state.dreamOpen || state.dreamTransitionActive) {
      if (event.code === "Escape") closeDreamOverlay();
      event.preventDefault();
      return;
    }
    if (["Space", "Enter", "NumpadEnter"].includes(event.code)) {
      enterDeployScreen();
      event.preventDefault();
    }
    return;
  }
  if (event.code === "KeyR" && (state.gameState === "GAME_OVER" || state.gameState === "SUCCESS")) {
    restartToDeploy();
    event.preventDefault();
    return;
  }
  if (state.gameState === "SUCCESS_SUMMARY") {
    if (["Space", "Enter", "NumpadEnter", "KeyR"].includes(event.code)) resetGame();
    event.preventDefault();
    return;
  }
  if (state.gameState === "GAME_OVER" || state.gameState === "SUCCESS") {
    event.preventDefault();
    return;
  }
  if (
    state.playerDeployed &&
    !state.playerIntroActive &&
    state.viewMode !== "drawer_closeup" &&
    ["KeyW", "KeyA", "KeyS", "KeyD", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)
  ) {
    state.moveHintDone = true;
  }
  if (event.code === "Escape" && state.viewMode === "drawer_closeup") {
    if (state.paused) {
      event.preventDefault();
      return;
    }
    if (state.moneyTakenTotal > 0) exitDrawerWithMoney();
    event.preventDefault();
    return;
  }
  if (event.code === "KeyE" && state.viewMode === "drawer_closeup") {
    if (state.paused) {
      event.preventDefault();
      return;
    }
    if (event.repeat) return;
    state.drawerHintDone = true;
    if (state.drawerOpen && state.moneyTakenTotal > 0) startDrawerAction("closing");
    else if (!state.drawerOpen) startDrawerAction("opening");
    event.preventDefault();
    return;
  }
  if (event.code === "Space" && state.viewMode === "drawer_closeup" && state.takeActive) {
    if (state.paused) {
      event.preventDefault();
      return;
    }
    cancelTakeMoney();
    event.preventDefault();
    return;
  }
  if (event.code === "Space" && state.playerDeployed && state.viewMode !== "drawer_closeup") {
    if (usePillow(pillowInPlayerRange())) event.preventDefault();
  }
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(event.code)) event.preventDefault();
});

window.addEventListener("keyup", (event) => {
  keys[event.code] = false;
  if (event.code === "KeyE" && state.viewMode === "drawer_closeup") {
    if (!state.paused) stopDrawerAction();
    event.preventDefault();
  }
});

window.addEventListener("resize", () => {
  if (state.dreamOpen) fitDreamStageToVideo();
  if (state.dreamTransitionActive) updateDreamBubbleClip();
  if (state.gameState === "SUCCESS_SUMMARY") positionSummaryHomeButton();
  if (deployHintText.style.display !== "none") positionDeployHint();
  if (tutorialHintText.style.display !== "none") positionTutorialHint();
  if (dadGif.style.display !== "none") positionDadGif();
  if (pillowOverlayCanvas.style.display !== "none") positionPillowOverlay();
  if (state.gameState === "WELCOME") positionWelcomeOverlays();
  if (state.playerIntroActive) positionIntroGif();
  if (state.playerDeployed && !state.playerIntroActive && !state.playerMoving) positionIdleGif();
  if (state.playerDeployed && state.playerMoving && state.viewMode === "bedroom_after") positionWalkBackGif();
});

async function startGame() {
  await loadAssets();
  setDreamMuted(state.dreamMuted);
  requestAnimationFrame(frame);
}

startGame();
