let divBurg = document.querySelector('.burgermenu');
let clickZhmyak = document.querySelector('.zhmyak__img');
clickZhmyak.addEventListener('click',() => {
        for(let i = 0; i <= 100; i++){
                
        divBurg.style.height = i + 'px';

        divBurg.style.height == 0 + 'px';

        divBurg.classList.toggle('burgermenu__menu-off');

        
}
        clickZhmyak.style.display = 'none';
        clickZhmyakAlt.style.display = 'block';
});

let clickZhmyakAlt = document.querySelector('.zhmyak__alt');
clickZhmyakAlt.addEventListener('click',() => {
        for(let i = 100; i >= 0; i--){

        divBurg.style.height =  100 - i  + 'px';

                
        divBurg.classList.toggle('burgermenu__menu-off');

}
        clickZhmyak.style.display = 'block';
        clickZhmyakAlt.style.display = 'none';
});