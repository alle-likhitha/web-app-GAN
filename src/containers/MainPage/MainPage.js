import React, {Component} from 'react';
import classes from "./MainPage.module.css";
import Button from '../../ui/Button/Button';
import {FaEarlybirds} from 'react-icons/fa';
import Images from '../Images/Images';
class MainPage extends Component{
    state={
        text : "",
        valu: false
    }

    onChangeHandler = ( event ) => {
        this.setState( {text:event.target.value} )

        // console.log(data)
    }
    onSubmitHandler = () => {
        console.log(this.state.text)
        this.setState({valu:true});
    }

    render(){
        let imagesa = null
        if(this.state.valu){
            imagesa = <Images />
        }
        return(
            <div className={classes.MainPage}>
                <div className={classes.Firstdiv}>
                <h1>Web Implementation of GAN's</h1>
                <p style={{fontSize:"20px"}}>Please enter the detailed Description of required type of bird images.</p>
                </div>
                <textarea id="input" rows="6" color="light blue" cols="60" value={this.state.text} onChange={this.onChangeHandler} className={classes.textarea}></textarea>
                <br></br>
                <div className={classes.Seconddiv} >
                <Button iconname={{icon: FaEarlybirds}} clicked={this.onSubmitHandler}>Submit</Button>
                </div>
                <br></br>
                {this.state.text}
                
                {imagesa}
                
            </div>
        );
    }
}


export default MainPage;