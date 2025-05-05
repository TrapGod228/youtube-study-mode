import { ThemeProvider, Box } from '@mui/material';
import Layout from './components/Layout/Layout.tsx';
import { StudyModeProvider } from './context/StudyModeContext';
import { NotesProvider } from './context/NotesContext';
import { VideoProvider } from './context/VideoContext';
import { theme } from './theme';
import VideoGrid from './components/VideoGrid/VideoGrid';

function App() {
  return (
    <VideoProvider>
      <NotesProvider>
        <StudyModeProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Box sx={{ width: '100%', maxWidth: 1400, mx: 'auto', mt: 3 }}>
              {/* YouTube-style Video Grid */}
              <VideoGrid />
            </Box>
          </Layout>
        </ThemeProvider>
        </StudyModeProvider>
      </NotesProvider>
    </VideoProvider>
  );
}

export default App;
