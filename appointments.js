/**
 * Created by John on 21/10/2014.
 */
    var Appointment = function (subject, description, date, time) {
        this.subject = subject;
        this.description = description;
        this.datetime = new Date(date + "" + time);
        this.completed = false;
    };
    var appointments =[];

    Appointment.prototype.isDue = function () {
        var now = new Date();
        if (now >= this.datetime) {
            return true;
        } else {
            return false;
        }
    };
    Appointment.prototype.whenDue = function () {
            return this.datetime - new Date();
        }
    Appointment.prototype.toString = function () {
            var s = this.subject + '\n' + this.description + '\n' + this.datetime.toString() + '\n';
            if (this.completed) {
                s += "Completed \n\n";
            } else {
                s += "Not Competed \n\n";
            }
            return s;
        };

