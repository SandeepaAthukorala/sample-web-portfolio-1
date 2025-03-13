import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Figma, Framer, MapPin, Github, LinkedinIcon, MonitorSmartphone, Database, LayoutGrid, Tv, Smartphone, Box, Lightbulb, Search, ShoppingCart, Users, PenTool, ArrowUp, Moon, Sun, Mail, Phone, Instagram, Twitter } from 'lucide-react';

function App() {
  const testimonials = [
    {
      text: "Emily’s expertise helped us scale our business effortlessly!",
      author: "Sarah L., CEO of TechWave Inc.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "Her designs are not only stunning but also highly functional!",
      author: "James R., Founder of StyleCrafters",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d674x?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "Emily is a true professional and a pleasure to work with.",
      author: "David K., Marketing Director at MediSync Health",
      image: "https://images.unsplash.com/photo-1544005313-9431566e4c67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "We saw a significant increase in leads after Emily optimized our SEO strategy.",
      author: "Linda M., Owner of BrightVision Marketing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b85a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "Emily's branding and UI/UX design transformed our company's image.",
      author: "Robert P., Creative Director at Creative Edge Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd8a72f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Get the theme from local storage on initial load
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Whenever `darkMode` changes, update localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    // Also update the HTML attribute
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timerRef.current);
  }, [testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pricingData = [
    {
      title: "Web Development",
      plans: [
        { name: "Basic Website", price: "$500+", description: "Landing page, responsive design, SEO setup" },
        { name: "Custom Web App", price: "$1500+", description: "Dynamic features, database integration, API support" },
      ],
    },
    {
      title: "Mobile App Development",
      plans: [
        { name: "Basic App", price: "$1000+", description: "Cross-platform, essential features, smooth UI" },
        { name: "Advanced App", price: "$3000+", description: "Custom features, AI integration, e-commerce support" },
      ],
    },
    {
      title: "UI/UX Design",
      plans: [
        { name: "Website UI Design", price: "$400+", description: "Wireframes, mockups, interactive prototypes" },
        { name: "Mobile App UI Design", price: "$600+", description: "User-friendly design, high-quality graphics" },
      ],
    },
    {
      title: "SEO & Digital Strategy",
      plans: [
        { name: "SEO Optimization", price: "$300+", description: "Keyword research, on-page SEO, performance boost" },
        { name: "Business Automation", price: "Custom Pricing", description: "AI tools, workflow automation, CRM setup" },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setToast('Please fill in all fields.');
      setTimeout(() => setToast(''), 3000);
      return;
    }

    // Simulate sending a message
    setToast('Message sent successfully!');
    setTimeout(() => setToast(''), 3000);

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  const portfolioItems = [
    {
      title: "Fashion Retail E-commerce",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-156025009785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      link: "/portfolio/fashion-retail" // Example link
    },
    {
      title: "AI-Powered Fitness Tracker",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-156025009785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      link: "/portfolio/ai-fitness" // Example link
    },
    {
      title: "Corporate Branding Website",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-156025009785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      link: "/portfolio/corporate-branding" // Example link
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#home" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                    HOME
                  </a>
                  <a href="#features" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                    FEATURES
                  </a>
                  <a href="#portfolio" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                    PORTFOLIO
                  </a>
                  <a href="#resume" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                    RESUME
                  </a>
                  <a href="#clients" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                    CLIENTS
                  </a>
                  <a href="#pricing" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
                    PRICING
                  </a>
                </div>
              </div>
            </div>
            <div className="md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <a href="#contact" className="bg-pink-500 text-white px-8 py-2 rounded-full hover:bg-pink-600">
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              HOME
            </a>
            <a href="#features" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              FEATURES
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              PORTFOLIO
            </a>
            <a href="#resume" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              RESUME
            </a>
            <a href="#clients" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              CLIENTS
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              PRICING
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-gray-600 mb-4 dark:text-gray-400">WELCOME TO MY WORLD</p>
          <h1 className="text-5xl font-bold mb-4 dark:text-white">
            Hi, I'm <span className="text-pink-500">Emily Carter</span>
            <br />a <span>Passionate Software Engineer &amp; UI/UX Designer.</span>
          </h1>
          <p className="text-gray-600 mb-8 dark:text-gray-400">
            I transform ideas into seamless digital experiences with intuitive
            design and powerful code. My goal is to create user-friendly
            solutions that not only look stunning but also enhance
            functionality. From mobile apps to web applications, I bring
            creativity and efficiency to every project.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 dark:text-white">FIND WITH ME</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/emilycarter"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <LinkedinIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://github.com/emilycodes"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.instagram.com/emilydev_creates"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 dark:text-white">BEST SKILLS ON</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <Figma className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <Framer className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Professional portrait"
            className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-center mb-2 text-pink-500">FEATURES</h2>
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">What I Do</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-pink-500" />,
                title: "Business Strategy",
                description:
                  "I help businesses streamline their operations, ensuring efficiency and long-term success.",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-pink-500" />,
                title: "App Development",
                description:
                  "From ideation to launch, I create high-performance applications tailored to your needs.",
              },
              {
                icon: <ShoppingCart className="w-8 h-8 text-pink-500" />,
                title: "E-commerce Solutions",
                description:
                  "Want to scale your online store? I develop e-commerce platforms that convert visitors into customers.",
              },
              {
                icon: <Search className="w-8 h-8 text-pink-500" />,
                title: "SEO Optimization",
                description:
                  "Ranking high on search engines is crucial! I optimize websites to improve visibility and traffic.",
              },
              {
                icon: <Users className="w-8 h-8 text-pink-500" />,
                title: "UX Consulting",
                description:
                  "I specialize in enhancing user experiences by designing intuitive and user-friendly interfaces.",
              },
              {
                icon: <PenTool className="w-8 h-8 text-pink-500" />,
                title: "UX Consulting",
                description:
                  "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-200"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <p className="text-center text-pink-500 mb-2">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">My Portfolio</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={item.image}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.category}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-center mb-2 text-pink-500">RESUME</h2>
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">
            My Experience
          </h1>
          <div className="text-gray-600 flex flex-col items-center gap-4 dark:text-gray-300">
            <p className="text-center">
              🔹 <b>Senior Software Engineer | Digital Nexus Solutions (2022 -
              Present)</b>
            </p>
            <p className="text-center">
              Developed high-performance web applications for Fortune 500
              companies. Led a team of developers to build scalable SaaS
              solutions. Integrated AI-based features to enhance user
              experience.
            </p>
            <p className="text-center">
              🔹 <b>UI/UX Designer &amp; Frontend Developer | Creatix Studios
              (2020 - 2022)</b>
            </p>
            <p className="text-center">
              Designed and developed interactive UI components for various web
              applications. Conducted user research and A/B testing to improve
              usability. Created branding and design strategies for multiple
              startups.
            </p>
            <p className="text-center">
              🔹 <b>Freelance Developer &amp; Consultant (2018 - Present)</b>
            </p>
            <p className="text-center">
              Worked with over 50 clients worldwide on web and mobile app
              development. Specialized in business automation, AI tools, and
              e-commerce solutions. Provided SEO optimization and digital
              marketing strategies for startups.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-center mb-2 text-pink-500">CLIENTS</h2>
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">My Clients</h1>
          <div className="relative h-48 overflow-hidden">
            <div
              className="absolute w-full h-full flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-6 py-4 text-gray-600 text-center rounded-lg shadow-md bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={testimonial.image}
                    alt={`Profile of ${testimonial.author}`}
                    className="w-16 h-16 rounded-full mx-auto mb-2 border border-gray-200 dark:border-gray-700"
                  />
                  <p className="italic text-xl mb-2">"{testimonial.text}"</p>
                  <p className="font-bold dark:text-white">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-center mb-2 text-pink-500">PRICING</h2>
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">My Pricing</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingData.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-200"
              >
                <h3 className="text-xl font-bold mb-4 text-pink-500 text-center dark:text-pink-500">
                  {category.title}
                </h3>
                {category.plans.map((plan, planIndex) => (
                  <div key={planIndex} className="mb-4 text-center border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold dark:text-white">{plan.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {plan.price} - {plan.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600 dark:text-gray-300">
            📩 Custom projects? Let's talk! Message me for a personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-center mb-2 text-pink-500">CONTACT</h2>
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Contact Me</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:border-r border-gray-200 dark:border-gray-700 pr-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Get in Touch</h3>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2 text-pink-500" />
                <span className="text-gray-700 dark:text-gray-300">456 Innovation Street, Silicon Valley, CA, 94025</span>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-2 text-pink-500" />
                <a href="mailto:emily.carter.dev@example.com" className="text-pink-500 hover:underline dark:text-gray-300">
                  emily.carter.dev@example.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 mr-2 text-pink-500" />
                <a href="tel:+15557891234" className="text-pink-500 hover:underline dark:text-gray-300">
                  +1 (555) 789-1234
                </a>
              </div>
              <div className="flex gap-8">
                <a
                  href="https://www.instagram.com/emilydev_creates"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <Instagram className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com/emilydev_creates"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                    Message
                  </label>
                  <textarea                    id="message"
                    rows={4}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 focus:outline-none focus:shadow-outline border border-gray-200 dark:border-gray-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-pink-600 focus:outline-none border border-gray-200 dark:border-gray-700"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}      {toast && (
        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg ${toast === 'Please fill in all fields.' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
