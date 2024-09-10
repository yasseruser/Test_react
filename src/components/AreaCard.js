import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid, Badge, Select, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';

function AreaCard({ area }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px', width: '300px' }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="body2" noWrap style={{ fontWeight: 'bold' }}>
            {area.name}
          </Typography>
          <div>
            <IconButton size="small">
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
        </Grid>
        {area.distributionKey && (
          <Grid container alignItems="center" style={{ marginTop: '10px' }}>
            <Badge
              variant="dot"
              style={{
                backgroundColor: area.distributionKey.distributions[0].color || '#208A4B',
                height: '15px',
                width: '15px',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <Typography variant="body2">
              {area.distributionKey.name} {area.distributionKey.distributions[0].percentage}%
            </Typography>
          </Grid>
        )}
        <Grid container alignItems="center" style={{ marginTop: '10px' }}>
          <FlagIcon fontSize="small" style={{ marginRight: '10px' }} />
          <Select
            variant="outlined"
            size="small"
            defaultValue="Direktekostnad"
            style={{ width: '100%' }}
          >
            <MenuItem value="Direktekostnad">Direktekostnad</MenuItem>
            <MenuItem value="Andre kostnader">Andre kostnader</MenuItem>
          </Select>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AreaCard;