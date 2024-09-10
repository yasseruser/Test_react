import React from 'react';
import { TableCell, TableRow } from '@mui/material';

const OrganisationColumn = ({ area }) => {
  return (
    <>
      {area.nodes.map((node) => (
        <TableRow key={node.id}>
          <TableCell>{node.value}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default OrganisationColumn;
