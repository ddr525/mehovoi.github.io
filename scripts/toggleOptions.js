document.querySelector('.shop-button__filter').addEventListener('click', function(){
    document.querySelector('.options').classList.add('open')
})

const closeOptions = document.querySelector('.options');

if(closeOptions){
    closeOptions.addEventListener('click', function(){
        closeOptions.classList.remove('open');
    })
}