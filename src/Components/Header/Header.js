/* Components - Header | React Core */
import React   from 'react'

/* Components - Header | React Router */
import {Link, useHistory}  from "react-router-dom";

/* Components - Header | Material Ui Icons */
import ForumIcon         from '@material-ui/icons/Forum';
import ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos';
import PersonIcon        from '@material-ui/icons/Person';
import IconButton        from '@material-ui/core/IconButton';

/* Components - Header | Custom Styles */
import Logo           from './Media/Logo.svg'
import {HeaderStyles} from './Styles'


/* Header Declaration */
export default function Header({backButton}) {
     const classes = HeaderStyles();
     const history = useHistory();
     const profile = (
         <IconButton>
             <PersonIcon fontSize = 'large' className = {classes.header__icon} />
         </IconButton>
     );
     const backHome = (
         <IconButton onClick = {() => history.replace(backButton)}>
             <ArrowBackIosIcon fontSize = 'large' className = {classes.header__icon} />
         </IconButton>
     );
     
     return (
         <div className = {classes.header}>
             
             {backButton ? backHome : profile }
             
             <Link to = '/'>
                 <IconButton>
                     <img src = {Logo} alt = 'Logo' className = {classes.header__logo} />
                 </IconButton>
             </Link>
             
             <Link to = '/chats'>
                 <IconButton>
                     <ForumIcon  fontSize = 'large' className = {classes.header__icon} />
                 </IconButton>
             </Link>
         </div>
     );
}