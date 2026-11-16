# Troubleshooting

**The roll widget or panel does not show.**
Check that the mod is in your list and enabled. If you packed or installed the mod while the game was open, restart the game. A leftover preview copy of the same mod (a second folder with the same id under `Mods`) can hide it from the list.

**Nothing rolls on a first start.**
The mod writes its config files on the first run and needs a short while. If rolls are still missing after a minute, restart the game. A bad first start leaves `actions\base.cfg` or the language files unfinished.

**An action does not roll.**
It is not in any category yet, or it is marked `none`. Add a `bag.<id>=<category>` row in a pack file. See [Adding actions](Adding-Actions.md). Some actions are left out on purpose: intimate lead-ins, weddings and divorces, purchases and menus, trash and upkeep.

**The language did not change.**
The settings and roll widget switch within seconds. The failure messages follow a little later. A language only shows up in the dropdown if its file exists in `languages\`.

**A text shows in English in another language.**
That row is missing from the translation. English is the fallback.

**I changed `base.cfg` and my changes vanished.**
`base` is rewritten when the mod updates. Put changes in a pack file.

**Money moved when I did not expect it.**
Gains and losses only come from the rows in `config/actions/base.cfg` (`money`, `critFailMoney`, `critWinMoney`, rewards). A loss needs the household to afford it.

**Report a bug.**
Open an issue with the mod version, the action name, what you expected and the lines of `inzoi_lua.log` that mention `D20`.
