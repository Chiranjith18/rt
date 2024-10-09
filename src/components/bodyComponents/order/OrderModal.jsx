import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export default function OrderModal({ order, onClose }) {
  // Check if order and order.products are defined
  if (!order || !order.products) {
    return <Typography>No order details available</Typography>;
  }

  const handleDeleteProductFromOrder = (orderId, productId) => {
    console.log("Deleting product:", productId, "from order:", orderId);
    // Add your delete logic here
  };

  const handleApprove = () => {
    console.log("Order approved:", order.id);
    // Add your approval logic here
    onClose(); // Close the modal after action
  };

  const handleReject = () => {
    console.log("Order rejected:", order.id);
    // Add your rejection logic here
    onClose(); // Close the modal after action
  };

  const tableRows = order.products.map((orderProduct, index) => {
    const product = orderProduct.product || {};
    return (
      <TableRow key={index}>
        <TableCell>{product.name || "Unknown Product"}</TableCell>
        <TableCell>{orderProduct.quantity || "N/A"}</TableCell>
        <TableCell>{product.stock || "N/A"}</TableCell>
        <TableCell>
          <IconButton
            onClick={() =>
              handleDeleteProductFromOrder(order.id, product.id)
            }
          >
            <DeleteOutline color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box sx={{ color: "black", display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" sx={{ m: 3 }}>
          Order Details
        </Typography>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Name</Typography>
          <Typography variant="subtitle1" color={"grey"}>
            {`${order.customer?.firstName || ""} ${order.customer?.lastName || ""}`}
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Position</Typography>
          <Typography variant="subtitle1" color={"grey"}>
            {order.customer?.position || "N/A"}
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Mobile</Typography>
          <Typography variant="subtitle1" color={"grey"}>
            {order.customer?.mobile || "N/A"}
          </Typography>
        </Paper>
        <Box>
          <TableContainer sx={{ marginBottom: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Stock Availability</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows}
              </TableBody>
            </Table>
          </TableContainer>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              m: 0,
            }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "error.main", m: 3, px: 12 }}
              onClick={handleReject}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#504099", m: 3, px: 12 }}
              onClick={handleApprove}
            >
              Approve
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
