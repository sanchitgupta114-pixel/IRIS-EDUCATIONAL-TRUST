    window.addEventListener("scroll", function () {

      const topBar = document.querySelector(".top-info");
      const header = document.querySelector("header");

      if (window.scrollY > 50) {
        topBar.classList.add("hide");
        header.classList.add("active");
      } else {
        topBar.classList.remove("hide");
        header.classList.remove("active");
      }

    });

    document.addEventListener("DOMContentLoaded", function() {

    const hero = document.querySelector(".hero");

    // Show animation on load
    setTimeout(() => {
        hero.classList.add("show");
    }, 300);

});

document.addEventListener("DOMContentLoaded", function() {

    const items = document.querySelectorAll(".impact-item");
    const counters = document.querySelectorAll(".counter");

    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = target / 100;

            const updateCount = () => {
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    function revealOnScroll() {
        const trigger = window.innerHeight * 0.85;

        items.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if (top < trigger) {
                item.classList.add("show");
                animateCounters();
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".two-col .col, .card");

    function reveal() {
        const trigger = window.innerHeight * 0.85;

        elements.forEach((el, index) => {
            const top = el.getBoundingClientRect().top;

            if (top < trigger) {
                setTimeout(() => {
                    el.classList.add("show");
                }, index * 150);
            }
        });
    }

    window.addEventListener("scroll", reveal);
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 50;
    const increment = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});