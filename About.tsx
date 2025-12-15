import React from 'react';
import { Target, User, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-brand-50/30 pt-16 pb-8 md:pt-24 md:pb-12 text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
          About Suba Wellness Wonders
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 space-y-12 md:space-y-16 lg:space-y-20">
        
        {/* Mission Section */}
        <section className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-accent-400"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-6">
               <Target className="h-6 w-6 text-brand-700" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6 md:mb-8">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
              At Suba Wellness Wonders, we are dedicated to help you achieve optimal health through personalized nutrition guidance and practical wellness strategies.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our approach combines scientific research with traditional wisdom to create sustainable, balanced eating habits that nourish both body and mind. We believe that true wellness is a journey, not a destination.
            </p>
          </div>
        </section>

        {/* Profile & Approach Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          
          {/* G Subashini Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-10 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow duration-300 relative group">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-50 to-transparent rounded-t-3xl -z-0"></div>
            
            {/* Medium Circle Image */}
            <div className="w-40 h-40 md:w-48 md:h-48 mb-6 relative z-10">
              <div className="absolute inset-0 bg-brand-200 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <img 
                src="https://raw.githubusercontent.com/subagopi1979-lgtm/subawellnesswonders/main/subashini.jpg" 
                alt="G Subashini" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative"
              />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">G Subashini</h3>
            <p className="text-brand-600 font-medium mb-6 text-sm uppercase tracking-wide">Dietitian</p>
            <p className="text-gray-600 mb-0 flex-grow leading-relaxed text-sm md:text-base">
              As your dietitian, I bring years of experience and a passion for helping people transform their lives through nutrition. I understand that every individual is unique.
            </p>
          </div>

          {/* Approach Card */}
          <div className="bg-gray-900 rounded-3xl shadow-lg p-6 sm:p-10 h-full text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gray-800 rounded-full opacity-50"></div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-8 md:mb-10 flex items-center gap-3 relative z-10">
              <Award className="h-6 w-6 text-accent-400" />
              Our Approach
            </h3>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              {[
                {
                  title: "Personalized Nutrition Plans",
                  desc: "Tailored specifically to your body's needs and your personal health goals."
                },
                {
                  title: "Evidence-Based Recommendations",
                  desc: "We rely on the latest scientific research to guide our advice, ensuring safety and efficacy."
                },
                {
                  title: "Sustainable Lifestyle Changes",
                  desc: "Focusing on long-term habits rather than short-term fixes or restrictive diets."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 md:gap-5">
                   <div className="bg-gray-800 p-3 h-fit rounded-xl flex-shrink-0">
                     <CheckCircle className="h-5 w-5 text-brand-400" />
                   </div>
                   <div>
                     <h4 className="font-bold text-white mb-2 text-base md:text-lg">{item.title}</h4>
                     <p className="text-gray-200 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default About;