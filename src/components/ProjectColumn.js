import React from 'react';
import { TableCell, TableRow } from '@mui/material';

const ProjectColumn = ({ nodes }) => {
    return (
      <>
        {nodes.map((node) =>
          node.nodes.map((subNode) =>
            subNode.nodes.map((innerNode) =>
              <TableRow key={innerNode.id}>
                <TableCell>{innerNode.value}</TableCell>
              </TableRow>
            )
          )
        )}
      </>
    );
  };
  
  export default ProjectColumn;
  
  