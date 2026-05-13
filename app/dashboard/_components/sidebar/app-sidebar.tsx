"use client";

import { Activity } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { APP_CONFIG } from "@/config/app-config";
import { rootUser } from "@/data/users";
import { sidebarItems } from "@/navigation/sidebar/sidebar-items";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="mb-2 border-zinc-200 border-b pb-4 dark:border-zinc-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
            >
              <Link href="/dashboard" className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white dark:bg-emerald-500">
                  <Activity size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-bold text-sm text-zinc-900 leading-none tracking-tight dark:text-zinc-50">
                    {APP_CONFIG.name}
                  </span>
                  <span className="font-medium text-[10px] text-zinc-500 uppercase leading-none tracking-widest dark:text-zinc-400">
                    NEPSE Tracker
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <NavMain items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter className="mt-2 border-zinc-200 border-t pt-4 dark:border-zinc-800">
        <NavUser user={rootUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
