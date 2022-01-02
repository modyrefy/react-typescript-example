import React, {  FC } from "react";
import {Item} from "../../models/interfaces/item/Item";

import {Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    createStyles,
    IconButton,
    Theme,
    Typography,
    MenuItem,
    Menu} from "@mui/material";
import {makeStyles} from "@mui/styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
//#region style
const styles = {
    card: {
        minWidth: 150,
        maxWidth:300,
        display: "inline-block"
    }
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            //display: "flex",
            maxWidth: "300",
            flexWrap: "wrap",
            // "& > *": {
            //     margin: theme.spacing(3),
            // },
        },
    })
);
//#endregion
//#region variables
const MyOptions = [
    "Share via Whatsapp",
    "Send Email",
    "Download",
    "Save as PDF",
];
//#endregion

export const ProductItem:FC<{item:Item}>=({item})=>{

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event:any) => {
        console.log(event);
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
        <div style={{ maxWidth:"100", display: "inline-block" }}>
            <Card style={{maxWidth:"200"}}>
                <CardActionArea>
                    <CardHeader
                        avatar={<Avatar>N</Avatar>}
                        title={item.name}
                        subheader={item.id}
                        action={
                            <React.Fragment>
                            <IconButton
                                aria-label="more"
                                onClick={handleClick}
                                aria-haspopup="true"
                                aria-controls="long-menu"
                            >
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                            anchorEl={anchorEl}
                            keepMounted onClose={handleClose}
                            open={open}>
                        {MyOptions.map((option) => (
                            <MenuItem
                            key={option}
                            onClick={handleClose}>
                        {option}
                            </MenuItem>
                            ))}
                            </Menu>
                            </React.Fragment>
                        }
                    />
                    <CardMedia
                        style={{ paddingTop: "50%" }}
                        image={
                            item.imageurl ===null ||item.imageurl===undefined?"":item.imageurl.toString()
                        }
                        title="Background image"
                    />
                    <CardContent style={{width:"150px"}}>
                        {/*<div>{item.description}</div>*/}
                        <Typography   style={{width:"150px"}} >{item.description}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>share</Button>
                </CardActions>
            </Card>
        </div>
        </React.Fragment>
        // <div>{item.name}</div>
        // <Card style={{ maxWidth: 345 }}>
        //     <CardActionArea>
        //         <CardMedia
        //             component="img"
        //             height="140"
        //             image={item.imageurl===null||item.imageurl===undefined?"": item.imageurl}
        //             alt="green iguana"
        //         />
        //         <CardContent>
        //             <Typography gutterBottom variant="h5" component="div">
        //                 {item.name}
        //             </Typography>
        //             <Typography variant="body2" color="text.secondary">
        //                 {item.description}
        //             </Typography>
        //         </CardContent>
        //     </CardActionArea>
        //     <CardActions>
        //         <Button size="small" color="primary">
        //             Details
        //         </Button>
        //     </CardActions>
        // </Card>
    );
}







// // https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/
// const Header: FC<any> = () => {
//     return (
//         <div>
//             {`Header`}
//         </div>
//     );
// };
// // export default Header;
// //
// //
// // const App:React.FC = ()=> (
// //     <> </>
// // )

