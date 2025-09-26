import { Link, useNavigate } from "react-router-dom";
const Logo = "/logo.jpg";
import { Button } from "@/components/ui/button";
import { LogIn, FileSpreadsheet } from "lucide-react";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full ">
      {/* bg-gradient-to-r from-primary via-primary-glow to-primary shadow-lg */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-10   shadow-md border border-white"
          />
          {/* <span className="text-xl font-bold text-primary-foreground ">
            VidyaSetu
          </span> */}
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate("/upload-sheets")}
            className=" bg-primary text-white flex items-center gap-2 rounded-full shadow-md hover:scale-105 hover:text-black transition-all"
          >
            <FileSpreadsheet className="h-4 w-4" />
            Take Trial
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => navigate("/login")}
            className="bg-primary text-white flex items-center gap-2   rounded-full shadow-md hover:scale-105 hover:text-white transition-all"
          >
            <LogIn className="h-4 w-4" />
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
