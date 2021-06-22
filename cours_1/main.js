const buttons = document.querySelectorAll('.article button');

buttons.forEach( item => {
    console.log( item );
    item.addEventListener( 'click', e => {
        const span = e.currentTarget.querySelector( 'span' );
        if ( span )
        {
            let nLike = parseInt( span.textContent );

            if(!isNaN( nLike ))
            {
                span.textContent = nLike + 1;
            }
            else
            {
                span.textContent = 1;
            }
        }
        else
        {
            console.warn( 'span is missing' );
            throw( 'error span is missing' );
        }
    });
});