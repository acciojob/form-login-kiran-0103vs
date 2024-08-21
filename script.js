function getFormvalue() {
    //Write your code here
	var form = document.forms['form1'];

    // Extract the first name and last name
    var firstName = form['fname'].value;
    var lastName = form['lname'].value;

    // Show the full name in an alert
    alert(firstName + ' ' + lastName);

}
