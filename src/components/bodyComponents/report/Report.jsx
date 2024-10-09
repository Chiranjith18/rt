import React, { Component } from "react";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";

class Report extends Component {
  state = {
    startDate: "",
    endDate: "",
    reportType: "stock",
    reportData: null, // Holds the generated report data
  };

  handleGenerateReport = () => {
    const { startDate, endDate, reportType } = this.state;

    // Simulate report generation
    // You would replace this with an actual API call or report generation logic
    const reportData = `Report from ${startDate} to ${endDate} for ${reportType} data.`;
    this.setState({ reportData });
  };

  handleDownloadReport = () => {
    const { reportData } = this.state;

    if (!reportData) {
      alert("Please generate a report first.");
      return;
    }

    // Create a Blob with the report data
    const blob = new Blob([reportData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "stock_report.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { startDate, endDate, reportData } = this.state;

    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Generate and Download Stock Reports
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Start Date"
              type="date"
              name="startDate"
              value={startDate}
              onChange={this.handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="End Date"
              type="date"
              name="endDate"
              value={endDate}
              onChange={this.handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleGenerateReport}
            >
              Generate Report
            </Button>
          </Grid>
          {reportData && (
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleDownloadReport}
              >
                Download Report
              </Button>
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

export default Report;
