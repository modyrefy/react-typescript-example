import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup"
import {Field, Form, Formik} from "formik";
import {Avatar, Button, Grid, Paper, TextField} from "@mui/material";
import {authincateUser} from "../../slice/userAuthincateSlice";
import {LoadingBox} from "../box/loadingBox";
import {MessageBox} from "../box/messageBox";
import {AuthenticateUserRequest} from "../../models/interfaces/user/authenticateUserRequest";
import {IuserState} from "../../models/interfaces/user/userState";
import { useNavigate } from 'react-router-dom';
import {makeStyles} from "@mui/styles";


export function LoginForm(props: any) {
    const initialValues = {
        userName: "admin",
        password: "admin",
        remember: true,
    };
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto",
    };
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
        },
    }));
    const avatarStyle = {backgroundColor: "#1bbd7e"};
    const btnStyle = {margin: "8px 0"};
    const classes = useStyles();
    const [validationSchema, setValidationSchema] = React.useState(Yup.object({
        userName: Yup.string().required("user-Name is required"),
        password: Yup.string().required("No password provided.")
        // .min(3, "Password is too short - should be 8 chars minimum.")
        // .matches(/(?=.*[0-9])/, "Password must contain a number.")
        ,
    }));
    const dispatch = useDispatch();
    // @ts-ignore
    const User = useSelector((state: IuserState) => ({...state.User}));

    let navigate = useNavigate();
    useEffect(() => {
        if (User && User.errors !== null && User.errors !== undefined && User.errors.length !== 0) {
            window.scrollTo(0, 0)
        }
        if (User.isAuthenticated) {
            //props.history.push("/");
            navigate("/product");
        }
    }, []);
    useEffect(() => {
        if (User && User.errors !== null && User.errors !== undefined && User.errors.length !== 0) {
            window.scrollTo(0, 0)
        }
        if (User.isAuthenticated) {
            //props.history.push("/");
            navigate("/product");
        }
    }, [User.isAuthenticated, User.errors]);
    const submitHandler = async (data: AuthenticateUserRequest) => {
        try {
            dispatch(authincateUser({
                userName: data.userName,
                password: data.password,
                remember: data.remember,
            }));

            return false;
        } catch (err) {
            alert(err);
            console.log('err ' + err);
        }
    };


    return (
        <React.Fragment>
            {User.isLoading && <LoadingBox/>}
            {User != null && User.errors !== null && User.errors !== undefined && User.errors.length !== 0 &&
            <MessageBox errors={User.errors} severity="error"/>}
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid>
                        <Avatar style={avatarStyle}/>
                        <h2>Sign In</h2>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={submitHandler}
                        >
                            {({touched, errors, isSubmitting, handleChange}) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        label="User name"
                                        id="userName"
                                        name="userName"
                                        placeholder="Enter username"
                                        onChange={handleChange}
                                        //required
                                        fullWidth
                                        error={touched.userName && Boolean(errors.userName)}
                                        helperText={touched.userName && errors.userName}
                                    />
                                    <Field
                                        as={TextField}
                                        label="Password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        onChange={handleChange}
                                        type="password"
                                        //required
                                        fullWidth
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        style={btnStyle}
                                        fullWidth
                                    >
                                        Sign in
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}
