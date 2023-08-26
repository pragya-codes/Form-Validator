const username = document.getElementById('username');
const mob = document.getElementById('contact');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const confirmpass = document.getElementById('password2');
const form = document.getElementById('form');
/*console.dir(username); -- this displays the plethora of properties and values given by browser 
on the node/object obtained by document.getElementById("user")
You can see in the list that "Value" is a property of the object obtained - it gives the 
content entered in that input field.
console.log(username) - this just prints the object node obtained as it is (with all 
the tags/attributes etc)*/
function caps(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function showerror(input, message) {
	input.className = 'li-style error';
	const errormsg = input.nextElementSibling.nextElementSibling;
	errormsg.className = 'error showerr';
	errormsg.innerText = message;
}
function successful(input, message) {
	input.className = 'li-style success';
	const successmsg = input.nextElementSibling.nextElementSibling;
	successmsg.className = 'error';
	// successmsg.innerText = message;
}

function checkrequired(arr) {
	arr.forEach((input) => {
		if (input.value.trim() === '')
			showerror(input, `${caps(input)} is required!`);
	});
}
function checklength(input, min, max) {
	if (input.value.length < min)
		showerror(input, `${caps(input)} should be atleast ${min} characters.`);
	//longer way commented - refactored  in one line above
	//{
	// 	input.nextElementSibling.nextElementSibling.classList.add('showerr');
	// 	input.nextElementSibling.nextElementSibling.innerText = `${caps(
	// 		input
	// 	)} should be atleast ${min} characters.`;
	// }
	else if (input.value.length > max)
		showerror(input, `${caps(input)} should be only ${max} characters.`);
	//longer way commented - refactored  in one line above
	// 	{
	// 	input.nextElementSibling.nextElementSibling.classList.add('showerr');
	// 	input.nextElementSibling.nextElementSibling.innerText = `${caps(
	// 		input
	// 	)} should be only ${max} characters.`;
	// }
	else successful(input);
}

function checkemail(input) {
	const re =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (re.test(input.value.trim())) {
		successful(input);
	} else showerror(input, `Email is not Valid.`);
}
function checkmobile(input) {
	const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	if (re.test(input.value.trim())) {
		successful(input);
	} else showerror(input, `${caps(input)} is not Valid.`);
}

function checkpass(p, p1) {
	if (p.value.trim() !== p1.value.trim())
		showerror(p1, `Password does not match.`);
	else successful(p1);
}

function formvalid(e) {
	e.preventDefault();

	const inputarr = [username, contact, email, password, password2];

	checklength(username, 3, 15);
	checklength(pass, 6, 20);
	checkemail(email);
	checkmobile(contact);
	checkpass(password, password2);
	checkrequired(inputarr);
}

form.addEventListener('submit', formvalid);
