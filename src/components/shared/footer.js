import React from 'react';
import { Hidden, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  LabelBottomNavigation  from "./bottomNavigation";
import './footer.module.scss';

const  useStyle = makeStyles({
    bottomnav:{
        position:"fixed",
        width:"100%",
        bottom:0
    }

})

const Footer = () => {
    const classes = useStyle();
    return (
        <>
        <Hidden smUp>
            <Box className={classes.bottomnav}>
            <LabelBottomNavigation />
            </Box>
        </Hidden>
        </>
     );
}
 
export default Footer;