import { makeStyles } from '@material-ui/core';
import { COLORS, FONTS } from './Constants/styleConstants';

export default makeStyles((theme) => ({

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
  // image: {
  //   marginLeft: '2rem',
  // },

  // For mobile devices, moving Form on top:
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
    flexDirection: "column-reverse",
    } 
  }
}));