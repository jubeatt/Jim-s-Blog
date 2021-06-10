(function() {
    const menuBtn = document.getElementById('menuBtn')
    const menuList = document.getElementById('menuList')

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        (menuBtn.classList.contains('open')) ? menuList.style.maxHeight = "180px": menuList.style.maxHeight = "0px"
    }, false)
})()

