export default function ECourtsIntegration() {
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500 w-6 h-6"
                    >
                      <circle cx="12" cy="12" r="10" className="opacity-20" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-start gap-4 mt-8">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-blue-50 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900">Secure & Compliant:</span> We use official eCourts APIs with 256-bit encryption. Your credentials are never stored.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mockup */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Try Live Import</h3>
                <p className="text-slate-500 text-sm mb-8">Enter any CNR number to simulate the import process</p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="cnr-input" className="block text-sm font-semibold text-slate-700">
                      CNR Number
                    </label>
                    <input
                      id="cnr-input"
                      type="text"
                      placeholder="DLCT01-012345-2024"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono text-sm"
                      readOnly
                    />
                  </div>
                  
                  <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30 flex items-center justify-center gap-2 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-y-0.5 transition-transform"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Auto Import from eCourts
                  </button>
                  
                  <p className="text-center text-xs text-slate-400 pt-2">
                    This is a demo. Real imports connect to official eCourts servers.
                  </p>
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