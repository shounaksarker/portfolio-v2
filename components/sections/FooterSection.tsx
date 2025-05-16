import Link from "next/link";
import React from "react";
import SocialLinks from "@/components/social-links";

const FooterSection = () => {
  return (
    <footer className="py-6 bg-gradient-to-r from-primary/90 to-secondary/90 text-white relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row items-center justify-between">
          <Link href="/" className="text-xl md:text-3xl font-bold text-gradient-light">
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
