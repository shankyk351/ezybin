function openNav() {
  $('#mySidenav').css('width', '250px');
  $('.overlay').show();
}

function closeNav() {
  $('#mySidenav').css('width', 0);
  $('.overlay').hide();
}

$(document).ready(function(){
  $('.overlay').click(function(){
    $('.overlay').hide();
    $('#mySidenav').css('width', 0);
  })
})