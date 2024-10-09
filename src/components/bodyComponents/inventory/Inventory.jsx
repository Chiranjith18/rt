import { Grid, Box, Typography, Button, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import React, { Component } from "react";
import Products from "./Products";
import Overview from "./Overview";
import productList from "./productList"; // Assuming this is your initial product list

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: {
        id: "",
        name: "",
        category: "",
        price: "",
        stock: "",
      },
      products: productList || [], // Ensure productList is not undefined
      searchQuery: "",
      filterCategory: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value,
      },
    }));
  };

  handleAddProduct = () => {
    const newProduct = { ...this.state.newProduct };
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
      newProduct: { id: "", name: "", category: "", price: "", stock: "" },
    }));
  };

  handleDeleteProducts = (ids) => {
    const filteredProducts = this.state.products.filter(
      (product) => !ids.includes(product.id)
    );
    this.setState({ products: filteredProducts });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleFilterChange = (e) => {
    this.setState({ filterCategory: e.target.value });
  };

  getFilteredProducts = () => {
    const { products, searchQuery, filterCategory } = this.state;
    return products
      .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((product) => (filterCategory ? product.category === filterCategory : true));
  };

  render() {
    const filteredProducts = this.getFilteredProducts();

    return (
      <Box>
        <Grid container sx={{ mx: 3, p: 3 }}>
          <Grid item md={9}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Inventory
              </Typography>

              <TextField
                label="Search Products"
                value={this.state.searchQuery}
                onChange={this.handleSearchChange}
                fullWidth
                sx={{ mb: 2 }}
              />

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={this.state.filterCategory}
                  onChange={this.handleFilterChange}
                  label="Category"
                >
                  <MenuItem value="">All</MenuItem>
                  {/* Add your categories here */}
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Clothing">Clothing</MenuItem>
                  <MenuItem value="Furniture">Furniture</MenuItem>
                </Select>
              </FormControl>

              <Products
                products={filteredProducts}
                onDelete={this.handleDeleteProducts}
              />
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Overview
              </Typography>
              <Overview />
            </Box>

            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Add New Product
              </Typography>
              <TextField
                name="id"
                label="ID"
                value={this.state.newProduct.id}
                onChange={this.handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="name"
                label="Product Name"
                value={this.state.newProduct.name}
                onChange={this.handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="category"
                label="Category"
                value={this.state.newProduct.category}
                onChange={this.handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="price"
                label="Price"
                value={this.state.newProduct.price}
                onChange={this.handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="stock"
                label="Stock"
                value={this.state.newProduct.stock}
                onChange={this.handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleAddProduct}
                sx={{ mt: 2 }}
              >
                Add Product
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }a
}
