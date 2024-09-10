import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import AreaCard from './components/AreaCard';
import OrganisationColumn from './components/OrganisationColumn';
import OrganisationTColumn from './components/OrganisationTColumn';
import DepartmentColumn from './components/DepartmentColumn';
import DepartmentTColumn from './components/DepartmentTColumn';
import data from './data.json'; // Import your JSON data
import ProjectColumn from './components/ProjectColumn';

function App() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setAreas(data); // Load data from JSON
  }, []);

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Area</TableCell>
            <TableCell>Organisation</TableCell>
            <TableCell>Organisation_(t)</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Department_(t)</TableCell>
            <TableCell>Project</TableCell>
            {/* <TableCell>Team</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {areas.map((view) =>
            view.data.map((area) => (
              <TableRow key={area.name}>
                <TableCell>
                  <AreaCard area={area} />
                </TableCell>
                <TableCell>
                  <OrganisationColumn area={area} />
                </TableCell>
                <TableCell>
                  <OrganisationTColumn area={area} />
                </TableCell>
                <TableCell>
                  <DepartmentColumn nodes={area.nodes} />
                </TableCell>
                <TableCell>
                  <DepartmentTColumn nodes={area.nodes} />
                </TableCell>
                <TableCell>
                  <ProjectColumn nodes={area.nodes} />
                </TableCell>
                {/* <TableCell>
                  <TeamColumn nodes={area.nodes} />
                </TableCell> */}
            
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Container>
  );
}

export default App;
