let burgerBtn=document.querySelector("#burger-btn"),mainMenu=document.querySelector("#main-menu"),canSeeMenu=!1;burgerBtn.addEventListener("click",(()=>{console.log(canSeeMenu),canSeeMenu?(mainMenu.classList.remove("show-menu"),canSeeMenu=!1):(mainMenu.classList.add("show-menu"),canSeeMenu=!0)})),mainMenu.addEventListener("click",(()=>{mainMenu.classList.remove("show-menu"),canSeeMenu=!1}));
let burgerBtn = document.querySelector("#burger-btn");
let mainMenu = document.querySelector("#main-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {

    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
})