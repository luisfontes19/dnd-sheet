import { CssBaseline } from '@mui/material';
import CharacterManager from 'dnd-sheet-component/CharacterManager';
import React from 'react';

const App = () => {
  return <div className="mainContainer" style={{ backgroundColor: "#DDD" }}>
    <CssBaseline />
    <CharacterManager />
  </div>;
}

export default App;
