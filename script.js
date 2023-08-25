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
	input.classList.add('error');
	const errormsg = input.nextElementSibling.nextElementSibling;
	errormsg.classList.add('showerr');
	errormsg.innerText = message;
}
function successful() {
	username.classList.add('success');
}

function checkrequired(arr) {
	arr.forEach((input) => {
		if (input.value.trim() === '') showerror(input);
	});
}
function checklength(input, min, max) {
	// checkrequired();
	if (input.value.length < min)
		showerror(input, `${caps(input)} should be atleast ${min} characters.`);
	//longer way commented - refactored above in one line
	//{
	// 	input.nextElementSibling.nextElementSibling.classList.add('showerr');
	// 	input.nextElementSibling.nextElementSibling.innerText = `${caps(
	// 		input
	// 	)} should be atleast ${min} characters.`;
	// }
	else if (input.value.length > max)
		showerror(input, `${caps(input)} should be only ${max} characters.`);
	//longer way commented - refactored above in one line
	// 	{
	// 	input.nextElementSibling.nextElementSibling.classList.add('showerr');
	// 	input.nextElementSibling.nextElementSibling.innerText = `${caps(
	// 		input
	// 	)} should be only ${max} characters.`;
	// }
}

function formvalid(e) {
	e.preventDefault();

	const inputarr = [username, contact, email, password, password2];
	checkrequired(inputarr);
	checklength(username, 3, 15);
	checklength(pass, 6, 20);
	checkemail(email);
}

form.addEventListener('submit', formvalid);
