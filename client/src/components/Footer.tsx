import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark border-t border-primary py-6 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xs">© {currentYear} คณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวร. สงวนลิขสิทธิ์.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-xs hover:text-secondary transition-colors">นโยบายความเป็นส่วนตัว</Link>
            <Link href="#" className="text-xs hover:text-secondary transition-colors">นโยบายคุกกี้</Link>
            <Link href="#" className="text-xs hover:text-secondary transition-colors">แผนผังเว็บไซต์</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
