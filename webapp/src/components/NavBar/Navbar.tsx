import { Navbar, Group, Code, ScrollArea, createStyles } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconReportMoney,
} from "@tabler/icons";
import { UserButton } from "../UserButton/UserButton";
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Wealth",
    icon: IconReportMoney,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Expenses", link: "/" },
      { label: "Savings", link: "/" },
      { label: "ExtraExpenses", link: "/" },
    ],
  },
  {
    label: "Tasks",
    icon: IconCalendarStats,
    links: [
      { label: "Overview", link: "/" },
      { label: "In Progress", link: "/" },
      { label: "Completed", link: "/" },
      { label: "Pending", link: "/" },
    ],
  },
  { label: "Analysis", icon: IconPresentationAnalytics },
  { label: "Contacts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    // paddingTop: theme.spacing.xl,
    // paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarComp() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!true} width={{ sm: 200, lg: 300 }}>
      {/* <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Logo width={120} />{" "}
          <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
            Wealth Manager
          </span>
          <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
        </Group>
      </Navbar.Section> */}

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://media-exp1.licdn.com/dms/image/C5603AQHKbq26kFCvtw/profile-displayphoto-shrink_100_100/0/1640097686460?e=1670457600&v=beta&t=9bGps0Llrbb2LMR2Py6CkQnfDb5zokt_6eSFrgzcT_Y"
          name="Ranga Komarthi"
          email="reduxranga@gmail.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
