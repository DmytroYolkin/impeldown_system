export default class impelWeaponSheet extends ItemSheet {
    get template() {
        return `systems/impel/templates/sheets/${this.item.type}-sheet.hbs`;
    }
}