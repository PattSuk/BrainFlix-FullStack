const api_key = '8531d6ee-2e2b-411a-8aad-f9f62c07352f';

function VideoHeader ({mainVideo}) {
    return (
        <section className="main-video" >
            <div className="main-video__box">
                <video
                    controls
                    className="main-video__video"
                    poster= {mainVideo.image}
                    src= {`${mainVideo.video}/?api_key=${api_key}`}
                ></video>
            </div>
        </section>
    )
}

export default VideoHeader;