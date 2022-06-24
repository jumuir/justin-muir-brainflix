import './Upload.scss'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = `http://localhost:8080/`;
const API_KEY = process.env.REACT_APP_API_KEY;

const Upload = () => {
    
    const history = useHistory();
    const [uploadImage, setUploadImage] = useState(null);

    const handlePublish = async (e) => {
        e.preventDefault();
        console.log(e.target[0].files[0]);
    
        const formData = new FormData();
        if (uploadImage) {
            formData.append("image",  e.target[0].files[0], e.target[0].files[0].name);
        }
        formData.append("title", e.target[1].value);
        formData.append("description", e.target[2].value);
        console.log(e.target[1].value, e.target[2].value);
        if (window.confirm('Are you sure you want to upload?')) {
            console.log(e);
            await axios.post(`${API_URL}videos?api_key=${API_KEY}`, formData).then(res => console.log(res)).catch(err => console.log(err));
            history.push('/');
        };
    }

    const handleImage = (e) => {
        console.log(e);
        setUploadImage({ uploadImage: e.target.files[0]});
    }

    return (
        <section className='upload-page'>
            <h1 className='upload-page__title'>Upload Video</h1>
            <form className='upload-form__container' encType="multipart/form-data" onSubmit={handlePublish}>
                <div className='upload-form__top'>
                    <div className='upload-thumb__container'>
                        <h2 className='upload-thumb__subtitle'>VIDEO THUMBNAIL</h2>
                        <div className='upload-thumb__image-container'>
                            <img className='upload-thumb__image' id="image" src='http://localhost:8080/images/upload-default.jpg' alt=''/>
                            <label htmlFor="img-file" className="upload-thumb__image-btn">Select Image</label>
                            <input type='file' accept="image/png, image/jpeg" id='img-file' onChange={handleImage}/>
                        </div>
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
                    <button className="upload-submit" type='submit'>
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