class Coin {
    constructor (id) {
        const toto = 2;
        this._id = id;
        this._el = document.createElement('button');
        this._el.classList.add('Coin');
        this._el.textContent = `Mon Button ${toto}`;
        document.body.appendChild(this._el);
        this.onClickBinded = this.onClick.bind(this);
        this._el.addEventListener('click', this.onClickBinded);
    }

    destroy () {
        const toto = 2;
        this._id = null;
        this._el = removeEventListener('click', this.onClickBinded);
        document.body.removeChild(this._el);
        this._el = null;
        this.onClickBinded = null;
    }

    get el () {
        return this._el;
    }

    onClick(e) {
        const event = new CustomEvent('kill', {
            detail: {
                target: this
            }
        });
        this._el.dispatchEvent(event);
    }
}

const coins = [];

const onKill = (e) => {
    for (let i = 0; i < array.length; i++) {
        if (e.detail.target.id === coins[i].id) {
            e.detail.target.el.removeEventListener('kill', onKill);
            coins.splice(i, 1);
        }
    }
    e.detail.target.destroy();
}

for (let i = 0; i < 10; i++) {
    const coin = new Coin();
    coin.el.addEventListener('kill', onKill);
    coins.push();
}