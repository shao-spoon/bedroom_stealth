# Bedroom Stealth HTML5 Porting Spec

This document treats `bedroom.py` as the final gameplay source of truth. The older
`bedroomstealth.md` is useful for intent, but it does not match the current Pygame
build closely enough to drive the HTML5 rewrite.

## Porting Goal

Rebuild the Pygame bedroom stealing mini-game as a browser-playable HTML5 game for
GitHub + Vercel deployment, while keeping the current feel, coordinates, assets,
state flow, and risk systems.

Recommended target: Phaser 3.

Reasons:

- It handles image/audio loading, input, scenes, timers, and the main loop cleanly.
- It is a natural fit for a 1280x720 2D game with layered sprites and UI.
- It can still use the existing `pic/`, `voice/`, and `ziti/` assets.

## Current Game Shape

Canvas size:

- Width: `1280`
- Height: `720`
- FPS target: `60`

Main source file:

- `bedroom.py`

Important asset folders:

- `pic/`
- `voice/hoederer/`
- `ziti/`

## Core Game States

Use two state axes, matching the Pygame version.

### `gameState`

- `NAVIGATION`: player can move through the bedroom.
- `APPROACH_DRAWER`: player is near/interacting with the drawer.
- `MONEY_ACTION`: drawer is open or money-taking action is active.
- `RETREAT`: player has money and should escape.
- `GAME_OVER`: dad woke up or time ran out.
- `SUCCESS`: player escaped with money and drawer closed.

### `viewMode`

- `bedroom_before`: bedroom overview before money is taken.
- `drawer_closeup`: drawer closeup screen.
- `bedroom_after`: bedroom overview after taking money, escape phase.

The HTML5 version should keep these as separate logical modes. In Phaser, this can
be one scene with mode-specific render layers, or three scenes with shared state.
For the first port, one scene is simpler.

## Player Flow

1. Start in `bedroom_before`.
2. Player is not active until dragged from the Wei card into the deploy zone.
3. Player moves with WASD or arrow keys.
4. Player approaches the drawer interaction zone.
5. Player holds/presses `E` to enter drawer closeup and pull/open the drawer.
6. Drawer opens through progress 0 to 100, with jams at 25, 50, and 75.
7. Once drawer is open, player chooses 1, 5, or 10 yuan.
8. Money action fills progress over time and increases risk.
9. Player can cancel the action for partial money.
10. Player closes the drawer.
11. Player returns to the door with money.
12. Success only triggers if money is taken, player reaches the door, and drawer is closed.

## Input Mapping

Keyboard:

- `W` / `A` / `S` / `D`: movement.
- Arrow keys: movement.
- `E`: start or continue drawer open/close action.
- `Space`: use available pillow in bedroom view, otherwise cancel money action.
- `1`: take 1 yuan.
- `5`: take 5 yuan.
- `0`: take 10 yuan.
- `R`: restart from `GAME_OVER` or `SUCCESS`.
- `Esc`: exit in Pygame. In web, use it for pause or ignore it.
- `F11`: fullscreen in Pygame. In web, use a UI fullscreen button if needed.

Mouse:

- Click speed button: toggle `1x` / `2x`.
- Click pause/continue button: pause toggle.
- Drag Wei card to deploy zone: starts playable character.
- Click pillow sprite: use that pillow if available.
- Click money button: start/cancel matching take-money action.

Touch:

- Not implemented in Pygame, but HTML5 should eventually add touch equivalents.
- MVP can be desktop-first.

## Key Constants

General:

- `PLAYER_SPEED = 165`
- `GAME_TIME_LIMIT = 180.0`
- `BOSS_INTRO_TIME = 5.0`
- `speedMultiplier = 1.0` or `2.0`

Noise:

- `NOISE_DECAY = 10`
- `NOISE_DAMPING = 0.86`
- `MAX_NOISE = 100`

Dad pressure:

- `CALM_SENSITIVITY_CAP = 84`
- `IDLE_RECOVERY_RATE = 5.2`
- `ACTIVE_PRESSURE_RATE = 0.9`
- `DAD_PRESSURE_MIN = 25`
- `DAD_PRESSURE_RED_LINE = 75`
- `WAKE_GRACE_TIME = 1.5`

Drawer:

- `DRAWER_JAM_POINTS = [25, 50, 75]`
- `DRAWER_JAM_WAIT = 0.8`
- `DRAWER_LAYER_X = 455`
- `DRAWER_LAYER_Y = 313`
- `DRAWER_LAYER_MAX_OFFSET = 120`
- `DRAWER_INNER_ANGLE = -0.6`

Success animation:

