'use client'

import React from 'react';
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

interface DataItem {
    date: number;
    user_agent: string;
    geo: {
        ip: string;
        success: boolean;
        type: string;
        continent: string;
        continent_code: string;
        country: string;
        country_code: string;
        region: string;
        region_code: string;
        city: string;
        latitude: number;
        longitude: number;
        is_eu: boolean;
        postal: string;
        calling_code: string;
        capital: string;
        borders: string;
        flag: {
            img: string;
            emoji: string;
            emoji_unicode: string;
        };
        connection: {
            asn: number;
            org: string;
            isp: string;
            domain: string;
        };
        timezone: {
            id: string;
            abbr: string;
            is_dst: boolean;
            offset: number;
            utc: string;
            current_time: string;
        };
    };
}

// Function to calculate the total clicks for a date
function calculateTotalDataKey(date: string, analytics: { [date: string]: DataItem[] }) {
    const dataItems = analytics[date];
    return dataItems ? dataItems.length : 0;
}


export default function WeekBarChart({groupedData, width, height, datakey}: { groupedData: { [date: string]: DataItem[] }, width?: string, height?: string, datakey:string }) {

    // Generate data for the chart
    const chartData = Object.keys(groupedData).map((date) => ({
        date,
        [datakey]: calculateTotalDataKey(date, groupedData),
    }));

    console.log(chartData)


    return (
        <ResponsiveContainer width={width || "100%"} height={height || "100%"}>
            <LineChart
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 10,
                    bottom: 20,
                }}
            >

                <XAxis stroke={"hsl(var(--primary))"} strokeWidth={2} dataKey="date" scale="point"
                       padding={{left: 10, right: 10}}/>
                <YAxis stroke={"hsl(var(--primary))"} strokeWidth={2}/>
                <Tooltip contentStyle={{
                    backgroundColor: 'hsl(var(--nextui-secondary-50))',
                }}/>
                <Legend/>
                <Line type="monotone" stroke={"hsl(var(--nextui-foreground))"} strokeWidth={2} dataKey={datakey}
                      activeDot={{r: 8, className: 'fill-secondary'}}/>
            </LineChart>
        </ResponsiveContainer>
    );
}
