import Action from '.'

export default class extends Action {
    constructor(name, value, el) {
        super(el)

        this.type = 'syncInput'
        this.payload = {
            name,
            value,
        }
    }
}