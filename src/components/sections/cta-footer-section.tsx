"use client";

import { GavelModel } from "@/components/ui/gavel-model";

export default function CTAFooterSection() {
  return (
    <footer className="bg-black text-white font-sans">
      {/* CTA Section */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
            <div className="max-w-2xl">
                <h2 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-6 text-white flex flex-col gap-6">
                    <span>Ready to</span>
                    <span className="text-orange-500">Transform</span>
                    <span>your Legal</span>
                    <span>Practice?</span>
                  </h2>
              <p className="text-neutral-400 text-lg md:text-xl max-w-xl leading-relaxed">
                Subscribe today. No credit card required. Import your cases from eCourts in 60 seconds.
              </p>
            </div>

            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px]">
              <GavelModel />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-black font-black text-base uppercase tracking-wider transition-all duration-300 flex items-center gap-3 group rounded-full">
              Start For Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="h-14 px-8 border-2 border-white text-white font-black text-base uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-full">
              Book a Demo
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 border-t border-neutral-800">
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">2,500+</div>
              <div className="text-neutral-500 font-medium text-sm uppercase tracking-wider mt-2">Active Lawyers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">50K+</div>
              <div className="text-neutral-500 font-medium text-sm uppercase tracking-wider mt-2">Cases Managed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">₹45Cr+</div>
              <div className="text-neutral-500 font-medium text-sm uppercase tracking-wider mt-2">Revenue Tracked</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">4.9/5</div>
              <div className="text-neutral-500 font-medium text-sm uppercase tracking-wider mt-2">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-neutral-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Logo & Copyright */}
                <div className="space-y-10 -ml-12">
                  <img 
                    src="/logo.png" 
                    alt="LawSetu"
                    className="h-30 w-auto brightness-0 invert"
                  />
                <p className="text-neutral-500 text-sm pl-16">
                  © 2025 LawSetu AI Pvt. Ltd. All rights reserved.
                </p>
              </div>

            {/* Links */}
            <nav className="flex flex-col gap-4">
              <a href="#" className="group flex items-center gap-3 text-white font-black text-xl uppercase tracking-wider hover:text-orange-500 transition-colors">
                LINKEDIN
                <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="group flex items-center gap-3 text-white font-black text-xl uppercase tracking-wider hover:text-orange-500 transition-colors">
                INSTAGRAM
                <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="group flex items-center gap-3 text-white font-black text-xl uppercase tracking-wider hover:text-orange-500 transition-colors">
                TWITTER
                <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:connect@lawsetu.in" className="group flex items-center gap-3 text-white font-black text-xl uppercase tracking-wider hover:text-orange-500 transition-colors">
                EMAIL US
                <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}