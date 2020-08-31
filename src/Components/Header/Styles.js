/* Header Component - Styles Consolidation */
import {makeStyles}  from '@material-ui/core/styles';

/* Header Styles Declaration */
export const HeaderStyles = makeStyles ({
     header: {
         /* Main */
         display:        'flex',
         borderBottom:   '2px solid f9f9f9',
         justifyContent: 'space-between',
     },
     header__icon: {
         /* Main */
         padding:  20,
         objectFit:'contain',
     },
     header__logo: {
         /* Main */
         height:   40,
         padding:  20,        
     }
});