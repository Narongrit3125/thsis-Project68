import { Link } from "wouter";
import { departments } from "@/data/staticData";

export default function Departments() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2">ภาควิชาและหลักสูตร</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">คณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวร มีหลักสูตรการเรียนการสอนที่หลากหลาย ครอบคลุมทุกสาขาวิชาทางวิทยาศาสตร์</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <i className={`${dept.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                <a href={dept.link} className="text-accent hover:underline text-sm font-medium">ข้อมูลเพิ่มเติม</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
