import React, {Component} from 'react';
import classes from "./Images.module.css";
import ia from '../../assets/images/birdimage.jpg';
// import Ima from '../../assets/testimages';


class Images extends Component{

    
    render(){
        function importAll(r) {
            console.log(r)
            let images = [];
            // r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            r.keys().map((item, index) => { 
                console.log(r(item).default)
                // images[index] = r(item).default; 
                images.push(r(item).default);
            });
            return images;
          }
          
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
            console.log(idata)
            return <div><img className={classes.ImgTag} src={ia} alt="bird" key={idata} /></div>
        })
        
    }
        // contents= <div className={classes.ImgDiv}>
        //     <img className={classes.ImgTag} src={ia} alt="bird" />
        //     <img className={classes.ImgTag} src={ia} alt="bird" />
        //     <img className={classes.ImgTag} src={ia} alt="bird" />
        //     </div>
        return(
            <div className={classes.Images}>
                <div className={classes.ImgDiv}>
                {contents}
                </div>
            </div>
        );
    }
}

export default Images;