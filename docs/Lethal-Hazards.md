# Lethal hazards

One global switch in the settings, **off by default**. It controls anything that can kill a Zoi, and the most dangerous spawns (real fire, floods).

| Result | Lethal hazards OFF | Lethal hazards ON |
|---|---|---|
| Electric shock | The shock effect and a toast. Nobody dies. | Same, plus a death chance (1% for TV, laundry and gaming, 4% for repairs). |
| Heat stroke | The buff only. | Death chance (1% when working out in heat, 3% in a sauna). |
| Food poisoning, overwork, explosion | The buff only. | Death chance (1% poison, 1% overwork, 8% explosion). |
| Fire (TV, cooking) | Skipped. | Natural 1: 10% chance of a real fire (burns for up to 150 seconds), and a 4% cooking explosion. |
| Floods and puddles (washer, sink, toilet, dryer repair, dancing) | A harmless version: a safe puddle, or just the broken appliance and one dust spot for the washer. | The real flood or puddle. |
| Appliance burnout (laundry, gaming PC), 8% on a natural 1 | Still happens (it is not behind the switch). | Same. |
| Fights (5%) and police reports (1%) | **Still happen**, on a natural 1 between strangers and low relationships (Friendship and Romance at 25 or less, never family). | Same. |
| Partner "Set the Mood" fight (5%) | Never. | Possible. |
| Punch | Never. | 3% on a natural 1, same relationship rule, and a 5% chance the punch is fatal. |

Every chance is a row in `config/actions/base.cfg` (`die=`, `chance=`, `fireout=`, `gate=`). Set `chance=0` in a pack file to remove an outcome, for example `pool.kiss.fight=chance=0`. See [Outcomes and rewards](Outcomes-And-Rewards.md). The fire and burnout visuals are the game's own effects, and I did not verify what each looks like.
