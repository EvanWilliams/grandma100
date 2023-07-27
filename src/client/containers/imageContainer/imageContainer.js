import React,{ useState} from 'react';
import * as classes from './imageContainer.module.scss'
export const ImageContainer = (props) => {

    const [modalOpen, setModalOpen] = useState(false)




     return(
        <div className={props.className} style={props.style}>
            <div onClick={(e) => {if(window.screen.availWidth > 768 && !props.modaldisabled){setModalOpen(true)}}}>
                <div className={classes.imagewrapper}>
                    {props.title ? <h3>{props.title}</h3> : null}
                    <figure>
                        <img alt={props.alt} src={props.image}></img>
                        <figcaption className={classes.caption}>
                            {props.caption}
                        </figcaption>
                    </figure>
                </div>
                {props.hr ? <hr/> : null}
            </div>
            {modalOpen ? <div className={classes.active}>
                <div className={classes.modalcontent}>
                <div className={classes.modalexit}> 
                    <span onClick={(e) => setModalOpen(false)} 
                    >&times;</span>
                </div>
                <div className={classes.imagewrapper} onClick={(e) => {setModalOpen(true)}}>
                    <div className={classes.image}>
                        {props.title ? <h3>{props.title}</h3> : null}
                        <figure>
                            <img alt={props.alt} src={props.image} className={classes.modalimage}></img>
                            <figcaption className={classes.caption}>
                                <h3>{props.caption}</h3>
                            </figcaption>
                        </figure>
                    </div>
                    {props.hr ? <hr/> : null}
                </div>
                </div>
            </div>: <div className={classes.inactive}>
                <div className={classes.modalcontent}>
                <div className={classes.modalexit}> 
                    <span onClick={(e) => setModalOpen(false)} 
                    >&times;</span>
                </div>
                <div className={classes.imagewrapper}>
                    <div className={classes.imagesection}>
                        {props.title ? <h3>{props.title}</h3> : null}
                        <figure>
                            <img alt={props.alt} src={props.image} className={classes.modalimage}></img>
                            <figcaption className={classes.caption}>
                                <h3>{props.caption}</h3>
                            </figcaption>
                        </figure>
                    </div>
                    {props.hr ? <hr/> : null}
                </div>
                </div>
            </div>}
        </div>
     )
}

export default ImageContainer;