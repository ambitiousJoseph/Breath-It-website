const sectionNavigation = document.querySelector('.navigation');
const sectionTop = document.querySelector('.top');
const faders = document.querySelectorAll('.fade-in');

const observerOptions = {
    rootMargin:"-90px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            sectionNavigation.classList.add('bg-green');
        }else{
            sectionNavigation.classList.remove('bg-green');
        }
    })
}, observerOptions);

sectionOneObserver.observe(sectionTop);

const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
})