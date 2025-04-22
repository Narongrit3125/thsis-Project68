import { Link } from "wouter";

export default function ContactInfo() {
  return (
    <section className="py-16 bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-sm">คณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวร<br/>99 ม.9 ต.ท่าโพธิ์ อ.เมือง<br/>จ.พิษณุโลก 65000</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-secondary"></i>
                <span className="text-sm">055-963xxx</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-secondary"></i>
                <span className="text-sm">science@nu.ac.th</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">ติดตามเรา</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-facebook-f"></i></Link>
                <Link href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-instagram"></i></Link>
                <Link href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-twitter"></i></Link>
                <Link href="#" className="text-white hover:text-secondary transition-colors"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-4">สำหรับนิสิต</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">ตารางเรียน</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">ตารางสอบ</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">ปฏิทินการศึกษา</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">กองทุนกู้ยืมเพื่อการศึกษา</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">ทุนการศึกษา</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">บริการให้คำปรึกษา</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">ระบบรับสมัครฝึกงาน</Link></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">เกี่ยวกับคณะ</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">หลักสูตรที่เปิดสอน</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">งานวิจัย</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">บริการวิชาการ</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">รับสมัครนิสิตใหม่</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">ศิษย์เก่า</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">ดาวน์โหลดเอกสาร</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">แผนที่</h3>
            <div className="w-full h-40 bg-white rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.035870459022!2d100.18844591486941!3d16.744157688449872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dfbe970a8e0105%3A0x5e6efd5f0e683630!2sFaculty%20of%20Science%2C%20Naresuan%20University!5e0!3m2!1sen!2sth!4v1649145735705!5m2!1sen!2sth" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="แผนที่คณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวร"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
