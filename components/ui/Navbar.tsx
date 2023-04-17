import NextLink from 'next/link';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link underline="none" color="white">
            <Typography variant="h6">CookieMaster</Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href="/theme-changer" passHref>
          <Link underline="none" color="white">
            <Typography variant="h6">Cambiar Tema</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
