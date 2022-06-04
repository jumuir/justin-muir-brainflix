import { Component } from 'react';
import Upload from '../../components/Upload/Upload';
import '../VideoPage/VideoPage.scss';
const API_KEY = process.env.REACT_APP_API_KEY;

class UploadPage extends Component {

    render() {

        return(
            <Upload />
        );
    }
}

export default UploadPage;