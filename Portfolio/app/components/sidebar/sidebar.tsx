import React from "react";
import { usePathname} from "next/navigation";
import * as RadixTooltip from '@radix-ui/react-tooltip';
import NextLink from "next/link";
import { 
  Home, 
  CreditCard, 
  Users, 
  ShoppingBag, 
  BarChart2, 
  Code, 
  Eye, 
  Settings, 
  LogOut,
  Bot
} from "lucide-react";


// SidebarItem component
interface ItemProps {
  icon: React.ReactNode;
  title: string;
  href?: string;
  onClick?: () => void;
}
interface ItemProps {
  icon: React.ReactNode;
  title: string;
  href?: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<ItemProps> = ({ icon, title, href, onClick }) => {
  const pathname = usePathname();

  const isActive = href ? pathname === href : false;

  const content = (
    <div
      className={`group flex items-center justify-center w-full px-3 py-2 rounded-lg transition-colors 
        ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
      `}
    >
      <span className={`group-hover:scale-110 transition-transform duration-200`}>
        {icon}
      </span>
    </div>
  );

  return (
    <RadixTooltip.Provider delayDuration={150}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {href ? (
            <NextLink href={href} className="block">
              {content}
            </NextLink>
          ) : (
            <button onClick={onClick} className="block w-full text-left">
              {content}
            </button>
          )}
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side="right"
            sideOffset={8}
            className="bg-blue-400 text-white text-sm rounded-md shadow-lg px-5 py-1.5 animate-fade-in"
          >
            {href}
            <RadixTooltip.Arrow className="fill-blue-400" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export const SidebarWrapper: React.FC = () => {
  return (
    <aside className="h-screen z-[20] sticky top-0">
      <div className="bg-white h-screen border-r border-gray-200 w-20 flex flex-col fixed md:static">
        {/* Body */}
        <div className="flex-1 overflow-y-auto py-4 px-1 space-y-4 content-center">
          <SidebarItem icon={<Home size={25} />} title="Home" href="/" />
          <SidebarItem icon={<CreditCard size={25} />} title="Client Scoping" href="/scoping" />
          <SidebarItem icon={<Users size={25} />} title="AMP Team" href="/customers" />
          <SidebarItem icon={<ShoppingBag size={25} />} title="Products" href="/products" />
          <SidebarItem icon={<BarChart2 size={25} />} title="Reports" href="/reports" />
          <SidebarItem icon={<Code size={25} />} title="Developers" href="/developers" />
          <SidebarItem icon={<Eye size={25} />} title="View Test Data" href="/view" />
          <SidebarItem icon={<Settings size={25} />} title="Settings" href="/settings" />
        </div>
      </div>
    </aside>
  );
};