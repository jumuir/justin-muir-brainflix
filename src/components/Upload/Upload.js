import './Upload.scss'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Upload = () => {
    
    const history = useHistory();
    
    const handlePublish = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to upload?')) {
            console.log(e);
            history.push('/');
        };
    }

    const handleImage = (e) => {
        console.log(e.target.src);
    }

    return (
        <section className='upload-page'>
            <h1 className='upload-page__title'>Upload Video</h1>
            <form className='upload-form__container'>
                <div className='upload-form__top'>
                    <div className='upload-thumb__container'>
                        <h2 className='upload-thumb__subtitle'>VIDEO THUMBNAIL</h2>
                        <img className='upload-thumb__image' onClick={handleImage} id="image" src='http://localhost:8080/images/upload-default.jpg' alt=''/>
                    </div>
                    <div className='upload-form__inputs'>
                        <div className='upload-form__container'>
                            <h2 className='upload-form__subtitle'>TITLE YOUR VIDEO</h2>
                            <textarea name="title" className="upload-form__title input" id="title" placeholder="Add a title to your video"></textarea>
                        </div>
                        <div className='upload-desc__container'>
                            <h2 className='upload-form__subtitle'>ADD A VIDEO DESCRIPTION</h2>
                            <textarea name="description" className="upload-form__desc input" id="description" placeholder="Add a description to your video"></textarea>
                        </div>
                    </div>
                </div>
                <div className='upload-form__button-container'>
                    <button className="upload-submit"  onClick={handlePublish}>
                        <p>PUBLISH</p>
                    </button>
                    <button type='reset' className="upload-cancel">
                        <p>CANCEL</p>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Upload;