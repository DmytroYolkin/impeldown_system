export default class ImpelWeaponSheet extends ItemSheet {
    get template() {
        return `systems/impel/templates/sheets/${this.item.type}-sheet.hbs`;
    }
}