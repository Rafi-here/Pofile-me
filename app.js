const mobile_menu =document.querySelector('.navbar-container .nav-list ul');
const menu_item =document.querySelector('.navbar-container .nav-list ul li a');

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
