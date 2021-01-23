const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgTxt = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        
        //dynamic text and image change

        const orignalSrc = preview.getAttribute("data-original");
        console.log(orignalSrc);
        original.src = orignalSrc;
        const altText = preview.alt;
        imgTxt.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal'))
    {
        modal.classList.remove('open');
        original.classList.remove("open");
    };
});