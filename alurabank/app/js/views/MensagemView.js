class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    template(modelo) {
        return `<p class="alert alert-info">${modelo}</p> `;
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
}
