import React from 'react';
import { TableCell, TableRow } from '@mui/material';

const OrganisationTColumn = ({ area }) => {
  return (
    <>
      {area.nodes.map((node) => (
        <TableRow key={node.id}>
          <TableCell>{node.secondColumn}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default OrganisationTColumn;