- `COMPLETE_ENTER_TIME = 0.9`
- `COMPLETE_HOLD_TIME = 1.0`
- `COMPLETE_EXIT_TIME = 0.9`

Failure animation:

- `FAIL_INTRO_TIME = 0.65`
- `FAIL_HINT_DELAY = 1.15`
- `FAIL_ANIM_TIME = 1.35`

## Stage Rules

```js
const STAGE_RULES = {
  bedroom_before: { pressureFloor: 25, eventMin: 8.0, eventMax: 14.0, movePressure: 1.0 },
  drawer_closeup: { pressureFloor: 30, eventMin: 7.0, eventMax: 11.0, movePressure: 1.0 },
  bedroom_after: { pressureFloor: 40, eventMin: 5.0, eventMax: 9.0, movePressure: 1.35 },
};
```

## Collision And Zones

Player:

- Rect size: `28x28`
- Starts at `midbottom = (88, 688)`
- Movement bounds: `Rect(18, 68, 1244, 570)`
- Collision uses the player's foot point, not the whole sprite.

Door:

- Visual/obstacle polygon: `[(0,699), (104,657), (67,1), (0,0)]`
- Exit polygon: `[(109,656), (95,459), (0,700)]`

Drawer interaction zone:

- `Rect(1020, 285, 255, 205)`

Deploy zone:

- `Rect(32, 600, 160, 160)`

Pillow zone polygon:

- `[(1015,458), (1165,493), (992,589), (798,552)]`

Obstacles:

- Door polygon above.
- `[(70,0), (414,0), (428,318), (360,333), (360,410), (98,488)]`
- `[(690,140), (1095,140), (1095,300), (1064,309), (1054,438), (755,557), (369,463), (365,333), (690,276)]`
- `[(1125,200), (1253,204), (1280,488), (1055,462), (1063,307), (1124,297)]`

Floor zones, checked in this order:

- Pillow Zone: points `[(1015,458), (1165,493), (992,589), (798,552)]`, noise `0.45`, move pressure `0.55`
- Right Carpet: points `[(1015,457), (1278,511), (1110,638), (759,558)]`, noise `0.52`, move pressure `0.65`
- Carpet: points `[(105,489), (322,444), (899,589), (697,691)]`, noise `0.55`, move pressure `0.85`
- Wood Floor: points `[(0,64), (1280,64), (1280,720), (0,720)]`, noise `1.85`, move pressure `3.0`

Use the same point-in-polygon algorithm from Pygame or a small equivalent helper in JS.

## Pillow System

Pillows:

- `Z`: asset `hoederer_weapon.png`, center `(835,555)`, angle `22`, zone `Rect(785,490,100,130)`, pressure drop `35`
- `X`: asset `U_chan.png`, center `(925,512)`, angle `22`, zone `Rect(875,462,110,100)`, pressure drop `60`
- `C`: asset `Ines_pillow.png`, center `(1015,470)`, angle `22`, zone `Rect(960,420,115,105)`, pressure drop `100`

Rules:

- Each pillow is single-use.
- In bedroom views, player must be inside the corresponding pillow zone.
- In drawer closeup, pillows can be clicked from the right-side resource placement.
- Using a pillow lowers `dadPressure`, clears wake grace, and may return dad state to deeper sleep.
- Used pillows animate toward dad, then remain near dad.

Drawer closeup pillow resource placement:

- `Z`: center `(1120,150)`, angle `-20`, scale `1.20`
- `X`: center `(1120,360)`, angle `-4`, scale `1.30`
- `C`: center `(1120,530)`, angle `-4`, scale `1.30`

Used pillow placements in bedroom:

- `(700,300)`, angle `-22`, scale `0.90`
- `(760,276)`, angle `-10`, scale `0.82`
- `(730,340)`, angle `8`, scale `1.00`

Used pillow placements in drawer closeup:

- `(112,300)`, angle `-35`, scale `1.30`
- `(145,342)`, angle `-22`, scale `1.30`
- `(88,372)`, angle `8`, scale `1.30`

Pillow flight:

- Duration `0.65s`
- Ease out cubic
- Arc height `70`

## Drawer System

Start drawer action only if player is near the drawer.

Opening:

- If not already in drawer closeup, switch `viewMode` to `drawer_closeup`.
- Progress increases at `28 * dt`.
- Jams at 25, 50, and 75.
- On jam, progress freezes and continuing to pull creates heavy noise and pressure.
- Releasing `E` during a jam starts `DRAWER_JAM_WAIT = 0.8`.
- After wait completes, advance to the next jam point.

Closing:

- Progress decreases at `34 * dt`.
- When progress reaches 0, drawer is closed.
- If money was taken, switch to `bedroom_after`; otherwise return to `bedroom_before`.

Noise:

