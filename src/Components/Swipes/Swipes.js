/* Components - Swipes | React Core */
import React, {useState, useEffect} from 'react'

/* Components - Swipes | Material Ui Icons */
import IconButton    from '@material-ui/core/IconButton';
import ReplayIcon    from '@material-ui/icons/Replay';
import CloseIcon     from '@material-ui/icons/Close';
import StarRateIcon  from '@material-ui/icons/StarRate';
import FavoriteIcon  from '@material-ui/icons/Favorite';
import FlashOnIcon   from '@material-ui/icons/FlashOn';

/* Components - Swipes | Custom Styles */
import {SwipesStyles}  from './Styles'

/* Swipes Declaration */
export default function Swipes() {
     const classes    = SwipesStyles();
     const swipeIcons = [
         {icon: <ReplayIcon   fontSize = 'large' className = {classes.swipes__replay}   />  },
         {icon: <CloseIcon    fontSize = 'large' className = {classes.swipes__close}    />  },
         {icon: <StarRateIcon fontSize = 'large' className = {classes.swipes__star}     />  },
         {icon: <FavoriteIcon fontSize = 'large' className = {classes.swipes__favorite} />  },
         {icon: <FlashOnIcon  fontSize = 'large' className = {classes.swipes__flash}    />  }
     ]

     return(
         <div className = {classes.swipes}>
             {swipeIcons.map(icons => {return(
                 <IconButton>
                     {icons.icon}
                 </IconButton>
                 )}
             )}
         </div>
     )
}