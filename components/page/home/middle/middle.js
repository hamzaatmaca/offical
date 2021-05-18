import * as header from '/offical/components/main/header/header.js';
const middleTemplate = document.createElement('template');
middleTemplate.innerHTML=header.link+`
<style>
*{
	/*outline:1px solid;*/
}
	.middle-con{
		margin-top:15vh;
	}

	.x{
		width:20rem;
		
	}
	.card-title-color{
		color:#0d6efd;
		letter-spacing:4px;
		font-weight:bold;
		font-family:arial
	}
	
@media only screen and (min-width:1200px){
	.x{
		width:26rem;
	}
}
@media only screen and (min-width:1400px){
	.x{
		width:30rem;
	}
}
@media only screen and (min-width:1600px){
	.x{
		width:40rem;
	}
}

</style>
	<div class="container text-center d-flex justify-content-center flex-wrap middle-con">
	  <div class="row d-flex justify-content-around">

		  	<div class="col-md-5 d-flex justify-content-center mt-3 shadow">

				<div class="card x" >
				  <img src="assets/img/math.jpg" class="card-img-top" alt="page">
				  <div class="card-body">
				    <h5 class="card-title card-title-color">References</h5>
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href="#" class="btn btn-primary">Read More..</a>
				  </div>
				</div>

			</div>

			<div class="col-md-5 d-flex justify-content-center mt-3 shadow">

				<div class="card x">
				  <img src="assets/img/computer.jpg" class="card-img-top" alt="time">
				  <div class="card-body">
				    <h5 class="card-title card-title-color">Vision/Mission</h5>
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href="#" class="btn btn-primary">Read More..</a>
				  </div>
				</div>

			</div>
		</div>

		<div class="row d-flex justify-content-around mt-3">

		  	<div class="col-md-5 d-flex justify-content-center mt-3 shadow">

				<div class="card x">
				  <img src="assets/img/web.jpg" class="card-img-top" alt="page">
				  <div class="card-body">
				    <h5 class="card-title card-title-color">Brands</h5>
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href="#" class="btn btn-primary">Read More..</a>
				  </div>
				</div>

			</div>

			<div class="col-md-5 d-flex justify-content-center mt-3 shadow">

				<div class="card x">
				  <img src="assets/img/time.jpg" class="card-img-top" alt="time">
				  <div class="card-body">
				    <h5 class="card-title card-title-color">Career</h5>
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href="#" class="btn btn-primary">Read More..</a>
				  </div>
				</div>

			</div>
		</div>
	</div>
	
`;


class Middle extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'})
		this.shadowRoot.appendChild(middleTemplate.content.cloneNode(true))
	}
}

window.customElements.define('middle-c', Middle);