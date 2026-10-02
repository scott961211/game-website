//=======================================
//業首顯示當前位置
//=======================================

let currentPage = window.location.pathname.split("/").pop();

if(currentPage === ""){
    currentPage = "index.html";
}

let navLink = document.querySelectorAll("nav a")

navLink.forEach(function(link){

    let linkPage = link.getAttribute("href");

    if(linkPage === currentPage){

        link.classList.add("active");

    }
});

//========================================
//公告輪轉
//========================================

const newsList = document.querySelector(".news-list");

const prevButton = document.getElementById("news-prev");
const nextButton = document.getElementById("news-next");

if(newsList && prevButton && nextButton){

    nextButton.addEventListener("click",function(){

        const firstCard = newsList.firstElementChild;

        newsList.appendChild(firstCard);

    });

    prevButton.addEventListener("click",function(){

        const lastcard = newsList.lastElementChild;

        newsList.prepend(lastcard);

    });
    
}