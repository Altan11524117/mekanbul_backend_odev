var express = require("express");
var router = express.Router();
var ctrlVenue = require("../controllers/venue");
var ctrlComment = require("../controllers/comment");

router.route("/venues")
    .get(ctrlVenue.listVenues)
    .post(ctrlVenue.addVenue);

router.route("/venues/:venueid")
    .get(ctrlVenue.getVenue)
    .put(ctrlVenue.updateVenue)
    .delete(ctrlVenue.deleteVenue);

router.route("/venues/:venueid/comments")
    .post(ctrlComment.addComment);

router.route("/venues/:venueid/comments/:commentid")
    .get(ctrlComment.getComment)
    .put(ctrlComment.updateComment)
    .delete(ctrlComment.deleteComment);

module.exports = router;