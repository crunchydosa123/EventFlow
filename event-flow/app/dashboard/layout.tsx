import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"


  return (
    <html>
  <body>
      <SidebarProvider>
        <div className="flex w-full h-screen">
          {/* Sidebar with fixed width */}
          <div className="w-64 shrink-0">
            <AppSidebar />
          </div>

          {/* Main content takes remaining space */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </SidebarProvider>
  </body>
</html>

  );
}
