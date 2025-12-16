import React from 'react';
import { 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  FileText, 
  MessageSquare, 
  Briefcase, 
  Gavel, 
  CheckCircle2, 
  AlertCircle,
  Clock
} from 'lucide-react';

export default function ClientPortalSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs tracking-wider mb-6">
            CLIENT EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Your clients see a <span className="text-blue-600">premium dashboard.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Impress your clients with a branded portal where they can track their
            case progress, view documents, and communicate with you 24/7.
          </p>
        </div>

        {/* Portal Mockup Container */}
        <div className="relative max-w-5xl mx-auto perspective-1000 animate-fade-in-up animate-delay-200">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all hover:translate-y-[-4px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col md:min-h-[600px]">
            
            {/* Dark Top Bar */}
            <div className="bg-slate-900 px-4 md:px-6 py-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-base md:text-xl shadow-lg shadow-blue-900/50">
                  A
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base leading-tight">Advocate Priya Sharma</div>
                  <div className="text-xs text-slate-400 mt-0.5">Client Portal</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-medium text-slate-300">Online</span>
              </div>
            </div>

            {/* Portal Body */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-20 md:w-64 bg-white border-r border-slate-100 flex-shrink-0 flex flex-col pt-6 pb-4">
                <nav className="space-y-1 px-3">
                  <SidebarItem 
                    icon={LayoutDashboard} 
                    label="My Cases" 
                    active 
                  />
                  <SidebarItem 
                    icon={CalendarIcon} 
                    label="Calendar" 
                  />
                  <SidebarItem 
                    icon={FileText} 
                    label="Documents" 
                  />
                  <SidebarItem 
                    icon={MessageSquare} 
                    label="Messages" 
                    count={2}
                  />
                </nav>
                <div className="mt-auto px-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hidden md:block">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Need Help?</p>
                    <p className="text-[10px] text-slate-500 mb-2">Contact support team anytime.</p>
                    <button className="text-[10px] font-bold text-blue-600 hover:underline">Chat Support</button>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-slate-50/50 p-4 md:p-8 overflow-y-auto w-full">
                
                {/* Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-8">
                  <MetricCard 
                    icon={Briefcase} 
                    value="12" 
                    label="Active Cases" 
                    iconColor="text-blue-600" 
                    iconBg="bg-blue-100" 
                  />
                  <MetricCard 
                    icon={Gavel} 
                    value="3" 
                    label="Upcoming Hearings" 
                    iconColor="text-amber-600" 
                    iconBg="bg-amber-100" 
                  />
                  <MetricCard 
                    icon={CheckCircle2} 
                    value="45" 
                    label="Completed" 
                    iconColor="text-emerald-600" 
                    iconBg="bg-emerald-100" 
                  />
                  <MetricCard 
                    icon={AlertCircle} 
                    value="7" 
                    label="Pending Actions" 
                    iconColor="text-red-600" 
                    iconBg="bg-red-100" 
                  />
                </div>

                {/* Recent Cases List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-slate-900">Recent Cases</h3>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      View all
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="divide-y divide-slate-100">
                      <CaseItem 
                        id="CL-2024-003"
                        client="Sharma Enterprises"
                        type="Contract Dispute"
                        date="Feb 15, 2024"
                        status="In Progress"
                        statusColor="blue"
                      />
                      <CaseItem 
                        id="CL-2024-002"
                        client="Rajesh Kumar"
                        type="Property Matter"
                        date="Feb 20, 2024"
                        status="Waiting Documents"
                        statusColor="amber"
                      />
                      <CaseItem 
                        id="CL-2024-001"
                        client="ABC Pvt Ltd"
                        type="Labor Dispute"
                        date="Feb 18, 2024"
                        status="In Progress"
                        statusColor="blue"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SidebarItem({ icon: Icon, label, active = false, count }: { icon: any, label: string, active?: boolean, count?: number }) {
  return (
    <button className={`w-full flex items-center md:gap-3 p-3 rounded-lg transition-all duration-200 group ${
      active 
        ? 'bg-blue-50 text-blue-700 font-semibold' 
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
    }`}>
      <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'}`} />
      <span className="hidden md:block text-sm">{label}</span>
      {count && (
        <span className="hidden md:flex ml-auto w-5 h-5 items-center justify-center bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">
          {count}
        </span>
      )}
    </button>
  );
}

function MetricCard({ icon: Icon, value, label, iconColor, iconBg }: { icon: any, value: string, label: string, iconColor: string, iconBg: string }) {
  return (
    <div className="bg-white p-4 md:p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div>
        <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-0.5 md:mb-1">{value}</p>
        <p className="text-xs md:text-sm font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function CaseItem({ id, client, type, date, status, statusColor }: { 
  id: string, 
  client: string, 
  type: string, 
  date: string, 
  status: string, 
  statusColor: 'blue' | 'amber' 
}) {
  const statusStyles = {
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    amber: 'bg-slate-100 text-slate-600 border-slate-200' // Matching the greyish "Waiting Documents" look from screenshot mostly
  };

  const statusStyle = statusColor === 'blue' 
    ? 'bg-blue-50 text-blue-700 border border-blue-100'
    : 'bg-slate-100 text-slate-600 border border-slate-200';

  return (
    <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="font-bold text-slate-900 text-sm md:text-base">{id}</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="hidden sm:inline text-sm font-medium text-slate-600">{client}</span>
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          <span className="text-xs font-medium text-slate-600">{client}</span>
        </div>
        <div className="text-xs text-slate-500 sm:mt-0.5">{type}</div>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <span className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap ${statusStyle}`}>
          {status}
        </span>
        <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-500 transition-colors">
          <Clock className="w-3 h-3" />
          <span className="text-[10px] md:text-xs font-medium">{date}</span>
        </div>
      </div>
    </div>
  );
}