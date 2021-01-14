import {Link} from 'react-router-dom';

function NextVideo(props) {
    return !props.sideVideo ? <h2>Loading...</h2> :
    (
        <section className="side-video">
            <p className="side-video__header">NEXT VIDEO</p>
            <ul className="side-video__list">
            {props.sideVideo
            .filter((video) => video.id !== props.activeVideo)
            .map((video) => (
                <li key={video.id}>
                    <Link className="side-video__item" to={`/videos/${video.id}`} >
                        <img alt="" className="side-video__img" src={video.image} />
                        <div className="side-video__detail">
                            <h2 className="side-video__title">{video.title}</h2>
                            <p className="side-video__channel">{video.channel}</p>
                        </div>
                    </Link>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default NextVideo;