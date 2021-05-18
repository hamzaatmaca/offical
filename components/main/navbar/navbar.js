import * as header from '/offical/components/main/header/header.js';
const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML=header.link+`

<style>
	
	.navbar-container{
		min-width:100%;
	}
	.navbar-menu,.navbar-logo{
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.navbar-ul{
		display:flex;
		justify-content:space-around;
		align-items:center;
		min-width:100%;
	}
	.navbar-ul li{
		list-style-type:none;
	}
	.navbar-ul li span{
		text-decoration:none;
		transition:.4s;
		letter-spacing:3px;
		box-sizing:border-box;
		padding:5px;
		cursor:pointer;
		color:#0d6efd;
	}
	.navbar-ul li span:hover{
		text-shadow:0px 0px 2px white;
		background-color:rgba(0,100,200,0.3);
		border-radius:10px;
	}
	.navbar-mental{
		color:rgba(0,0,130,0.8);
		cursor:pointer;
		font-weight:bolder;
		font-family:sans-serif;
	}
	.navbar-offical{
		color:grey;
		cursor:pointer
	}
</style>
<div class="container navbar-container">
	<div class="row ">
		<div class="col-sm-4 navbar-logo">
			<h2 class="mt-2"><span class="navbar-mental">MentalKod</span><span class="navbar-offical">Offical</span></h2>
		</div>
		<div class="col-sm-8 navbar-menu ">
			<ul class="navbar-ul mt-3">
			  <li class="p-1"><span id="home" class="fs-5">Home</span></li>
			  <li class="p-1"><span id="about" class="fs-5">About</span></li>
			  <li class="p-1"><span id="contact" class="fs-5">Contact</span></li>
			</ul>
		</div>
	</div>
</div>
`
 class Navbar extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'})
		this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true))
	}
	gethome(){
		this.shadowRoot.querySelector('#home').addEventListener('click',(e)=>{
			location.href = location.origin + location.pathname+ '#' + e.target.id;
			window.location.reload();
		});
	}
	getabout(){
		this.shadowRoot.querySelector('#about').addEventListener('click',(e)=>{
			location.href = location.origin + location.pathname + '#' + e.target.id;
			window.location.reload();
		});
	}
	getcontact(){
		this.shadowRoot.querySelector('#contact').addEventListener('click',(e)=>{
			location.href = location.origin + location.pathname + '#' + e.target.id;
			window.location.reload();
		});
	}
	connectedCallback(){
		this.gethome();
		this.getabout();
		this.getcontact();
	}
}

window.customElements.define('navbar-c', Navbar);


