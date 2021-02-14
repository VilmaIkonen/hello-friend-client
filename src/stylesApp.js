import { makeStyles } from '@material-ui/core';
import { COLORS, FONTS } from './Constants/styleConstants';

export default makeStyles((theme) => ({

  mainContainer: {
    backgroundColor: COLORS.colorBackground,
  },
  appBar: {
    borderRadius: 5,
    backgroundColor: COLORS.colorHeaderFooter,
    margin: '2rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: COLORS.colorTextSecondary,
    fontFamily: FONTS.fontHeadingEmphasis,
    paddingTop: '1rem'  
  },

  // For mobile devices, moving Form on top:
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
    flexDirection: "column-reverse",
    } 
  }
}));