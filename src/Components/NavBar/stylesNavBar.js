import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { COLORS, FONTS } from '../../Constants/styleConstants';

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
    paddingTop: '1rem',
    textDecoration: 'none'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));