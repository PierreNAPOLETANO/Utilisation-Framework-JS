class Ball
{
    constructor ()
    {
        const size = 20;
        const randomX = size + Math.random() * (window.innerWidth - 3 * size);
        const randomY = size + Math.random() * (window.innerHeight - 3 * size);
        
        this.el = document.createElement('button');
        
        Object.assign(this.el.style, {
            backgroundColor: this.update(),
            position: 'absolute',
            width: size + 'px',
            height: size + 'px',
            left: randomX + 'px',
            top: randomY + 'px',
            border: '1px solid #000000',
            borderRadius: '100%'
        });
        document.body.appendChild(this.el);

        this.onClickBinded = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClickBinded);
        this.update
    }

    update ()
    {
        let rgb = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
                         + (Math.floor(Math.random() * 256)) + ','
                         + (Math.floor(Math.random() * 256)) + ')';
        this.el.style.backgroundColor = rgb;
    }

    onClick()
    {
        this.update();
    }

    destroy ()
    {
    }
}

for (let i = 0; i < 1000; i++)
{
    new Ball();
}