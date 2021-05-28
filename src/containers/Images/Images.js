import React, {Component} from 'react';
import classes from "./Images.module.css";
import ia from '../../assets/images/birdimage.jpg';



class Images extends Component{
    render(){

        console.log(this.props.data)
    let contents = null
    // if(this.props.data){
    //     contents = this.props.data.map( idata =>{
    //         console.log(idata)
    //         return <div></div>
    //     })
        
    // }
    contents= <div className={classes.ImgDiv}>
        <img className={classes.ImgTag} src={ia} alt="bird" />
        <img className={classes.ImgTag} src={ia} alt="bird" />
        <img className={classes.ImgTag} src={ia} alt="bird" />
    </div>
        return(
            <div className={classes.Images}>
                {contents}
            </div>
        );
    }
}

export default Images;