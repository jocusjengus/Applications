//var subject, description, enterdate, timestamp;

var subject = prompt("Please enter the required subject"),
    description = prompt("Please enter an appropriate description"),
    enterdate = prompt("Please enter a required date Mon,DAY YEAR"),
    timestamp = prompt("Please enter the required time 00:00");

var appointments = [];

//console.log(subject, description, enterdate, timestamp);
var Appointment = function () {
 this.subject = subject;
 this.description = description;
 this.date = enterdate;
 this.time = timestamp;
 this.datetime = new Date (enterdate + " " + timestamp);
 this.completed = false;
 };

 Appointment.prototype.isDue = function () {
 var now = new Date ();
 if (this.datetime > now) {
 return true;
 } else {
 return false;
 }
 };
 Appointment.prototype.whenDue = function () {
 return this.datetime - new Date ();
 };
 Appointment.prototype.toString = function () {
 var s = this.subject + '\n' + this.description + '\n' +
 this.datetime.toString () + '\n';
 if (this.completed) {
 s += "Completed\n\n";
 } else {
 s += "Not Completed\n\n";
 }
 return s;
 };
a = new Appointment(this.subject, this.description, this.datetime);  //test array properties of new object from constructer a.whenDue(); a.isDue(); and a.toString();
appointments.push(a);
