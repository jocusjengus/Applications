var appointments = [];

window.onload = function() {
    var addButton = document.getElementById("add");
    addButton.onclick = add;
    var resButton = document.getElementById("result")
    resButton.onclick = showTable;
};

var Appointment = function (){
 this.subject = subject;
 this.description = description;
 this.datetime = new Date (enterdate + " " + timestamp); // returned in console as a.datetime; the datetime method of the created object a in the appoinments array
 this.completed = false;
 };
Appointment.prototype.isDue = function () {
 var now = new Date ();
    if (this.datetime > now) {
        return false;
    } else {
        return true;
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
    if(this.completed){s += "Completed\n\n";}
    else {s += "Not Completed\n\n";}
    return s;
};
Appointment.prototype.getDate = function(){
    return this.datetime.toDateString(); // a.datetime()
};
Appointment.prototype.getime = function() {
    return this.datetime.toLocaleTimeString();
};
Appointment.prototype.hoursTo = function (){
    var msPerhr = 1000 * 60 *60;
    var hrs = this.datetime - new Date ();
    hrval = hrs / msPerhr;
    return hrval;
};
Appointment.prototype.tableRow = function(){
    var tr;
    tr = "<tr><td>" + this.getDate() + "</td><td>" +
    this.getime() + "</td><td>" + this.subject +
    "</td><td><input type='checkbox' value='" + this.completed + "'></td></tr>";
    return tr;
};

var showTable;
showTable = function () {
    var tableDiv = document.getElementById("table");
    var table = "<table border='1'><thead><th>Date</th><th>Time</th><th>Subject</th><th>Completed</th></thead>";
    var j = appointments.length;
    for (var i = 0; i < j; i++) {
        var app = appointments[i];
        table += app.tableRow();
    }
    table += "</table>";
    tableDiv.innerHTML = table;
};
var add;
add = function () {
    subject = prompt("Please enter the required subject");
    description = prompt("Please enter an appropriate description");
    enterdate = prompt("Please enter a required date Mon no, YEAR");
    timestamp = prompt("Please enter the required time 00:00");
    var a = new Appointment(subject, description, enterdate, timestamp);  //test array properties of new object from constructer a.whenDue(); a.isDue(); and a.toString();
    appointments.push(a);
};
