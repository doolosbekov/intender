/* Swipes Component - Styles Consolidation */
import {makeStyles}  from '@material-ui/core/styles';

/* Swipes Styles Declaration */
export const SwipesStyles = makeStyles ({
     swipes: {
         /* Main */
         position: 'fixed',
         width:    '100%',
         bottom:   '10vh',
         display:  'flex',
         justifyContent: 'space-evenly',
         "& .MuiButtonBase-root": {
             boxShadow:       '0px 0px 20px 20px rgba(0,0,0,0.1) !important',
             backgroundColor: 'whitesmoke !important',
         }
     },
     swipes__replay:   {padding: '1.8vw !important', color: '#f5b748 !important'},
     swipes__close:    {padding: '1.8vw !important', color: '#ec5e6f !important'},
     swipes__star:     {padding: '1.8vw !important', color: '#62b4f9 !important'},
     swipes__favorite: {padding: '1.8vw !important', color: '#76e2b3 !important'},
     swipes__flash:    {padding: '1.8vw !important', color: '#915dd1 !important'}
});