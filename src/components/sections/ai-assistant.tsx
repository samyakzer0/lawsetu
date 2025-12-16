import React from 'react';
import { 
  Sparkles, 
  Scale, 
  FileText, 
  PenTool, 
  ScrollText, 
  Send,
  Zap,
  CheckCircle2,
  Globe,
  Gavel
} from 'lucide-react';

export default function AIAssistant() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/50 rounded-full blur-[128px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-[128px] animate-pulse-slow animate-delay-500" />
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 text-purple-600" />
            AI Legal Assistant
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Ask anything. Get instant <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              legal answers.
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our AI is trained on 10+ years of Indian case laws, statutes, and legal precedents. 
            Try it now—no signup required.
          </p>
        </div>

        {/* Main Interface Mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative group transition-transform duration-500 hover:shadow-purple-900/10">
            {/* Header */}
            <div className="h-16 bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-none mb-1">LawSetu AI Assistant</h3>
                  <p className="text-white/80 text-[10px] md:text-xs">Powered by GPT-4 + Indian Legal Database</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-white text-xs font-medium">Online</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 bg-slate-50/50 min-h-[500px] flex flex-col">
              
              {/* Greeting */}
              <div className="mb-6 animate-fade-in-up">
                <span className="text-2xl mr-2">👋</span>
                <span className="text-slate-900 font-semibold text-lg">
                  Hello! I'm your AI legal assistant. I can help you with:
                </span>
              </div>

              {/* Capability Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 animate-fade-in-up animate-delay-100">
                {[
                  { icon: Scale, label: "Case Law Research" },
                  { icon: ScrollText, label: "Statute Interpretation" },
                  { icon: PenTool, label: "Legal Drafting" },
                  { icon: FileText, label: "Precedent Analysis" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/50 border border-purple-100 hover:bg-purple-50 hover:border-purple-200 transition-colors cursor-pointer group/card">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 group-hover/card:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Sample Questions */}
              <div className="space-y-3 mb-8 animate-fade-in-up animate-delay-200">
                <p className="text-sm text-slate-500 font-medium ml-1">Try these sample questions:</p>
                <div className="space-y-2">
                  {[
                    "What are the grounds for divorce under Hindu Marriage Act?",
                    "Explain Section 138 of Negotiable Instruments Act",
                    "What is the limitation period for filing a civil suit?"
                  ].map((question, i) => (
                    <button 
                      key={i}
                      className="w-full text-left p-3 md:px-4 md:py-3 bg-white border border-slate-200 rounded-xl text-slate-600 text-sm hover:border-purple-300 hover:text-purple-700 hover:shadow-sm transition-all duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-auto relative animate-fade-in-up animate-delay-300">
                <input 
                  type="text" 
                  placeholder="Ask any legal question..." 
                  className="w-full pl-5 pr-32 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-slate-700 placeholder-slate-400"
                />
                <div className="absolute right-2 top-2 bottom-2">
                  <button className="h-full px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/20">
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 text-center mt-3">
                  Press Enter to send. This is a demo - real version has memory and context awareness.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow group">
              <div className="mb-3 p-3 bg-orange-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">&lt;2 sec</h4>
              <p className="text-slate-500 text-sm font-medium">Response Time</p>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow group">
              <div className="mb-3 p-3 bg-green-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">95%+</h4>
              <p className="text-slate-500 text-sm font-medium">Accuracy Rate</p>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow group">
              <div className="mb-3 p-3 bg-blue-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">EN + HI</h4>
              <p className="text-slate-500 text-sm font-medium">Languages</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}