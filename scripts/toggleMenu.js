document.querySelector('.open-menu__block').addEventListener('click', function(){
    document.querySelector('nav.navbar').classList.add('open');
})

const closeMenu = document.querySelector('.navbar .close-menu');

if(closeMenu){
    closeMenu.addEventListener('click', function(){
        document.querySelector('nav.navbar').classList.remove('open');
    })
}