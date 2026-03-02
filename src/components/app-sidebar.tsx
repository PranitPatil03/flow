"use client";

import {
  CreditCardIcon,
  FolderOpenIcon,
  HistoryIcon,
  KeyIcon,
  LogOutIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { useHasActiveSubscription } from "@/features/subscriptions/hooks/use-subscription";

const menuItems = [
  {
    title: "Workflows",
    icon: FolderOpenIcon,
    url: "/workflows",
  },
  {
    title: "Credentials",
    icon: KeyIcon,
    url: "/credentials",
  },
  {
    title: "Executions",
    icon: HistoryIcon,
    url: "/executions",
  },
];

export const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { hasActiveSubscription, isLoading } = useHasActiveSubscription();
  const { data: session } = authClient.useSession();

  const userInitial = (session?.user?.name?.[0] ?? "U").toUpperCase();

  return (
    <Sidebar collapsible="none" className="border-r-0 bg-white dark:bg-sidebar shadow-sm min-h-svh">
      {/* Text-only logo */}
      <SidebarHeader className="px-5 pt-6 pb-4">
        <Link href="/" prefetch>
          <span className="text-xl font-semibold tracking-tight">
            flow
          </span>
        </Link>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={
                      item.url === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.url)
                    }
                    asChild
                    className="gap-x-3 h-10 px-3 rounded-lg text-sm font-medium"
                  >
                    <Link href={item.url} prefetch>
                      <item.icon className="size-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer: profile at the very bottom */}
      <SidebarFooter className="mt-auto px-3 pb-4 pt-2">
        {!hasActiveSubscription && !isLoading && (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Upgrade to Pro"
                className="gap-x-3 h-10 px-3 rounded-lg text-sm font-medium"
                onClick={() => authClient.checkout({ slug: "pro" })}
              >
                <StarIcon className="h-5 w-5" />
                <span>Upgrade to Pro</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}

        {/* Profile button with dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-x-3 rounded-lg p-2 hover:bg-accent/60 transition-colors outline-none">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {userInitial}
              </span>
              <div className="flex flex-col items-start leading-tight truncate">
                <span className="text-sm font-medium truncate">
                  {session?.user?.name ?? "User"}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {session?.user?.email ?? ""}
                </span>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start" className="w-56">
            <DropdownMenuItem onClick={() => authClient.customer.portal()}>
              <CreditCardIcon className="mr-2 h-4 w-4" />
              Billing Portal
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/login");
                    },
                  },
                })
              }
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
