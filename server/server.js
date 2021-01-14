const express = require('express');
const app = express();
const cors = require('cors');
const videoRoutes = require('./routes/videos');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message:"Welcome to my first API",
        routes:[
              {
                method: 'get',
                endpoint: '/videos',
              },
              {
                method: 'post',
                endpoint: '/videos',
                body: {
                  title: 'string',
                  description: 'string'
                }
              },
              {
                method: 'get',
                endpoint: '/videos/:id',
              },
              {
                method: 'post',
                endpoint: '/videos/:id/comments',
                body: {
                  comment: 'string'
                }
              },
        ],
    });
});

app.use(cors());

app.use('/videos', videoRoutes);

app.listen(8080, () => {
    console.log('server running on port 8080');
});