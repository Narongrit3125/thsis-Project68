import { Link } from "wouter";
import { FlyingPaper } from "@/lib/AnimatedElements";

export default function WelcomeBanner() {
  return (
    <section className="welcome-banner relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary z-0 opacity-20"></div>
      
      {/* Background with flying paper planes */}
      <div 
        className="relative h-[460px] md:h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')" }}
      >
        
        {/* Flying paper elements */}
        <FlyingPaper 
          position="top-1/4 left-1/5" 
          size="w-12 h-12" 
          rotation="rotate-12" 
        />
        <FlyingPaper 
          position="bottom-1/3 right-1/4" 
          size="w-10 h-10" 
          rotation="-rotate-6" 
          delay="animation-delay-1" 
        />
        <FlyingPaper 
          position="top-1/3 right-1/5" 
          size="w-8 h-8" 
          rotation="rotate-45" 
          delay="animation-delay-2" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="welcome-text">
            <h2 className="font-welcome text-6xl md:text-7xl text-secondary mb-2">Welcome</h2>
            <div 
              className="bg-cover bg-center p-4 rounded-lg shadow-lg transform rotate-1 mb-6"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561365452-adb940139ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')" }}
            >
              <h3 className="font-heading text-2xl md:text-3xl text-white">ยินดีต้อนรับนิสิตใหม่</h3>
              <h4 className="font-heading text-xl md:text-2xl text-white my-1">สู่...ร้ัวคณะวิทยาศาสตร์</h4>
              <h5 className="font-heading text-lg md:text-xl text-white">มหาวิทยาลัยนเรศวร</h5>
            </div>
            
            <div className="text-accent text-4xl md:text-5xl font-heading font-bold mb-8">
              รุ่น SC 46
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#" className="bg-primary hover:bg-primary-dark text-white font-heading px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                ข้อมูลสำหรับนิสิตใหม่
              </Link>
              <Link href="#" className="bg-secondary hover:bg-secondary-dark text-neutral-dark font-heading px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                ตารางกิจกรรม
              </Link>
            </div>
          </div>
        </div>
        
        {/* Student images at bottom */}
        <div className="absolute -bottom-2 left-0 z-20 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
            alt="นักศึกษาชาย" 
            className="h-60" 
          />
        </div>
        <div className="absolute -bottom-2 right-0 z-20 hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
            alt="นักศึกษาหญิง" 
            className="h-60" 
          />
        </div>
      </div>
    </section>
  );
}
