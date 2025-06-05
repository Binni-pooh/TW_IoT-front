import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import {chartsTooltipClasses} from "@mui/x-charts";

const margin = { right: 24, left: 50 };

function Charts({data}) {
    const xLabels = data.temperature.map((_, index) => (index + 1).toString());

    return (
        <LineChart
            height={250}
            series={[
                { data: data.temperature, label: 'temperature [°C]' },
                { data: data.humidity, label: 'humidity [%]' },
                { data: data.pressure, label:  'Pressure [hPa]'}
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            yAxis={[{ width: 50, color: '#ffffff'}]}
            margin={margin}
            sx={{
                '& .MuiChartsAxis-line': {
                    stroke: '#fffffa',
                },
                '& .MuiChartsAxis-tickLabel': {
                    fill: '#ffffff',
                },
                '& .MuiChartsLegend-root': {
                    color: '#ffffff'
                },

            }}
        />
    );
}

export default Charts;