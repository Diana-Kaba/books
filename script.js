window.onload = function () {
  let titles = document.getElementsByClassName("title");
  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", showBook, false);
  }

  function showBook(event) {
    let title = event.target;
    let toHide = title.nextElementSibling;
    if (toHide) {
      toHide.classList.toggle("open");
      //   if (toHide.classList.contains("open")) {
      //     toHide.classList.remove("open");
      //   } else {
      //     toHide.classList.add("open");
      //   }
    }
    title.classList.toggle("minus");
    // if (title.classList.contains("minus")) {
    //   title.classList.remove("minus");
    // } else {
    //   title.classList.add("minus");
    // }
  }
};
