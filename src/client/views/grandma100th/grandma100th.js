import React from 'react';

import * as classes from './grandma100th.module.scss';
import ImageContainer from '../../containers/imageContainer/imageContainer';

import flyer from '../../../images/Dorothy100-23Aug2023.png';
import cup from '../../../images/DWScup.png';
const Grandma100th = () => {
 return (
    
    <div className={classes.gallerywrapper}>
        <ImageContainer 
            alt="Cheers"
            image={cup}
            caption=""
        />
        <ImageContainer 
            alt="flyer for Grandma's birthday"
            image={flyer}
            caption=""
        />
    </div>
    
 )
}
export default Grandma100th