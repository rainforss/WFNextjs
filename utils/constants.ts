import { Datum } from "@nivo/bullet";
import {
  BarData,
  Indicator,
  Issue,
  LessonLearned,
  NavItem,
  PieData,
  ProjectNote,
  Risk,
  SelectOption,
} from "./types";
import { MdHome } from "react-icons/md";
import { BsCardList } from "react-icons/bs";

export const NAV_ITEMS: NavItem[] = [
  { text: "Home", url: "/", icon: MdHome },
  { text: "Project Card", url: "/projects", icon: BsCardList },
];

export const totalSales: string = "718K";

export const walterFedyBlue = "#616283";

export const walterFedyRed = "#D11E15";

export const walterFedyDarkBlue = "#21242a";

export const threeIndicators: Indicator[] = [
  {
    status: "Negative",
    color: "red",
    description: "Very dangerous",
  },
  {
    status: "Neutral",
    color: "orange",
    description: "Nothing serious",
  },
  {
    status: "Positive",
    color: "green",
    description: "Very good",
  },
];

export const issues: Issue[] = [
  {
    status: "Active",
    name: "Someone tripping",
    insurerInvolved: false,
    insurance: "",
    probabilityOfClaim: "Low",
  },
  {
    status: "Resolved",
    name: "Pipe leaks",
    insurerInvolved: true,
    insurance: "3000",
    probabilityOfClaim: "Medium",
  },
  {
    status: "Resolved",
    name: "Trench collapses",
    insurerInvolved: true,
    insurance: "30000",
    probabilityOfClaim: "High",
  },
];

export const projects = [
  { name: "Test Project", projectNumber: "0001" },
  { name: "Test Project", projectNumber: "0002" },
  { name: "Test Project", projectNumber: "0003" },
  { name: "Test Project", projectNumber: "0004" },
];

export const lessonsLearned: LessonLearned[] = [
  {
    topic: "How to prevent leaks",
    createdBy: "Luke Demeter",
    link: "https://walterfedy.com",
  },
  {
    topic: "How to drive a Lambo",
    createdBy: "Luke Demeter",
    link: "https://walterfedy.com",
  },
  {
    topic: "How to refund a Tesla",
    createdBy: "Luke Demeter",
    link: "https://walterfedy.com",
  },
];

export const risks: Risk[] = [
  {
    risk: "Leak",
    date: new Date(),
    issue: "Deadly gas leak",
    mitigation: "Plug and play",
    solvedBy: "Luke Demeter",
  },
  {
    risk: "Noise",
    date: new Date(),
    issue: "Loud V12 engine noise",
    mitigation: "Drive the Lambo home",
    solvedBy: "Luke Demeter",
  },
  {
    risk: "Electricity",
    date: new Date(),
    issue: "Tesla motor electrical failure",
    mitigation: "Complete refund",
    solvedBy: "Luke Demeter",
  },
];

export const projectNotes: ProjectNote[] = [
  {
    createdBy: "Luke Demeter",
    date: new Date(),
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    createdBy: "Luke Demeter",
    date: new Date(),
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    createdBy: "Luke Demeter",
    date: new Date(),
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    createdBy: "Luke Demeter",
    date: new Date(),
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const wfTeamFields = [
  {
    id: "pm",
    name: "PM",
    value: "Luke Demeter",
    type: "text",
  },
  {
    id: "designteam",
    name: "Design Team",
    value: "Luke Demeter",
    type: "select",
  },
  {
    id: "cafrteam",
    name: "CAFR Team",
    value: "Luke Demeter",
    type: "select",
  },
  {
    id: "qualityteam",
    name: "Quality Team",
    value: "Luke Demeter",
    type: "select",
  },
];

export const projectPerformanceFields = [
  {
    id: "profit",
    name: "Profit",
    value: "150000",
  },
  {
    id: "netLabourMult",
    name: "Net Labour Mult.",
    value: "900000",
  },
];

export const cashFields = [
  {
    id: "unbilled",
    name: "Unbilled Fee Revenue (JTD)",
    value: "300000",
  },
  {
    id: "0-30D",
    name: "0-30D",
    value: "19000",
  },
  {
    id: "31-60D",
    name: "31-60D",
    value: "22000",
  },
  {
    id: "61D+",
    name: "61D+",
    value: "38000",
  },
];

export const revenueFields = [
  {
    id: "feeBilled",
    name: "Fee Billed (JTD)",
    value: "82000",
  },
  {
    id: "feeRevenueEarned",
    name: "Fee Revenue Earned (JTD)",
    value: "89000",
  },
];

export const budgetFields = [
  {
    id: "budget",
    name: "Budget",
    value: "120000",
  },
  {
    id: "spent",
    name: "Spent",
    value: "82000",
  },
  {
    id: "backlog",
    name: "Backlog",
    value: "89000",
  },
  {
    id: "complete",
    name: "% Complete | Spent",
    value: "89000",
  },
];

export const cashData: BarData[] = [
  {
    dateSequence: "1",
    dateRange: "0-30D",
    "Cash Revenue": 16000,
    "Cash RevenueColor": "hsl(324, 70%, 50%)",
  },
  {
    dateSequence: "2",
    dateRange: "31-60D",
    "Cash Revenue": 22000,
    "Cash RevenueColor": "hsl(324, 70%, 50%)",
  },
  {
    dateSequence: "3",
    dateRange: "60D+",
    "Cash Revenue": 28000,
    "Cash RevenueColor": "hsl(324, 70%, 50%)",
  },
];

export const revenueData: Datum[] = [
  {
    id: "Revenue",
    ranges: [50000, 0, 70000, 0, 120000],
    measures: [82000],
    markers: [90000],
  },
];

export const budgetData: Datum[] = [
  {
    id: "Budget",
    ranges: [50000, 0, 70000, 0, 120000],
    measures: [82000],
    markers: [90000],
  },
];

export const projectPerformanceData: PieData[] = [
  {
    id: "Building Engineering",
    label: "Building Engineering",
    value: 140000,
    color: "hsl(315, 70%, 50%)",
  },
  {
    id: "Civil Engineering",
    label: "Civil Engineering",
    value: 223000,
    color: "hsl(127, 70%, 50%)",
  },
  {
    id: "Land Development",
    label: "Land Development",
    value: 171000,
    color: "hsl(340, 70%, 50%)",
  },
  {
    id: "Architecture",
    label: "Architecture",
    value: 180000,
    color: "hsl(275, 70%, 50%)",
  },
  {
    id: "Site Development",
    label: "Site Development",
    value: 138000,
    color: "hsl(4, 70%, 50%)",
  },
];

export const relationshipOptions: SelectOption[] = [
  { label: "Positive", value: "Positive" },
  { label: "Neutral", value: "Neutral" },
  { label: "Negative", value: "Negative" },
];
