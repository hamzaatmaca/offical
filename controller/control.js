import * as navbar from '/offical/components/main/navbar/navbar.js';
import * as main from '/offical/components/page/home/main/main.js';
import * as middle from '/offical/components/page/home/middle/middle.js';
import * as footer from '/offical/components/main/footer/footer.js';
import * as about from '/offical/components/page/about/about.js';
import * as contact from '/offical/components/page/contact/contact.js';

export default class Controller{
	constructor(){
		this.navbar ="<navbar-c></navbar-c>";
		this.footer = "<footer-c></footer-c>";
	}
	
	home(){
		document.getElementById('root').innerHTML=this.navbar+"<main-c></main-c><middle-c></middle-c>"+this.footer;
	}

	about(){
		document.getElementById('root').innerHTML=this.navbar+"<about-c></about-c>"+this.footer;

	}
	contact(){
		document.getElementById('root').innerHTML=this.navbar+"<contact-c></contact-c>"+this.footer;
	}

	
}



