# How it works

## The roll
When a monitored action starts (or ends, see Timing), the mod rolls a d20 and adds modifiers. The total is compared with the DC of the action's category.

| Result | Outcome |
|---|---|
| Natural 1 | Cancel plus penalty, always. A failure outcome with `crit=1` or `critonly=1` is picked. |
| Fail | `fail` % (default 20) chance of cancel plus penalty. Otherwise a short message ("soft fail"). |
| Pass | `bonus` % (default 20) chance of the bonus buff or reward. |
| Natural 20 | Bonus every time. Pays `critWinMoney` if the category has one. |

Toasts show on a natural 20, a natural 1 and an ordinary fail. A pass without a bonus is silent.

## Modifiers
The d20 gets one bonus from each group below. Every group is **floored at 0** (a bad mood or a disliked action never subtracts) and **capped**, so the biggest total bonus is +16.

| Group | How it is worked out | Max |
|---|---|---|
| Skill | The Zoi's level in the category's skill, divided by 2 (rounded down). | +3 |
| Needs (`stats`) | For each listed need: its value / 20 times its weight, rounded. The results are added. | +2 |
| Traits | +1 for each trait in `pos`, -1 for each in `neg`. | +2 |
| Mood | Only a positive main emotion counts: +1, or +2 at emotion level 3. | +2 |
| Preference | +2 when the Zoi likes the kind of action. A disliked one gives 0. | +2 |
| Buffs | +1 for each buff in `buffPos`, -1 for each in `buffNeg`. | +2 |
| Relationship | Partner actions only: from the relationship levels in `rel`. | +3 |

The roll widget lists each part and hides the ones that are zero.

## Dynamic difficulty
With it on (settings), the DC moves:
- **Load:** a total modifier above `dyn.free` (default 6) raises the DC by `dyn.up` (1) per point. Below it, the DC drops by `dyn.down` (0.5) per point, by at most `dyn.downCap` (3).
- **Emotion:** an emotion listed in `dyn.good` lowers the DC and one in `dyn.bad` raises it. The size is the emotion level (up to `dyn.emoCap`, 3) times `dyn.emo` (1.5) plus `dyn.per` (0.25) for every modifier group that is not zero, rounded.
- The final DC never goes below **5** or above **30**.
- `cat.<id>.dyn=0` turns it off for one category.

## Timing
- A category that can cancel rolls at the real start of the animation, so a cancel looks natural.
- `cancel=0` categories roll when the action ends and never interrupt it.
- `tolerant=1` is for partner actions where the game swaps the action before the animation.
- `chain=N`: the same action restarting within N seconds is one action (dances repeat), so no new roll.
- `follow` and `finish` treat a chain of game actions as one (used by Set the Mood): the roll lands the moment the last step ends.
- `cooldown` is the time in seconds before a category can roll again.

## Relationships
Partner actions use relationship levels as modifiers. Chaos outcomes (fights, police) only happen between strangers and low relationships (`gate=`), and never in family actions.
**Set the Mood** has two versions. With a spouse it is never cancelled and its buffs come only on a natural 20. With a partner it can be cancelled on a fail.

## Money
- Gains and losses go through the game's own currency script, with no cheat message.
- A loss is only taken when the household can afford it.
- Finance applies a flat `critFailMoney` on a natural 1. The toast itemizes it ("Losses: $X, Taxes: $100").
- A natural 20 can pay `critWinMoney`. Rewards (see Outcomes and rewards) can pay extra.

## Effects on real objects
Failures act on the world: break an appliance, leak water, shock, make a Zoi slip, heat stroke, a cold, dust, dirty clothes, a fire. Dangerous versions only run with **Lethal hazards** on. See [Lethal hazards](Lethal-Hazards.md).
