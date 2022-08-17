import React ,{Component} from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import SingleLineImageList from './SingleLineImageList';
import ImagelistwithTitlebar from './ImagelistwithTitlebar';
import moviesData from '../../common/moviesData';
class Home extends Component {
    render() {
    return (
    <div className="home">
    <Header />
    <div className="heading">
    <span >Upcoming Movies</span>
    </div>
    <SingleLineImageList itemData={moviesData} />
    <div className = "flex-container">
        <div className = "left">
       <span>{}</span>
       <ImagelistwithTitlebar itemData={moviesData} />
        </div>
        <div className = "filters">
        <span id="findMovies">FIND MOVIES BY:</span>
        </div>
    </div>
    </div>

    );
    }
   }
   export default Home;