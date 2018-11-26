const contact = document.getElementById('contact');
const alert = document.querySelector('.alert');

//Function to get form values
const getInputVal = (id) => {
	return document.getElementById(id).value;
};

//Fuction to submit form
const submitForm = (e) => {
	e.preventDefault();

	//Get values
	const name = getInputVal('name');
	const company = getInputVal('company');
	const email = getInputVal('email');
	const phone = getInputVal('phone');
	const message = getInputVal('message');

	//Call function
	saveMessage(name, company, email, phone, message);

	//Show alert
	alert.style.display = 'block';

	//Hide alert after 3 seconds
	setTimeout(() => {
		alert.style.display = 'none';
	}, 3000);

	//Clean form
	contact.reset();
};


/* DOM EVENTS */
contact.addEventListener('submit', submitForm);
