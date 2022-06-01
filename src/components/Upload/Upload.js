import './Upload.scss'
import thumb from '../../assets/images/images/Upload-video-preview.jpg';

const Upload = () => {
    return (
        <section className='upload-page'>
            <h1 className='upload-page__title'>Upload Video</h1>
            <form className='upload-form__container'>
                <div className='upload-thumb__container'>
                    <h2 className='upload-thumb__subtitle'>VIDEO THUMBNAIL</h2>
                    <img className='upload-thumb__image' src={thumb} alt=''/>
                </div>
                <div className='upload-form__container'>
                    <h2 className='upload-form__subtitle'>TITLE YOUR VIDEO</h2>
                    <textarea name="title" className="upload-form__title input" id="title" placeholder="Add a title to your video"></textarea>
                </div>
                <div className='upload-desc__container'>
                    <h2 className='upload-form__subtitle'>ADD A VIDEO DESCRIPTION</h2>
                    <textarea name="description" className="upload-form__desc input" id="description" placeholder="Add a description to your video"></textarea>
                </div>
                <div className='upload-form__button-container'>
                    <button id='submit' className="upload-submit">
                        <p>PUBLISH</p>
                    </button>
                    <button className="upload-cancel">
                        <p>CANCEL</p>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Upload