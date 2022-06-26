import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './Upload.scss'

const API_URL = `http://localhost:8080/`;
const API_KEY = process.env.REACT_APP_API_KEY;

const Upload = () => {
    
    const history = useHistory();
    const [uploadImage, setUploadImage] = useState('');

    const handlePublish = async (e) => {
        e.preventDefault();
        
        e.target[1].classList.remove('error-state');
        e.target[2].classList.remove('error-state');

        let emptyValue = false;
        if (e.target[1].value === '') { 
            e.target[1].classList.add('error-state');
            emptyValue = true;
        }
        if (e.target[2].value === '') {
            e.target[2].classList.add('error-state');
            emptyValue = true;
        }

        if (emptyValue) {
            alert('Please fill in the form fields.')
            return false;
        }
        
        
        const formData = new FormData();
        if (uploadImage !== '') {
            formData.append("image",  e.target[0].files[0], e.target[0].files[0].name);
        }
        formData.append("title", e.target[1].value);
        formData.append("description", e.target[2].value);
        
        if (window.confirm('Are you sure you want to upload?')) {
            
            await axios.post(`${API_URL}videos?api_key=${API_KEY}`, formData).then(res => console.log(res)).catch(err => console.log(err));
            history.push('/');
        };
    }

    const handleImage = async (e) => {
        
        setUploadImage(e.target.files[0].name);
        e.target.previousSibling.style.opacity = 1;
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
                            <label htmlFor="img-file" className="upload-thumb__image-btn">
                                {uploadImage !== '' ? `${uploadImage}` : 'Select Image'}
                            </label>
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