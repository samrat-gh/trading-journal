import {
  BookOpenText,
  ChartNoAxesColumnIncreasing,
  FileSpreadsheet,
  LayoutDashboard,
  LineChart,
  type LucideIcon,
  Settings,
  Target,
  TrendingUp,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Portfolio",
        url: "/dashboard/portfolio",
        icon: ChartNoAxesColumnIncreasing,
        comingSoon: true,
      },
    ],
  },
  {
    id: 2,
    label: "Trading",
    items: [
      {
        title: "Journal",
        url: "/dashboard/journal",
        icon: BookOpenText,
        subItems: [
          {
            title: "All Trades",
            url: "/dashboard/journal/all",
            icon: FileSpreadsheet,
          },
          {
            title: "Add Trade",
            url: "/dashboard/journal/new",
            icon: Target,
          },
        ],
      },
      {
        title: "Performance",
        url: "/dashboard/performance",
        icon: TrendingUp,
        comingSoon: true,
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: LineChart,
        comingSoon: true,
      },
    ],
  },
  {
    id: 3,
    label: "Preferences",
    items: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];
