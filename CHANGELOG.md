# Changelog

## Beta 0.9.32

Every action you do in game can now trigger a d20 roll. Pass, fail, natural 1 and natural 20 each have their own results.

### Actions
- 36 categories: art, chat, conflict, cooking, dance, dating, dining, etiquette, family, finance, fitness, games, gaming, housework, humor, kiss, laundry, logic, media, medicine, mood (spouse and partner), mourning, music, passion, performance, photo, programming, repair, romance, selfcare, shower, sink, spa, toilet, tv.
- 152 named action rows and 43 name-match rules cover the game's own interactions. Roll timing follows the action (start, end, or the end of a chain such as "Set the Mood").
- 304 outcome entries, 38 rewards, and 1,549 text variants (3 or more per outcome).
- Natural 1: always cancels the action and applies the penalty. Fail: 20% chance of cancel and penalty. Pass: 20% chance of a bonus. Natural 20: bonus every time. All chances can be changed per action and per category.
- Relationship matters: strangers and low levels can trigger fights or police, family never does.

### Effects and buffs
- 24 new buffs and effects (plus 22 hidden carrier buffs that pay and charge money without cheat messages), 14 modifiers and 58 buff scripts. Examples: Flow (body, mind, creative, stage, kitchen), Well Fed, Drained, Rapport, Awkward, Solace, Lovestruck, Cold Feet, Heat Stroke, Chill, Blessing, Hysteria, Filth, Fabuloso.
- 37 custom interactions (breaks, leaks, dust and more) that act on real objects.
- Failures can break appliances, shock, flood, make you slip, cause heat stroke, a cold, dust, dirty clothes, or a fire.
- Money gains and losses (lottery, scams, tips, fines, taxes) now use the game's own currency script. No cheat messages appear. The toast itemizes losses and taxes.

### Lethal hazards (optional, off by default)
- One switch in the settings. Off: harmless versions of every dangerous result (for example one dust spot instead of a flood, no real fire).
- On: real electrocution, heat stroke death, fires, a lethal-only punch, and police reports. Chances are small and set in the config.

### Dynamic difficulty
- The DC follows the main emotion, with hard limits of 5 and 30. Modifier breakdown hides zero values.

### Menus and widgets
- Settings panel: master switch, per-category on/off and cancel toggles, fail and bonus chance, dynamic DC switch, lethal hazards switch, language dropdown, and a version in the title.
- Roll widget: result, difficulty, modifier breakdown, effect lines. Small and big layouts, and it stays out of the way in menus.
- Language changes apply to the settings at once and to the roll widget in a few seconds.
- Developer tools removed from the release.

### For creators
- Actions, packs, texts and languages are plain data files. Layers load in order: base, then packs. A same key overrides, a new key adds.
- Add your own action rules, texts or a language without editing the mod. A missing line falls back to English.
- Languages included: English, Spanish. Buff names are translated into 15 languages. More languages are coming.

### Fixes
- Rolls no longer disappear for some actions (repeated match rules were being dropped).
- Text hand-off at startup is reliable (language and action files finish writing).
- "Set the Mood" rolls at the end of the interaction and gives its buffs only on a natural 20.
- Cleaning now gives the mess outcome as well as the allergy one.
- Lottery tickets have their own wins and losses.

<!-- Add each new release above this line. Newest first. -->
