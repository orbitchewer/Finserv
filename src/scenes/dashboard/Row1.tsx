import React from "react";
import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
  Bar,
} from "recharts";

const Row1 = () => {
  const { palette } = useTheme();

  // Manually add mock data for testing purposes
  const mockData = [
    {
      month: "Jan",
      revenue: 15000,
      expenses: 10000,
    },
    {
      month: "Feb",
      revenue: 18000,
      expenses: 11000,
    },
    {
      month: "Mar",
      revenue: 20000,
      expenses: 12000,
    },
    {
      month: "Apr",
      revenue: 22000,
      expenses: 13000,
    },
    {
      month: "May",
      revenue: 25000,
      expenses: 14000,
    },
    {
      month: "Jun",
      revenue: 27000,
      expenses: 15000,
    },
    {
      month: "Jul",
      revenue: 30000,
      expenses: 16000,
    },
    {
      month: "Aug",
      revenue: 32000,
      expenses: 17000,
    },
    {
      month: "Sep",
      revenue: 35000,
      expenses: 18000,
    },
    {
      month: "Oct",
      revenue: 38000,
      expenses: 19000,
    },
    {
      month: "Nov",
      revenue: 40000,
      expenses: 20000,
    },
    {
      month: "Dec",
      revenue: 42000,
      expenses: 21000,
    },
  ];

  const revenueExpenses = mockData.map(({ month, revenue, expenses }) => ({
    name: month,
    revenue: revenue,
    expenses: expenses,
  }));

  const revenueProfit = mockData.map(({ month, revenue, expenses }) => ({
    name: month,
    revenue: revenue,
    profit: (revenue - expenses).toFixed(2),
  }));

  const revenue = mockData.map(({ month, revenue }) => ({
    name: month,
    revenue: revenue,
  }));

  return (
    <>
      {/* AreaChart */}
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="85%" height={300}>
          <AreaChart
            data={revenueExpenses}
            margin={{ top: 15, right: 25, left: -10, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" fill="#8884d8" />
            <Area type="monotone" dataKey="expenses" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* LineChart */}
      <DashboardBox gridArea="b">
        <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="85%" height={300}>
          <LineChart
            data={revenueProfit}
            margin={{ top: 20, right: 0, left: -10, bottom: 55 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profit" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* BarChart */}
      <DashboardBox gridArea="c">
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <ResponsiveContainer width="85%" height={250}>
          <BarChart
            data={revenue}
            margin={{ top: 17, right: 15, left: -5, bottom: 58 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
