const dropParents = document.querySelectorAll('.drop-parent')
const dropLists = document.querySelectorAll('.sub-list')
dropParents.forEach((Parent, ind) => {
    Parent.addEventListener('mouseover', function() {
        dropLists[ind].classList.add('showMe')
    })
    parent.addEventListener('mouseout', function() {
        dropLists[ind].classList.remove('showMe');
    });
})

dropLists.forEach((drop, ind) => {
    drop.addEventListener('mouseover', function() {
        dropLists[ind].classList.add('showMe')
    })
    drop.addEventListener('mouseout', function() {
        dropLists[ind].classList.remove('showMe');
    });
})

// mobile
const mobileDropped = document.querySelectorAll('.dropped')
const subListMob = document.querySelectorAll('.sub-list-mob')
console.log(subListMob);
mobileDropped.forEach((drop, i) => {
    drop.addEventListener('click', function(){
        subListMob[i].classList.toggle('drop-sub-menu')
    })
})

const mobMenu = document.querySelector('.mobile-menu')
document.querySelector('.hamb-icon-lit').addEventListener('click', function() {
    console.log(mobMenu);
    mobMenu.classList.add('mobile-menu-show')
    document.body.style.overflow = 'hidden'
})
document.querySelector('.hamb-icon-cancel').addEventListener('click', function() {
    console.log(mobMenu);
    mobMenu.classList.remove('mobile-menu-show')
    document.body.style.overflow = 'auto'
})


