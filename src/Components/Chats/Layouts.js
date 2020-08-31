/* Components - Chats > Layouts | React Core */
import React, {useState} from 'react'

/* Components - Chats > Messages | Material Ui Components */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

/* Components - Chats > Layouts | Custom Styles */
import {LayoutStyles} from './Styles';

/* Layouts Declaration */
export default function Layouts() {
     const classes = LayoutStyles();
     const [inputs,   setInputs]   = useState();
     const [messages, setMessages] = useState([
         {
             name: 'Zlatan Ibrahimovic',
             avatar: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1016874750%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D757%26cropX2%3D3528%26cropY1%3D0%26cropY2%3D2771',
             message: 'Hi this is Ibra',
             dataset: '10.10.2020',
         },
         {
             name: 'Zlatan Ibrahimovic',
             avatar: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1016874750%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D757%26cropX2%3D3528%26cropY1%3D0%26cropY2%3D2771',
             message: 'Good to be in Milan',
             dataset: '12.10.2020',
         },
         {
             message: 'Hello, Ibra',
             dataset: '12.10.2020',
         },                                
     ]);

     const HandleSend = event => {
         event.preventDefault();
         setMessages([...messages, { message: inputs }]);
         setInputs('');     
     }

     return (
         <div className = {classes.layout}>
             <h6>You matched with {messages[0].name} on {messages[0].dataset}</h6>
             {messages.map((message) => (
             message.name ? 
             (
                 <div className = {classes.layout__messages}>
                     <Avatar
                         alt = {message.name}
                         src = {message.avatar}
                     />
                     <p className = {classes.layout__text_guest}>{message.message}</p>
                     <p className = {classes.layout__time_guest}>Sent Time: {message.dataset}</p>
                 </div>
             ) : (
                 <div className = {classes.layout__messages}>
                     <p className = {classes.layout__text_user}>{message.message}</p>
                     <p className = {classes.layout__time_user}>Sent Time: {message.dataset}</p>
                 </div>
             )
             ))}
             <form className = {classes.layout__inputs}>
                 <input
                     type = 'text'
                     value = {inputs}
                     onChange = {event => setInputs(event.target.value)}
                     className = {classes.layout__fields}
                     placeholder = 'Type your message'
                 />
                 <Button
                     size    = 'small' 
                     type    = 'submit'
                     variant = 'text'
                     onClick = {HandleSend}
                     className = {classes.layout__button}
                     disableRipple
                     disableFocusRipple 
                     disableElevation
                 > 
                     Send
                 </Button>
             </form>
         </div>
     )
}