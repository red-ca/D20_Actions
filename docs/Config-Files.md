# Config files

Everything the mod does is described in plain text files, created by the mod on first run in:

`Documents\inZOI\Mods\InGame\D20_Actions_1680C648\ui\d20_data\saved`

```
actions\base.cfg          what rolls and what happens (shipped, rewritten on updates)
actions\<your_pack>.cfg    your additions and overrides
languages\english.base.cfg  all texts (shipped)
languages\english.<pack>.cfg
languages\<language>.base.cfg  a translation
settings.cfg              your settings (written by the panel)
```
Copies of `base.cfg` and the language files are in `config/` in this repository.

## Load order
1. `base` first.
2. Every other file in the folder, alphabetically.
3. A row with the **same key** replaces the earlier one. A row with a **new key** is added.
4. Repeated `pattern.<cat>.match` lines inside one file are all kept, in order.
5. The folder is reread about every 20 seconds, so saving a file applies it without a restart.

## About `#version=`
The `#version=` line is only used for the mod's own shipped files (`actions/base`, `english.base`, `english.names` and the shipped language packs): the mod rewrites a file when that number changes. **Do not put `#version=` in your own packs.** In a pack it is just a comment.

## Do not edit `base`
When the mod updates, `base` is rewritten (its `#version=` line changes) and your edits would be lost. Put changes in a pack file next to it, for example `actions\my_pack.cfg`.

## Format
- One row per line: `key=value`. Lines starting with `#` are comments.
- Action names are the game's interaction bag ids (for example `Use_PullUpBar`).
- No player-facing text in action files. All text lives in language files.
