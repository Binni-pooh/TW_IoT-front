import React from 'react';
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import OpacityIcon from '@mui/icons-material/Opacity';

const Device = ({data}) => (
    <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', width: 200, maxHeight: 200, borderRadius: 2 }}>
        <CardContent>
            <Typography variant="h6">Device No. {data.deviceId}</Typography>
            <Divider sx={{ backgroundColor: 'white', my: 1, borderBottomWidth: 4}} />
            {data.temperature == null || data.pressure == null || data.humidity == null ? (
                <Typography variant="body1" color="gray">No data</Typography>
            ) : (<Stack spacing={1} sx={{textAlign: 'left'}}>
                <Typography variant="body1">
                    <DeviceThermostatIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    {data.temperature} &deg;C
                </Typography>
                <Typography variant="body1">
                    <CloudUploadIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    {data.pressure} hPa
                </Typography>
                <Typography variant="body1">
                    <OpacityIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    {data.humidity}%
                </Typography>
            </Stack>)}
        </CardContent>
    </Card>
);

export default Device;
