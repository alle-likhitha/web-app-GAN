import React, {Component} from 'react';
import classes from "./Images.module.css";
import ia from '../../assets/images/birdimage.jpg'; 
import Button from '../../ui/Button/Button';
import {GiHummingbird} from 'react-icons/gi'


class Images extends Component{

    
    render(){
        function importAll(r) {
            console.log(r)
            let images = [];
            // r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            r.keys().map((item, index) => { 
                // console.log(r(item).default)
                // images[index] = r(item).default; 
                images.push(r(item).default);
            });
            return images;
          }
          //change the url here to the actual images directory
          const images = importAll(require.context('../../assets/testimages', false, /\.(png|jpe?g|svg)$/));
          
        console.log(images)
        // console.log(this.props.data)
        let contents = null
    if(images){
        // contents = this.props.data.map( idata =>{
        //     console.log(idata)
        //     return <div><img className={classes.ImgTag} src={ia} alt="bird" /></div>
        // })
        contents = images.map( idata =>{
            // console.log(idata)
            return <div className={classes.ImgDiv}>
                <img className={classes.ImgTag} src={idata} alt="bird" key={idata} />
                </div>
        })
        
    }
    if(images.length === 0){
        contents = <h3 className={classes.err}>Error no images in the folder!</h3>
    }
        // contents= <div className={classes.ImgDiv}>
        //     <img className={classes.ImgTag} src={ia} alt="bird" />
        //     <img className={classes.ImgTag} src={ia} alt="bird" />
        //     <img className={classes.ImgTag} src={ia} alt="bird" />
        //     </div>
        return(
            <div className={classes.Images}>
                <Button iconname={{icon: GiHummingbird}} clicked={this.props.refresh}>Go Back</Button>
                <div className={classes.ImgDiv}>
                {contents}
                </div>
            </div>
        );
    }
}

export default Images;