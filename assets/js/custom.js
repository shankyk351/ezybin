function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  $('.overlay').show();
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $('.overlay').hide();
}

$(document).ready(function(){
  $('.overlay').click(function(){
    $('.overlay').hide();
    document.getElementById("mySidenav").style.width = "0";
    // $('.sidenav').animate('width', 0);
  })
})