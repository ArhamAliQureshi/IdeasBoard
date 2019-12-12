import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



const NavBar = () => {
    return (<div>
        <AppBar position="static">
            <Toolbar>

                <img src={"https://www.coolshop.it/src/images/logo_coolshop_72_white.png"} alt="Logo" width="124.22" height="30"></img>
                <Typography variant="h5" component='h2' color="inherit" align="center" display="block" style={{paddingLeft:"5%"}}>
                    Ideas Sharing Board
                </Typography>

            </Toolbar>
        </AppBar>
    </div>);
};

export default NavBar;