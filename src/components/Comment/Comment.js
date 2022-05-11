import './Comment.scss';
import { dateMaker } from '../../utilities/helper-functions';

const Comment = (props) => {
    const timeDiff = (new Date ()) - (new Date(props.timestamp));
    
    const date = dateMaker(timeDiff);
    
    return (<>
        <section className='comment__container'>
            <div className='comment__left'>
                <div className='comment__image'></div>
            </div>
            <div className='comment__right'>
                <div className='comment__heading'>
                    <p className='comment__name'>{props.name}</p>
                    <p className='comment__date'>{date}</p>
                </div>
                <p className='comment__copy'>{props.comment}</p>
            </div>
        </section>
    </>
    )

}

export default Comment