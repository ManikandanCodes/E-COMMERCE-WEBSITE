// Side Nav bar

var sidenav = document.querySelector(".side_navbar");

function shownavbar() {
    sidenav.style.left = "0";
}

function closenavbar(){
    sidenav.style.left= "-60%";
}


// Submit  button alert

var click=document.querySelector(".click")

click.addEventListener("click",function(){
    alert("Thank You for Reaching Us ! We will reach you Soon...")
})