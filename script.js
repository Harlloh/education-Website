// const body = document.querySelectorAll('body');
// const faqHead = document.querySelectorAll('.faqHead');
// const faqIcon = document.querySelectorAll('.faq-icon');


const faqsubTabs = document.querySelectorAll('.faq');


const li = document.querySelectorAll('li');
const hamburgerMenu = document.querySelector('.ham');
const nav = document.querySelector('nav');
const cancelButton = document.querySelector('.cancels');


window.addEventListener('scroll', () => {
    // document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 10);
    if(window.scrollY > 50){
        document.querySelector('header').classList.add('window-scroll')
    }
    else{
        document.querySelector('header').classList.remove('window-scroll')
    }
})


hamburgerMenu.addEventListener('click', () => {
    nav.style.display = 'flex';
    hamburgerMenu.style.display = 'none';
    cancelButton.style.display = 'block';
})
cancelButton.addEventListener('click', () => {
    nav.style.display = 'none';
    hamburgerMenu.style.display = 'flex';
    cancelButton.style.display = 'none';

})


faqsubTabs.forEach(faqsubTab => {
    faqsubTab.addEventListener('click', (e) => {
        faqsubTab.classList.toggle('open');
    })
});
