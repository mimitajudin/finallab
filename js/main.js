//menu
const main_menu = document.querySelector('.main_menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    main_menu.style.display = 'flex';
    main_menu.style.top = '0';
}
function close(){
    main_menu.style.top = '-100%';
}
// contagion
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// prevention
document.getElementById("myBtn1").addEventListener("click", 
  function(){
  document.getElementById("do").style.display="block";
  });

  document.getElementById("myBtn2").addEventListener("click", 
  function(){
  document.getElementById("donts").style.display="block";
  });

  document.getElementById("exit1").addEventListener("click",
    function(){
      document.getElementById("do").style.display="none";
  });

  document.getElementById("exit2").addEventListener("click",
    function(){
      document.getElementById("donts").style.display="none";
  });

  // faq
var coll = document.getElementsByClassName("collapsible_faq");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
