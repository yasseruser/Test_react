import React from 'react';
import NodeRow from './NodeRow';
import { TableCell, TableRow } from '@mui/material';
import AreaCard from './AreaCard';

const AreaSection = ({ area }) => {
  return (
    <>
      <TableRow>
        <TableCell>
          <AreaCard area={area} />
        </TableCell>
        <TableCell />
        <TableCell />
      </TableRow>
      {area.nodes.map((node) => (
        <NodeRow key={node.id} node={node} />
      ))}
    </>
  );
};

export default AreaSection;
