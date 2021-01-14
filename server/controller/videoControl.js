const videos = require('../model/videoModel');

function getAllVideos(_req, res) {
    res.status(200).json(videos.videoList());
}

function createNewVideo(req, res) {
    if (!req.body.title || !req.body.description) {
        res.status(400).json({
          error: 'POST body must contain all required properties',
          requiredProperties: ['title', 'description'],
        });
    }

    const newVideo = {
        title: req.body.title,
        description: req.body.description
    };
    res.status(201).json(videos.addVideo(newVideo));
}


function getVideoById(req, res) {
    res.json(videos.getVideoById(req.params.id));
}

function createNewComment(req, res) {
    if (!req.body.comment) {
        res.status(400).json({
          error: 'POST body must contain all required properties',
          requiredProperties: ['comment'],
        });
    }

    const newComment = {
        comment: req.body.comment
    };
    res.status(201).json(videos.addComment(newComment,req.params.id));
}

module.exports = {getAllVideos, createNewVideo, getVideoById, createNewComment}