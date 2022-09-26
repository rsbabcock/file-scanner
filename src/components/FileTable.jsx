import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import ListItemContent from "@mui/joy/ListItemContent";

export default function FileTable({ files = [] }) {
  return (
    <TableContainer component={Paper} sx={{ width: "50%" }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File Path</TableCell>
            <TableCell align="right">File Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <ListItemContent>
                  <Typography level="body2" noWrap>
                    {row.path}
                  </Typography>
                </ListItemContent>
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
