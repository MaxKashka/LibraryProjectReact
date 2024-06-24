import { Box, Button } from '@mui/material';
import MenuAppBar from '../menu-app-bar/MenuAppBar';
import { Link, Outlet } from 'react-router-dom';
import { useApi } from '../api/dto/ApiProvider';

function HomePage() {
  const apiClient = useApi();

  apiClient.getBooks().then((response) => {
    console.log(response);
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box>
        <Button variant="contained" component={Link} to="/home/1" sx={{ m: 1 }}>
          Book List
        </Button>
        <Button variant="contained" component={Link} to="/home/2" sx={{ m: 1 }}>
          Loan List
        </Button>
        <Button variant="contained" component={Link} to="/home" sx={{ m: 1 }}>
          Clear
        </Button>
      </Box>
      <Outlet />
    </Box>
  );
}

export default HomePage;
