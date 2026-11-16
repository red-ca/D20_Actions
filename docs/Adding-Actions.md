# Adding actions

You never edit the mod. Create a pack file in `actions\` (see [Config files](Config-Files.md)), for example `actions\my_pack.cfg`, and save it. It applies within about 20 seconds.

## 1. Find the action's id
Actions are the game's interaction bag ids. Start the action in game and read its id (the `interaction.search` tool of the game's MCP also lists them). Ids look like `Use_PullUpBar` or `Object_Start_Dryer`.

## 2. Put it in an existing category
One exact action:
```
bag.Use_PullUpBar=fitness
```
Never roll this action:
```
bag.Interaction_SomeMenuAction=none
```
`bag.*` rows beat patterns.

A whole family by name (Lua patterns, `||` between alternatives, `^` start, `$` end, `%d` digit, `%a` letter, `.` any):
```
pattern.fitness.match=^Use_.*Gym || ^Interaction_Yoga_
pattern.fitness.skip=Howling || Remote
pattern.kiss.target=1
```
`skip` excludes by plain text. `target=1` means only when the action has another character.
Repeated `pattern.<cat>.match` lines in the same file are all kept.

## 3. Make a new category
Replace the action names in the example with real interaction ids.

A category is one kind of check. You need rows for the category, which actions it covers, its outcomes, and its modifiers, plus texts in a language file.
```
# category
cat.fishing.label={cat.fishing.label}
cat.fishing.check={cat.fishing.check}
cat.fishing.dc=13
cat.fishing.cooldown=20
cat.fishing.bonus=D20_Buff_FlowBody
# which actions
pattern.fishing.match=^Use_Fishing || ^Interaction_Fish
# what can go wrong (one is picked by weight)
pool.fishing.tangled=w=30;anim=Stand_Sigh;buffs=D20_Buff_Drained:30
pool.fishing.snapped=w=20;anim=EmoReact_Sad_Heartbroken;crit=1
# what adds to the d20
profile.fishing.skill=Cooking
profile.fishing.stats=Energy:0.5
```
Then the texts, in `languages\english.my_pack.cfg` (see [Adding a language](Adding-Languages.md)):
```
cat.fishing.label=Fishing
cat.fishing.check=Fishing Check
fishing.bonus=The fish practically jumps into the bucket. || ...
fishing.crit_success=...
fishing.soft_fail=...
fishing.crit_fail=...
fishing.tangled=Your line ties itself in a knot. || ...
fishing.snapped=...
```
Give every text key at least 3 variants separated by ` || `.

## Category fields
`label` (name in settings), `check` (name on the roll widget), `dc`, `cooldown` (seconds), `bonus` (buff on a bonus), `passBuff` / `failBuff` (buff on every pass or fail, with `passBoth` / `failBoth=1` to give it to both characters), `passMins` / `failMins`, `passFx` / `failFx`, `passOn=crit` (only on a natural 20), `cancel=0`, `chain=N`, `tolerant=1`, `follow`, `finish`, `dyn=0`, `critFailMoney`, `critWinMoney`, `messChance`, `cleanAllChance` (housework), `repairAt` (repair), `followup` (pattern of the game's chained follow-up action), `wait` and `maxlen` (timing of long chains).

## Mood versions
The game offers extra versions of some actions for a mood (for example `Object_Start_Dryer_Cringing_Lv1`). A name ending in `_<Word>_Lv<N>` for a word listed by `mood.<Word>=1` counts as the plain action. `mood.<Word>=0` removes a word.

See [Outcomes and rewards](Outcomes-And-Rewards.md) for every pool attribute.
