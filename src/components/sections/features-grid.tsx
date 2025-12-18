import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Users, 
  Search, 
  Video, 
  ArrowRight,
  Zap,
  Scale,
  Gavel,
  FileSearch,
  FilePenLine
} from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      title: "Smart Drafting",
      description: "Generate legal documents in seconds using AI. From notices to contracts, all templates comply with Indian law.",
      icon: <FilePenLine className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/30"
    },
    {
      title: "AI Legal Review",
      description: "Upload any document and get instant analysis. Identifies risks, loopholes, and suggests improvements.",
      icon: <FileSearch className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-purple-600",
      shadow: "shadow-purple-500/30"
    },
    {
      title: "Smart Calendar",
      description: "Never miss a hearing again. Auto-sync with eCourts and get WhatsApp reminders 24 hours before.",
      icon: <Calendar className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-orange-600",
      shadow: "shadow-orange-500/30"
    },
    {
      title: "Team Management",
      description: "Collaborate with juniors and clerks. Assign tasks, share case files, and track progress in real-time.",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-emerald-600",
      shadow: "shadow-emerald-500/30"
    },
    {
      title: "AI Legal Research",
      description: "Ask questions in plain English. Get relevant case laws, precedents, and legal principles instantly.",
      icon: <Search className="w-6 h-6 text-white" />,
      gradient: "from-rose-500 to-rose-600",
      shadow: "shadow-rose-500/30"
    },
    {
      title: "Video Consultations",
      description: "Meet clients virtually with built-in video calling. Record sessions and auto-generate meeting notes.",
      icon: <Video className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-cyan-600",
      shadow: "shadow-cyan-500/30"
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white border border-slate-200 shadow-sm">
            <Zap className="w-4 h-4 text-amber-500 mr-2" />
            <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Everything you need to run a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                modern law practice.
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100/50 -z-0 -rotate-1"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Built specifically for Indian lawyers, with features that actually
            make your work faster and more profitable.
          </p>
        </div>

        {/* Features Grid with Ripple Blur Effect */}
        <div className="group/grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                relative p-8 bg-white rounded-2xl border border-slate-200 
                transition-all duration-500 ease-out
                hover:z-10 hover:scale-105 hover:shadow-2xl hover:border-transparent
                group-hover/grid:blur-[2px] group-hover/grid:scale-[0.98] group-hover/grid:opacity-50
                hover:!blur-none hover:!scale-105 hover:!opacity-100
                flex flex-col items-start overflow-hidden
              "
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`} />
              
              <div
                className={`
                  w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} 
                  flex items-center justify-center mb-6 
                  shadow-lg ${feature.shadow}
                  group-hover:scale-110 transition-transform duration-500
                `}
              >
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base relative z-10">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-[0.03] rounded-bl-[100px] transition-all duration-500 group-hover:scale-150`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-4">
          <p className="text-slate-500 font-medium">
            And 40+ more features to explore...
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-900/20 group">
            Explore All Features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Icon Components
function FilePenLineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function FileSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
      <path d="m9 18-1.5-1.5" />
      <circle cx="5" cy="14" r="3" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}