# impeldown_system

Actor should have few pages to change through:
 - main, inventory, skill, bounty and if you have devil fruit, devil fruit change

Items

Combat

---

### Character Sheet
#### Main
Contains stats, mastery, devil fruit (Null as default), wounds checkbox, skills list, bounty
  **Stats** contains only fix: Endurance, Strength, Agility, Stamina, Intellegence
  - stat has lvl and score. lvl will be count as `Math.floor(1+Math.log2(@score/10))`

  **Mastery** can be created inside of character sheet without creating a sheet inside.
  - mastery should contain lvl and score the same as stat
  - we should be able to choose between arsenal and mastery. Where arsenal can have inside of it a sheet with description

  **Devil Fruit** is just a stat same as mastery
  - when you create it you get page as part of character sheet

  **Boounty** will also appear somewhere under portrait with nickname
  
  ###### How it will look like
  - ***Token***, ***Bounty*** and ***Debuffs*** wil be in a sidebar on the left. From up to down in order
  (only names of debuffs without description)
  - ***Stats*** will appear in upper part of sheet for now only basic stats (Maybe ***Devil Fruit*** as well)
  - ***Mastery*** below stats can be in columns and a row (maybe sorted by type)

#### Combat tab
  **Wounds** checkboxes with different lvls (5 light, 3 medium, 1 hard and one to unconscious)
  - when unconsious character will throw a coin where 0 lose, 1 win as best of 5 (every round unconscious)

  **Skill** is an kind of item that will appear in the list so when you click on it, it will shows description

  **Favs** is kind of favorite or most used items from inventory

  **Debuffs** can be illness, sickness, major wound and so on

  ###### How it will look like
  - On side bar still ***Token*** and below it ***Wounds*** 
  - We will split to 3 section from up to down in following order:
  ***Favs*** > ***Debuffs*** > ***Skills***
  - ***Skills*** will be displayed simarly as ***Mastery*** in main

#### Inventory
In Inventory page we could see spot to mention in what we have our stuff.
  - depends on it we get space to put objects
  - there is wallet with amount of belly
  - and weigth limitation depends on strength with stamina (if in quantity cartoon infinity ignore weight)

#### Devil fruit or SuperNatural
If in main page stat devil fruit not null
  - can be devil fruit item that will appear in this page
  - other skills there related to fruit with description

#### Biography
Init appereance with races, roles (main, sub), age, weigth, heigth and biography
  - in future would be good to change parts of style sheet depends on main role

#### Guest

### Verhicles
ACtor of ship where we will have omvemtory, ship state and what rooms we have

### Items



### Combat
When combat begins players see kind of tokens (two kind) and the space where they can drag it
  - when everyone spend their combat tokens, next round begins
  - should be more optimise to gm because of multiple enemies (only high lvl difficulty should have them or gm can manage for who he gets tokens of combat)

### NPC
NPC should have rolling setting states depends on their difficulty

## Folder architecture (AI-GENERATED)

Structure of files for Foundry VTT system:

- **root**: Contains the main system definitions.
  - `system.json`: The manifest file that defines the system, its version, authors, and compatibility.
  - `template.json`: Defines the data model structure for Actors and Items.
  - `impel.js`: The main entry point for the system's JavaScript.
  - `impel.css`: The compiled CSS file used by the system.

- **lang/**: Contains localization files.
  - `en.json`: English translation strings.

- **less/**: Contains source files for styling.
  - `impel.less`: The main LESS file that probably imports other style files.
  - `character-sheet.less`: Specific styles for the character sheet.

- **modules/**: Contains JavaScript modules creating the system logic.
  - `config.js`: Configuration constants and lists used throughout the system.
  - `functions_ofSheets.js`: Functions specifically related to how sheets render or behave.
  - `utils.js`: Helper functions used across the system.