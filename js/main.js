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
const newsCards = document.querySelectorAll(".news-card");

const prevButton = document.getElementById("news-prev");
const nextButton = document.getElementById("news-next");

if(newsList && newsCards.length > 0 && prevButton && nextButton){

    let newsPage = 0;

    const newsPerPage = 3;

    const totalPages = Math.ceil(
        newsCards.length / newsPerPage
    );

    function updateNews(){

        const moveDistance = 960;

        newsList.style.transform = `translateX(-${newsPage * moveDistance}px)`;
    }

    nextButton.addEventListener("click", function(){

        newsPage++;

        if(newsPage >= totalPages){
            newsPage = 0;
        }

        updateNews();

    });

    prevButton.addEventListener("click", function(){

        newsPage--;

        if(newsPage<0){
            newsPage = totalPages - 1;
        }

        updateNews();

    });

}