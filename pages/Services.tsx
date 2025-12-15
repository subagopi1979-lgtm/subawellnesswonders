import React from 'react';
import { Utensils, Scale, HeartPulse, Check } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Personalized Nutrition",
      description: "Customized meal plans based on your health profile, preferences, and goals.",
      features: ["Initial assessment and analysis", "Personalized recommendations", "Follow-up consultations"],
      icon: <Utensils className="h-6 w-6 text-brand-600" />
    },
    {
      title: "Weight Management",
      description: "Sustainable strategies for achieving and maintaining your ideal weight.",
      features: ["Customized weight loss/gain plans", "Metabolic assessment", "Behavioral strategies"],
      icon: <Scale className="h-6 w-6 text-accent-500" />
    },
    {
      title: "Health Conditions",
      description: "Specialized nutrition plans for managing health conditions and improving wellness.",
      features: ["Diabetes management", "Heart health", "Digestive wellness"],
      icon: <HeartPulse className="h-6 w-6 text-brand-600" />
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-white py-12 md:py-20 lg:py-24 text-center px-4">
        <span className="text-accent-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Expertise</span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Tailored nutrition programs designed to meet your unique health goals and lifestyle needs with precision and care.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-200 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-brand-50 transition-colors"></div>
              
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative z-10 group-hover:bg-brand-100 transition-colors shrink-0">
                {service.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-serif relative z-10">{service.title}</h3>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm leading-relaxed relative z-10 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-4 relative z-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <div className="mt-0.5 bg-accent-100 rounded-full p-0.5">
                      <Check className="h-3 w-3 text-accent-600 flex-shrink-0" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-brand-50/30 border-t border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-brand-700 font-bold tracking-widest text-xs uppercase mb-2 block">How It Works</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Your Journey to Better Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              A simple, structured approach to achieve your nutrition goals.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Hidden on mobile/tablet, visible on lg) */}
            <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-200/80 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  desc: "We start with a comprehensive assessment of your health history, lifestyle, and goals."
                },
                {
                  step: "02",
                  title: "Personalized Plan",
                  desc: "I create a customized nutrition strategy tailored specifically to your needs."
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "You receive detailed meal plans, recipes, and support to put your plan into action."
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  desc: "Regular check-ins and adjustments ensure you stay on track and achieve lasting results."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#4d7c0f] text-white rounded-2xl flex items-center justify-center font-serif font-bold text-xl md:text-2xl mb-4 md:mb-6 shadow-lg shrink-0">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 font-serif">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Important Note */}
            <div className="mt-12 max-w-2xl mx-auto bg-teal-50 border border-teal-100 p-6 md:p-8 rounded-[2rem] text-center relative z-10 shadow-md">
              <h4 className="text-xl md:text-2xl font-serif font-bold text-teal-900 mb-2 md:mb-3">Important Note</h4>
              <p className="text-teal-800 leading-relaxed font-medium text-sm md:text-base">
                The outcomes are not typical; Individual outcomes may vary from person to person
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
