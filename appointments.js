
/*var subject = prompt("Please enter the required subject"),
 description = prompt("Please enter an appropriate description"),
 enterdate = prompt("Please enter a required date Mon no, YEAR"),
 timestamp = prompt("Please enter the required time 00:00");
 */


var subject = "John Skilling",
    description = "Big blue balls doctor",
    enterdate = "Oct 25, 2014",
    timestamp = "23:00";



var appointments = [];


var Appointment = function () {
 this.subject = subject;
 this.description = description;
 //this.date = enterdate;
 //this.time = timestamp;
 this.datetime = new Date (enterdate + " " + timestamp); // returned in console as a.datetime; the datetime method of the created object a in the appoinments array
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
 var millSec = this.datetime - new Date ();
    return millSec;
 };
Appointment.prototype.daysTill= function (){
    var msPerDay = 1000 * 60 * 60 * 24;
    var diff = this.datetime - new Date();
    var dayval = diff / msPerDay;
    return Math.floor(dayval);
};
Appointment.prototype.toString = function(){
    var s = this.subject + '\n' + this.description + '\n' +  // a.toString(); however a.localString is a build in method
        this.datetime.toString() + '\n';
    if(this.completed){
        s += "Completed\n\n";
    } else {
        s += "Not Completed\n\n";
    }
    return s;
};
Appointment.prototype.getDate = function(){
    return this.datetime.toDateString(); // a.datetime()
};
Appointment.prototype.getime = function() {
    return this.datetime.toLocaleTimeString();
}
Appointment.prototype.hoursTo = function (){
    var msPerhr = 1000 * 60 *60;
    var hrs = this.datetime - new Date ();
    hrval = hrs / msPerhr;
    return hrval;

};
a = new Appointment(this.subject, this.description, this.datetime);  //test array properties of new object from constructer a.whenDue(); a.isDue(); and a.toString();
appointments.push(a);

