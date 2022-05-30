import { Component } from 'react';
import Header from '../../components/Header/Header';
import '../VideoPage/VideoPage.scss';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

class UploadPage extends Component {

    render() {
        return(
            <Header />
        );
    }
}

export default UploadPage;