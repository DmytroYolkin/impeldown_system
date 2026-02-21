export default class impelActor extends Actor {

    prepareData() {
        // to overwrite later steps

        super.prepareData();
    }

    prepareDerivedData() {

        const actorData = this.system;

        //Will be added some statement to switch between actor types (Character, NPC, Guest, Vehicle)

        this._preparePlayerCharacterData(actorData);
    }

    _preparePlayerCharacterData(actorData) {

        // calculation of base Character values (our lvl of stats, maybe can make total?)

        this._setCharacterValues(actorData);
    }

    async _setCharacterValues(data) {

        // calculation of values
        // Math.floor(1+Math.log2(data/10))

    }

    setNote(note) {

        // Nothode to update character notes

        this.update({"system.note": note});
    }

    addLogEntry(Entry) {

        // Add a Log Entry to the Character Event Log

        let log = this.system.log;
        log.push(Entry);
        this.update({"system.log": log});
    }





}