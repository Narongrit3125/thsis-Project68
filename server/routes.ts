import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for university website
  
  // Get all info cards
  app.get('/api/info-cards', (_req, res) => {
    res.json([
      {
        title: "กำหนดการสำคัญ",
        description: "ปฏิทินการศึกษา กิจกรรมต้อนรับนิสิตใหม่ และกำหนดการลงทะเบียน",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        link: "#"
      },
      {
        title: "หลักสูตรการศึกษา",
        description: "ข้อมูลหลักสูตร แผนการเรียน และรายวิชาสำหรับนิสิตชั้นปีที่ 1",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        link: "#"
      },
      {
        title: "การเตรียมตัว",
        description: "แนวทางการเตรียมตัวก่อนเปิดภาคเรียน อุปกรณ์การเรียน และสิ่งที่ควรเตรียม",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        link: "#"
      },
      {
        title: "ทุนการศึกษา",
        description: "ข้อมูลทุนการศึกษาต่างๆ กองทุนกู้ยืมเพื่อการศึกษา และเงื่อนไขการรับทุน",
        image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        link: "#"
      }
    ]);
  });

  // Get departments
  app.get('/api/departments', (_req, res) => {
    res.json([
      {
        name: "ภาควิชาเคมี",
        description: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเคมี และสาขาวิชาเคมีอุตสาหกรรม พร้อมระดับบัณฑิตศึกษา",
        icon: "fas fa-flask",
        link: "#"
      },
      {
        name: "ภาควิชาคณิตศาสตร์",
        description: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาคณิตศาสตร์ และสาขาวิชาสถิติ พร้อมระดับบัณฑิตศึกษา",
        icon: "fas fa-calculator",
        link: "#"
      },
      {
        name: "ภาควิชาฟิสิกส์",
        description: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาฟิสิกส์ และสาขาวิชาฟิสิกส์ประยุกต์ พร้อมระดับบัณฑิตศึกษา",
        icon: "fas fa-atom",
        link: "#"
      },
      {
        name: "ภาควิชาชีววิทยา",
        description: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาชีววิทยา และสาขาวิชาจุลชีววิทยา พร้อมระดับบัณฑิตศึกษา",
        icon: "fas fa-dna",
        link: "#"
      },
      {
        name: "ภาควิชาวิทยาการคอมพิวเตอร์",
        description: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ และสาขาวิชาเทคโนโลยีสารสนเทศ",
        icon: "fas fa-laptop-code",
        link: "#"
      },
      {
        name: "ภาควิชาอื่นๆ",
        description: "ภาควิชาอื่นๆ ในคณะวิทยาศาสตร์ ได้แก่ ธรณีวิทยา วิทยาศาสตร์สิ่งแวดล้อม และวิทยาศาสตร์การกีฬา",
        icon: "fas fa-microscope",
        link: "#"
      }
    ]);
  });

  // Get news items
  app.get('/api/news', (_req, res) => {
    res.json([
      {
        title: "พิธีปฐมนิเทศนิสิตใหม่ ประจำปีการศึกษา 2566",
        description: "คณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวรขอเชิญนิสิตใหม่ทุกคนเข้าร่วมพิธีปฐมนิเทศนิสิตใหม่ ประจำปีการศึกษา 2566 ในวันที่ 15 มิถุนายน 2566",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        date: "12 พฤษภาคม 2566",
        category: "ประกาศ",
        categoryColor: "bg-primary",
        link: "#"
      },
      {
        title: "ประกาศรับสมัครทุนการศึกษาสำหรับนิสิตคณะวิทยาศาสตร์",
        description: "คณะวิทยาศาสตร์เปิดรับสมัครทุนการศึกษาสำหรับนิสิตทุกชั้นปี ประจำปีการศึกษา 2566 ระหว่างวันที่ 15-30 พฤษภาคม 2566",
        image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        date: "10 พฤษภาคม 2566",
        category: "ทุนการศึกษา",
        categoryColor: "bg-secondary",
        link: "#"
      },
      {
        title: "สัปดาห์วิทยาศาสตร์แห่งชาติ ประจำปี 2566",
        description: "คณะวิทยาศาสตร์ขอเชิญนักเรียน นิสิต นักศึกษา และประชาชนทั่วไป ร่วมงานสัปดาห์วิทยาศาสตร์แห่งชาติ ประจำปี 2566",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        date: "8 พฤษภาคม 2566",
        category: "กิจกรรม",
        categoryColor: "bg-accent",
        link: "#"
      }
    ]);
  });

  // Get carousel items
  app.get('/api/carousel', (_req, res) => {
    res.json([
      {
        title: "พื้นที่การเรียนรู้ที่ทันสมัย",
        description: "คณะวิทยาศาสตร์ มหาวิทยาลัยนเรศวร มีพื้นที่การเรียนรู้ที่ทันสมัย รองรับการเรียนการสอนในทุกสาขาวิชา",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      },
      {
        title: "ห้องปฏิบัติการวิทยาศาสตร์",
        description: "มีห้องปฏิบัติการที่ทันสมัย ได้มาตรฐานระดับสากล พร้อมให้นิสิตได้ทดลองและเรียนรู้อย่างเต็มที่",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      },
      {
        title: "กิจกรรมนิสิต",
        description: "ส่งเสริมการทำกิจกรรมนอกห้องเรียน เพื่อพัฒนาทักษะทางสังคมและภาวะผู้นำให้กับนิสิต",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      },
      {
        title: "สิ่งแวดล้อมที่เอื้อต่อการเรียนรู้",
        description: "ด้วยบรรยากาศที่ร่มรื่นและเงียบสงบ เหมาะกับการเรียนรู้และทำงานวิจัยทางวิทยาศาสตร์",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      }
    ]);
  });

  const httpServer = createServer(app);

  return httpServer;
}
