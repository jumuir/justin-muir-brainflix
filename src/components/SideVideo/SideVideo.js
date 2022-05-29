import './SideVideo.scss';


const SideVideo = (props) => {

    const handleSideVideoClick = () => {
        props.changeMainVideo(props.id);
    }


    return (
        <div 
            className='side-video__container'
            onClick={handleSideVideoClick}
        >
            <div className='side-video__image-container'>
                <img className='side-video__image' src={props.image} alt=''/>
            </div>
            <div className='side-video__copy'>
                <p className='side-video__title'>
                    {props.title}
                </p>
                <p className='side-video__channel'>
                    {props.channel}
                </p>
            </div>
            
        </div>
    )

}

export default SideVideo