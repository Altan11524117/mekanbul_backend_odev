const mongoose = require("mongoose");
const Venue = mongoose.model("venue");

const createResponse = (res, status, content) => res.status(status).json(content);

// YARDIMCI: Puan Hesaplama
const doAddComment = async (req, res, venue) => {
    if (!venue) {
        createResponse(res, 404, { "mesaj": "Mekan bulunamadı" });
    } else {
        const { author, rating, text, date } = req.body;
        venue.comments.push({ author, rating, text, date });

        try {
            const savedVenue = await venue.save();
            updateAverageRating(savedVenue._id);
            const thisComment = savedVenue.comments[savedVenue.comments.length - 1];
            createResponse(res, 201, thisComment);
        } catch (err) {
            createResponse(res, 400, err);
        }
    }
};

const updateAverageRating = async (venueId) => {
    try {
        const venue = await Venue.findById(venueId).select("rating comments");
        if (venue.comments && venue.comments.length > 0) {
            const total = venue.comments.reduce((acc, { rating }) => acc + rating, 0);
            venue.rating = parseInt(total / venue.comments.length, 10);
            await venue.save();
        }
    } catch (err) {
        console.log(err);
    }
};

// 1. Yorum Ekle
const addComment = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.venueid).select("comments");
        doAddComment(req, res, venue);
    } catch (err) {
        createResponse(res, 400, err);
    }
};

// 2. Yorum Getir (BU EKSİKTİ, ŞİMDİ TAMAM)
const getComment = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.venueid).select("name comments");
        if (!venue) {
            return createResponse(res, 404, { "mesaj": "Mekan bulunamadı" });
        }
        const comment = venue.comments.id(req.params.commentid);
        if (!comment) {
            return createResponse(res, 404, { "mesaj": "Yorum bulunamadı" });
        }
        createResponse(res, 200, {
            venue: { name: venue.name, id: req.params.venueid },
            comment: comment
        });
    } catch (err) {
        createResponse(res, 404, err);
    }
};

// 3. Yorum Güncelle (BU EKSİKTİ, ŞİMDİ TAMAM)
const updateComment = async (req, res) => {
    if (!req.params.venueid || !req.params.commentid) {
        return createResponse(res, 404, { "mesaj": "ID'ler eksik" });
    }
    try {
        const venue = await Venue.findById(req.params.venueid).select("comments");
        if (!venue) return createResponse(res, 404, { "mesaj": "Mekan yok" });

        const comment = venue.comments.id(req.params.commentid);
        if (!comment) return createResponse(res, 404, { "mesaj": "Yorum yok" });

        if (req.body.author) comment.author = req.body.author;
        if (req.body.rating) comment.rating = req.body.rating;
        if (req.body.text) comment.text = req.body.text;

        await venue.save();
        updateAverageRating(venue._id);
        createResponse(res, 200, comment);
    } catch (err) {
        createResponse(res, 400, err);
    }
};

// 4. Yorum Sil
const deleteComment = async (req, res) => {
    try {
        const venue = await Venue.findById(req.params.venueid).select("comments");
        if (!venue) return createResponse(res, 404, { "mesaj": "Mekan yok" });

        const comment = venue.comments.id(req.params.commentid);
        if (!comment) return createResponse(res, 404, { "mesaj": "Yorum yok" });

        comment.deleteOne();
        await venue.save();
        updateAverageRating(venue._id);
        createResponse(res, 200, { "durum": "Yorum silindi" });
    } catch (err) {
        createResponse(res, 400, err);
    }
};

module.exports = { addComment, getComment, updateComment, deleteComment };