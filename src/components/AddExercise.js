import React from 'react';
import addImg from '../images/add.png';
import './styles/AddExercise.css';
import { Link } from 'react-router-dom';

class AddExercise extends React.Component {

    render(){
        return (
            <div className="container button">
                <Link to="/exercise/new"><img src={addImg} /></Link>                
            </div>
        );
    }
}

export default AddExercise;