import {formatTime} from './utilities/formatting';
import viewsIcon from '../assets/Icons/PNG/Icon-views.png';
import likesIcon from '../assets/Icons/PNG/Icon-likes.png';

function VideoDetail ({mainVideo}) {
    return (
        <section className="main-video__detail">
                <h1 className="main-video__title">{mainVideo.title}</h1>
                <div className="main-video__container">
                    <h2 className="main-video__channel">By {mainVideo.channel}</h2>
                    <time>{formatTime(mainVideo.timestamp)}</time>
                    <div className="main-video__rating">
                        <p className="main-video__views">
                            <img alt="View Icon" src={viewsIcon} />
                            {mainVideo.views}
                        </p>
                        <p className="main-video__likes">
                            <img alt="Like Icon" src={likesIcon} />
                            {mainVideo.likes}
                        </p>
                    </div>
                </div>
                <p className="main-video__description">
                    {mainVideo.description}
                </p>            
            </section>
    )
}

export default VideoDetail;