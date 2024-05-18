/*function toggleMenu() {
	var  menuLinks = document.querySelector('.menu_links');
	menuLinks.style.display = (menuLinks.style.display === 'grid' || menuLinks.style.display === '') ? 'none' : 'grid';
}
*/

var hamMenu = document.querySelector('.ham_menu');
var links = document.querySelectorAll('.item');
var menuLinks = document.querySelector('.menu_links');

// Setting initial menuLins state
//menuLinks.style.display = 'none';

hamMenu.addEventListener('click', function() {
	menuLinks.style.display = (menuLinks.style.display === 'grid') ? 'none' : 'grid';
});



links.forEach(function(link) {
	link.addEventListener('click', function() {
		menuLinks.style.display = 'none';
	});
});


