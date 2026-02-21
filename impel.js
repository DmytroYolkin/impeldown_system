import { IMPEL } from "./modules/config.js"
import impelActor from "./modules/objects/impelActor.js";
import impelCharacterSheet from "./modules/sheets/ImpelCharacterSheet.js";
import impelWeaponSheet from "./modules/sheets/ImpelWeaponSheet.js";

//#region Initialization
Hooks.once("init", async () => {

    console.log("(Impel)down | Initializing escape from reality");

    //Global Configuration Object Setup
    CONFIG.IMPEL = IMPEL;
    CONFIG.INIT = true;
    CONFIG.Actor.documentClass = impelActor;

    // Unregister default templates
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("impel", ImpelWeaponSheet, { makeDefault: true });
    // Actors.unregisterSheet("core", ActorSheet)
    
    const DocumentSheetConfig = foundry.aplications.apps.DocumentSheetConfig;
    DocumentSheetConfig.unregisterSheet(Actor, "core", foundry.appv1.sheets.ActorSheet);
    DocumentSheetConfig.registerSheet(Actor, "impel", impelCharacterSheet, { types: ["character"], makeDefault: true, label: "IMPEL.SheetClassCharacter"})


    //Partial-Handlebar load
    preloadHandlebarsTemplates();

    //Additional Handlebars Helpers
    registerHandlebarsHelpers();

});

Hooks.once("ready", async () => {

    CONFIG.INIT = false;

    //Only executes when run as Gamemaster
    if(!game.user.isGM) return;
});
//#endregion

//#region Handlebars
function preloadHandlebarsTemplates() {

    const templatePaths = [
        //Paths of partials templates
        
        "systems/impel/templates/partials/character-sheet-main.hbs",
        "systems/impel/templates/partials/character-sheet-combat.hbs",
        "systems/impel/templates/partials/character-sheet-devilFruit.hbs",
        "systems/impel/templates/partials/character-sheet-inventory.hbs",
        "systems/impel/templates/partials/character-sheet-biography.hbs",

    ]

    return loadTemplates(templatePaths)
};

function registerHandlebarsHelpers() {

    Handlebars.registerHelper("equals", function(v1, v2) { return (v1 === v2 )});

    Handlebars.registerHelper("contains", function(element, search) { return (element.includes(search))});

    Handlebars.registerHelper("concat", function(s1, s2, s3 = "") { return s1 + s2 + s3});

    Handlebars.registerHelper("isGreater", function(p1, p2) { return (p1 > p2)});

    Handlebars.registerHelper("isEqualORGreater", function(p1, p2) { return (p1 >= p2)});

    Handlebars.registerHelper("ifOR", function(conditional1, conditional2) { return (conditional1 || conditional2)});
    
    Handlebars.registerHelper("doLog", function(value) { console.log(value)});
    
    Handlebars.registerHelper("toBoolean", function(string) { return (string == "true")});
    
    Handlebars.registerHelper("for", function(from, to, incr, content) {
        
        let result = "";

        for(let i = from; i < to; i += incr)
            result += content.fn(i)
        return result
    });

    Handlebars.registerHelper("times", function(n, content) {

        let result = "";

        for(let i = 0; i < n; i++)
            result += content.fn(i)
        return result;
    });

    Handlebars.registerHelper("notEmpty", function(value) {

        if (value == 0 || value == "0") return true;
        if (value == null || values == "") return false;
        return true;
    });

    Handlebars.registerHelper("filterItemsByType", function(items, type) {
        if (!items || !Array.isArray(items)) return [];
        return items.filter(item => item.type === type);
    });
};
//#endregion