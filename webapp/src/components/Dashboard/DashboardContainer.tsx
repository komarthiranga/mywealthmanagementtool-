import React from "react";
import { Grid, Skeleton, Container, Title } from "@mantine/core";
import { WealthSummary } from "../Wealth/WealthSummary";
import { TasksSummary } from "../Tasks/TasksSummary";
const DashboardContainer: React.FC<any> = () => {
  const tasksData = {
    title: "Tasks",
    completed: 1887,
    total: 2334,
    stats: [
      {
        value: 447,
        label: "Remaining",
      },
      {
        value: 76,
        label: "In progress",
      },
    ],
  };

  const wealthData = {
    data: [
      {
        title: "Revenue",
        icon: "receipt",
        value: "13,456",
        diff: 34,
      },
      {
        title: "Profit",
        icon: "coin",
        value: "4,145",
        diff: -13,
      },
      {
        title: "Coupons usage",
        icon: "discount",
        value: "745",
        diff: 18,
      },
      {
        title: "New customers",
        icon: "user",
        value: "188",
        diff: -30,
      },
    ],
  };

  return (
    <Grid>
      <Grid.Col xs={12}>
        <Title>Dashboard</Title>
        <WealthSummary
          {...{
            data: [
              {
                title: "Total Income",
                icon: "receipt",
                value: "13,456",
                diff: 34,
              },
              {
                title: "Total Expenses",
                icon: "coin",
                value: "4,145",
                diff: -13,
              },
              {
                title: "Surplus / deficit",
                icon: "discount",
                value: "745",
                diff: 18,
              },
              {
                title: "New Income",
                icon: "user",
                value: "188",
                diff: -30,
              },
            ],
          }}
        />
      </Grid.Col>
    </Grid>
  );
};

export default DashboardContainer;
