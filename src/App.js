
import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField } from '@mui/material';
import FruitCard from './components/FruitCard';
import AddFruitButton from './components/AddFruitButton';

function App() {
    
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7054/Fruit')
      .then(response => response.json())
      .then(data => setFruits(data))
      .catch(error => console.error('Error fetching fruits:', error));
  }, []);

  // State for filter
  const [filter, setFilter] = useState('');

  // Filter fruits based on filter value
  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Handler for filter change
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  // Handler for add fruit button
  const handleAddFruit = (newFruit) => {
    setFruits(prevFruits => [...prevFruits, { id: prevFruits.length + 1, ...newFruit }]);
  };

  return (
    <Container>
      <h1 className="mt-4">Fruit Shop</h1>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={9}>
          <TextField
            fullWidth
            label="Filter fruits..."
            variant="outlined"
            value={filter}
            onChange={handleFilterChange}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <AddFruitButton onAdd={handleAddFruit} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filteredFruits.map(fruit => (
          <Grid key={fruit.id} item xs={12} sm={6} md={4} lg={3}>
            <FruitCard name={fruit.name} image={fruit.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
