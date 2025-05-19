
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-amazon-orange font-bold text-7xl mb-4">404</div>
      <h1 className="text-2xl font-bold text-amazon-blue mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-6 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-amazon-blue hover:bg-amazon-lightBlue">
        <Link to="/">Return to Dashboard</Link>
      </Button>
    </div>
  );
};

export default NotFound;
