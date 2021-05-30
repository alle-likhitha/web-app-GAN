import React, {Component} from 'react';
import classes from "./MainPage.module.css";
import Button from '../../ui/Button/Button';
import {FaEarlybirds} from 'react-icons/fa';
import Images from '../Images/Images';
import axios from 'axios';

class MainPage extends Component{
    state={
        text : "",
        valu: false,
        err: false
    }

    onChangeHandler = ( event ) => {
        this.setState( {text:event.target.value} )

        // console.log(data)
    }
    onSubmitHandler = () => {
        console.log(this.state.text)
        this.setState({valu:true, err:false});
    }
    onErrorHandler = ()=>{
        console.log(this.state.err)
        this.setState({err:true});
    }

    DataPostHandler = props =>{
        axios.get("http://localhost:9000/main/post-text?text="+this.state.text)
        .then(res =>{
            console.log(res.data);
            this.onSubmitHandler();
        })
        .catch(err =>{
            console.log(err);
            this.onErrorHandler();
        })
    }
    onRefreshHandler = () => {
        console.log(this.state.text)
        this.setState({valu:false, text:""});
    }

    render(){
        let imagesa = null
        let err = null;
        if(this.state.valu){
            imagesa = <Images />
        }
        if(this.state.err){
            err = <h3 className={classes.err}>Text Box is empty! Please add some text.</h3>
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
                <Button iconname={{icon: FaEarlybirds}} clicked={this.DataPostHandler}>Submit</Button>
                <Button iconname={{icon: FaEarlybirds}} clicked={this.onRefreshHandler}>Refresh</Button>
                </div>
                <br></br>
                {this.state.text}
                <br></br>
                {err}
                {imagesa}
                
            </div>
        );
    }
}


export default MainPage;