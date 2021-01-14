import {formatTime} from './utilities/formatting';
import axios from 'axios';

function Comment({getMainVideoData, mainVideo,comments}) {
    const newComment = event => {
        event.preventDefault();

        const form = event.target;
        const comment = form.comment.value;

        if(comment.trim()) {
            axios.post(`http://localhost:8080/videos/${mainVideo.id}/comments`, {
                comment: comment
            })
            .then((response) => {
                getMainVideoData(mainVideo.id);
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
        <section className="comment">
            <h2>{comments && comments.length} Comments</h2>
            <div className="comment__box">
                <img alt="Male Avatar" className="comment__avatar" src="./images/Mohan-muruge.jpg" />
                <form className="comment__form" onSubmit={(e) => newComment(e)}>
                    <div className="comment__inside">
                        <label htmlFor="comment" className="comment__label">JOIN THE CONVERSATION</label>
                        <textarea name="comment" className="comment__textarea" cols="27" rows="4" placeholder="Add a comment"></textarea>
                    </div>
                    <input className="comment__submit" type="submit" value="COMMENT" />
                </form>
            </div>
            <ul className="comment-list">
            {comments && comments.map((comment) => (
                <li key={comment.id} className="comment-list__item">
                    <img alt="Sloth Avatar" className="comment-list__avatar" src="./images/sloth-5043323_1920.png" />
                    <div className="comment-list__box">
                        <h3 className="comment-list__name">{comment.name}</h3>
                        <time>{formatTime(comment.timestamp)}</time>
                        <p className="comment-list__comment">{comment.comment}</p>
                    </div>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default Comment;