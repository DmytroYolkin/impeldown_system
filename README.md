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

  **Wounds** checkboxes with different lvls (5 light, 3 medium, 1 hard and one to unconscious)
  - when unconsious character will throw a coin where 0 lose, 1 win as best of 5 (every round unconscious)

  **Devil Fruit** is just a stat same as mastery
  - when you create it you get page as part of character sheet

  **Skill** is an kind of item that will appear in the list so when you click on it, it will shows description

  **Boounty** will also appear somewhere under portrait with nickname

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

### Items



### Combat
