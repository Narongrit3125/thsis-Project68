import { useState } from "react";
import { Link } from "wouter";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo and University Name */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="มหาวิทยาลัยนเรศวร Logo" 
              className="h-12 w-12" 
            />
            <div>
              <h1 className="text-sm md:text-base font-heading font-semibold text-primary">สโมสรนิสิตคณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวร</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Faculty of Science, Naresuan University</p>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-primary p-2"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-heading">
            <div className="dropdown relative group">
              <button className="hover:text-primary-light font-medium flex items-center space-x-1">
                <span>เกี่ยวกับ</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="dropdown-menu absolute hidden pt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">ประวัติคณะ</Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">วิสัยทัศน์และพันธกิจ</Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">โครงสร้างองค์กร</Link>
              </div>
            </div>

            <div className="dropdown relative group">
              <button className="hover:text-primary-light font-medium flex items-center space-x-1">
                <span>หน่วยงานและบริการ</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="dropdown-menu absolute hidden pt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">ภาควิชา</Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">หน่วยงานสนับสนุน</Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">บริการวิชาการ</Link>
              </div>
            </div>

            <Link href="#" className="hover:text-primary-light font-medium">ดาวน์โหลด</Link>
            <Link href="#" className="hover:text-primary-light font-medium">เข้าสู่ระบบ</Link>
            <Link href="#" className="hover:text-primary-light font-medium">ติดต่อ</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200 pb-3 px-4`}>
        <Link href="#" className="block py-2 font-heading hover:text-primary-light">เกี่ยวกับ</Link>
        <Link href="#" className="block py-2 font-heading hover:text-primary-light">หน่วยงานและบริการ</Link>
        <Link href="#" className="block py-2 font-heading hover:text-primary-light">ดาวน์โหลด</Link>
        <Link href="#" className="block py-2 font-heading hover:text-primary-light">เข้าสู่ระบบ</Link>
        <Link href="#" className="block py-2 font-heading hover:text-primary-light">ติดต่อ</Link>
      </div>
    </header>
  );
}
