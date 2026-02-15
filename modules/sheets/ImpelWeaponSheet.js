export default class ImpelWeaponSheet extends WeaponSheet {
    get template(){
        return `system/impel/templates/sheets/${this.item.data.type}-sheet.html`
    }
}