import './CommentsArea.scss';
import Comment from '../Comment/Comment';

const CommentsArea = (props) => {
    return (<>
        <section className='comments__container'>
            
            
            <div className="comments__input-area">
                <div className="comments__image"></div>
                <form className="comments__form" id="comments-form">
                    <label for="comment">JOIN THE CONVERSATION</label>
                    <textarea name="comment" className="form-input" id="comment" placeholder="Add a new comment"></textarea>
                    <div className="btn-container">
                        <button type="submit" id="submit">COMMENT</button>
                    </div>
                </form>
            </div>
            <div>
                {props.mainVideo.comments.map((content) => <Comment 
                    dateMaker={props.dateMaker} 
                    name={content.name} 
                    timestamp={content.timestamp} 
                    comment={content.comment}
                    />)}
            </div>
        </section>
    </>
    )

}

export default CommentsArea