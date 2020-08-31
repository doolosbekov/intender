/* Components - Chats | React Core */
import React, {useState, useEffect} from 'react'

/* Components - Chats > Messagese | Chats > Messages & Firebase */
import Messages  from './Messages';

/* Components - Chats | Custom Styles */
import {ChatStyles} from './Styles';

/* Chats Declaration */
export default function Chats() {
     const classes = ChatStyles();
     
     return(
         <div className = {classes.chats}>
             <Messages
                 name = 'Zlatan Ibrahimovic'
                 link = 'zlatan'
                 avatar = 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1016874750%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D757%26cropX2%3D3528%26cropY1%3D0%26cropY2%3D2771'
                 message = 'Hi this is Ibra'
                 timestamp = '20 minutes ago'
             />
             <Messages
                 name = 'Samir Handanovic'
                 link = 'samir'
                 avatar = 'https://cdn.vox-cdn.com/thumbor/Tu-CILyB7SDIZ9HchDlkda81iLM=/0x0:4290x2838/1200x800/filters:focal(1711x1095:2397x1781)/cdn.vox-cdn.com/uploads/chorus_image/image/57833573/620903186.jpg.0.jpg'
                 message = 'Hi Handanovic is here'
                 timestamp = '40 minutes ago'
             />
             <Messages
                 name = 'Javier Zanetti'
                 link = 'javier'
                 avatar = 'https://static.inter.it/img/383837-a9ac9c5f483699b24e73d90d5fa9beaa4d431eb4737be9ab59fc6a32a5639feb.jpg'
                 message = 'Forza Inter'
                 timestamp = '8 minutes ago'
             />
             <Messages
                 name = 'Dejan Stankovic'
                 link = 'dejan'
                 avatar = 'https://as-vijesti.com/media/k2/items/cache/7259f5cd29bb148fa88047b6ec275343_L.jpg'
                 message = 'Drago is here'
                 timestamp = '12 minutes ago'
             />                                       
         </div>
     );
}