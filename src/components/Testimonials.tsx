
import { useInView } from 'react-intersection-observer';


const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Student Feedback on Our Class
        </h2>

        <div ref={ref} className="flex justify-center" >
          {/* Video Testimonial */}
        
          <iframe width="400" height="190" 
          src="https://www.youtube.com/embed/6I8_IWELuug?si=f-bjuqRghuP2tU38"
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
          ></iframe>
      
        
        </div>
       <div>
        <h2 className="text-1xl font-bold text-gray-900 text-center mb-12">
            This is a just example video.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
