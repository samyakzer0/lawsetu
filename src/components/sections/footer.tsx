import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Smartphone,
  ShieldCheck,
  Globe
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 md:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl font-serif shadow-lg shadow-amber-900/20">
                L
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-wide">
                Law<span className="text-amber-500">Setu</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400">
              India&apos;s first AI-powered Legal OS. Manage your entire practice from WhatsApp—from case management to client invoicing.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Aludiya Complex, Ahead of Truck Union, Ward Number 7, Lalsot, Rajasthan - 303503
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">+91 75681 46969</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:connect@lawsetu.in" className="text-sm hover:text-white transition-colors">
                  connect@lawsetu.in
                </a>
              </div>
            </div>
          </div>

          {/* Spacer Column for Desktop Layout Balance */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-sans">Product</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  WhatsApp OS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-sans">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors text-sm font-medium">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500 order-2 md:order-1">
              &copy; 2025 LawSetu AI Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-6 order-1 md:order-2">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-900 p-2 rounded-lg hover:bg-slate-800">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-900 p-2 rounded-lg hover:bg-slate-800">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-900 p-2 rounded-lg hover:bg-slate-800">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-900 p-2 rounded-lg hover:bg-slate-800">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3 order-3">
              <div className="border border-slate-800 rounded-full px-4 py-1.5 text-xs font-medium text-slate-400 bg-slate-900/50 hover:border-slate-700 transition-colors cursor-default flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                ISO 27001
              </div>
              <div className="border border-slate-800 rounded-full px-4 py-1.5 text-xs font-medium text-slate-400 bg-slate-900/50 hover:border-slate-700 transition-colors cursor-default flex items-center gap-2">
                 <Globe className="w-3 h-3 text-blue-500" />
                 GDPR Compliant
              </div>
              <div className="border border-slate-800 rounded-full px-4 py-1.5 text-xs font-medium text-slate-400 bg-slate-900/50 hover:border-slate-700 transition-colors cursor-default text-center">
                 SSL Secured
              </div>
            </div>
          </div>
          
          <div className="text-center">
             <p className="text-xs text-slate-600 font-medium">
              Made with <span className="text-red-500 inline-block animate-pulse">❤️</span> in India for Indian Advocates
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}