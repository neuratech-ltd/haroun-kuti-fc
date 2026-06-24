import React from "react";
import { Button } from "../ui/button";
import { VolleyballIcon } from "lucide-react";
const Header = () => {
  return (
    <div className="bg-blue-950 text-white sticky top-0 px-6 py-4 z-999">
      <div className="flex items-center gap-4 justify-between max-w-7xl mx-auto">
        <div className="text-lg font-semibold flex items-center gap-2">
          {" "}
          <VolleyballIcon /> Haroun Kuti FC
        </div>
        <nav className="space-x-4 ml-auto">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Programs
          </a>
          <a href="#" className="hover:underline">
            News
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
        <Button variant="secondary" className="ml-auto ">
          Call now: 01111111111
        </Button>
      </div>
    </div>
  );
};

export default Header;
