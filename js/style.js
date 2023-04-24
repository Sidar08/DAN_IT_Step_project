function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

let arrImgs = [
  "graphic-design1.jpg",
  "graphic-design2.jpg",
  "graphic-design3.jpg",
  "graphic-design4.jpg",
  "graphic-design5.jpg",
  "graphic-design6.jpg",
  "graphic-design7.jpg",
  "graphic-design8.jpg",
  "graphic-design9.jpg",
  "graphic-design10.jpg",
  "graphic-design11.jpg",
  "graphic-design12.jpg",
];

function loadMore() {
  let imagesGrid = document.querySelector(".AmazingWork-grid");
  arrImgs.forEach(function (item) {
    let img = new Image();
    img.src = `./graphic-design/${item}`;
    imagesGrid.append(img);
  });

  const LoadMoreButton = document.querySelector(".AmazingWork-grid-load");
  LoadMoreButton.style.display = "none";

  const ImagesDiv = document.querySelector(".AmazingWork-grid");
  ImagesDiv.style.gridtemplaterows =
    "[row] 211px [row] 211px [row] 211px [row] 211px [row] 211px [row] 211px;";
}

let arrWebDesign = [
  "web-design1.jpg",
  "web-design2.jpg",
  "web-design3.jpg",
  "web-design4.jpg",
  "web-design5.jpg",
  "web-design6.jpg",
  "web-design7.jpg",
  "web-design8.jpg",
  "web-design9.jpg",
  "web-design10.jpg",
  "web-design11.jpg",
  "web-design12.jpg",
];

const tabs = document.querySelectorAll(".AmazingWork-buttom");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));

    tab.classList.add("active");
  });
});

let img = document.querySelectorAll(".img");

function loadWebDesign() {
   for (i = 0; i < img.length; i++) {
     img[i].setAttribute("src", `./web_design/${arrWebDesign[i]}`);
   } 
}

let arrWordpress = [
  "wordpress1.jpg",
  "wordpress2.jpg",
  "wordpress3.jpg",
  "wordpress4.jpg",
  "wordpress5.jpg",
  "wordpress6.jpg",
  "wordpress7.jpg",
  "wordpress8.jpg",
  "wordpress9.jpg",
  "wordpress10.jpg",
  "wordpress11.jpg",
  "wordpress12.jpg",
];

function loadWordpress() {
  
    for (i = 0; i < img.length; i++) {
      img[i].setAttribute("src", `./wordpress/${arrWordpress[i]}`);
    } 
}

let arrLandingPages = [
  "landing-page1.jpg",
  "landing-page2.jpg",
  "landing-page3.jpg",
  "landing-page4.jpg",
  "landing-page5.jpg",
  "landing-page6.jpg",
  "landing-page7.jpg",
  "landing-page8.jpg",
  "landing-page9.jpg",
  "landing-page10.jpg",
  "landing-page11.jpg",
  "landing-page12.jpg",
];

function loadLandingPages() {
  for (i = 0; i < img.length; i++) {
    img[i].setAttribute("src", `./landing-page/${arrLandingPages[i]}`);
  }
}

let arrGraphicDesign = [
  "graphic-design1.jpg",
  "graphic-design2.jpg",
  "graphic-design3.jpg",
  "graphic-design4.jpg",
  "graphic-design5.jpg",
  "graphic-design6.jpg",
  "graphic-design7.jpg",
  "graphic-design8.jpg",
  "graphic-design9.jpg",
  "graphic-design10.jpg",
  "graphic-design11.jpg",
  "graphic-design12.jpg",
];

function loadGraphicDesign() {
  for (i = 0; i < img.length; i++) {
    img[i].setAttribute("src", `./graphic-design/${arrGraphicDesign[i]}`);
  }
}

let arrAll = [
  "Layer23.jpg",
  "Layer24.png",
  "Layer25.png",
  "Layer26.png",
  "Layer27.png",
  "Layer28.png",
  "Layer29.png",
  "Layer30.png",
  "Layer31.png",
  "Layer32.png",
  "Layer33.png",
  "Layer34.png",
];

function loadAll() {
  for (i = 0; i < img.length; i++) {
    img[i].setAttribute("src", `./grid-icon/${arrAll[i]}`);
  }
}