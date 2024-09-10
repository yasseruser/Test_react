import React from 'react';
import { TableCell, TableRow } from '@mui/material';

const DepartmentColumn = ({ nodes }) => {
  return (
    <>
      {nodes.map((node) =>
        node.nodes.map((subNode) => (
          <TableRow key={subNode.id}>
            <TableCell>{subNode.value}</TableCell>
          </TableRow>
        ))
      )}
    </>
  );
};

export default DepartmentColumn;