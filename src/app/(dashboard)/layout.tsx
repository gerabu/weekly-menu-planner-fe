import { PropsWithChildren } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>HWM</SidebarHeader>
          <SidebarContent>
            <SidebarGroup></SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
