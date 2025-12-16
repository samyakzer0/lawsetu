export default function MarketplaceLeads() {
  const leads = [
    {
      id: 1,
      name: "Priya Gupta",
      location: "Mumbai",
      caseType: "Divorce Case",
      budget: "₹75,000",
      isNew: true,
    },
    {
      id: 2,
      name: "Amit Verma",
      location: "Bangalore",
      caseType: "Corporate Law",
      budget: "₹1,20,000",
      isNew: true,
    },
    {
      id: 3,
      name: "Sneha Patel",
      location: "Pune",
      caseType: "Criminal Defense",
      budget: "₹90,000",
      isNew: true,
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      location: "Hyderabad",
      caseType: "Labor Dispute",
      budget: "₹60,000",
      isNew: true,
    },
    {
      id: 5,
      name: "Kavita Singh",
      location: "Chennai",
      caseType: "Consumer Rights",
      budget: "₹40,000",
      isNew: true,
    },
    {
      id: 6,
      name: "Rahul Sharma",
      location: "Delhi",
      caseType: "Property Dispute",
      budget: "₹50,000",
      isNew: true,
    },
    {
      id: 7,
      name: "Vikram Reddy",
      location: "Hyderabad",
      caseType: "Family Law",
      budget: "₹55,000",
      isNew: true,
    },
  ];

  const allLeads = [...leads, ...leads];

  return (
    <section className="bg-[#ff8a00] py-20 lg:py-28 font-sans overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        .learn-more {
          position: relative;
          display: inline-block;
          cursor: pointer;
          outline: none;
          border: 0;
          vertical-align: middle;
          text-decoration: none;
          background: transparent;
          padding: 0;
          font-size: inherit;
          font-family: inherit;
          width: 20rem;
          height: auto;
        }

        .learn-more .circle {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: relative;
          display: block;
          margin: 0;
          width: 3rem;
          height: 3rem;
          background: white;
          border-radius: 1.625rem;
        }

        .learn-more .circle .icon {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          background: #ff8a00;
        }

        .learn-more .circle .icon.arrow {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
        }

        .learn-more .circle .icon.arrow::before {
          position: absolute;
          content: "";
          top: -0.25rem;
          right: 0.0625rem;
          width: 0.625rem;
          height: 0.625rem;
          border-top: 0.125rem solid #ff8a00;
          border-right: 0.125rem solid #ff8a00;
          transform: rotate(45deg);
        }

        .learn-more .button-text {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.75rem 0;
          margin: 0 0 0 1.85rem;
          color: white;
          font-weight: 700;
          line-height: 1.6;
          text-align: center;
          text-transform: uppercase;
        }

        .learn-more:hover .circle {
          width: 100%;
        }

        .learn-more:hover .circle .icon.arrow {
          background: #ff8a00;
          transform: translate(1rem, 0);
        }

        .learn-more:hover .button-text {
          color: #ff8a00;
        }
      `}</style>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          {/* Headings */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
            Premium Client Leads—Only ₹499/month
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Get direct access to verified clients actively looking for lawyers in your specialization.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full mb-16 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {allLeads.map((lead, index) => (
            <div
              key={`${lead.id}-${index}`}
              className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Header: Name + New Badge */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#ff8a00] transition-colors line-clamp-1">
                  {lead.name}
                </h3>
                {lead.isNew && (
                  <span className="bg-[#22c55e] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm tracking-wide ml-2">
                    NEW
                  </span>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center text-slate-500 text-xs font-medium mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 mr-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {lead.location}
              </div>

              {/* Case Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-[#ff8a00]"
                    >
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-slate-800 font-bold text-sm">
                      {lead.caseType}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4 px-1">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Budget
                  </span>
                  <span className="text-[#16a34a] font-bold text-lg tracking-tight">
                    {lead.budget}
                  </span>
                </div>

                <button className="w-full py-3 bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Bottom Actions */}
        <div className="flex flex-col items-center gap-5">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow" />
            </span>
            <span className="button-text">Browse 500+ Active Leads</span>
          </button>
          <p className="text-white/80 text-sm font-medium px-4 text-center">
            Join 2,500+ lawyers already growing their practice with LawSetu Marketplace
          </p>
        </div>
      </div>
    </section>
  );
}