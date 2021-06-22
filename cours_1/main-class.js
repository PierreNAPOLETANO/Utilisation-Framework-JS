class Like
{
    // Properties


    // Constructor
    constructor(el)
    {
        this.el            = el;
        this.likeContent   = el.querySelector('.Article__likeCount');
        this.likeCount     = el.dataset.count;
        
        this.onClickBinded = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClickBinded);

        this.update();
    }

    // Getters et Setters


    // Others methods
    onClick()
    {
        this.likeCount++;
        this.update();
    }

    destroy()
    {
        this.el.removeEventListener('click', this.onClickBinded);
        this.onClickBinded = null;
        this.likeContent   = null;
        this.likeCount     = null;
        this.el            = null;
    }

    update()
    {
        this.likeContent.textContent = this.likeCount;
    }
}

const buttons    = document.querySelectorAll('.Article__like');
const allButtons = [];

buttons.forEach(el => {
    console.log('el', el);
    allButtons.push(new Like(el));
});

document.querySelector('.destroy').addEventListener('click', () => {
    allButtons.forEach(like => {
        like.destroy();
        like = null;
    })
});

// new Like(document.querySelector('.Article__like'));