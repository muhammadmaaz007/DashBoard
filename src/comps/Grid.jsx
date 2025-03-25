import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Modal,
  TextField,
  Button,
  Fade,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fef6f9, #f1f4ff)',
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.primary,
  borderRadius: '20px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid #ececec',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '6px',
    width: '100%',
    background: 'linear-gradient(90deg, #a18cd1, #fbc2eb)',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
}));

export default function ProductManager({categories1}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : 450,
    maxHeight: '90vh',
    overflowY: 'auto',
    backdropFilter: 'blur(18px)',
    background: 'rgba(255, 255, 255, 0.75)',
    borderRadius: '24px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1)',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    transition: 'all 0.4s ease-in-out',
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);

    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);
  }, []);

  const handleOpenModal = () => {
    setProductName('');
    setPrice('');
    setCategory('');
    setEditingIndex(null);
    setOpen(true);
  };

  const handleSaveProduct = () => {
    if (productName && price && category) {
      const newProduct = {
        name: productName,
        priceofProduct: price,
        category: category,
      };
      let updatedProducts = [];
      if (editingIndex !== null) {
        updatedProducts = [...products];
        updatedProducts[editingIndex] = newProduct;
      } else {
        updatedProducts = [...products, newProduct];
      }
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setOpen(false);
    }
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const editProduct = (index) => {
    const product = products[index];
    setProductName(product.name);
    setPrice(product.priceofProduct);
    setCategory(product.category);
    setEditingIndex(index);
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f9f9fc' }}>
      <Box sx={{ flexGrow: 1, p: 4, overflowY: 'auto' }}>
        <Stack direction="row" alignItems="center" spacing={2} mb={4} flexWrap="wrap">
          <AddShoppingCartIcon sx={{ fontSize: '2rem', color: '#7b1fa2' }} />
          <Typography variant="h4" fontWeight="bold" color="#4a148c" flexGrow={1}>
            Product Manager
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: '12px',
              background: 'linear-gradient(90deg, #a18cd1, #fbc2eb)',
              boxShadow: '0 4px 12px rgba(171,71,188,0.3)',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(90deg, #9575cd, #f48fb1)',
              },
            }}
          >
            Add Product
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Item>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#4a148c', mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography
                  sx={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    backgroundColor: '#e0f7fa',
                    color: '#00796b',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    mr: 1,
                  }}
                >
                  ${product.priceofProduct}
                </Typography>
                <Typography
                  sx={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    backgroundColor: '#ede7f6',
                    color: '#5e35b1',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                  }}
                >
                  {product.category}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                  <EditIcon
                    sx={{ cursor: 'pointer', color: '#5e35b1', '&:hover': { color: '#4527a0' } }}
                    onClick={() => editProduct(index)}
                  />
                  <DeleteOutlineIcon
                    sx={{ cursor: 'pointer', color: '#e53935', '&:hover': { color: '#b71c1c' } }}
                    onClick={() => deleteProduct(index)}
                  />
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>

        <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
          <Fade in={open}>
            <Box sx={modalStyle}>
              <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                <CloseIcon
                  onClick={() => setOpen(false)}
                  sx={{ cursor: 'pointer', color: '#333', fontSize: '1.8rem', '&:hover': { color: '#000' } }}
                />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                mb={2}
                sx={{
                  background: 'linear-gradient(90deg, #a18cd1, #fbc2eb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {editingIndex !== null ? 'Edit Product' : 'Add New Product'}
              </Typography>
              <TextField
                label="Product Name"
                variant="outlined"
                fullWidth
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                sx={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.85)' }}
              />
              <TextField
                label="Price"
                type="number"
                variant="outlined"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.85)' }}
              />
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                  sx={{ borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.85)' }}
                >
                  {categories.length > 0 ? (
                    categories.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No Categories Available</MenuItem>
                  )}
                </Select>
              </FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={handleSaveProduct}
                  sx={{
                    borderRadius: '14px',
                    textTransform: 'none',
                    px: 4,
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #a18cd1, #fbc2eb)',
                    boxShadow: '0 6px 18px rgba(171,71,188,0.3)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #9575cd, #f48fb1)',
                    },
                  }}
                >
                  {editingIndex !== null ? 'Update' : 'Add'}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
}
