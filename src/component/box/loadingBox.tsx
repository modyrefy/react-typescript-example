import React, {  FC } from "react";
import {Backdrop, CircularProgress, makeStyles} from "@material-ui/core";
export const LoadingBox:FC<{}>=()=>{
    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));
    const classes = useStyles();
return  (

    <React.Fragment>
        <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress />
            {/*<CircularProgress color="secondary" />*/}
            <br/>
            <br/>
            Loading....
        </Backdrop>
    </React.Fragment>
)};
