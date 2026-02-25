import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Heart, Users, Home, BookOpen, Smile, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Menu, X, Shield, Coffee, Shirt, HandHeart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img src="/logo.png" alt="Spirits In Unity Logo" className="h-10 w-auto object-contain" />
              <span className="font-display font-bold text-2xl text-primary tracking-tight">Spirits In Unity</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#purpose" className="text-dark hover:text-primary font-medium transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-md px-2 py-1">Our Purpose</a>
            <a href="#programs" className="text-dark hover:text-primary font-medium transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-md px-2 py-1">Programs</a>
            <a href="#impact" className="text-dark hover:text-primary font-medium transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-md px-2 py-1">Impact</a>
            <a href="#volunteer" className="text-dark hover:text-primary font-medium transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-md px-2 py-1">Volunteer</a>
            <a href="#donate" className="bg-secondary hover:bg-secondary-hover text-dark font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-secondary/50 cursor-pointer">
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark hover:text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#purpose" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark font-medium hover:bg-gray-50 rounded-md">Our Purpose</a>
            <a href="#programs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark font-medium hover:bg-gray-50 rounded-md">Programs</a>
            <a href="#impact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark font-medium hover:bg-gray-50 rounded-md">Impact</a>
            <a href="#volunteer" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark font-medium hover:bg-gray-50 rounded-md">Volunteer</a>
            <a href="#donate" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-4 text-center bg-secondary text-dark font-semibold rounded-full">Donate Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-background pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-display font-bold text-primary leading-[1.1] mb-8">
              Real people <br />helping <span className="text-secondary italic">real people.</span>
            </h1>

            <div className="flex items-center gap-12 mb-10">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-gray-600 text-sm">People supported</div>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs border-l-2 border-primary/20 pl-6 py-2">
                Empowering communities, transforming lives. Your support can bring hope to those in need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#donate" className="inline-flex justify-center items-center bg-secondary hover:bg-secondary-hover text-white font-bold px-8 py-3.5 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-secondary/50 rounded-sm">
                Donate Now
              </a>
              <a href="#volunteer" className="inline-flex justify-center items-center bg-transparent border border-gray-300 hover:border-primary text-primary font-bold px-8 py-3.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/20 rounded-sm">
                Get Involved
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] hidden md:block">
            <div className="absolute inset-0 bg-secondary rounded-[2rem] transform translate-x-4 translate-y-4 opacity-30"></div>
            <img
              src="/momanddaughter-heart.webp"
              alt="Mom and daughter sharing a heart"
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Purpose = () => {
  return (
    <section id="purpose" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] md:h-[500px] mb-12 lg:mb-0 order-2 lg:order-1">
            <div className="absolute inset-0 bg-secondary rounded-[2rem] transform -translate-x-4 translate-y-4 opacity-30"></div>
            <img
              src="/volunteers_huddled_up.png"
              alt="Group of volunteers huddled together"
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-dark font-bold tracking-wide text-sm uppercase">About us</span>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-display text-primary leading-[1.2] mt-6 mb-8">
              We believe in the power of <br /><span className="text-secondary italic font-bold">compassion</span> and <span className="text-secondary italic font-bold">collective</span> action.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our mission is to uplift underserved communities by providing vital resources, education, and support.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center transform -rotate-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Homeless Outreach",
      description: "Providing essential supplies, warm meals, and compassionate connection to those living on the streets.",
      icon: <Home className="w-6 h-6 text-primary" />,
      impact: "Reaching 500+ individuals weekly"
    },
    {
      title: "Disaster Relief Visits",
      description: "Rapid response teams delivering emergency supplies and emotional support to families affected by local crises.",
      icon: <HandHeart className="w-6 h-6 text-primary" />,
      impact: "24/7 emergency response"
    },
    {
      title: "Food Assistance",
      description: "Operating community pantries and delivering nutritious groceries to families facing food insecurity.",
      icon: <Coffee className="w-6 h-6 text-primary" />,
      impact: "10,000 lbs of food distributed monthly"
    },
    {
      title: "Clothing Support",
      description: "Supplying weather-appropriate clothing, school uniforms, and professional attire for job interviews.",
      icon: <Shirt className="w-6 h-6 text-primary" />,
      impact: "Outfitting 200+ families a year"
    },
    {
      title: "Youth & Education",
      description: "After-school tutoring, mentorship programs, and safe spaces for children to learn and grow.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      impact: "Supporting 300+ students"
    },
    {
      title: "Mental Health Support",
      description: "Connecting individuals with counseling services and providing trauma-informed emotional care.",
      icon: <Smile className="w-6 h-6 text-primary" />,
      impact: "Free community support groups"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-background border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Our <span className="text-secondary italic">Programs</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              We take a holistic approach to community care, addressing immediate physical needs while providing long-term emotional and educational support.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer focus-within:ring-4 focus-within:ring-primary/20" tabIndex={0}>
              <div className="w-12 h-12 bg-background border border-gray-200 flex items-center justify-center mb-8">
                {React.cloneElement(program.icon as React.ReactElement<any>, { className: "w-5 h-5 text-primary" })}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{program.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                {program.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase tracking-wider">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const YouthFocus = () => {
  const initiatives = [
    {
      title: "After-School Mentorship",
      desc: "Providing safe spaces, tutoring, and guidance to keep kids learning and growing after the bell rings.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Scholarships & Tools",
      desc: "Ensuring every child has backpacks, supplies, and technology needed to succeed in modern classrooms.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Crisis Intervention",
      desc: "Emergency housing support and counseling for children whose families are facing sudden displacement.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Investing in Our <span className="text-secondary italic">Youth</span>
          </h2>
          <p className="text-gray-500">
            Children are our most precious resource. Our specialized youth initiatives are designed to break the cycle of poverty and empower the next generation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="p-8">
                <h3 className="text-xl font-display font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-20">
                  {item.desc}
                </p>
                <a href="#" className="text-secondary font-bold text-sm hover:text-secondary-hover transition-colors">
                  Learn More
                </a>
              </div>
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="font-bold text-primary text-sm">Youth Program</div>
                <div className="text-gray-400 text-xs">Community Initiative</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800"
              alt="Hands together"
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-5xl lg:text-6xl font-display font-bold mb-12 leading-[1.1]">
              Together, We Can Make a <span className="text-secondary italic">Difference</span>
            </h2>

            <div className="space-y-6">
              <div className="border border-white/20 p-8 rounded-sm bg-white/5 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-2">50k+</div>
                  <div className="text-white/60 text-sm">Meals Provided</div>
                </div>
                <div className="text-sm text-white/80 border-l border-white/20 pl-6 hidden md:block">
                  It reflects the collective impact of thousands of individuals who believe in making a difference.
                </div>
              </div>

              <div className="border border-white/20 p-8 rounded-sm bg-white/5 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <div className="text-4xl font-display font-bold text-white mb-2">1,200+</div>
                  <div className="text-white/60 text-sm">Families Supported</div>
                </div>
                <div className="text-sm text-white/80 border-l border-white/20 pl-6 hidden md:block">
                  With our community programs, we have made a significant impact in supporting vital causes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Donation = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [amount, setAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setMessage('Donation successful! Thank you so much for your support.');
    }
    if (query.get('canceled')) {
      setMessage('Donation canceled -- please try again when you are ready.');
    }
  }, []);

  const handleCheckout = async () => {
    setIsLoading(true);
    setMessage('');

    // Determine the actual amount to charge
    let finalAmount = typeof amount === 'number' ? amount : parseFloat(customAmount);

    if (!finalAmount || finalAmount < 1) {
      setMessage('Please enter a valid donation amount (minimum $1).');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount,
          isMonthly: isMonthly,
        }),
      });

      const session = await response.json();

      if (!response.ok) {
        throw new Error(session.message || 'Something went wrong');
      }

      // Redirect to Checkout
      window.location.href = session.url;

    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Unable to connect to Stripe.');
      setIsLoading(false);
    }
  };

  return (
    <section id="donate" className="py-24 bg-background relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Your generosity <span className="text-secondary italic">changes lives</span> today.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether it's providing a hot meal, a warm coat, or funding an after-school program, your donation directly supports individuals and children in our community facing hardship.
            </p>

            <div className="bg-white rounded-sm p-6 border border-gray-200 mb-8 flex items-start gap-4">
              <div className="bg-background border border-gray-200 p-3 shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Commitment to Transparency</h4>
                <p className="text-gray-500 text-sm">
                  <strong>92% of every dollar</strong> goes directly to our community programs. We are a registered 501(c)(3) nonprofit, and your donation is tax-deductible.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-8 md:p-10">
            <div className="flex bg-gray-50 border border-gray-200 rounded-sm p-1 mb-8">
              <button
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-3 px-6 font-bold text-sm transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-secondary/30 cursor-pointer ${!isMonthly ? 'bg-secondary text-white shadow-sm' : 'text-gray-500 hover:text-primary'}`}
              >
                Give Once
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-3 px-6 font-bold text-sm transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-secondary/30 cursor-pointer ${isMonthly ? 'bg-secondary text-white shadow-sm' : 'text-gray-500 hover:text-primary'}`}
              >
                Monthly Supporter
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[25, 50, 100, 250].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`py-4 rounded-sm font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-secondary/30 cursor-pointer border-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${amount === val ? 'border-secondary bg-secondary/5 text-secondary' : 'border-gray-200 text-gray-500 hover:border-secondary/30'}`}
                >
                  ${val}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                <input
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setAmount('custom');
                    setCustomAmount(e.target.value);
                  }}
                  className="w-full pl-8 pr-4 py-4 rounded-sm border-2 border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all duration-200 text-lg font-bold text-primary"
                  onClick={() => setAmount('custom')}
                />
              </div>
            </div>

            {message && (
              <div className="mb-6 p-4 rounded-lg bg-gray-50 text-gray-700 text-sm font-medium border border-gray-200">
                {message}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className={`w-full text-white font-bold text-xl py-5 rounded-sm transition-all duration-200 shadow-md flex justify-center items-center gap-2 focus:outline-none focus:ring-4 focus:ring-secondary/50 ${isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-secondary hover:bg-secondary-hover hover:shadow-lg hover:-translate-y-1 cursor-pointer'
                }`}
            >
              <Heart className="w-6 h-6" />
              {isLoading ? 'Connecting to Stripe...' : (isMonthly ? 'Become a Monthly Supporter' : 'Donate Now')}
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                For donations over $10,000, please <a href="#assistance" className="text-secondary font-bold hover:underline">contact us</a> for wire transfer or check instructions to avoid high processing fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Volunteer = () => {
  return (
    <section id="volunteer" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Give Your Time. Share Your Heart.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Volunteers are the backbone of Spirits In Unity. Whether you have a few hours a month or want to make a weekly commitment, there is a place for you here.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Community Outreach</h4>
                  <p className="text-gray-600">Help distribute food, clothing, and supplies directly to those in need on the streets and in shelters.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center shrink-0">
                  <Smile className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Youth Mentoring</h4>
                  <p className="text-gray-600">Spend time reading, tutoring, or simply being a positive role model for children in our after-school programs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Donation Drives & Events</h4>
                  <p className="text-gray-600">Assist in organizing community events, sorting donated items, and preparing care packages.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-dark mb-6">Volunteer Sign Up</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-200 bg-white">
                  <option>Community Outreach</option>
                  <option>Youth Mentoring</option>
                  <option>Donation Sorting</option>
                  <option>Event Support</option>
                  <option>Wherever needed most</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="Tell us a bit about yourself..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/50 cursor-pointer">
                Join Our Team
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Assistance = () => {
  return (
    <section id="assistance" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-sm mb-6">
          <Heart className="w-8 h-8 text-secondary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Need Help? We're Here For You.</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          If you or your family are experiencing hardship, please reach out. Our community is here to support you with food, clothing, emotional care, and resources.
        </p>

        <form className="bg-background rounded-sm p-8 md:p-10 shadow-sm border border-gray-200 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all duration-200" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone or Email</label>
              <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all duration-200" placeholder="How can we reach you?" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all duration-200" placeholder="Please briefly describe what kind of support you need..."></textarea>
          </div>
          <button type="submit" className="bg-secondary hover:bg-secondary-hover text-white font-bold py-4 px-8 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-secondary/50 cursor-pointer w-full md:w-auto">
            Submit Request Confidentially
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Spirits In Unity Logo" className="h-10 w-auto object-contain" />
              <span className="font-display font-bold text-2xl tracking-tight">Spirits In Unity</span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Empowering communities and transforming lives through compassion, resources, and collective action.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary/50">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary/50">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#purpose" className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1">Our Purpose</a></li>
              <li><a href="#programs" className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1">Programs & Services</a></li>
              <li><a href="#impact" className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1">Our Impact</a></li>
              <li><a href="#volunteer" className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1">Volunteer</a></li>
              <li><a href="#assistance" className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1">Request Assistance</a></li>
            </ul>
          </div>



          <div>
            <h4 className="font-bold text-lg mb-6">Transparency</h4>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Spirits In Unity is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent of the law.
            </p>
            <div className="flex items-center gap-2 text-secondary font-medium">
              <Shield className="w-5 h-5" />
              <span>Gold Star Transparency</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Spirits In Unity. All rights reserved.</p>
            <p className="mt-1">
              Crafted with Excellence By <a href="https://www.verix.ai" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-secondary-hover transition-colors">Verix AI</a>.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-dark bg-background">
      <Navbar />
      <main>
        <Hero />
        <Purpose />
        <Programs />
        <YouthFocus />
        <Impact />
        <Donation />
        <Volunteer />
        <Assistance />
      </main>
      <Footer />
    </div>
  );
}
