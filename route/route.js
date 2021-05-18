import Controller from '/offical/controller/control.js';
let path = window.location.href;
let pathArray = path.split("#");
let pathlast = pathArray[1];

let control = new Controller()

switch(pathlast){
	case 'home':
		control.home();
	break;

	case 'about':
		control.about();
	break;

	case 'contact':
		control.contact();
	break;

	default:
		control.home();
}

