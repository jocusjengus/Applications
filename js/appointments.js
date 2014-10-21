/**
 * Created by John on 21/10/2014.
 */
window.onload =function(){
var Appointment = function(subject, description, date, time){       // creating constuctor for the literal appointment object with above properties
    this.subject = subject;
    this.description =description;
    this.dateTime =new Date(date +""+ time);
    this.completed = false;
};
Appointment.prototype.isDue= function(){
   var now = new Date();
    if(now >= this.dateTime) {
        return true;
    }else{
        return false;
    }
};
Appointment.prototype.whenDue =function(){
    return this.dateTime - new Date();
};
Appointment.prototype.toString = function (){
    var s = this.subject + '\n' + this.description + '\n' + this.dateTime.toString() + '\n';
        if(this.completed) {
            s += "Completed \n\n";
        }else{
            s += "Not Competed \n\n";
        }
    return s;
};
    var appointments = [];
};