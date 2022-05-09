import './CommentsArea.scss';
import Comment from '../Comment/Comment';

const CommentsArea = (props) => {
    return (<>
        <section className='comments__container'>
            {props.mainVideo.comments.map((content) => <Comment 
                dateMaker={props.dateMaker} 
                name={content.name} 
                timestamp={content.timestamp} 
                comment={content.comment}
                />)}
        </section>
    </>
    )

}

export default CommentsArea