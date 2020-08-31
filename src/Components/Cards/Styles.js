/* Cards Component - Styles Consolidation */
import {makeStyles}  from '@material-ui/core/styles';

/* Cards Styles Declaration */
export const CardStyles = makeStyles ({
     card: {
         /* Main */
         position: 'relative',
         height:   '40vh',
         width:    '40vw',
         maxWidth: '80vw',
         padding:  '1.4rem',
         boxShadow:    '0px 0px 20px 2px rgba(0,0,0,0.75)',
         borderRadius: '1.4rem',
         backgroundSize:     'cover',
         backgroundPosition: 'center',
     },

     card__titles: {
         /* Main */         
         position: 'absolute',
         color:    'whitesmoke',
         bottom:   10,
     },

     card__container: {
         /* Main */
         display:  'flex',
         marginTop:'6vh',
         justifyContent: 'center',
     },
     swipe: {
         /* Main */
         position: 'absolute',
     }
});