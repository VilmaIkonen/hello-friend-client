import { makeStyles } from '@material-ui/core/styles';
import { COLORS, FONTS } from '../../../Constants/styleConstants'

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: COLORS.colorTextSecondary
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '.3rem',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    fontWeight:'bold',
    color: COLORS.colorTextSecondary,
    mixBlendMode: 'difference'  
  },
  creatorCreatedEdit: {
    fontFamily: FONTS.fontText
  },
  overlay2: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: COLORS.colorTextSecondary,
    fontWeight:'bold',
    mixBlendMode: 'difference'  
  },
  grid: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem'
  },
  tagsAndMessage: {
    fontFamily: FONTS.fontText
  },
  title: {
    padding: '0 1rem',
    fontFamily: FONTS.fontHeadingEmphasis   
  },
  cardActions: {
    padding: '0 1rem .5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  likeDeleteButton: {
    color: COLORS.colorButton,
    fontFamily: FONTS.fontText
  }
});