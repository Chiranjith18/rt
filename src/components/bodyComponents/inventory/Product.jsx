import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Products({ products, onDelete }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleDelete = (id) => {
    onDelete(id);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      description: "ID of the product",
    },
    {
      field: "name",
      headerName: "Product",
      width: 400,
      description: "Name of the product",
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      description: "Category of the product",
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      description: "Price of the product",
      valueFormatter: (params) => `$${params.value}`,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      description: "Number of items in stock",
      valueFormatter: (params) => `${params.value} pcs`,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <IconButton
          color="error"
          onClick={() => handleDelete(params.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box>
      <DataGrid
        sx={{ borderLeft: 0, borderRight: 0, borderRadius: 0 }}
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        onSelectionModelChange={(ids) => setSelectedIds(ids)}
      />
    </Box>
  );
}
