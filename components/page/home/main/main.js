import * as header from '/offical/components/main/header/header.js';
const mainTemplate = document.createElement('template');
mainTemplate.innerHTML=header.link+`
<style>
*{/*outline:1px solid*/}
.main-slide{
	min-width:100%;
	background: url("./assets/img/computer.jpg") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:70vh;
    opacity:.8;

}
@media only screen and (max-width:768px){
	background: rgb(22,252,255);
	background: linear-gradient(0deg, rgba(22,252,255,1) 0%, rgba(255,255,255,1) 97%);
}
.main-slide img{
	max-width:100%;

}
.logo-text{
	color:rgba(255,255,255,1);
	margin-top:15vh;
	margin-left:10vw;
	line-height:2;
	letter-spacing:10px;
	text-shadow:0 0 10px black;
	font-size:50px;
	}
.logo-info{
	color:black;
	margin-left:10vw;
	font-size:20px;
	letter-spacing:5px;
	text-align:center;
	text-shadow:0 0 10px white;
	font-weight:bolder;


}

@media only screen and (max-width:500px){
	.logo-info-text{
		text-align:center
	}
	.logo-text-logo{
		text-align:center;
	}
}

</style>
<div class="container main-slide">
	<div class="row">
		<div class="col-sm-1 logo-text-logo">
			<h1 class="logo-text">Creative Solutions</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 logo-info-text">
			<span class="logo-info">We works for better future</span>
		</div>
	</div>
</div>

`

class Main extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'})
		this.shadowRoot.appendChild(mainTemplate.content.cloneNode(true))
	}
} 

window.customElements.define('main-c', Main);
