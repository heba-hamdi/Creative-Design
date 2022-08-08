const btns=document.querySelectorAll('.story-btn');


btns.forEach(btn=>{
    btn.addEventListener('click',e=>{
        e.preventDefault();
        btn.nextElementSibling.classList.toggle('change');
        btn.classList.toggle('change');
    }
    )
})