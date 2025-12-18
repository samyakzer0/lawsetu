"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, Download, FileText, Scale, Shield, AlertCircle } from "lucide-react";

export default function ECourtsIntegration() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"idle" | "typing" | "searching" | "found">("idle");

  const targetCNR = "DLCT01-012345-2024";

  useEffect(() => {
    if (isInView && status === "idle") {
      const startTyping = async () => {
        // Wait a bit before starting
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        setStatus("typing");
        
        // Type effect
        for (let i = 0; i <= targetCNR.length; i++) {
          setInputValue(targetCNR.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 50));
        }

        // Wait before "clicking" import
        await new Promise((resolve) => setTimeout(resolve, 400));
        setStatus("searching");

        // Simulate search delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setStatus("found");
      };

      startTyping();
    }
  }, [isInView, status]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-flex px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              eCourts Integration
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-[1.15]">
              Import all your cases <br />
              <span className="text-emerald-600">in 60 seconds.</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Connect your eCourts account once and automatically sync all case details, hearing dates, and orders. Never manually enter case data again.
            </p>

            <ul className="space-y-5">
              {[
                "Auto-fetch case status and next hearing dates",
                "Download orders and judgments automatically",
                "Real-time notifications for case updates",
                "Works with all High Courts and District Courts"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-start gap-4 mt-8">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-blue-50 shrink-0">
                <Shield className="text-amber-500 w-5 h-5" />
              </div>
              <div className="text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900">Secure & Compliant:</span> We use official eCourts APIs with 256-bit encryption. Your credentials are never stored.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mockup */}
          <div className="flex flex-col gap-6" ref={containerRef}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 relative overflow-hidden min-h-[400px] flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Try Live Import</h3>
                <p className="text-slate-500 text-sm mb-8">Watch the automated import process in action</p>
                
                <div className="space-y-6 flex-1">
                  <div className="space-y-2">
                    <label htmlFor="cnr-input" className="block text-sm font-semibold text-slate-700">
                      CNR Number
                    </label>
                    <div className="relative">
                      <input
                        id="cnr-input"
                        type="text"
                        value={inputValue}
                        readOnly
                        placeholder="Waiting for input..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono text-sm"
                      />
                      {status === "typing" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-5 bg-emerald-500"
                        />
                      )}
                    </div>
                  </div>
                  
                  <button 
                    className={`w-full font-bold py-3.5 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group relative overflow-hidden ${
                      status === "searching" || status === "found"
                        ? "bg-emerald-500 text-white shadow-emerald-400/30"
                        : "bg-emerald-400 text-white shadow-emerald-400/20"
                    }`}
                  >
                    {status === "searching" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Fetching Case Details...</span>
                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-emerald-200/50"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </>
                    ) : status === "found" ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Import Successful</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        <span>Auto Import from eCourts</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence mode="wait">
                    {status === "found" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-100 rounded-md">
                              <Scale className="w-4 h-4 text-emerald-700" />
                            </div>
                            <div>
                              <div className="text-xs text-slate-500 font-medium">Case Number</div>
                              <div className="text-sm font-bold text-slate-900">CS/452/2024</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase tracking-wide">
                              Active
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Petitioner</span>
                            <span className="font-medium text-slate-900">Rajesh Kumar & Ors.</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Respondent</span>
                            <span className="font-medium text-slate-900">State of Delhi</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Next Hearing</span>
                            <span className="font-medium text-amber-600">24 Jan, 2025</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {status !== "found" && (
                    <motion.p 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-xs text-slate-400 pt-2"
                    >
                      This is a demo. Real imports connect to official eCourts servers.
                    </motion.p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">50K+</div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Cases Synced</div>
              </div>
              <div className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">2.5K</div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Lawyers</div>
              </div>
              <div className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">99.9%</div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}