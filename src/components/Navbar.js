import { AppBar, Toolbar, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import React from 'react'
import { LocationOn,Search, AccountCircle } from '@material-ui/icons'

export default function Navbar() {
    return (
        <div>
            <AppBar className={styles.appbar} color="inherit">
                <Toolbar>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid><h2 className={styles.logo}><i>PrivateDelights</i></h2></Grid>
                        <Grid className={styles.menue}>
                            {/* <Link to="/"></Link> */}
                            <Button><LocationOn /> <h4>Location</h4></Button>
                            <Button><Search /> <h4>Search</h4></Button>
                            <Button><AccountCircle /> <h4>Log In</h4></Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
