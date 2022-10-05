import React from "react";
import { Grid, Skeleton, Container } from "@mantine/core";
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
    total: "345,765",
    diff: 18,
    data: [
      {
        label: "Mobile",
        count: "204,001",
        part: 59,
        color: "#47d6ab",
      },
      {
        label: "Desktop",
        count: "121,017",
        part: 35,
        color: "#03141a",
      },
      {
        label: "Tablet",
        count: "31,118",
        part: 6,
        color: "#4fcdf7",
      },
    ],
  };

  return (
    <Container my="md">
      <Grid>
        <Grid.Col xs={6}>
          <WealthSummary {...wealthData} />
        </Grid.Col>
        <Grid.Col xs={6}>
          <TasksSummary {...tasksData} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default DashboardContainer;
