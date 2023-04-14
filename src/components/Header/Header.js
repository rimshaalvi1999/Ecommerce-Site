import * as React from 'react';
import { Typography, AppBar, Toolbar, Box, Button, IconButton, Menu, Container, Avatar, Tooltip, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IceSkatingSharpIcon from '@mui/icons-material/IceSkatingSharp';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Header.css";
import { logout } from '../../store/actions/dataAction';



// const settings = ['Create Account', 'Login'];
export default function Header() {
  let dispatch = useDispatch();
  let cu = useSelector(state => state.data.cu);
  console.log(cu);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IceSkatingSharpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h6" noWrap component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              SHOE-STORE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}>


                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to={"/"}><Typography textAlign="center">Home</Typography></Link>
                </MenuItem>
                {/* <MenuItem onClick={handleCloseNavMenu}>
                  <Link to={"/About"}><Typography textAlign="center">About</Typography></Link>
                </MenuItem> */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to={"/Products"}><Typography textAlign="center">Products</Typography></Link>
                </MenuItem>
                {cu.type == 'Seller Account' &&
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to={"/Add_Products"}><Typography textAlign="center">Add Products</Typography></Link>
                  </MenuItem>
                }
                {cu.type == 'Customer Account' &&
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to={"/Cart"}><Typography textAlign="center">Cart</Typography></Link>
                  </MenuItem>
                }

              </Menu>
            </Box>
            <IceSkatingSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography variant="h5" noWrap component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SHOE-STORE
            </Typography>
            <Box className='manuouter'
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', td: 'none' }}
              >
                <Link className='menulink' to={"/"}>
                  <b> Home</b>
                </Link>
              </Button>
              {/* <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link className='menulink' to={"/About"} >
                  <b>
                    About
                  </b>
                </Link>
              </Button> */}
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link className='menulink' to={"/Products"}>
                  <b>Products</b>
                </Link>
              </Button>

              {cu.type == 'Seller Account' &&
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link className='menulink' to={"/Add_Products"}>
                    <b>Add Products</b>
                  </Link>
                </Button>
              }


              {cu.type == 'Customer Account' &&
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link className='menulink' to={"/Cart"}>
                    <b>Cart</b>
                  </Link>
                </Button>
              }
              {/* {cu.firstName && 
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
               <Link className='menulink' to={"/Login"} onClick={()=>{
                  dispatch(logout());
               }}>
                 <b>LOGOUT</b>
               </Link>
             </Button>
               }   */}


              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link className='menulink' to={"/Admin"}>
                  <b>Admin</b>
                </Link>
              </Button>


            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              {cu.firstName == undefined &&
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* {settings.map((setting) => ( */}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"/Signup"}><Typography textAlign="center">Create Account</Typography></Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"/Login"}> <Typography textAlign="center">Login</Typography></Link>
                  </MenuItem>
                  {/* ))} */}
                </Menu>
              }

              {/* //////////////////////////////////////// */}
              {cu.firstName &&
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"/Login"} onClick={() => {
                      dispatch(logout());
                      localStorage.removeItem('current user');
                    }}><Typography textAlign="center">Logout</Typography></Link>
                  </MenuItem>
                </Menu>
              }


            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
