import { Link } from "wouter";
import { newsItems } from "@/data/staticData";

export default function NewsSection() {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4 md:mb-0">ข่าวสารและกิจกรรม</h2>
          <Link href="#" className="bg-white hover:bg-gray-100 text-primary font-heading px-5 py-2 rounded shadow-sm transition-all duration-300">
            ข่าวทั้งหมด <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span className={`${item.categoryColor} text-white text-xs px-2 py-1 rounded`}>{item.category}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                <Link href={item.link} className="inline-flex items-center text-accent text-sm font-medium">
                  อ่านเพิ่มเติม <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
