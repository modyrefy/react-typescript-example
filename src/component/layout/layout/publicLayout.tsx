import {FC} from "react";
import * as React from "react";
import {LayoutHeader} from "../header/layoutHeader";
import {LayoutFooter} from "../footer/layoutFooter";
import {makeStyles} from "@mui/styles";
import {Paper, Table, TableBody,TableRow,TableCell} from "@mui/material";
import {PublicMenu} from "../../menu/publicMenu";


const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
       // marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 700
    }
}));
export const PublicLayout:FC<{elements?:React.ReactNode[]}> = ({elements}) => {
    const classes = useStyles();
    return (<>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                    <React.Fragment>
                        <TableRow>
                            <TableCell colSpan={2}><h1>Public-Layout</h1></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>xxxx</TableCell>
                            <TableCell>{<LayoutHeader/>}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell rowSpan={4}>
                                <PublicMenu/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>{elements}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>{<LayoutFooter/>}</TableCell>
                        </TableRow>
                    </React.Fragment>
                </TableBody>
            </Table>
        </Paper>

        {/*<h1>Public-Layout</h1>*/}
        {/*<header>{<LayoutHeader/>}</header>*/}
        {/* <main>{elements}</main>*/}
        {/* <footer>{<LayoutFooter/>}</footer>*/}
    </>)

}
