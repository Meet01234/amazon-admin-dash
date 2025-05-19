
export const mockSalesData = [
  { name: 'Jan', total: 4500 },
  { name: 'Feb', total: 6000 },
  { name: 'Mar', total: 5200 },
  { name: 'Apr', total: 7000 },
  { name: 'May', total: 8200 },
  { name: 'Jun', total: 9100 },
  { name: 'Jul', total: 10500 },
  { name: 'Aug', total: 11000 },
  { name: 'Sep', total: 12500 },
  { name: 'Oct', total: 14000 },
  { name: 'Nov', total: 16000 },
  { name: 'Dec', total: 18000 },
];

export const mockTopProducts = [
  { name: 'Wireless Earbuds Pro', sales: 1245, percentage: 85 },
  { name: 'Ultra HD Smart TV', sales: 876, percentage: 65 },
  { name: 'Premium Laptop', sales: 654, percentage: 55 },
  { name: 'Smart Home Assistant', sales: 542, percentage: 45 },
  { name: 'Fitness Tracker', sales: 321, percentage: 35 },
];

export const mockRecentOrders = [
  { 
    id: '#ORD-9834',
    customer: 'Sarah Johnson',
    date: 'May 18, 2025',
    amount: '$954.29',
    status: 'processing' as const
  },
  { 
    id: '#ORD-9833',
    customer: 'Michael Chen',
    date: 'May 18, 2025',
    amount: '$228.59',
    status: 'shipped' as const
  },
  { 
    id: '#ORD-9832',
    customer: 'Emma Wilson',
    date: 'May 17, 2025',
    amount: '$399.99',
    status: 'delivered' as const
  },
  { 
    id: '#ORD-9831',
    customer: 'James Miller',
    date: 'May 17, 2025',
    amount: '$125.49',
    status: 'delivered' as const
  },
  { 
    id: '#ORD-9830',
    customer: 'Oliver Davis',
    date: 'May 16, 2025',
    amount: '$1,205.75',
    status: 'cancelled' as const
  },
];

export const mockProducts = [
  {
    id: 'p1',
    name: 'Wireless Earbuds Pro',
    sku: 'SKU-001',
    price: 129.99,
    stock: 245,
    category: 'Electronics',
    status: 'In Stock'
  },
  {
    id: 'p2',
    name: 'Ultra HD Smart TV 55"',
    sku: 'SKU-002',
    price: 699.99,
    stock: 58,
    category: 'Electronics',
    status: 'In Stock'
  },
  {
    id: 'p3',
    name: 'Premium Laptop 15"',
    sku: 'SKU-003',
    price: 1299.99,
    stock: 32,
    category: 'Computers',
    status: 'In Stock'
  },
  {
    id: 'p4',
    name: 'Smart Home Assistant',
    sku: 'SKU-004',
    price: 99.99,
    stock: 122,
    category: 'Smart Home',
    status: 'In Stock'
  },
  {
    id: 'p5',
    name: 'Fitness Tracker',
    sku: 'SKU-005',
    price: 79.99,
    stock: 89,
    category: 'Wearables',
    status: 'In Stock'
  },
  {
    id: 'p6',
    name: 'Bluetooth Speaker',
    sku: 'SKU-006',
    price: 59.99,
    stock: 0,
    category: 'Audio',
    status: 'Out of Stock'
  },
  {
    id: 'p7',
    name: 'Coffee Maker',
    sku: 'SKU-007',
    price: 149.99,
    stock: 12,
    category: 'Appliances',
    status: 'Low Stock'
  },
  {
    id: 'p8',
    name: 'Smartphone Case',
    sku: 'SKU-008',
    price: 19.99,
    stock: 432,
    category: 'Accessories',
    status: 'In Stock'
  },
];

export const mockOrders = [
  ...mockRecentOrders,
  { 
    id: '#ORD-9829',
    customer: 'Sophia Taylor',
    date: 'May 16, 2025',
    amount: '$324.50',
    status: 'delivered' as const
  },
  { 
    id: '#ORD-9828',
    customer: 'Noah Martinez',
    date: 'May 15, 2025',
    amount: '$89.99',
    status: 'delivered' as const
  },
  { 
    id: '#ORD-9827',
    customer: 'Isabella Brown',
    date: 'May 15, 2025',
    amount: '$578.25',
    status: 'delivered' as const
  },
  { 
    id: '#ORD-9826',
    customer: 'Lucas Garcia',
    date: 'May 14, 2025',
    amount: '$219.99',
    status: 'cancelled' as const
  },
];
