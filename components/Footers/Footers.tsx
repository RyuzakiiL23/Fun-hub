"use client";

import Link from "next/link";
import { FaBookOpen, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footers = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-6">
              <FaBookOpen className="text-blue-400 text-2xl mr-2" />
              <span className="text-xl font-bold">Learning Fun Hub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making learning fun and effective for children everywhere.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaPinterestP />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Testimonials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2023 Learning Fun Hub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