- Normal drawer action adds `0.11 + random(0, 0.05)` noise velocity.
- Jammed hard pull adds `0.22 + random(0, 0.08)` and pressure `18 * dt`.

Visual:

- Background: `drawer_closeup_bg.png`, fallback `drawer_closeup_bg_v2.png`
- Drawer inner appears as cropped slice based on progress.
- Drawer front y position: `313 + 120 * progress / 100`.
- Hard pull feedback shakes drawer and adds red overlay.

## Money System

Buttons:

- 1 yuan: asset `1yuan.png`, rect `(510,506,92,119)`
- 5 yuan: asset `5yuan.png`, rect `(660,506,92,119)`
- 10 yuan: asset `10yuan.png`, rect `(810,506,92,119)`
- Stop overlay: asset `stop.png`

Durations:

- 1 yuan: `1.15s`
- 5 yuan: `2.6s`
- 10 yuan: `4.4s`

Progress:

- `takeProgress += 100 * dt / duration`
- On full completion, add the full amount.
- On cancel, add `floor(amount * progress / 100 * 0.65)`.

Noise:

```js
curve = (takeProgress / 100) ** 2;
addNoise((0.13 + curve * 0.18) * (1 + takeAmount / 12));
```

Money visuals:

- Wallet: `qianbao.png`, size `140x184`, center `(850,700)`, angle `30`
- Bill: `1.png`, size `234x234`
- Bill flight start: `(705,405)`
- Bill flight target: `(850,700)`
- Flight duration: `0.82s`
- Popup duration: `0.95s`

## Dad AI And Risk

Initial values:

- `noise = 0`
- `noiseVelocity = 0`
- `sensitivity = 72`
- `sleepDepth = 100`
- `dadPressure = 25`
- `dadState = DEEP_SLEEP`

Each frame:

- Add `noiseVelocity` to `noise`.
- Damp velocity by `0.86`.
- Decay noise by `10 * dt`.
- Clamp noise to `0..100`.

Active noise sources:

- Player moving.
- Money action active.
- Drawer pulling.

When active:

- `sleepDepth -= 1.2 * dt`
- `sensitivity -= 0.9 * dt`, minimum `18`
- Player movement pressure: `(4.2 + noise * 0.07) * floor.movePressureMultiplier * stage.movePressure`
- Money pressure: `7.2 + takeAmount * 0.48 + noise * 0.055`
- Drawer pressure: `20.0 + noise * 0.075`
- Danger window multiplies pressure and adds `8.0`.
- Pressure gain is multiplied by speed multiplier.

When inactive:

- `sleepDepth += 0.35 * dt`, capped at 100
- `sensitivity += 5.2 * dt`, capped at 84
- `dadPressure -= 8.0 * dt`, but not below current stage pressure floor.

Dad state thresholds:

- `dadPressure >= 100`: start wake grace if not active.
- `dadPressure >= 92`: `ALERT`
- `dadPressure >= 75`: `UNSTABLE_SLEEP`
- `dadPressure >= 50`: `LIGHT_SLEEP`
- else: `DEEP_SLEEP`

Wake grace:

- Duration `1.5s`
- If still at pressure 100 after grace, game over.
- During grace, the player can use a pillow to reduce pressure.

Random dad events:

- Event timer depends on current stage rules.
- 55 percent chance: turn-over event.
  - Play `aen.mp3`
  - Toggle sleeping/resleeping pose
  - `sensitivity -= 9`, minimum `28`
  - `dadPressure += 4`
  - Danger window `4.4..5.0s`, multiplier `4.0`
- 45 percent chance: sleep-talk event.
  - Play random `yume_1.mp3` through `yume_5.mp3`
  - `dadPressure += 2`
  - Danger window `4.0..4.6s`, multiplier `2.8`
  - Sometimes toggle pose

## Success And Failure

Failure:

- Timer reaches 0.
- Dad pressure reaches 100 and wake grace expires.

Success:

- `moneyTakenTotal > 0`
- Player foot point is inside door exit polygon.
- Drawer is closed.

If the player reaches the door while the drawer is open, show warning and do not
complete.

## Asset Manifest

Map the current Pygame asset keys to web paths.

