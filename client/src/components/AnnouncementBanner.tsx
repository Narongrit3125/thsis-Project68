import { Link } from "wouter";

export default function AnnouncementBanner() {
  return (
    <div className="bg-primary text-white py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded mr-3">ประกาศ</span>
            <p className="text-sm">นิสิตใหม่รายงานตัวขึ้นทะเบียนออนไลน์ ระหว่างวันที่ 1-10 มิถุนายน 2566</p>
          </div>
          <Link href="#" className="text-xs text-secondary hover:underline">
            ดูประกาศทั้งหมด <i className="fas fa-arrow-right ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
