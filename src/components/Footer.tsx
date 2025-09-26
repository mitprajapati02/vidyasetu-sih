import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground  mt-3 shadow-lg">
      <div
        className="container mx-auto px-6 py-10 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* grid grid-cols-1 md:grid-cols-2 gap-8 */}
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">
            <Link to="/">VidyaSetu</Link>
          </h1>
          <p className="text-primary-foreground/80 text-base">
            Detect Early. Intervene Timely. Save Futures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-primary-foreground/80">
            <li>
              <Link
                to="/"
                className="hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary-foreground transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-primary-foreground transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 text-center py-4 text-sm text-primary-foreground/70">
        © {new Date().getFullYear()} VidyaSetu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
