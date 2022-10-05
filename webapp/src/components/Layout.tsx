import { useState, ReactNode } from "react";
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { NavbarComp } from "../components/NavBar/Navbar";
import { Logo } from "../pages/Logo";

interface AuxProps {
    children: ReactNode;
  }

export function Layout({children} : AuxProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarComp />}
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Logo width={120} />{" "}
            <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
              Wealth Manager
            </span>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
