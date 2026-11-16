# Custom actions from your mod

You made a mod with new interactions and want D20 Actions to roll for them. You do not need our code or permission. You ship two small text files, and D20 Actions picks them up.

A complete, ready-to-copy pack is in [`examples/my_mod_pack/`](../examples/my_mod_pack/). Status: the format follows `config/actions/base.cfg` exactly, but the example has **not been loaded in the game yet**. Replace the `REPLACE` ids with your mod's real interaction ids and test it.

## Option A: drop the files in (simplest)
1. Copy `actions/my_mod.cfg` to `...\ui\d20_data\saved\actions\`.
2. Copy `languages/english.my_mod.cfg` to `...\ui\d20_data\saved\languages\`.
3. Wait about 20 seconds, or reload the save. Done.

The folder is `Documents\inZOI\Mods\InGame\D20_Actions_1680C648\ui\d20_data\saved`.
Players of your mod only need to copy these two files. Do not edit `base`.

## Option B: install from your mod's UI script
[`examples/my_mod_pack/ui_snippet.js`](../examples/my_mod_pack/ui_snippet.js) writes both files through the game's config calls, the same ones the D20 panel uses. It is **not tested from a third-party mod**, so try it before you rely on it.

## The three steps in your pack
1. **Put your actions in a category.** `bag.<id>=fitness` for one exact action, or `pattern.<cat>.match=^YourPrefix_` for a family.
2. **Or make your own category** with `cat.<id>.*`, a `pattern`, a `pool` of failure outcomes and a `profile` for the modifiers. See [Adding actions](Adding-Actions.md).
3. **Add the texts.** Every outcome key needs a row in a language file, with at least 3 variants. Add `<id>.bonus`, `<id>.crit_success`, `<id>.soft_fail` and `<id>.crit_fail` too.

## Finding your interaction ids
Start the interaction in game and read its bag id, or search with the game's `interaction.search` tool. The id is the interaction bag id, not the display name.

## Translations of your pack
Ship `español.my_mod`, `deutsch.my_mod` and so on next to the English file. Anything missing falls back to English. See [Adding a language](Adding-Languages.md).

## Good manners
- Name your pack file after your mod, so two packs never collide.
- Never reuse a base key unless you mean to override it (same key replaces the earlier one).
- Do not rely on the load order between two packs: they load alphabetically.
- Keep dangerous outcomes `lethal=1` so they stay behind the player's switch.
