import React, {Component} from 'react';
import classes from "./MainPage.module.css";
import Button from '../../ui/Button/Button';
import {FaEarlybirds} from 'react-icons/fa';
import Images from '../Images/Images';
import axios from 'axios';
import ReactLoading from 'react-loading';

class MainPage extends Component{
    state={
        text : "",
        valu: false,
        err: false,
        number:null,
        loading:false
    }

    onChangeHandler = ( event ) => {
        this.setState( {text:event.target.value} )

        // console.log(data)
    }
    onChangeNumber= ( event ) => {
        this.setState( {number:event.target.value} )
        // console.log(this.state.number)
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
    onStartLoading = ()=>{
        this.setState({loading:true});
        this.DataPostHandler();
    }
    onStopLoading = ()=>{
        this.setState({loading:false});
    }
    DataPostHandler = props =>{
        let num = this.state.number;
        if(this.state.number === null || this.state.number === "0"){
            num = 1;
        }
        // num = Number(this.state.number);
        const text = this.state.text;
        axios.get("http://localhost:9000/main/post-text?text="+text+"&number="+num)
        .then(res =>{
            console.log(res.data);
            setTimeout(()=>{this.onStopLoading()}, 3000);
            setTimeout(()=>{this.onSubmitHandler()}, 3000);

        })
        .catch(err =>{
            console.log(err);
            this.onStopLoading();
            this.onErrorHandler();
        })
    }
    onRefreshHandler = () => {
        console.log(this.state.text)

        this.setState({valu:false, text:"", err:false, number:0});
    }

    render(){
        let err = null;
        console.log(this.state.number)
        if(this.state.err){
            err = <h3 className={classes.err}>Text Box is empty! Please add some text.</h3>
        }

        let imagesa = <div style={{height:"100%"}}>
            <div className={classes.Firstdiv}>
            <h1>Web Implementation of GAN's</h1>
            <p style={{fontSize:"20px"}}>Please enter the detailed Description of required type of bird images.</p>
            </div>
            {/* <div className={classes.Textdiv} > */}
            <textarea id="input" rows="6" color="light blue" cols="60" value={this.state.text} onChange={this.onChangeHandler} className={classes.textarea}></textarea>
            <div className={classes.Firstdiv} style={{paddingTop:"10px"}}>
            <p style={{fontSize:"20px"}}>Please enter the number of images required.</p>                
            </div>
            <input type="text" name="Num" minLength="1" maxLength="2" value={this.state.number} onChange={this.onChangeNumber} />
            <br></br>
            <br></br>
            <div className={classes.Seconddiv} >
            <Button iconname={{icon: FaEarlybirds}} clicked={this.onStartLoading}>Submit</Button>
            <Button iconname={{icon: FaEarlybirds}} clicked={this.onRefreshHandler}>Refresh</Button>
            </div>
            <br></br>
            {this.state.text}
            <br></br>
            {this.state.number}
            {err}
        </div>
        
        if(this.state.valu){
            imagesa = <Images refresh = {this.onRefreshHandler}/>
        }
        if(this.state.loading){
            imagesa = <div className={classes.Loading}>
            <ReactLoading type={"cubes"} color={"black"} height={60} width={60} />
            </div>
        }
        
        return(
            <div className={classes.MainPage}>
                
                
                {imagesa}
                
            </div>
        );
    }
}


export default MainPage;