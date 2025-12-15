import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Activity, Heart, ArrowRight, CheckCircle, Leaf } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-brand-50/50 overflow-hidden">
        {/* Decorative background squiggle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 right-0 h-full w-1/2 text-brand-100 fill-current">
              <path d="M0 0 L100 0 L100 100 Q 50 100 0 0" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 border border-accent-200 text-accent-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
                <Leaf className="h-3 w-3" />
                <span>Certified Dietitian</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Your Path to <span className="relative inline-block text-brand-600 whitespace-nowrap">
                  Wellness
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span> Starts Here
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Achieve your health goals with personalized nutrition guidance and practical tips for a balanced lifestyle. Experience the transformative power of holistic health.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base w-full sm:w-auto"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md text-sm md:text-base w-full sm:w-auto"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex justify-center">
              {/* Blobs */}
              <div className="absolute top-10 right-0 lg:-mr-10 w-64 h-64 md:w-80 md:h-80 bg-brand-200/60 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-10 lg:-mb-10 w-64 h-64 md:w-80 md:h-80 bg-accent-200/60 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow delay-1000"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-[6px] md:border-[10px] border-white shadow-2xl">
                 {/* Main Home Image */}
                 <img 
                   src="https://raw.githubusercontent.com/subagopi1979-lgtm/subawellnesswonders/main/subashini.jpg" 
                   alt="G Subashini Dietitian" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                 />
              </div>
              
              <div className="absolute bottom-4 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-4 md:right-10 bg-white p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-200 border border-gray-100 min-w-[14rem] md:min-w-[16rem]">
                <div className="bg-brand-100 p-2 md:p-3 rounded-full">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs md:text-sm">G Subashini</p>
                  <p className="text-[10px] md:text-xs text-gray-500">Certified Dietitian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-accent-500 font-semibold tracking-wide uppercase text-xs md:text-sm">Why Choose Us</span>
            <h2 className="mt-2 text-2xl md:text-4xl font-serif font-bold text-gray-900">What will you get?</h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-brand-600" />,
                title: "Nutrition Science",
                desc: "Explore the latest research-backed nutrition advice to make informed choices about your diet.",
                color: "bg-brand-50"
              },
              {
                icon: <Activity className="h-8 w-8 text-accent-500" />,
                title: "Personalized Plans",
                desc: "Tailored nutrition strategies designed specifically for your body type, metabolism, and lifestyle needs.",
                color: "bg-accent-50"
              },
              {
                icon: <Heart className="h-8 w-8 text-brand-600" />,
                title: "Sustainable Habits",
                desc: "Learn practical tips and tricks to develop long-lasting healthy eating patterns without extreme restrictions.",
                color: "bg-brand-50"
              }
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.color} p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-gray-100 shadow-sm flex flex-col items-start`}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5 md:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 font-serif">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <span className="text-accent-500 font-semibold mb-2 block uppercase text-xs md:text-sm tracking-wider">My Approach</span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                I'm G Subashini, a Dietitian dedicated to help you achieve a healthier, more balanced lifestyle through personalized nutrition.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                With a holistic approach to wellness, we'll work together to create a nutrition plan that fits your unique needs, preferences, and goals—all delivered conveniently online.
              </p>
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 inline-flex items-center gap-4 md:gap-5 w-full md:w-auto">
                <div className="bg-accent-100 p-3 md:p-4 rounded-full">
                  <Activity className="h-5 w-5 md:h-6 md:w-6 text-accent-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base md:text-lg">100% Online</p>
                  <p className="text-xs md:text-sm text-gray-500">Consultations available anywhere</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent-200 rounded-full blur-2xl opacity-50 -z-10"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-200 rounded-full blur-2xl opacity-50 -z-10"></div>

              <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-xl border border-gray-50 relative z-10">
                 <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 font-serif">My Philosophy</h3>
                 <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                   I believe in nourishing both body and mind through balanced nutrition that is sustainable, enjoyable, and tailored to your individual needs.
                 </p>
                 <ul className="space-y-4 mb-8">
                   {["No extreme diets or quick fixes", "Science-backed nutrition advice", "Sustainable lifestyle changes"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                       <div className="bg-brand-100 rounded-full p-1">
                          <CheckCircle className="h-4 w-4 text-brand-600 flex-shrink-0" />
                       </div>
                       <span>{item}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="flex justify-end">
                   <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 md:px-5 md:py-3 rounded-xl border border-gray-200">
                     <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-gray-900" />
                     <span className="font-bold text-gray-900 text-[10px] md:text-xs uppercase tracking-wide">Certified Dietitian</span>
                   </div>
                 </div>
              </div>

              {/* Important Note */}
              <div className="mt-6 bg-teal-50 border border-teal-100 p-6 md:p-8 rounded-[2rem] text-center relative z-10 shadow-md">
                <h4 className="text-xl md:text-2xl font-serif font-bold text-teal-900 mb-2 md:mb-3">Important Note</h4>
                <p className="text-teal-800 leading-relaxed font-medium text-sm md:text-base">
                  The outcomes are not typical; Individual outcomes may vary from person to person
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block p-4 rounded-full bg-accent-50 mb-6">
             <Heart className="h-8 w-8 text-accent-500 fill-current" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">Get the healthy life you always dreamed of</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-base md:text-lg">
            Have questions or ready to book a consultation? Reach out and we'll get back to you as soon as possible.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;