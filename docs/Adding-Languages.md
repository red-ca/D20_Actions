# Adding a language

All player-facing text lives in language files in `languages\`. The settings dropdown lists every language that has a file.

## Files
- `english.base`: all texts. Shipped, rewritten on updates. Do not edit.
- `english.names`: names of skills, values, traits and so on.
- `<language>.base` and `<language>.names`: a translation.
- `<language>.<pack>`: your additions or fixes for a language (for example `english.my_texts`, `español.my_texts`).

Files load in this order: `english.base`, the other English files, then the chosen language on top. **A line your language does not have stays in English.**
Copies of every shipped file are in `config/languages/` in this repository.

## Translate in 4 steps
1. Copy `config/languages/english.base.cfg` and `english.names.cfg` to `<language>.base` and `<language>.names` (for example `polski.base`).
2. Translate only what comes **after the first `=`**. Keys never change.
3. Keep placeholders exactly as written.
4. Save the files in the `languages\` folder. The language appears in the dropdown (give it a few seconds).

Native names work as file names (`日本語.base`, `español.base`).

## Format
- `key=text`. Several variants are separated by ` || ` (space, two bars, space) and one is picked at random. Keep the same number of variants.
- Placeholders: `{a}` your first name, `{t}` the other character's first name, `${m}` a money amount (with separators), `${t}` taxes in the finance toast, `{k}` a relative word (parent, sibling, spouse...). Moving a placeholder is fine, dropping one is not.
- No line breaks inside a row. Lines starting with `#` are comments.

## Tips
- Keep jokes natural. Rewrite them for your language instead of translating word for word.
- `ui.hud.*` rows sit in a small widget. Keep them close to the English length.
- Names of the other character and the player can be any gender. Phrase around grammatical gender where your language has it.
- The dropdown shows your file name with a capital first letter.

## Share it
Open a pull request adding your files under `config/languages/` and the mod can ship them.
