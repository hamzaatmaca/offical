import * as header from '/offical/components/main/header/header.js';
const contactTemplate = document.createElement('template');
contactTemplate.innerHTML=header.link+`
	<style>
		.contact-container{
			min-height:100vh;
		}
		*{
			/*outline:1px solid*/
		}
	</style>

	<div class="container contact-container">
	  <div class="row">

		 <div class="col-md-6 mt-5">
			<form class="mt-5">
			  <div class="mb-3">
			    <label for="exampleInputEmail1" class="form-label">Email address</label>
			    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
			  </div>
			  <div class="mb-3">
			    <label for="exampleInputPassword1" class="form-label">Message</label>
			    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			  </div>
			  <button type="submit" class="btn btn-primary">Send Message</button>
			</form>
		 </div>

		<div class="col-md-6 mt-5">
			<h5 class="mt-5">Contact With Us</h5>
			<ul class="list-group">
			  <li class="list-group-item">

			  	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
				  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
				</svg>

				&nbsp&nbsp&nbspDidim / AYDIN

			  </li>
			  <li class="list-group-item">

			  	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
				  <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
				</svg>
				&nbsp&nbsp&nbsp mentalkod09@gmail.com
			  </li>
			  <li class="list-group-item">

			  	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
				  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
				</svg>
				&nbsp&nbsp&nbsp +90 551 194 44 32
			  </li>
			  
			</ul>

		</div>

	 </div>
	 <div class="row">

	 </div>
	</div>
`;


class Contact extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({mode:'open'})
		this.shadowRoot.appendChild(contactTemplate.content.cloneNode(true))
	}
} 

window.customElements.define('contact-c', Contact);
