
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { mockSalesData, mockTopProducts, mockRecentOrders } from "@/services/mockData";
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-amazon-blue">Dashboard</h1>
          <p className="text-gray-500">Welcome back to your admin panel</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="Total Revenue"
            value="$84,254.85"
            icon={<DollarSign size={20} />}
            trend={{ value: 12.5, positive: true }}
            description="from last month"
          />
          <StatsCard 
            title="Total Orders"
            value="1,248"
            icon={<ShoppingCart size={20} />}
            trend={{ value: 8.2, positive: true }}
            description="from last month"
          />
          <StatsCard 
            title="Products"
            value="356"
            icon={<Package size={20} />}
            trend={{ value: 2.4, positive: true }}
            description="new this month"
          />
          <StatsCard 
            title="Customers"
            value="9,254"
            icon={<Users size={20} />}
            trend={{ value: 5.1, positive: true }}
            description="new this month"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart data={mockSalesData} />
          </div>
          <div>
            <TopProducts products={mockTopProducts} />
          </div>
        </div>
        
        <div>
          <RecentOrders orders={mockRecentOrders} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
