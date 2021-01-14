import axios from 'axios';

function UploadVideo (props) {
    const newVideo = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;

        if(title.trim() && description.trim()) {
            axios.post(`http://localhost:8080/videos`, {
                title: title,
                description: description
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

            event.target.reset();
        }
        else {
            alert("Please enter title and description");
        }
    }

    return (
        <section className="upload">
            <h1 className="upload__main-title">Upload Video</h1>
            <form className="upload__form" onSubmit={newVideo} >
                <div className="upload__box">
                    <div className="upload__left">
                    <label htmlFor="video-thumbnail" className="upload__thumbnail-label">
                        VIDEO THUMBNAIL
                    </label>
                    <img className="upload__thumbnail" alt="blue bicycle" src="./images/Upload-video-preview.jpg" />
                    </div>
                    <div className="upload__right">
                    <label htmlFor="video-title" className="upload__title-label">
                        TITLE YOUR VIDEO
                    </label>
                    <input type="text" name="title" className="upload__title" placeholder="Add a title to your video" />
                    <label htmlFor="video-description" className="upload__description-label">
                        ADD A VIDEO DESCRIPTION
                    </label>
                    <textarea className="upload__description" name="description" cols="27" rows="4" placeholder="Add a description of your video"></textarea>
                    </div>
                </div>
                <div className="upload__button">
                <input className="upload__cancel--tablet" type="reset" value="CANCEL" />
                <input className="upload__publish" type="submit" value="PUBLISH" />
                <input className="upload__cancel" type="reset" value="CANCEL" />
                </div>
            </form>
        </section>
    )
}

export default UploadVideo;