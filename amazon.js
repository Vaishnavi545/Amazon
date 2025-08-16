let imgbtnl = document.getElementById("slide-btn-left");
let imgbtnr = document.getElementById("slide-btn-right");
let imgitema = document.querySelectorAll(".image-item");

let start = 0;
const maxTranslate = -100 * (imgitema.length - 1); // calculates last slide position (negative)

// left button
imgbtnl.addEventListener("click", hanleftbtn);
function hanleftbtn() {
  if (start < 0) {
    // not beyond first slide
    start = start + 100;
    updateSlide();
  }
}

// right button
imgbtnr.addEventListener("click", hanrigbtn);
function hanrigbtn() {
  if (start > maxTranslate) {
    // not beyond last slide
    start = start - 100;
    updateSlide();
  }
}

// update transform
function updateSlide() {
  imgitema.forEach((element) => {
    element.style.transform = `translateX(${start}%)`;
  });
}

// auto slide every 10 sec
function renderslideauto() {
  if (start > maxTranslate) {
    start -= 100;
    updateSlide();
  }
}
setInterval(renderslideauto, 10000);
