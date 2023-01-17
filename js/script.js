"use strict";

function titleClickHandler(event) {
  console.log("Button was clicked");
  console.log(event);
  const clickedElement = this;
  event.preventDefault();

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  /* add class 'active' to the clicked link */
  clickedElement.classList.add("active");

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts article.active");
  console.log(activeArticles);

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* get 'href' attribute from the clicked link */
  const artSelector = clickedElement.getAttribute("href");

  /* find the correct article using the selector (value of 'href' attribute) */
  const currentArticle = document.querySelector(artSelector);

  /* add class 'active' to the correct article */
  currentArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");
<<<<<<< HEAD

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';



  /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks();



=======

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}
>>>>>>> 04c09de7a43bc7a7cba526a17c2034cd082d78aa
