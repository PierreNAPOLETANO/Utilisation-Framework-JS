class Thumbnail {
    constructor (src) {
        this._img = new Image();
        this.onLoadBinded = this.onLoadImage.bind(this);
        this._img.addEventListener('load', this.onLoadBinded);
        this._img.classList.add('Image');
        this._img.src = src;
    }

    onLoadImage() {
        document.body.appendChild(this._img);
        setTimeout(() => {
            this._img.classList.add('Image--loaded') ;
        }, 0);
    }
}

const thumnbail = new Thumbnail('https://images.unsplash.com/photo-1610971441253-ab06498a0749?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');