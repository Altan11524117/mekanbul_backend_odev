const mongoose = require("mongoose");
const Venue = mongoose.model("venue");

const createResponse = function (res, status, content) {
    res.status(status).json(content);
};

const listVenues = async function (req, res) {
    try {
        const results = await Venue.find();
        // Basit listeleme yapıyoruz, coğrafi hesaplama kafa karıştırmasın
        // İstersen coğrafi kodu da ekleriz ama bu garanti çalışır.
        createResponse(res, 200, results);
    } catch (error) {
        createResponse(res, 404, error);
    }
};

const addVenue = async function (req, res) {
    try {
        const venue = await Venue.create({
            ...req.body,
            coordinates: [parseFloat(req.body.lat), parseFloat(req.body.long)],
            hours: [
                { day: req.body.day1, open: req.body.open1, close: req.body.close1, isClosed: req.body.isClosed1 },
                { day: req.body.day2, open: req.body.open2, close: req.body.close2, isClosed: req.body.isClosed2 }
            ]
        });
        createResponse(res, 201, venue);
    } catch (err) {
        createResponse(res, 400, err);
    }
};

const getVenue = async function (req, res) {
    try {
        const venue = await Venue.findById(req.params.venueid).exec();
        createResponse(res, 200, venue);
    } catch (err) {
        createResponse(res, 404, { "status": "Mekan bulunamadı" });
    }
};

const updateVenue = async function (req, res) {
    try {
        const updatedVenue = await Venue.findByIdAndUpdate(req.params.venueid, req.body, { new: true });
        createResponse(res, 201, updatedVenue);
    } catch (error) {
        createResponse(res, 400, error);
    }
};

const deleteVenue = async function (req, res) {
    try {
        await Venue.findByIdAndDelete(req.params.venueid);
        createResponse(res, 200, { "status": "Silindi" });
    } catch (error) {
        createResponse(res, 404, error);
    }
};

module.exports = { listVenues, addVenue, getVenue, updateVenue, deleteVenue };