const input = document.querySelector('.theme-switcher input');

input.addEventListener('change', (e)=> {
    if(e.target.checked){
    document.body.setAttribute('data-theme', 'night');
    }else{
        document.body.setAttribute('data-theme', 'day');
    }
}) 
