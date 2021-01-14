import VideoHero from "./VideoHero";
import VideoDetail from "./VideoDetail";
import Comment from "./Comment";
import NextVideo from './NextVideo';

function MainVideo ({getMainVideoData,mainVideo,sideVideo,activeVideo}) {
    const {comments} = mainVideo;
    return !mainVideo ? <h2>Loading...</h2> :
    (
        <main>
            <VideoHero mainVideo={mainVideo} />
            <div className="content">
                <div className="content__left">
                    <VideoDetail mainVideo={mainVideo} />
                    <Comment getMainVideoData={getMainVideoData} mainVideo={mainVideo} comments={comments} />
                </div>
                <NextVideo sideVideo={sideVideo} activeVideo={activeVideo}/>
            </div>
        </main>
    )
}

export default MainVideo;