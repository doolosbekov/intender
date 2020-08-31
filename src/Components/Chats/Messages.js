/* Components - Chats > Messages | React Core */
import React from 'react'

/* Application Cores | React Router */
import {Link} from "react-router-dom";

/* Components - Chats > Messages | Material Ui Components */
import Avatar from '@material-ui/core/Avatar';

/* Components - Chats > Messages | Custom Styles */
import {MessageStyles} from './Styles';

/* Messages Declaration */
export default function Messages({
     name, link, message, avatar, timestamp
}) {
     const classes = MessageStyles();
     
     return(
     <Link className = {classes.links} to = {`/chats/${link}`}>
         <div className = {classes.messages}>
             <Avatar 
                 className = {classes.messages__avatars}
                 alt = {name}
                 src = {avatar}
             />
             <div className = {classes.messages__details} >
                 <h2>{name}</h2>
                 <p>{message}</p>
             </div>
             <p className = {classes.messages__timestamps}>
                 {timestamp}
             </p>
         </div>
     </Link>    
     )
}