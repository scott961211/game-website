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

const newsCards = document.querySelectorAll(".news-card");

const prevButton = document.getElementById("news-prev");
const nextButton = document.getElementById("news-next");

let newsIndex = 0;

const newsPerPage = 3;

function showNews(){

    newsCards.forEach(function(card,index){

        card.style.display = "none";

        if(
            index >= newsIndex &&
            index < newsIndex + newsPerPage
        ){
            card.style.display = "block";
        }

    });

}

if(prevButton && nextButton){

    nextButton.addEventListener("click",function(){

        newsIndex += newsPerPage;

        if(newsIndex >= newsCards.length){
            newsIndex = 0;
        }

        showNews();

    });

    prevButton.addEventListener("click",function(){

        newsIndex -= newsPerPage;

        if(newsIndex < 0){
            newsIndex = Math.floor((newsCards.length-1) / newsPerPage) * newsPerPage;
        }

        showNews();

    });

    showNews();

}