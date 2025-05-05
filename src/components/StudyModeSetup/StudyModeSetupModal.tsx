import React, { useState } from 'react';
import {
  Box,
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useStudyMode } from '../../context/StudyModeContext';

interface StudyModeSetupModalProps {
  open: boolean;
  onClose: () => void;
}

const StudyModeSetupModal: React.FC<StudyModeSetupModalProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [topic, setTopic] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [careerRoadmap, setCareerRoadmap] = useState('');
  const { setStudyModeFilters } = useStudyMode();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleSubmit = () => {
    const filters = {
      topic,
      educationLevel,
      careerRoadmap,
    };
    setStudyModeFilters(filters);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          p: 3,
          maxWidth: '600px',
          width: '90%',
          bgcolor: 'background.paper',
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Study Mode Setup
        </Typography>

        <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Study Topic" />
          <Tab label="Career Roadmap" />
        </Tabs>

        {activeTab === 0 && (
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Study Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth>
              <InputLabel>Education Level</InputLabel>
              <Select
                value={educationLevel}
                label="Education Level"
                onChange={(e) => setEducationLevel(e.target.value)}
              >
                <MenuItem value="school">School (K-12)</MenuItem>
                <MenuItem value="college">College/University</MenuItem>
                <MenuItem value="professional">Professional Education</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}

        {activeTab === 1 && (
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Career Path"
              value={careerRoadmap}
              onChange={(e) => setCareerRoadmap(e.target.value)}
              placeholder="e.g., Software Engineering, Data Science, Medicine"
            />
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Apply Filters
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default StudyModeSetupModal;
