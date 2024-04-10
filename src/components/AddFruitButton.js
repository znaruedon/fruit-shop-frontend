import { Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';

const AddFruitButton = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [showModal, setShowModal] = useState(false);
  
    const handleNameChange = event => {
      setName(event.target.value);
    };
  
    const handleImageChange = event => {
      setImage(event.target.value);
    };
  
    const handleAddFruit = () => {
      onAdd({ name, image });
      // Reset input fields after adding fruit
      setName('');
      setImage('');
      handleCloseModal();
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    return (
      <>
        <Button variant="contained" color="primary" onClick={handleShowModal}>
          Add Fruit
        </Button>
  
        <Modal open={showModal} onClose={handleCloseModal}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
            <h2>Add Fruit</h2>
            <TextField
              fullWidth
              label="Enter fruit name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              fullWidth
              label="Enter fruit image URL"
              variant="outlined"
              value={image}
              onChange={handleImageChange}
            />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button variant="contained" color="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="contained" color="primary" onClick={handleAddFruit} style={{ marginLeft: '10px' }}>
                Add Fruit
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
  
export default AddFruitButton;
