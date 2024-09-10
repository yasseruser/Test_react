import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import AreaCard from './AreaCard'; // Reuse AreaCard

const AreaColumn = ({ area }) => {
  return (
    <TableRow>
      <TableCell>
        <AreaCard area={area} />
      </TableCell>
    </TableRow>
  );
};

export default AreaColumn;
