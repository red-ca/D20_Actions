# Failure outcomes and rewards

## Failure pools
`pool.<cat>.<key>=attribute;attribute;...`
One entry is picked by weight each time a roll fails. The shown message is the language row `<cat>.<key>`.

| Attribute | Meaning |
|---|---|
| `w` | Weight. |
| `anim` | Animations (comma separated, one is played). |
| `buffs` | `Buff:minutes,Buff2:minutes`. |
| `critBuffs` | Same, only on a natural 1. |
| `money` | `-300..-100` takes a random amount (skipped if the household cannot pay). `50` or `20..80` gives money. Use `${m}` in the text. |
| `crit=1` | Can also be picked on a natural 1. |
| `critonly=1` | Only on a natural 1. |
| `bag` | Patterns (`||`): only for those actions. |
| `notbag` | Patterns (`||`): never for those actions. |
| `social=1` / `0` | Only with another character / only alone. |
| `rel` | `Friendship:-3,Romance:2` changes the relationship with the other character. |
| `chance` | Percent. Rolled first and replaces the normal pick. |
| `gate` | Relationship conditions, all must hold: `nofamily`, `family`, `Friendship<=25`, `Romance<=25`, `Business>10` (values -100 to 100). |
| `lethal=1` | Dangerous. Only runs when Lethal hazards is on. |
| `die` | `LifeTrigger@percent` (ElectricShock, Fire, Explosion, Slipped, Heatstroke...). Lethal only. |
| `obj` | Object effect `row@target|self@delay@saferow`. The 4th part is the harmless twin. |
| `safefx` | Effects that run instead of the dangerous spawn when Lethal hazards is off (for example `dust1`). |
| `fx` | Effects such as `bang`, `dirty`, `hysteria`. |
| `cancelat` | Seconds the action keeps playing before the cancel. |
| `react` / `animat` | Reaction of the other character (`react=fight`, `react=punch`). |
| `fireout` | Seconds until a real fire is put out (0 = never). |

## Rewards
Extra prizes on a success.
```
reward.<id>=cat=<category>;match=<patterns>;skip=<parts>;money=<amount or low..high>;chance=<percent>;on=bonus|crit_success
```
- `on=bonus` pays when the roll earns the bonus. `on=crit_success` pays on a natural 20. List a crit_success reward before the bonus one.
- `chance` is the percent of the time it pays (default 100). A miss lets the next reward of the category try.
- `rel=Friendship:3` adds to the relationship with the other character.
- `buffs=Buff:minutes` gives extra buffs with the prize.
- The message is the language row `<cat>.<id>` (`${m}` is the amount).

Example:
```
reward.money_rain=cat=humor;match=^Co_MoneyGun_;money=20..100;on=crit_success
```

## Per-action texts
`bagtext.<cat>.<pattern>=<textKey>><otherKey>` makes one action show its own message instead of the category's:
```
bagtext.finance.Lottery=soft_fail>lottery_soft
```
