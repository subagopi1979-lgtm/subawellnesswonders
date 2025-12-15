import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Facebook, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const email = formData.get('user_email') as string;
    const phone = formData.get('user_phone') as string;
    
    const newErrors: { email?: string; phone?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com).";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSending(true);
      
      emailjs.sendForm(
        'service_1n2k5ly',
        'template_82irj3p',
        form,
        {
          publicKey: 'PWZtDBKVYj7ret1ul',
        }
      ).then(
        () => {
          setIsSending(false);
          setShowSuccessPopup(true);
          form.reset();
        },
        (error) => {
          setIsSending(false);
          console.error('FAILED...', error.text);
          alert('Failed to send the message, please try again later.');
        },
      );
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
       <div className="bg-brand-50/50 py-12 md:py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Ready to start your wellness journey? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 -mt-6 md:-mt-10 lg:-mt-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[auto] lg:min-h-[600px] border border-gray-100">
          
          {/* Left Side - Info */}
          <div className="bg-gray-900 p-8 md:p-10 lg:p-14 text-white w-full lg:w-5/12 flex flex-col justify-between relative overflow-hidden order-1 lg:order-1">
            <div className="relative z-10">
              <span className="text-accent-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Contact Info</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 md:mb-10">Let's Connect</h2>
              <ul className="space-y-6 md:space-y-8">
                <li className="flex items-start gap-4 group">
                  <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-accent-500 transition-colors shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="mt-1">
                    <p className="font-semibold text-gray-300 text-xs uppercase tracking-wide mb-1">Email</p>
                    <p className="text-sm font-medium text-white break-all">subawellnesswonders@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                   <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-accent-500 transition-colors shrink-0">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.266c0-5.452 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="mt-1">
                    <p className="font-semibold text-gray-300 text-xs uppercase tracking-wide mb-1">Whatsapp</p>
                    <p className="text-sm font-medium text-white">+91 9894267069</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                   <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-accent-500 transition-colors shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="mt-1">
                    <p className="font-semibold text-gray-300 text-xs uppercase tracking-wide mb-1">Location</p>
                    <p className="text-sm font-medium text-white">Chennai, Tamil Nadu, India</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-10 md:mt-12">
              <p className="font-semibold text-gray-300 mb-4 text-sm">Follow Me on</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/subawellnesswonders?igsh=Z3AxYWFvbDFvNGo3" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-brand-500 hover:text-white text-gray-300 transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/share/14Ms6XFstVw/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-brand-500 hover:text-white text-gray-300 transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gray-800 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent-900 rounded-full opacity-20"></div>
          </div>

          {/* Right Side - Form */}
          <div className="p-6 sm:p-10 md:p-12 lg:p-14 w-full lg:w-7/12 bg-white relative order-2 lg:order-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0"></div>
            
            <form className="space-y-5 md:space-y-6 relative z-10" onSubmit={handleSubmit} noValidate>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input 
                      type="text"
                      name="user_name"
                      disabled={isSending}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-all placeholder-gray-400 disabled:opacity-50 text-sm md:text-base"
                      placeholder="Your name"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input 
                      type="email"
                      name="user_email"
                      disabled={isSending}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-gray-900 focus:ring-0 outline-none transition-all placeholder-gray-400 disabled:opacity-50 text-sm md:text-base`}
                      placeholder="hello@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                 </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel"
                  name="user_phone"
                  disabled={isSending}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-gray-900 focus:ring-0 outline-none transition-all placeholder-gray-400 disabled:opacity-50 text-sm md:text-base`}
                  placeholder="9876543210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  disabled={isSending}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-all resize-none placeholder-gray-400 disabled:opacity-50 text-sm md:text-base"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full bg-gray-900 text-white font-bold py-3 md:py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

        {/* Note below form */}
        <div className="mt-8 text-center max-w-2xl mx-auto px-4">
          <p className="text-gray-500 italic text-sm md:text-base leading-relaxed">
            Note: Consultations are by appointment only. Please contact us by filling the contact form to schedule.
          </p>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={() => setShowSuccessPopup(false)}></div>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative z-10 max-w-md w-full text-center transform transition-all animate-in zoom-in-95 duration-200">
            <div className="mx-auto w-20 h-20 md:w-24 md:h-24 bg-[#0f5132] rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Check className="h-10 w-10 md:h-12 md:w-12 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Message sent successfully!</h3>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Thanks for contacting Suba Wellness Wonders.
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-[#0f5132] text-white font-bold text-base md:text-lg px-8 md:px-10 py-3 rounded-xl hover:bg-[#0b3d26] transition-colors shadow-lg w-full sm:w-auto"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
