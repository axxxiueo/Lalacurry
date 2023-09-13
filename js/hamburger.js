document.getElementById("navbtn").onclick = function(){
	document.querySelector('html').classList.toggle('open');
  $('.list_nav a[href]').on('click', function(event) {
    $('#navbtn').trigger('click');
});
  }

  