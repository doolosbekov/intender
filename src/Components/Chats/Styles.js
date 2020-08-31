/* Chats & Messages Component - Styles Consolidation */
import {makeStyles}  from '@material-ui/core/styles';

/* Cards Styles Declaration */
export const ChatStyles = makeStyles ({
     chats: {
         /* Main */
         backgroundColor:  'transparent'
     },
});

/* Cards Styles Declaration */
export const LayoutStyles = makeStyles ({
     layout: {
         /* Main */
         "& h6": {
             color:    'grey', 
             padding:  '1.2rem',
             fontSize: '0.8rem',
             textAlign:  'center',
             textTransform:  'uppercase',
         },
     },
     layout__messages: {
         /* Main */
         display:  'flex',
         padding:  '1.2rem',
         alignItems: 'center',       
     },
     layout__text_guest: {
         /* Main */         
         padding:    '0.8rem',
         marginLeft: '1.2rem',
         borderRadius: '1.2rem',
         backgroundColor:  'lightgrey',
     },
     layout__time_guest: {
         /* Main */
         color:    'grey',
         fontSize: '0.8rem',
         position: 'absolute',
         left:     '5.8rem',
         marginTop:  '4.8rem',
     },
     layout__text_user: {
         /* Main */         
         padding:    '0.8rem',
         marginLeft: 'auto',
         borderRadius: '1.2rem',
         backgroundColor:  '#29b3cd',
     },
     layout__time_user: {
         /* Main */
         color:    'grey',
         fontSize: '0.8rem',
         position: 'absolute',
         right:    '1.8rem',
         marginTop:  '4.8rem',
     },
     layout__inputs: {
         /* Main */
         width:    '100%',
         bottom:   0,
         display:  'flex',
         padding:  '0.2rem',
         position: 'fixed',
         borderTop:  '1px solid lightgrey'
     },
     layout__fields: {
         /* Main */
         flex:     1,
         border:   'none',
         padding:  '0.2rem',
         marginLeft:   '0.6rem'
     },
     layout__button: {
         /* Main */
         color:      '#fe3d71  !important',
         border:     'none     !important',
         fontWeight: 'bolder   !important',
         marginRight:  '0.6rem',
         backgroundColor:  'transparent',
     },
});

/* Messages Styles Declaration */
export const MessageStyles = makeStyles ({
     links: {
         /* Main */
         textDecoration: 'none !important'
     },
     messages: {
         /* Main */
         display:    'flex',
         height:     '4rem',
         padding:    '1.2rem',
         alignItems: 'center',
         borderBottom:   '1px solid #fafafa',
         justifyContent: 'space-between',
     },
     messages__avatars: {
         /* Main */         
         marginRight: '1.2rem'
     },
     messages__details: {
         /* Main */
         flex: 1,
         "& h2": {color: 'black  !important'},
         "& p":  {color: 'grey   !important'},
     },
     messages__timestamps: {
         /* Main */
         color:  'lightgrey',         
     },
});