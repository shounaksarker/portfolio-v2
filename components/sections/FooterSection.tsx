import Link from "next/link";
import React from "react";
import SocialLinks from "@/components/social-links";

const FooterSection = () => {
  return (
    <footer className="py-6 bg-gradient-to-r from-primary/90 to-tertiary/90 text-white relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-boldtext-gradient-light">
            Shounak
          </Link>
          <SocialLinks />
          <p className="text-gray-100 text-sm">
            © {new Date().getFullYear()} Shounak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
