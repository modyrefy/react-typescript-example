import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {ValidationError} from "../../models/validation/validationError";
import {Color} from "@material-ui/lab/Alert/Alert";





export const MessageBox:FC<{
    errors?:ValidationError[],
     severity?:Color,
     variant?:string|null
}>=
    ({errors, severity, variant})=> {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '50%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));
        const variantValue = variant === null || variant === undefined ? "outlined" : {variant};
     if (errors!=null  && errors!=undefined && errors?.length != 0) {
        return (
            <React.Fragment>
                <Alert  severity={severity}>
                    {errors.map(error =>(
                        <React.Fragment>
                            {error.message}
                            <br/>
                        </React.Fragment>
                    ))}
                </Alert>
            </React.Fragment>
        )
   }
        // Here where you missed
        return null;
}

