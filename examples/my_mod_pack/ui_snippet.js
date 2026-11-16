// ============================================================================
// INSTALL A D20 ACTIONS PACK FROM YOUR MOD'S UI SCRIPT (no manual file copying)
// ============================================================================
// What this does: it saves your pack files (actions + English texts, optional translations) into D20 Actions' saved folder,
// the same place you would copy them by hand. D20 Actions rereads that folder every 20 seconds or so, so the pack applies
// without a restart.
//
// HOW THE TEXT MUST BE FORMATTED (read this first)
//   * A pack is plain text. Each row is  key=value  on its OWN LINE, so every row below is one array item.
//   * Build the text with  [ 'row 1', 'row 2', ... ].join('\n')  : one array item per row, joined with \n (a new line).
//     Do not use backtick template strings, and do not split a row over two lines.
//   * Inside a row, write text exactly as in the cfg files. Variants of one message are separated by ' || ' (space, two bars,
//     space). Placeholders stay as written: {a} {t} ${m} {k}.
//   * A single quote inside a row must be escaped in JS:  'It\'s fine'   (or wrap that row in double quotes).
//   * No spaces around the first = sign, and no = inside a key.
//   * Lines that start with # are comments. The first row of each text is a comment that only THIS SNIPPET reads, so it knows
//     whether the saved files are old. Raise PACK_VERSION when your pack changes. Do NOT use '#version=' in a pack: D20 Actions
//     keeps that line for its own shipped files (it rewrites them when it changes) and ignores it everywhere else.
// The rows below are the same ones as in actions/my_mod.cfg and languages/english.my_mod.cfg next to this file. Those two
// files explain every row. Replace the REPLACE ids with your mod's real interaction ids.

var D20_MOD_ID = 'D20_Actions_1680C648';   // D20 Actions' id, never changes
var PACK_NAME = 'my_mod';                  // your pack file name (no extension). Name it after your mod
var PACK_VERSION = 1;                      // raise this when you change the rows below

// ---- 1. ACTIONS PACK  ->  saved/actions/my_mod -----------------------------
var MY_ACTIONS_TEXT = [
    '# my_mod_pack_version=' + PACK_VERSION,
    // put exact actions in an existing category (or none = never roll)
    'bag.REPLACE_MyMod_Workout=fitness',
    'bag.REPLACE_MyMod_OpenMenu=none',
    // a new category: label and check are only keys, the real text is in the language file
    'cat.my_mod.label={cat.my_mod.label}',
    'cat.my_mod.check={cat.my_mod.check}',
    'cat.my_mod.dc=13',
    'cat.my_mod.cooldown=20',
    'cat.my_mod.bonus=D20_Buff_FlowBody',
    // which actions belong to it (Lua patterns, ' || ' between alternatives)
    'pattern.my_mod.match=^REPLACE_MyMod_',
    // failure outcomes: pool.<category>.<key>=attribute;attribute;...
    'pool.my_mod.exhausted=w=30;anim=Stand_Sigh;buffs=D20_Buff_Drained:30',
    'pool.my_mod.mess=w=20;anim=EmoReact_Cringing_Embarassed;buffs=D20_Buff_Filth:30;crit=1',
    // modifiers that add to the d20
    'profile.my_mod.skill=Cooking',
    'profile.my_mod.stats=Energy:0.5',
    // a prize on a natural 20
    'reward.my_mod_tip=cat=my_mod;match=.;money=20..80;on=crit_success'
].join('\n');

// ---- 2. ENGLISH TEXTS  ->  saved/languages/english.my_mod -------------------
// One row per text key. Variants are separated by ' || '. Give every key 3 or more variants.
var MY_ENGLISH_TEXT = [
    '# my_mod_pack_version=' + PACK_VERSION,
    'cat.my_mod.label=My Mod',
    'cat.my_mod.check=My Mod Check',
    // the four results every category needs
    'my_mod.bonus=It all comes together. || A smooth run and a quiet smile. || Everything lands.',
    'my_mod.crit_success=A perfect one. || Nat 20. Somebody should write this down. || Flawless, and the room knows it.',
    'my_mod.soft_fail=Not your best attempt, but nothing breaks. || A shrug, a sigh and on you go. || It does not go well, and it does not go badly.',
    'my_mod.crit_fail=Spectacularly wrong. || Everything that could go wrong tried at once. || The universe takes a bow.',
    // one row per pool entry above
    'my_mod.exhausted=You run out of steam halfway through. || Your energy leaves through the back door. || That took more out of you than expected.',
    'my_mod.mess=A small disaster, tidily contained. || Something got on something else. || The cleanup will take a while.',
    // one row per reward above (${m} = the amount paid)
    'my_mod.my_mod_tip=Someone leaves a tip: ${m}. || A passer-by hands you ${m} and nods. || ${m} appears from somewhere. Take it.'
].join('\n');

// ---- 3. OPTIONAL TRANSLATION  ->  saved/languages/español.my_mod -----------
// Same keys, same placeholders, same number of variants. The file name is <language>.<pack>.
// A key you leave out is shown in English.
var MY_SPANISH_TEXT = [
    '# my_mod_pack_version=' + PACK_VERSION,
    'cat.my_mod.label=Mi Mod',
    'cat.my_mod.check=Prueba de Mi Mod',
    'my_mod.bonus=Todo encaja. || Una racha fluida y una sonrisa discreta. || Todo sale bien.'
].join('\n');

// ---- the saving code --------------------------------------------------------
function save(section, key, text) {
    return inzoi.cli.execute('uimod.cfg_save', { mod_id: D20_MOD_ID, section: 'ui/d20_data/saved/' + section, key: key, value: text });
}
function versionOf(result) {                 // reads the my_mod_pack_version=N comment of a saved file (cfg_load answers JSON with a value)
    var s = typeof result === 'string' ? result : JSON.stringify(result || '');
    var m = /my_mod_pack_version=(\d+)/.exec(s);
    return m ? Number(m[1]) : 0;
}
function installPack() {
    inzoi.cli.execute('uimod.cfg_load', { mod_id: D20_MOD_ID, section: 'ui/d20_data/saved/actions', key: PACK_NAME }).then(function (r) {
        if (versionOf(r) >= PACK_VERSION) return;                       // already installed
        save('actions', PACK_NAME, MY_ACTIONS_TEXT);                     // file: actions/my_mod
        save('languages', 'english.' + PACK_NAME, MY_ENGLISH_TEXT);      // file: languages/english.my_mod
        save('languages', 'español.' + PACK_NAME, MY_SPANISH_TEXT);      // optional
    }).catch(function () {});                                           // D20 Actions not installed: do nothing
}
installPack();
