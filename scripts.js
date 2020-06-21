const recipes = document.querySelectorAll(".mostAcessed__recipe");
const modalOverlay = document.querySelector(".modal__overlay");
const modalContent = document.querySelector(".modal__content");

// Abre e insere as informações no modal
for (let recipe of recipes) {
    recipe.addEventListener("click", () => {

        let img = recipe.querySelector("img").src;
        let title = recipe.querySelectorAll("p");

        modalContent.querySelector("img").src = `${img}`;
        modalContent.querySelector("p").textContent = `${title[0].textContent}`;
        modalContent.querySelector(".name").textContent = `${title[1].textContent}`;

        modalOverlay.classList.add("active");
    })
};

const modalClose = document.querySelector(".modal__close");

// Fecha o modal
modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
})