# Lethal hazards

One global switch, **off by default**.

| | Off | On |
|---|---|---|
| Electric shock | Harmless shock effect and a toast | Zoi can die (1% by default) |
| Heat stroke (sauna) | Dizzy or unwell | Death card possible |
| Fire | Only the explosion, then the appliance breaks. No fire, no smoke | Real fire (10% on a natural 1), burns until put out or `fireout` seconds |
| Water leak | The appliance breaks and one dust spot appears | Flood on the object, shock risk |
| Fights | Never | Between strangers and low relationships (5%) |
| Punch | Never | One punch, 5% fatal |
| Police | Never | Report chance about 1% |

Every chance is a row in `config/actions/base.cfg` (`die=`, `chance=`, `fireout=`, `gate=`). You can lower them or remove them with a pack file, see [Outcomes and rewards](Outcomes-And-Rewards.md).
