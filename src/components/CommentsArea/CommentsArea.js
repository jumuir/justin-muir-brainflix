import './CommentsArea.scss';
import Comment from '../Comment/Comment';

const CommentsArea = (props) => {
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.addComment(event.target.comment.value);
    }
    
    return (
        <section className='comments__container'>
            
            <p className='comments__count'>{props.mainVideo.comments.length} Comments</p>
            
            <div className="comments__input-area">
                <div className="comments__image"></div>
                <form className="comments__form" id="comments-form" onSubmit={submitHandler}>
                    <div className='comments__form-left'>    
                        <p className='comments__form-title'>JOIN THE CONVERSATION</p>
                        <textarea name="comment" className="comments__form-input" id="comment" placeholder="Add a new comment"></textarea>
                    </div>
                    <div className="btn-container">
                        <button id="submit">
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
    )

}

export default CommentsArea