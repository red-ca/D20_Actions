# D20 Actions

A tabletop-style dice layer for **inZOI**. Almost everything your Zoi does can trigger a d20 roll. Pass, fail, a natural 1 and a natural 20 each lead somewhere different, and the results show up in a roll widget on screen.

Current version: **Beta 0.9.32** (see [CHANGELOG](CHANGELOG.md)).

**Download:** [CurseForge](https://www.curseforge.com/inzoi/script-mod/d20-actions-1680c648) | [Nexus Mods](https://www.nexusmods.com/inzoi/mods/1823)

Cook, kiss, work out, do laundry, buy a lottery ticket, repair a dryer or set the mood with your spouse: the game rolls a d20, adds your Zoi's skills, needs, moods, traits and relationships, and compares the total with a difficulty. Failures can be funny (a pink load of laundry) or painful (a shocked Zoi, a fire), and natural 20s give real rewards.

## At a glance

- **36 categories**, **152 named action rows** (2 of them marked never-roll) and **43 name-match rules** cover the game's own interactions.
- **304 failure outcomes**, **38 rewards**, and about **1,500 text variants** (three or more per outcome).
- **24 new buffs and effects**, 14 modifiers, 37 custom interactions that act on real objects.
- **Dynamic difficulty** that follows the Zoi's main emotion (hard limits 5 and 30).
- **Lethal hazards** are optional and off by default.
- **Everything is data.** Actions, outcomes, texts and languages are plain text files that anyone can extend without touching the mod.
- Languages: English, Spanish, German, French, Italian and Japanese. More are planned.

## The roll in one minute

1. You start an action (or the game starts it for you).
2. The mod rolls a d20 and adds modifiers from skills, needs, mood, traits, preferences and (for partner actions) the relationship.
3. The total is compared with the **DC** (difficulty class) of the action's category.
4. Results:

| Roll | What happens |
|---|---|
| Natural 1 | The action is cancelled and the penalty is applied (100%). |
| Fail | 20% chance of cancel plus penalty. Otherwise a small message and nothing else. |
| Pass | 20% chance of a bonus. |
| Natural 20 | The bonus is applied (100%) and some categories pay money or give a special buff. |

Both 20% values can be changed in the settings, and per action or per category in the config files.

## Install and first run

1. Download the mod from [CurseForge](https://www.curseforge.com/inzoi/script-mod/d20-actions-1680c648) or [Nexus Mods](https://www.nexusmods.com/inzoi/mods/1823), install it like other inZOI mods and load a save.
2. On the first start the mod writes its own config files to the folder below. This takes a short while.
   `Documents\inZOI\Mods\InGame\D20_Actions_1680C648\ui\d20_data\saved`
3. Use the settings button on the roll widget to open the settings panel.

The mod never edits other mods' files, and it never uses cheats (no "cheat applied" messages).

## Documentation

| Page | What it covers |
|---|---|
| [How it works](docs/How-It-Works.md) | The roll, modifiers, dynamic difficulty, timing, cancels, money. |
| [Settings panel](docs/Settings.md) | Every switch and what it does. |
| [Lethal hazards](docs/Lethal-Hazards.md) | What changes when you turn them on. |
| [Config files](docs/Config-Files.md) | Layout, load order, and how packs override the base. |
| [Adding actions](docs/Adding-Actions.md) | Put any game action into a category, or make a new category. |
| [Failure outcomes and rewards](docs/Outcomes-And-Rewards.md) | Every attribute of a pool entry and a reward. |
| [Adding a language](docs/Adding-Languages.md) | Translate the mod or ship your own language pack. |
| [Custom actions from your mod](docs/Custom-Actions-From-Your-Mod.md) | Copy-paste packs for other mod authors. |
| [Troubleshooting](docs/Troubleshooting.md) | Common problems. |

## What is in this repository

The mod's code is **not** published here. This repository holds the documentation and the **data files** the mod uses, which you can read, copy and build on:

- `config/actions/base.cfg`: every action, category, outcome, reward and modifier profile.
- `config/languages/*.cfg`: the English texts and the shipped translations.
- `examples/`: ready-to-use packs.

## Credits and links

Made by **redm**. CurseForge: https://www.curseforge.com/inzoi/script-mod/d20-actions-1680c648. Nexus Mods: https://www.nexusmods.com/inzoi/mods/1823. Discord: http://discord.gg/NK3WPn6R7H. Ko-fi: https://ko-fi.com/redmods.

Released under the license in [LICENSE](LICENSE).
