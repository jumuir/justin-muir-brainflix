import './CommentsArea.scss';
import Comment from '../Comment/Comment';

const CommentsArea = (props) => {
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.addComment(event.target.comment.value);
        event.target.comment.value = '';
    }
    
    return (
        <section className='comments__container'>
            
            <p className='comments__count'>{props?.mainVideo?.comments?.length ?? 0} Comments</p>
            
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
                {props?.mainVideo?.comments?.sort((a, b) => {
                        return (b.timestamp - a.timestamp);
                    }).map((content) => <Comment
                    key={content.id}
                    id={content.id}
                    name={content.name} 
                    timestamp={content.timestamp} 
                    comment={content.comment}
                    deleteComment={props.deleteComment}
                    />)}
            </div>
        </section>
    )

}

export default CommentsArea