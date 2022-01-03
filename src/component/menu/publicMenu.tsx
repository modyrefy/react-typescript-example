import React, {FC, useContext} from "react";
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {IMenuBase} from "../../models/interfaces/menu/iMenuBase";
import { useSelector} from "react-redux";
import {IuserState} from "../../models/interfaces/user/userState";

export const PublicMenu: FC<{}> = () => {
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    //
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // const { window } = props;
    // const container = window !== undefined ? () => window().document.body : undefined;
    const iMenuBase: IMenuBase[] = [
        {key: "products", text: "Products", path: "/products", isAuthenticationRequired: true},
        {key: "public_product", text: "Common Products", path: "/common-products", isAuthenticationRequired: false},
        {key: "product_Detail", text: "Product Detail", path: "/product-detail", isAuthenticationRequired: false},
        {key: "login", text: "Login", path: "/sign-in", isAuthenticationRequired: true},
        {key: "guest", text: "Guest", path: "/guest", isAuthenticationRequired: true}

    ];

    // const iServerMenuBase: IMenuBase[] = [
    //     {key: "product", text: "Products", path: "/product", isAuthenticationRequired: true},
    //     {key: "public_product", text: "Common Products", path: "/commonproduct", isAuthenticationRequired: false},
    //     {key: "login2", text: "Login", path: "/sign-in", isAuthenticationRequired: true},
    //     {key: "guest2", text: "Guest", path: "/guest", isAuthenticationRequired: true}
    //
    // ];
    // const data=iServerMenuBase.filter((row)=>{
    //     return iMenuBase.filter(k=>k.key===row.key).length!=0
    // });
        //console.log("data-----"+JSON.stringify(data));
    //alert('menu drawing')
    // @ts-ignore
    const user = useSelector((state: IuserState) => ({...state.User}));
    const isAuthenticated:boolean =user?.isAuthenticated??false ;
   // console.log('store '+ JSON.stringify(useContext(ReactReduxContext)));

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {
                    //.filter(p=>p.isAuthenticationRequired==true)
                iMenuBase.map((row, index) => (
                         <Link to={row.path}>
                    <ListItem button key={row.key}>
                    <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={row.text}/>
                    </ListItem>
                    </Link>
                    ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (<>
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    // container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
        {/*<nav >*/}
        {/*    <div >*/}
        {/*        <Link to={"/product"}>Products   </Link>*/}
        {/*        <Link  to={"/sign-in"}>Login   </Link>*/}
        {/*        <Link  to={"/sign-up"}>Sign up  </Link>*/}
        {/*        <Link  to={"/guest"}>guest</Link>*/}
        {/*        </div >*/}
        {/*</nav>*/}
    </>)
}
