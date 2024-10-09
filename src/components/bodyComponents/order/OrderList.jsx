import React, { Component } from "react";
import { Box, Button, Modal, Typography } from "@mui/material"; // Added Typography here
import { DataGrid } from "@mui/x-data-grid";
import OrderModal from "./OrderModal";
import orders from "./listOrders";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
      open: false,
    };
  }

  handleOrderDetail = (order) => { // Fixed typo: "handlOrderDetail" to "handleOrderDetail"
    console.log("The order is:", order);
    this.setState({ order: order, open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        description: "ID of the product",
      },
      {
        field: "fullname",
        headerName: "Full Name",
        width: 400,
        description: "Customer full name",
        renderCell: (params) => {
          return (
            <Typography variant="subtitle2" sx={{ mx: 3 }}>
              {`${params.row.customer?.firstName || ""} ${params.row.customer?.lastName || ""}`}
            </Typography>
          );
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 400,
        description: "Customer phone number",
        valueGetter: (params) => params.row.customer?.mobile || "N/A",
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 300,
        description: "Total amount of the order",
        valueGetter: () => 300, // Assuming a constant value for demonstration
      },
      {
        field: "details",
        headerName: "Order Details",
        width: 300,
        description: "The details of the order",
        renderCell: (params) => {
          const order = params.row;
          return (
            <Button
              variant="contained"
              sx={{ bgcolor: "#504099" }}
              onClick={() => this.handleOrderDetail(order)} // Fixed typo here
            >
              Order Details
            </Button>
          );
        },
      },
    ];

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
          rows={orders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
        <Modal open={this.state.open} onClose={this.handleClose}>
          <Box sx={{ p: 2 }}>
            <OrderModal order={this.state.order} onClose={this.handleClose} />
          </Box>
        </Modal>
      </Box>
    );
  }
}
