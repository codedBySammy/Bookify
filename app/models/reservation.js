const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    Date: Date,
    userID: String,
    businessID: String
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;