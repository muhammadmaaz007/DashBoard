import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Grid,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setCategoryName('');
    setEditIndex(null);
  };

  const handleClose = () => {
    setOpen(false);
    setCategoryName('');
    setEditIndex(null);
  };

  const handleAddOrEditCategory = () => {
    if (categoryName.trim() === '') return;

    let updatedCategories;
    if (editIndex !== null) {
      updatedCategories = [...categories];
      updatedCategories[editIndex] = categoryName;
    } else {
      updatedCategories = [...categories, categoryName];
    }

    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    setCategoryName('');
    setEditIndex(null);
    setOpen(false);
  };

  const deleteCategory = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
    localStorage.setItem('categories', JSON.stringify(updated));
  };

  const editCategory = (index) => {
    setCategoryName(categories[index]);
    setEditIndex(index);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        minHeight: '100vh',
        bgcolor: 'linear-gradient(to right, #e0eafc, #cfdef3)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          mb: 3,
        }}
      >
        📂 Category Manager
      </Typography>

      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          background: 'linear-gradient(to right, #ff6a00, #ee0979)',
          color: '#fff',
          fontWeight: 600,
          borderRadius: '12px',
          px: 3,
          py: 1,
          boxShadow: '0px 4px 15px rgba(255,106,0,0.4)',
          mb: 4,
          '&:hover': {
            background: 'linear-gradient(to right, #ee0979, #ff6a00)',
          },
        }}
      >
        ➕ Add Category
      </Button>

      {categories.length === 0 ? (
        <Typography sx={{ color: '#888' }}>No categories added yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {categories.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  background: 'linear-gradient(to right, #83a4d4, #b6fbff)',
                  borderRadius: 4,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f3a93' }}>
                    📁 {item}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <IconButton onClick={() => editCategory(index)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteCategory(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90vw', sm: 420 },
            maxHeight: '90vh',
            overflowY: 'auto',
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: 24,
            p: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600, color: '#333', textAlign: 'center' }}
          >
            {editIndex !== null ? 'Edit Category' : 'Add New Category'}
          </Typography>

          <TextField
            fullWidth
            label="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            variant="outlined"
            margin="normal"
            sx={{
              '& label': { fontWeight: 500 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                borderColor: '#ccc',
                color: '#555',
                fontWeight: 500,
                borderRadius: '10px',
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleAddOrEditCategory}
              sx={{
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '10px',
                px: 3,
                '&:hover': {
                  background: 'linear-gradient(to right, #5f10c5, #1f65e3)',
                },
              }}
            >
              {editIndex !== null ? 'Update' : 'Save'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Category;
