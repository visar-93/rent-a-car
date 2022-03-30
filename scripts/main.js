
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    scrollNavbar();
};
// Get the header
var header = document.getElementById("header-rent");

//Get offset position of the navbar
var sticky = header.offsetTop;

// Add the stick class to the headder when you reach its scroll position
// Remove "sticky" when you leave the scroll position
function scrollNavbar() {
  
    if (window.pageYOffset > sticky) {
        header.classList.add("stick");
    }
    else {
        header.classList.remove("stick");
    }
}

// pagination

