"use client";

import "./app.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Privacy Button */}
      <a 
        href="https://drive.google.com/file/d/1-98FBfrHkKgkGqAKA31wbn8ckNzio-vT/view?usp=sharing" 
        target="_blank"
        className="fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition shadow-lg"
        aria-label="View Privacy Policy"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
        </svg>
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                FH
              </div>
              <span className="text-lg font-bold text-gray-900">FunHouse Digital</span>
            </a>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              <li><a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a></li>
              <li><a href="#who-we-are" className="text-gray-700 hover:text-blue-600 transition">About</a></li>
              <li><a href="#programs" className="text-gray-700 hover:text-blue-600 transition">Programs</a></li>
              <li><a href="#impact" className="text-gray-700 hover:text-blue-600 transition">Impact</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <div className="text-5xl mb-6">🎮</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scaling profitable gaming-powered EdTech across rural Africa
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We aim to build a digitally empowered rural community.
          </p>
          <a href="#programs" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-sm">
            Click to explore <span>→</span>
          </a>
        </div>
      </section>

      {/* AWS Badge Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Backed By Leading Technology Partners</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              FunHouse Digital is an AWS Education Equity Initiative recipient, receiving cloud infrastructure support to scale digital literacy across rural Africa.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-orange-900">AWS Education Equity Initiative</span>
              </div>
              <div className="text-3xl font-bold text-orange-600">AWS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Aya Section */}
      <section id="who-we-are" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Meet Aya: From "Teacher Aya" to AWS-Backed Innovator</h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                  AY
                </div>
                <p className="text-gray-700 font-medium text-lg">Ayabulela Yokwana</p>
                <p className="text-sm text-gray-600">Founder & Teacher Aya</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 text-sm md:text-base">
                Ayabulela Yokwana pioneered gaming-based digital literacy for underserved Africa, achieving zero dropout rates where traditional programs see 30-50% attrition. With AWS Education Equity Initiative backing and R850+ monthly profit per site, he's scaled from R0 to sustainable operations serving 37+ students in Smithfield, Free State.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                His community-integrated model delivers measurable learning outcomes at R17/month per child versus R200+ for conventional EdTech, positioning FunHouse Digital for R15.2M revenue trajectory across underserved markets.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
                Connect with Teacher Aya <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Digital Literacy Education Programs</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Our 3-station rotation methodology delivers micro:bit programming, algorithmic thinking, and typing acceleration through 45-minute assessment-driven sessions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">eSports Education Programs</h3>
                <p className="text-gray-700 text-sm">
                  Engaging eSports education programs that attract youth and build essential digital skills through competitive gameplay and structured learning
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-40 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Citizenship Integration</h3>
                <p className="text-gray-700 text-sm">
                  ICDL-aligned curriculum covering online safety, cyberbullying prevention, and digital ethics through role-playing scenarios.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-40 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Community EdTech Initiatives</h3>
                <p className="text-gray-700 text-sm">
                  Educational gaming curriculum and digital literacy materials available at no cost to support community EdTech initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-12 md:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Work in Action</h2>
            <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto">
              Real impact through our gaming-based digital literacy programs in rural South Africa
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">3</div>
              <div className="text-sm text-blue-100">Schools Served</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-blue-100">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">0%</div>
              <div className="text-sm text-blue-100">Dropout Rate</div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">85%</div>
              <div className="text-sm text-blue-100">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Collaborate to Expand Digital Access
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Join us in bridging the digital divide through innovative gaming-based education.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
              Contact Our Team <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
            <p className="text-base md:text-lg text-gray-700">
              Ready to support rural education technology? Let's discuss how we can work together
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Address</h4>
                    <p className="text-gray-700 text-sm">Smithfield, Free State, South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Phone</h4>
                    <p className="text-gray-700 text-sm">+27 82 416 3538</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Email</h4>
                    <p className="text-gray-700 text-sm">newhousenm@protonmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-3">
                  <a href="https://www.instagram.com/funhouse_digital/" target="_blank" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/funhouse-digital" target="_blank" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <form className="space-y-3">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2focus:ring-blue-600"
                  />
                </div>
                <div>
                  <select 
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="" disabled selected>I am interested in...</option>
                    <option value="funding">Youth Development Funding</option>
                    <option value="school">School Partnership Programs</option>
                    <option value="sponsor">Corporate Social Investment</option>
                    <option value="other">Other EdTech Inquiry</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your needs or partnership interests" 
                    required
                    rows={3}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm"
                >
                  Send Message <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  FH
                </div>
                <span className="text-lg font-bold text-white">FunHouse Digital</span>
              </div>
              <p className="text-xs leading-relaxed">
                Bridging the digital divide in rural South Africa through innovative gaming-based digital literacy education programs and community EdTech initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">Quick Links</h3>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#who-we-are" className="hover:text-white transition">Who We Are</a></li>
                <li><a href="#programs" className="hover:text-white transition">Our Programs</a></li>
                <li><a href="#impact" className="hover:text-white transition">Our Work</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 text-sm">EdTech Programs</h3>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#programs" className="hover:text-white transition">Youth Development Funding</a></li>
                <li><a href="#programs" className="hover:text-white transition">School Technology Programs</a></li>
                <li><a href="#programs" className="hover:text-white transition">Community Gaming Centers</a></li>
                <li><a href="#programs" className="hover:text-white transition">eSports Education</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            <p>&copy; 2025 FunHouse Digital. All Rights Reserved. | Gaming-based digital literacy education for rural South Africa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
