import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, TextField, IconButton, Button, Chip } from '@mui/material';
import { Close, Add, Delete, Save, Clear } from '@mui/icons-material';
import { useStudyMode } from '../../context/StudyModeContext';
import { useNotes } from '../../context/NotesContext';



const NotesPanel: React.FC = () => {
  const { isNotesVisible, toggleNotes } = useStudyMode();
  const { notes, addNote, deleteNote, clearNotes, saveNotes, loadNotes } = useNotes();
  const [newNote, setNewNote] = useState('');
  const [videoTime, setVideoTime] = useState<number | null>(null);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newNote.trim()) {
      addNote(newNote, videoTime ?? undefined);
      setNewNote('');
      setVideoTime(null);
    }
  };

  const handleMarkdown = (content: string) => {
    // Basic markdown support
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[\[(.*?)\]\]/g, '<span class="timestamp">$1</span>');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: '300px',
        transition: 'transform 0.3s ease-in-out',
        transform: isNotesVisible ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" component="div">
          Notes
        </Typography>
        <IconButton onClick={toggleNotes} color="inherit">
          <Close />
        </IconButton>
      </Paper>

      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        {notes.map((note) => (
          <Paper
            key={note.id}
            sx={{
              p: 2,
              mb: 2,
              display: 'flex',
              alignItems: 'flex-start',
              position: 'relative',
              bgcolor: note.videoTime !== null ? 'rgba(0, 123, 255, 0.1)' : 'transparent',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                flex: 1,
                dangerouslySetInnerHTML: {
                  __html: handleMarkdown(note.content),
                },
              }}
            />
            {note.videoTime !== null && (
              <Chip
                label={`Timestamp: ${Math.floor(note.videoTime / 60)}:${(note.videoTime % 60).toString().padStart(2, '0')}`}
                size="small"
                sx={{ mr: 1 }}
              />
            )}
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'text.secondary',
              }}
            >
              {note.timestamp}
            </Typography>
            <IconButton
              onClick={() => deleteNote(note.id)}
              size="small"
              sx={{ ml: 1 }}
            >
              <Delete />
            </IconButton>
          </Paper>
        ))}
      </Box>

      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          bgcolor: 'background.paper',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a new note... (Use **bold**, *italic*, [[timestamp]] formatting)"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyPress={handleKeyPress}
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => {
            addNote(newNote, videoTime ?? undefined);
            setNewNote('');
            setVideoTime(null);
          }}
        >
          Add
        </Button>
      </Paper>

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Save />}
          onClick={saveNotes}
        >
          Save Notes
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Clear />}
          onClick={() => {
            clearNotes();
            setNewNote('');
            setVideoTime(null);
          }}
        >
          Clear Notes
        </Button>
      </Box>
    </Box>
  );
};

export default NotesPanel;
