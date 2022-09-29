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
import Delete from "@mui/icons-material/Delete";
import ListItemContent from "@mui/joy/ListItemContent";

export default function FileTable({ files = [], onDelete }) {
  const thumbs = (file) => (
    <img
      alt={`${file.path}-preview`}
      src={file.preview}
      style={{ width: "290px", maxHeight: "140px" }}
      // Revoke data uri after image is loaded
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
    />
  );

  return (
    <TableContainer component={Paper} sx={{ width: "50%" }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image Name</TableCell>
            <TableCell>Preview</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((row, idx) => (
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
              <TableCell>{thumbs(row)}</TableCell>
              <TableCell>
                <Delete onClick={() => onDelete(idx)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
