const bar = document.getElementById('bar');
const nav = document.getElementById('navabar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}