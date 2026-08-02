# 🎮 卧室潜行：零花钱行动（V1 开发规格书）

---

# 🧠 1. 系统架构总览

本游戏由 4 大核心系统组成：

## 🧩 系统分层
Input Layer（玩家操作）
↓
Action System（分段动作系统）
↓
Core Simulation（噪声 + 爸爸AI）
↓
Presentation Layer（镜头 + UI）


---

# 🎮 2. 核心状态机（Game State Machine）

## 🧭 游戏状态

STATE = {
ROOM_ENTRY, // 进入房间
NAVIGATION, // 移动阶段
APPROACH_DRAWER, // 接近床头柜
MONEY_ACTION, // 拿钱阶段（核心）
RETREAT, // 撤离阶段
GAME_OVER,
SUCCESS
}


---

# 🧠 3. 玩家动作系统（Action System）

## 🎮 动作定义
MOVE
STOP
INTERACT_DRAWER
TAKE_MONEY
CANCEL_ACTION


---

## 🧩 分段动作模型（关键）

所有高风险动作都是“可中断持续行为”：

### 💰 TAKE_MONEY
state: ACTIVE / PAUSED / COMPLETED

progress: 0 → 100
duration: depends on amount (1/5/10)
noise: continuous increase


---

### 🪑 DRAWER_ACTION
progress: 0 → 100
step-based movement:
pull → pause → pull → pause

noise: per step
risk: increases with progress


---

# 🔊 4. 噪声系统（Noise System）

## 🧠 状态变量
noise_value
noise_velocity
noise_decay_rate
combo_count


---

## ⚙️ 更新逻辑（每帧）
noise_value += noise_velocity
noise_velocity *= 0.85
noise_value -= decay_if_idle


---

## 🎮 行为影响

| 行为 | 噪声 |
|------|------|
| 移动 | +low |
| 连续移动 | +increasing |
| 停止 | -decay |
| 抽屉操作 | +continuous |
| 拿钱 | +high continuous |

---

## 🧱 地板区域噪声

不同区域会改变移动噪声，让移动路线本身也成为风险决策：

| 区域 | 噪声倍率 | 设计作用 |
|------|----------|----------|
| 地毯 | low | 安全移动区，适合教学和缓冲 |
| 普通地板 | normal | 标准风险区 |
| 木地板 | high | 高风险通道，鼓励玩家放慢节奏 |
| 床边区域 | very high | 靠近目标但更容易惊动爸爸 |

---

# 😴 5. 爸爸AI系统（Core Threat System）

## 🧠 状态变量
sleep_depth
sensitivity
reaction_state


---

## ⏱ 时间演化
sleep_depth -= time * 0.1
sensitivity += time * 0.15


---

## 🔊 触发逻辑
if noise_value > sensitivity:
trigger_reaction()


---

## 😴 状态机
DEEP_SLEEP
LIGHT_SLEEP
UNSTABLE_SLEEP
ALERT
AWAKE

---

## 💤 随机反应事件

爸爸在睡眠过程中会随机出现低频事件，用来打破固定节奏：

| 事件 | 效果 | 玩家反馈 |
|------|------|----------|
| 翻身 | 短时间提高 sensitivity，并可能进入 UNSTABLE_SLEEP | 需要立刻停手或减速 |
| 梦话 | 给出预警，不一定直接提高风险 | 提醒玩家当前阶段不稳定 |

事件应有明显但短暂的视觉/音效提示，避免玩家觉得失败是随机惩罚。


---

# 💰 6. 零花钱系统（Channel Action System）

## 🎯 核心机制

> 选择数量 → 启动持续风险窗口

---

## 💰 参数映射
1 coin → short duration
5 coins → medium duration
10 coins → long duration

---

## 📊 金额记录

money_taken_total: 当前已经拿到的钱
money_target_amount: 当前选择的拿钱数量
money_pending_amount: 当前动作完成后即将获得的钱

UI 必须持续显示 money_taken_total，让玩家能判断继续贪心还是立刻撤离。

---

## ⏱ 行为模型
start_take_money(amount):

duration = f(amount)
progress = 0

while progress < 100:
    noise += continuous_risk
    allow_cancel = true


---

## 🛑 中途停止（Cancel System）
cancel():
if early:
low_reward_loss
if late:
high_reward_gain + high_risk


---

## 🔥 风险曲线

risk = time^2 growth

---

## 🪙 V2 预留：硬币掉落

硬币掉落暂不进入 V1。

后续可作为高风险随机事件加入：

coin_drop_chance: depends on amount and action progress
coin_drop_noise: instant high noise

---

# 🪑 7. 抽屉系统（Segmented Interaction System）

## 🎮 核心行为
pull_step()
pause()
pull_step()


---

## ⚙️ 状态
CLOSED
PARTIAL_OPEN
HALF_OPEN
OPEN


---

## 🔊 噪声模型
noise += step_noise
noise += friction_noise (random)


---

# 🎬 8. 镜头系统（Camera System）

## 🎥 状态机
FULL_VIEW
FOLLOW_PLAYER
ZOOM_IN_BED
FOCUS_DRAWER
ZOOM_OUT


---

## ⏱ 触发规则

| 状态 | 条件 |
|------|------|
| FULL_VIEW | start |
| FOLLOW | movement |
| ZOOM_IN | near bed |
| FOCUS | drawer active |
| ZOOM_OUT | exit |

---

# 🖥️ 9. UI 指标系统（HUD System）

## 🎯 核心显示

V1 UI 至少显示 4 类信息：

| 指标 | 用途 |
|------|------|
| 噪音条 | 显示当前 noise_value |
| 爸爸警觉/睡眠状态 | 显示 reaction_state 或 sleep_depth |
| 当前动作进度条 | 显示抽屉/拿钱动作 progress |
| 已取得金额 | 显示 money_taken_total |

UI 目标不是解释规则，而是让玩家在压力中快速判断是否继续行动。

---

# 🧸 10. 抱枕系统（Buff System）

## 🎯 功能

降低爸爸 sensitivity

---

## 🧩 道具定义
Pillow_1: small reduction, no side effect
Pillow_2: medium reduction, slight later sensitivity growth
Pillow_3: large reduction, higher chance to enter UNSTABLE_SLEEP later


---

## ⚖️ 副作用机制
high effect → increases later sensitivity growth


---

# 🎮 11. 主循环（Game Loop）
while game_running:

read_input()

update_action_system()

update_noise()

update_dad_ai()

update_camera()

check_fail_conditions()

check_success_conditions()


---

# 📊 12. 节奏系统（Difficulty Curve）
TIME →

0% 20% 50% 80% 100%
│─────│──────│──────│──────│

safe → learning → tension → climax → escape


---

# 🎯 13. 失败 / 成功条件

## ❌ 失败
dad_state == AWAKE


## ✅ 成功
money_taken && player_reaches_door

---

# 🧠 14. 设计核心总结

本游戏核心不是潜行，而是：

> 🎮 “在持续上升的压力系统中，通过分段动作控制节奏并完成高风险目标的行为模拟游戏”
