import React from 'react';
import { TableCell, TableRow } from '@mui/material';

const DepartmentTColumn = ({ nodes }) => {
  return (
    <>
      {nodes.map((node) =>
        node.nodes.map((subNode) => (
          <TableRow key={subNode.id}>
            <TableCell>{subNode.secondColumn}</TableCell>
          </TableRow>
        ))
      )}
    </>
  );
};

export default DepartmentTColumn;
