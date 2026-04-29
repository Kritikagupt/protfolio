function opentab(event, tabname){
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    tablinks.forEach(tablink => {
        tablink.classList.remove("active-links");
    });

    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove("active-tab");
    });

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {

    const targetId = this.getAttribute('href');

    if (targetId.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
          top: target.offsetTop - navbarHeight,
          behavior: "smooth"
        });
      }
    }
  });
});

// Add fade-in class to elements when they come into view
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
const triggerBottom = window.innerHeight * 0.8;

faders.forEach(el => {
const boxTop = el.getBoundingClientRect().top;

if(boxTop < triggerBottom){
el.classList.add("show");
}
});
});