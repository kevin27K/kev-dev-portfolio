const btnMenu = document.querySelector('.site-nav-button-menu');
const navMenu = document.querySelector('.site-nav-menu');

navMenu.style.left = '-84%';

btnMenu.addEventListener('click', ()=>{
    
    if(navMenu.style.left === '-84%' ){
        navMenu.style.left = '0%'
        btnMenu.style.left = "75%"
    }else{
        navMenu.style.left = '-84%'
        btnMenu.style.left = "-12%"
    }
})