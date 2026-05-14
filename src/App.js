import { Box } from '@mui/material';
import NavSidebar from './components/NavSidebar';
import PartnerPage from './components/PartnerPage';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        height: '100vh',
        bgcolor: '#e2e5ec',
        p: '12px',
      }}
    >
      <NavSidebar />
      <PartnerPage />
    </Box>
  );
}

export default App;
