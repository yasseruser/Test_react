import React from 'react';
import { TableRow, TableCell } from '@mui/material';


const NodeRow = ({ node }) => {
  return (
    <TableRow>
      <TableCell>{node.id}</TableCell>
    </TableRow>
  );
};

export default NodeRow;
