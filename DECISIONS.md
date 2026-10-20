# Design decisions

## Header hierarchy (2026-10-19), decided from a four-way prototype

- **Direction: one row, the track is a menu button.** `[Track ▾] | Map · stage chips … | search · settings`.
- Track button: current track name + caret, opens a menu listing every track with a one-line description; tracks not live yet are listed but disabled. Rendered by `tracks.js`, the only file tracks share.
- Map is the first chip (compass icon), so a track's home sits with its stages.
- Terms is a search-icon button on the right (LLM track only).
- Language and theme live together behind one settings (gear) button: a small menu with two segmented controls, Language (中文 / EN) and Theme (Light / Dark). Both menus close on Escape or an outside click and return focus to their button.
- Below 640px the track button shrinks with an ellipsis so the first row stays one line; the chips take their own row and scroll, fading at the right edge.

**Rejected**
- *Track strip above a chip row* (the first version): two different tab styles stacked, and nothing said which level ranks higher.
- *Masthead* (tracks as large section words, stages as underline tabs): clear order, but about 70px more header and the third track scrolled off on phones.
- *Rail* (stages nested under the track in a side rail, drawer on phones): showed the structure best, but took 240px from every page, broke the single centered column and hid stages behind a tap on phones.
- *Separate language and theme toggles in the top bar*: two controls that are rarely used, taking space beside the stages.
