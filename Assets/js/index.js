 M.AutoInit();
$(document).ready(function(){
    $('.parallax').parallax();
});//Initialize parallax
$(document).ready(function(){
    $('.tooltipped').tooltip();
  });
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
    		throttle:10,
    		scrollOffset:0
    	}
    	);
    
});