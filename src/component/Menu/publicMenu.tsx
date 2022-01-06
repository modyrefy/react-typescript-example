import React, {FC} from "react";
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
import {useSelector} from "react-redux";
import {IuserState} from "../../models/interfaces/user/userState";
import {useTranslation} from 'react-i18next';
import {RouteItems} from "../../resources/data/Routes/RouteData";
import {PublicMenuData} from "../../resources/data/Menu/PublicMenu";

export const PublicMenu: FC<{}> = () => {
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    //
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    alert('menu drawing')
    // @ts-ignore
    const user = useSelector((state: IuserState) => ({...state.User}));
    const isAuthenticated: boolean = user?.isAuthenticated ?? false;
    const {t} = useTranslation();

    // const menuData = RouteItems.filter((element) => {
    //     return PublicMenuData.indexOf(x => x.key == element.key) !==-1;
    // })
    let menuData = RouteItems.filter(o1 => PublicMenuData.some(o2 => o1.key === o2.key));
    console.log("menu-data "+ JSON.stringify(menuData))
    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {
                    //.filter(p=>p.isAuthenticationRequired==true)
                    menuData.map((row, index) => (
                        <Link to={row.path}>
                            <ListItem button key={row.key}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={t(row.title)}/>
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
