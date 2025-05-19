
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  Menu, 
  ChevronLeft,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
  collapsed?: boolean;
}

const SidebarItem = ({ icon, text, to, active = false, collapsed = false }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'flex items-center py-3 px-4 rounded-md transition-all duration-200',
        collapsed ? 'justify-center mx-2' : 'mx-3',
        active
          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && <span className="ml-3 text-sm font-medium">{text}</span>}
    </Link>
  );
};

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = window.location.pathname;

  return (
    <div 
      className={cn(
        'bg-amazon-blue h-screen flex-shrink-0 transition-all duration-300 relative',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center p-4 h-16 border-b border-sidebar-border">
        {!collapsed && (
          <span className="text-white font-bold text-xl">Admin Panel</span>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className={cn(
            "p-2 rounded-md hover:bg-sidebar-accent text-white",
            collapsed ? "mx-auto" : "ml-auto"
          )}
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="py-4">
        <SidebarItem 
          icon={<Home size={20} />} 
          text="Dashboard" 
          to="/" 
          active={pathname === '/'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={<Package size={20} />} 
          text="Products" 
          to="/products" 
          active={pathname === '/products'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={<ShoppingCart size={20} />} 
          text="Orders" 
          to="/orders" 
          active={pathname === '/orders'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={<Users size={20} />} 
          text="Customers" 
          to="/customers" 
          active={pathname === '/customers'} 
          collapsed={collapsed} 
        />
        <SidebarItem 
          icon={<Settings size={20} />} 
          text="Settings" 
          to="/settings" 
          active={pathname === '/settings'} 
          collapsed={collapsed} 
        />
      </div>

      <div className="absolute bottom-4 w-full">
        <SidebarItem 
          icon={<LogOut size={20} />} 
          text="Logout" 
          to="/logout" 
          collapsed={collapsed} 
        />
      </div>
    </div>
  );
}
