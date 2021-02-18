import { makeStyles } from '@material-ui/core';
import { COLORS, FONTS } from './Constants/styleConstants';

export default makeStyles((theme) => ({

  // For mobile devices, moving Form on top:
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
    flexDirection: "column-reverse",
    } 
  }
}));