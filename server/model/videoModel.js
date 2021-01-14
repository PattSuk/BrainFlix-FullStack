const fs = require('fs');
const path = require('path');
const {v4:uuidv4} = require('uuid');

const videosFile = path.join(__dirname, '../data/videos.json');

function Video(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.channel = "Sloth Planet"
    this.image = "https://i.imgur.com/yLQVpWg.jpg";
    this.description = description;
    this.views = "0";
    this.likes = "0";
    this.duration = "4.00";
    this.video = "https://project-2-api.herokuapp.com/stream";
    this.timestamp = Date.now();
    this.comments = [];
}

function videoList() {
    const data = fs.readFileSync(videosFile);
    return JSON.parse(data);
}

function addVideo(body) {
    const videoArr = videoList();
    const video = new Video(body.title, body.description);
    videoArr.push(video);

    fs.writeFileSync(videosFile, JSON.stringify(videoArr));

    return video;
}

function getVideoById(id) {
    const videoArr = videoList();
    let filteredVideos = videoArr.filter((video) => video.id === id);
    if (filteredVideos.length) {
        return filteredVideos;
    } else {
        return `No video found with the id: ${id}`;
    }
}

function Comment(comment) {
    this.name = "Baby Sloth";
    this.comment = comment;
    this.id = uuidv4();
    this.likes = "0";
    this.timestamp = Date.now();
}

function addComment(body,id) {
    const videoArr = videoList();
    let filteredVideos = videoArr.filter((video) => video.id === id);
    const comment = new Comment(body.comment);
    filteredVideos[0].comments.push(comment);
    let newVideo = videoArr.filter((video) => video.id !== id);
    newVideo.push(filteredVideos[0]);

    fs.writeFileSync(videosFile, JSON.stringify(newVideo));

    return comment;
}

module.exports = {videoList, addVideo, getVideoById, addComment};