
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Product {
  name: string;
  sales: number;
  percentage: number;
}

interface TopProductsProps {
  products: Product[];
}

export function TopProducts({ products }: TopProductsProps) {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="dashboard-card-title">Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{product.name}</span>
                <span className="text-sm text-gray-500">{product.sales} units</span>
              </div>
              <Progress value={product.percentage} className="h-2 bg-gray-100" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
