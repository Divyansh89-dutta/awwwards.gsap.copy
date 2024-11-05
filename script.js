document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 750));
    gsap.ticker.lagSmoothing(0);

    function splitTextIntoSpans(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const [firstDigit, secondDigit] = element.innerText;
            element.innerHTML = `
                <div class="digit-wrapper">
                    <span class="first">${firstDigit}</span>
                    <span class="second">${secondDigit}</span>
                </div>
            `;
        });
    }

    function populateGallery() {
        const imageContainers = document.querySelectorAll(".images");
        const imagesPerContainer = [
            [
                "https://plus.unsplash.com/premium_photo-1675620963970-41055a7d6cfc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2NlYW58ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2NlYW58ZW58MHx8MHx8fDA%3D",
                "https://plus.unsplash.com/premium_photo-1669274936462-5ac9832ba708?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2NlYW58ZW58MHx8MHx8fDA%3D",
            ],
            [
                "https://plus.unsplash.com/premium_photo-1688073189417-cf86a4c6c136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzZXJ0fGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzZXJ0fGVufDB8fDB8fHww",
                "https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D",
            ],
            [
                "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1431036101494-66a36de47def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
            ],
            [
                "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D",
            ],
            [
                "https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWlufGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fHww",
            ],
            [
                "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
                "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
                "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
            ],
            [
                "https://images.unsplash.com/photo-1687099415795-40b61242d421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhZ2UlMjBsaWZlfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1683456773195-49beac996edf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhZ2UlMjBsaWZlfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1690882285717-88292159bf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHZpbGxhZ2UlMjBsaWZlfGVufDB8fDB8fHww",
            ],
            [
                "https://images.unsplash.com/photo-1531702275836-8a2922d78491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eSUyMGxpZmV8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1423589989400-cc0270157ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eSUyMGxpZmV8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1502951364727-7acb8ea79a39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eSUyMGxpZmV8ZW58MHx8MHx8fDA%3D",
            ],
        ];

        imageContainers.forEach((container, index) => {
            const images = imagesPerContainer[index] || []; 
            images.forEach((url) => {
                const imgContainer = document.createElement("div");
                imgContainer.classList.add("img");
                const img = document.createElement("img");
                img.src = url;
                img.alt = `Project Image ${url}`;
                imgContainer.appendChild(img);
                container.appendChild(imgContainer);
            });
        });
    }

    splitTextIntoSpans(".mask h1");
    populateGallery();

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => gsap.set(".progress-bar", { scaleY: self.progress }),
    });

    const previewImg = document.querySelector(".preview-img img");
    const imgElements = document.querySelectorAll(".img img");

    imgElements.forEach((img) => {
        ScrollTrigger.create({
            trigger: img,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => (previewImg.src = img.src),
            onEnterBack: () => (previewImg.src = img.src),
        });
    });

    const indicator = document.querySelector(".indicator");
    const projectNames = gsap.utils.toArray(".name");
    const projects = gsap.utils.toArray(".project");

    projects.forEach((project, index) => {
        ScrollTrigger.create({
            trigger: project,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => {
                gsap.to(indicator, { top: index * 18 + "px", duration: 0.3, ease: "power2.out" });
                projectNames.forEach((name, i) => name.classList.toggle("active", i === index));
            },
            onLeaveBack: () => {
                gsap.to(indicator, { top: (index - 1) * 18 + "px", duration: 0.3, ease: "power2.out" });
                projectNames.forEach((name, i) => name.classList.toggle("active", i === index - 1));
            },
        });
    });
});


