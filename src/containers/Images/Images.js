import React, {Component} from 'react';
import classes from "./Images.module.css";
// import ia from '../../assets/images/birdimage.jpg'; 
import {Link} from 'react-router-dom';
import Button from '../../ui/Button/Button';
import {GiHummingbird} from 'react-icons/gi'
class Images extends Component{
    state ={
        images : []
    }

    importAll=(r) =>{
        // console.log(r)
        let images = [];
        // r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        r.keys().map((item, index) => { 
            // console.log(r(item).default)
            // images[index] = r(item).default; 
            images.push(r(item).default);
        });
        return images;
      }
    // alle =()=>{
    //     const images = this.importAll(require.context('../../assets/testimages', false, /\.(png|jpe?g|svg)$/));
    //    this.setState({images:images})
    // }
    componentDidMount(){
        this.onImportHandler()
    }
    onImportHandler = () =>{
        let images = []
          console.log(this.props.url)
        try{
            console.log("tryy")
            images = this.importAll(require.context('../../assets/testimages', false, /\.(png|jpe?g|svg)$/));
        }
        catch(err){
            console.log("The component is loading")
        }
        finally{
            // return images
            console.log("finallyyy")
            this.setState({images:images})
        }
    }
    render(){
          //change the url here to the actual images directory
        let images = []
        //   console.log(this.props.url)
        // try{
        //     console.log("tryy")
        //     images = this.importAll(require.context('../../assets/testimages', false, /\.(png|jpe?g|svg)$/));
        // }
        // catch(err){
        //     console.log("The component is loading")
        // }

        // images = setTimeout(()=>{this.onImportHandler()}, 10000)
        images = this.state.images
        // const images = this.props.paths
        console.log(images)
        // console.log(this.props.data)
        let contents = null
    if(images){
        // contents = this.props.data.map( idata =>{
        //     console.log(idata)
        //     return <div><img className={classes.ImgTag} src={ia} alt="bird" /></div>
        // })
        let x = 1;
        contents = images.map( idata =>{
            // console.log(idata)
            x += 1
            return <div className={classes.ImgDiv} key={x}>
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
                <Link to="/main" className={classes.NavItem}><Button className={classes.NavItem} iconname={{icon: GiHummingbird}}>Go Back</Button></Link>
                <div className={classes.ImgDiv}>
                    {/* <p>hii</p> */}
                
                {contents}
                </div>
            </div>
        );
    }
}

export default Images;