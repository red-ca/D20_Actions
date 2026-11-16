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
A category's `profile.*` rows decide what adds to or takes from the d20:

- **skill**: the Zoi's level in the skill adds up to +5.
- **stats**: needs that help or hurt, each with a weight.
- **pos / neg**: traits and characteristics that give +1 or -1.
- **buffPos / buffNeg**: active buffs that give +1 or -1.
- **rel**: relationship levels (partner actions only).
- Mood and preference for the action also count. The roll widget lists each part, and hides parts that are zero.
Every modifier group is floored at 0, so it can only help or stay neutral.

## Dynamic difficulty
With it on (settings), the DC moves:
- A stacked roll (modifier above `dyn.free`, default 6) raises the DC by `dyn.up` per point.
- A weak roll lowers it by `dyn.down` per point, at most `dyn.downCap`.
- The Zoi's main emotion moves it too: emotions in `dyn.good` lower the DC, emotions in `dyn.bad` raise it, scaled by `dyn.emo`, `dyn.per` and capped by `dyn.emoCap` levels.
- The DC never goes below **5** or above **30**.
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
