import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const Header = () => (
    <div>
        <AppBar position="static" style={{backgroundColor: '#55658e'}}>
            <Toolbar>
                <Typography variant="display1" color="inherit" >
                    Lyric Finder
                </Typography>
            </Toolbar>
        </AppBar>        
    </div>

);

export default Header;