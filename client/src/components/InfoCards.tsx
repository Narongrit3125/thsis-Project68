import { Link } from "wouter";
import { infoCards } from "@/data/staticData";

export default function InfoCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2">ข้อมูลสำหรับนิสิตใหม่</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">ขอต้อนรับนิสิตใหม่ทุกคนสู่รั้วคณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวร เราได้รวบรวมข้อมูลที่จำเป็นสำหรับการเตรียมตัวเข้าศึกษาต่อ</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-neutral-light hover:bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="h-40 bg-primary-light overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <Link href={card.link} className="inline-flex items-center text-accent text-sm font-medium">
                  อ่านเพิ่มเติม <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
