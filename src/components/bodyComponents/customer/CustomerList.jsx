import { Component } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import customers from "./Customers";

export default class CustomerList extends Component {
  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        description: "ID of the customer",
      },
      {
        field: "fullname",
        headerName: "Full Name",
        width: 200,
        description: "Customer full name",
        renderCell: (params) => (
          <>
            <Avatar
              alt="customer avatar"
              sx={{ borderRadius: 1, width: 30, height: 30 }}
            >
              {params.row.firstName[0]} {/* Assuming first letter of the first name */}
            </Avatar>
            <Typography variant="subtitle2" sx={{ mx: 2 }}>
              {`${params.row.firstName || ""} ${params.row.lastName || ""}`}
            </Typography>
          </>
        ),
      },
      {
        field: "orderNumber",
        headerName: "Number Of Orders",
        width: 200,
        description: "Number of orders made by the customer",
        valueGetter: (params) => params.row.orders ? params.row.orders.length : 0,
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 300,
        description: "Total amount of all orders",
        valueGetter: (params) => {
          const total = 300; // Replace with actual logic if needed
          return total;
        },
      },
      {
        field: "orderHistory",
        headerName: "Order Details",
        width: 300,
        description: "The most recent order date",
        valueGetter: (params) => {
          const history = "03/01/2027"; // Replace with actual logic if needed
          return history;
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 300,
        description: "Customer's mobile number",
      },
    ];

    const rows = customers;

    return (
      <Box
        sx={{
          margin: 3,
          bgcolor: "white",
          borderRadius: 2,
          padding: 3,
          height: "100%",
        }}
      >
        <DataGrid
          sx={{
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
      </Box>
    );
  }
}