```js
const ASSETS = {
  bedroom: "pic/bedroom.png",
  weiIdle: "pic/wei_idle.gif",
  weiWalk: "pic/wei_walk.gif",
  weiStart: "pic/start.gif",
  weiIdleBack: "pic/wei_idle_back.gif",
  weiWalkBack: "pic/wei_walk_back.gif",
  dadSleeping: "pic/sleeping.gif",
  dadResleeping: "pic/resleeping.gif",
  pillowZ: "pic/hoederer_weapon.png",
  pillowX: "pic/U_chan.png",
  pillowC: "pic/Ines_pillow.png",
  drawerCloseupBg: "pic/drawer_closeup_bg.png",
  drawerInner: "pic/drawer_inner.png",
  drawerFront: "pic/drawer_front.png",
  wallet: "pic/qianbao.png",
  moneyBill: "pic/1.png",
  take1: "pic/1yuan.png",
  take5: "pic/5yuan.png",
  take10: "pic/10yuan.png",
  takeStop: "pic/stop.png",
  bossIntro: "pic/introduce.png",
  topStats: "pic/xuetiao.png",
  speed2x: "pic/2beisu.png",
  speed1x: "pic/yibeisu.png",
  pauseButton: "pic/zanting.png",
  continueButton: "pic/jixu.png",
  complete: "pic/complete.png",
  failSay: "pic/failsay.png",
  costBar: "pic/feiyongtiao.png",
  weikaCard: "pic/weika.png",
  deployIdle: "pic/baitai.png",
  deployActive: "pic/gaotai.png",
};

const AUDIO = {
  dadTurn: "voice/hoederer/aen.mp3",
  successVoice: "voice/hoederer/yume_2.mp3",
  failVoice: "voice/hoederer/yume_3.mp3",
  dadDreams: [
    "voice/hoederer/yume_1.mp3",
    "voice/hoederer/yume_2.mp3",
    "voice/hoederer/yume_3.mp3",
    "voice/hoederer/yume_4.mp3",
    "voice/hoederer/yume_5.mp3",
  ],
};
```

GIF note:

- Browser `<img>` can animate GIFs, but Phaser texture frames usually need sprite
  sheets or manual handling.
- MVP can use still GIF first/last frames, matching current Pygame behavior for
  most assets.
- `start.gif` is the only GIF where Pygame currently loads all frames.

## Suggested HTML5 Structure

For a standalone port:

```text
bedroomstealth/
  index.html
  package.json
  src/
    main.js
    config.js
    state.js
    geometry.js
    assets.js
    scenes/
      BedroomScene.js
  public/
    pic/
    voice/
    ziti/
```

If integrating into a four-game collection, prefer:

```text
games/
  bedroom-stealth/
    index.html or scene entry
    src/
    assets/
```

Keep the game internally at 1280x720 and scale the canvas to fit the browser
viewport with letterboxing. Do not rescale gameplay coordinates during the first
port.

## MVP Milestones

### Milestone 1: Static Boot

- Create HTML5 project.
- Load `bedroom.png`.
- Display 1280x720 canvas with responsive fit.
- Load enough images to prove paths work on Vercel.

### Milestone 2: Bedroom Navigation

- Add player sprite.
- Add deploy card and deploy zone.
- Implement drag-to-deploy.
- Implement movement, bounds, obstacle polygons, floor zones, and drawer proximity.

### Milestone 3: Risk Loop

- Implement game timer.
- Implement noise velocity/decay.
- Implement dad pressure, dad state thresholds, wake grace, and random events.
- Draw top stats and dad pressure bar.

### Milestone 4: Drawer Closeup

- Switch to drawer closeup on drawer interaction.
- Implement drawer progress, opening/closing, jam points, jam wait, hard-pull feedback.
- Draw drawer background, inner slice, front layer, dad pose, and resource pillows.

### Milestone 5: Money And Escape

- Implement take 1/5/10 buttons.
- Implement take progress, cancellation, partial reward, full reward.
- Implement money popup and money flight.
- Implement bedroom-after escape and success condition.

### Milestone 6: Polish Pass

- Add success/failure animations.
- Add sound effects.
- Restore intro card/countdown.
- Replace garbled Chinese strings with final readable copy.
- Add mobile/touch controls if the collection needs mobile play.

## Known Cleanup From Pygame Version

- Many Chinese strings in `bedroom.py` are mojibake. The web port should not copy
  those strings blindly.
- Several draw calls contain empty strings. Keep behavior, but replace with real UI
  copy only where it improves play.
- The old design doc is also mojibake and appears earlier than the final build.
- Current Pygame file mixes assets, logic, collision, AI, and rendering in one class.
  The HTML5 port should split these pieces early.

## First Implementation Recommendation

Start with Phaser 3 and a single `BedroomScene`.

Initial JS modules:

- `config.js`: constants, zones, asset keys.
- `geometry.js`: rect helpers, point-in-polygon, clamp, lerp/easing.
- `state.js`: create/reset game state object.
- `BedroomScene.js`: preload, create, update, input handlers, rendering helpers.

Do not optimize architecture before Milestone 3. The fastest safe path is to make a
faithful one-scene port, then split further once the game is playable in browser.
