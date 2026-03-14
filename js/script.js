 

            //    Lucide Icons         
            lucide.createIcons();


            // Toggle Menu
            const toggle = document.querySelector('.nav-toggle');
            const navLinksMenu = document.querySelector('.nav-links');

            toggle.addEventListener('click', () => {
                navLinksMenu.classList.toggle('active');
                toggle.classList.toggle('active');
            });



             const reveals = document.querySelectorAll(".reveal");

            function revealOnScroll() {
                const windowHeight = window.innerHeight;

                reveals.forEach((el) => {
                    const elementTop = el.getBoundingClientRect().top;

                    if (elementTop < windowHeight - 100) {
                        el.classList.add("active");
                    }
                });
            }

            window.addEventListener("scroll", revealOnScroll, { passive: true });

            // Javascript for scroll

            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll(".nav-link");

            window.addEventListener("scroll", () => {

                let current = "";

                sections.forEach((section) => {
                    const sectionTop = section.offsetTop - 200;
                    // const sectionHeight = section.clientHeight;

                    if (window.scrollY >= sectionTop) {
                        current = section.getAttribute("id");
                    }
                });

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.href.includes(current)) {
                        link.classList.add("active");
                    }
                });

            });

        // smoothly menu
            
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute("href"));

                target.scrollIntoView({
                    behavior: "smooth"
                });
            });
        });

        // progress bar

        const progressBar = document.querySelector(".scroll-progress");

        window.addEventListener("scroll", () => {

            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / scrollHeight) * 100;

            progressBar.style.width = progress + "%";
        });




        // Navbar Shadow on Scroll
        const navbar = document.querySelector(".navbar");

        window.addEventListener("scroll", () => {

            if(window.scrollY > 50){
                navbar.classList.add("scrolled");
            }else{
                navbar.classList.remove("scrolled");
            }

        });

        // Button Micro Interaction (Ripple Effect)
        document.querySelectorAll(".btn").forEach(button => {

            button.addEventListener("click", function(e){

                const circle = document.createElement("span");

                const diameter = Math.max(this.clientWidth, this.clientHeight);

                circle.style.width = circle.style.height = diameter + "px";

                circle.style.left = e.offsetX - diameter / 2 + "px";
                circle.style.top = e.offsetY - diameter / 2 + "px";

                circle.classList.add("ripple");

                const ripple = this.querySelector(".ripple");

                if(ripple){
                    ripple.remove();
                }

                this.appendChild(circle);

            });

        });


        // Large preview

        // Portfolio Image Modal
        const modal = document.querySelector(".portfolio-modal");
        const modalImg = modal.querySelector("img");

        const portfolioImages = document.querySelectorAll(".portfolio-item img");

        portfolioImages.forEach(img => {

            img.addEventListener("click", () => {

                modal.classList.add("active");
                modalImg.src = img.src;

            });

        });

        modal.addEventListener("click", () => {
            modal.classList.remove("active");
        });


