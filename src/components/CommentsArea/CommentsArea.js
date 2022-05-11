import './CommentsArea.scss';
import Comment from '../Comment/Comment';

const CommentsArea = (props) => {
    return (<>
        <section className='comments__container'>
            
            
            <div className="comments__input-area">
                <div className="comments__image"></div>
                <form className="comments__form" id="comments-form">
                    <p className='comments__form-title'>JOIN THE CONVERSATION</p>
                    <textarea name="comment" className="form-input" id="comment" placeholder="Add a new comment"></textarea>
                    <div className="btn-container">
                        <button type="submit" id="submit">
                            <p>COMMENT</p>
                        </button>
                    </div>
                </form>
            </div>
            <div>
                {props.mainVideo.comments.map((content, index) => <Comment
                    key={index} 
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