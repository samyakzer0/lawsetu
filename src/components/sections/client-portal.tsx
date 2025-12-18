"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  FileText, 
  MessageSquare, 
  Briefcase, 
  Gavel, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Search,
  Bell,
  ChevronDown,
  Download,
  Filter
} from 'lucide-react';

export default function ClientPortalSection() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                label="Active Cases" 
                value="12" 
                trend="+2 this month" 
                trendUp={true}
              />
              <StatCard 
                label="Pending Actions" 
                value="5" 
                trend="3 urgent" 
                trendUp={false}
                highlight
              />
              <StatCard 
                label="Next Hearing" 
                value="Tomorrow" 
                subValue="10:30 AM"
              />
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h4 className="font-serif font-bold text-slate-900">Recent Case Activity</h4>
                <button className="text-sm font-medium text-amber-600 hover:text-amber-700">View All</button>
              </div>
              <div className="divide-y divide-slate-100">
                <ActivityItem 
                  title="Hearing Scheduled"
                  description="Case #452 - Property Dispute vs State"
                  time="2 hours ago"
                  icon={CalendarIcon}
                  iconColor="text-amber-600"
                  iconBg="bg-amber-50"
                />
                <ActivityItem 
                  title="New Document Uploaded"
                  description="Affidavit for Case #102"
                  time="5 hours ago"
                  icon={FileText}
                  iconColor="text-blue-600"
                  iconBg="bg-blue-50"
                />
                <ActivityItem 
                  title="Message from Advocate"
                  description="Please review the attached draft."
                  time="Yesterday"
                  icon={MessageSquare}
                  iconColor="text-emerald-600"
                  iconBg="bg-emerald-50"
                />
              </div>
            </div>
          </div>
        );
      case "My Cases":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search cases..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 w-full md:w-auto justify-center">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-100">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 md:p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Active</span>
                          <span className="text-xs text-slate-500">Case #{450 + i}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          Sharma vs. State of Maharashtra
                        </h4>
                      </div>
                      <span className="text-sm font-medium text-slate-900">₹ 25,000</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Gavel className="w-4 h-4" />
                        <span>High Court</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CalendarIcon className="w-4 h-4" />
                        <span>Next: 24 Jan</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Calendar":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Upcoming Hearings</h3>
              <p className="text-slate-500 mb-6">You have 3 hearings scheduled for this month.</p>
              <div className="space-y-3 text-left">
                {[
                  { date: "18 Dec", title: "Case #452 Hearing", time: "10:30 AM" },
                  { date: "24 Dec", title: "Case #455 Filing", time: "02:00 PM" },
                  { date: "05 Jan", title: "Client Meeting", time: "11:00 AM" }
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="bg-white px-3 py-1.5 rounded border border-slate-200 text-center min-w-[60px]">
                      <div className="text-xs font-bold text-slate-500 uppercase">{event.date.split(' ')[1]}</div>
                      <div className="text-lg font-bold text-slate-900">{event.date.split(' ')[0]}</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{event.title}</div>
                      <div className="text-xs text-slate-500">{event.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Documents":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Affidavit.pdf', 'Court Order.pdf', 'Evidence_v1.jpg', 'Legal_Notice.docx'].map((doc, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
                      <FileText className="w-5 h-5 text-slate-500 group-hover:text-amber-600" />
                    </div>
                    <div className="font-medium text-slate-900 truncate mb-1">{doc}</div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>2.4 MB</span>
                      <Download className="w-4 h-4 hover:text-amber-600" />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        );
      case "Messages":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[400px]">
              <div className="flex justify-end">
                <div className="bg-amber-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                  Hello sir, any update on the hearing date?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                  Yes, the next hearing is scheduled for Jan 24th. I've uploaded the notice in the documents tab.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-amber-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                  Thank you! I will check it.
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="w-full px-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative font-sans">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 font-bold text-xs tracking-wider mb-6">
            CLIENT EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Your clients see a <span className="text-amber-600">premium dashboard.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Impress your clients with a branded portal where they can track their
            case progress, view documents, and communicate with you 24/7.
          </p>
        </div>

        {/* Portal Mockup Container */}
        <div className="relative max-w-6xl mx-auto perspective-1000 animate-fade-in-up animate-delay-200">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[650px]">
            
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col">
              <div className="p-4 md:p-6 border-b border-slate-800 flex items-center justify-between md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    L
                  </div>
                  <span className="font-serif font-bold text-white text-lg tracking-wide">LawSetu</span>
                </div>
                {/* Mobile User Profile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">RK</div>
                </div>
              </div>
              
              <div className="flex-1 p-2 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
                <div onClick={() => setActiveTab("Overview")} className="min-w-[120px] md:min-w-0">
                  <SidebarItem icon={LayoutDashboard} label="Overview" active={activeTab === "Overview"} />
                </div>
                <div onClick={() => setActiveTab("My Cases")} className="min-w-[120px] md:min-w-0">
                  <SidebarItem icon={Briefcase} label="My Cases" active={activeTab === "My Cases"} count={12} />
                </div>
                <div onClick={() => setActiveTab("Calendar")} className="min-w-[120px] md:min-w-0">
                  <SidebarItem icon={CalendarIcon} label="Calendar" active={activeTab === "Calendar"} />
                </div>
                <div onClick={() => setActiveTab("Documents")} className="min-w-[120px] md:min-w-0">
                  <SidebarItem icon={FileText} label="Documents" active={activeTab === "Documents"} />
                </div>
                <div onClick={() => setActiveTab("Messages")} className="min-w-[120px] md:min-w-0">
                  <SidebarItem icon={MessageSquare} label="Messages" active={activeTab === "Messages"} count={3} />
                </div>
              </div>

              <div className="hidden md:block p-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">
                    RK
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">Rajesh Kumar</div>
                    <div className="text-xs text-slate-500 truncate">Client Account</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-slate-50 flex flex-col min-w-0">
              {/* Top Bar */}
              <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-slate-900">{activeTab}</h3>
                <div className="flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="w-px h-6 bg-slate-200 hidden md:block"></div>
                  <button className="relative text-slate-500 hover:text-slate-700">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
                  </button>
                </div>
              </header>

              {/* Dashboard Content */}
              <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-slate-50">
                {renderContent()}
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
    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group whitespace-nowrap ${
      active 
        ? 'bg-amber-500/10 text-amber-500 font-medium' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
    }`}>
      <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
      <span className="text-sm">{label}</span>
      {count && (
        <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-500 px-1.5 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </button>
  );
}

function StatCard({ label, value, subValue, trend, trendUp, highlight }: { label: string, value: string, subValue?: string, trend?: string, trendUp?: boolean, highlight?: boolean }) {
  return (
    <div className={`p-6 rounded-xl border transition-all ${highlight ? 'bg-amber-50 border-amber-100' : 'bg-white border-slate-200'}`}>
      <p className={`text-sm font-medium mb-2 ${highlight ? 'text-amber-800' : 'text-slate-500'}`}>{label}</p>
      <div className="flex items-baseline gap-2">
        <h4 className={`text-3xl font-serif font-bold ${highlight ? 'text-amber-900' : 'text-slate-900'}`}>{value}</h4>
        {subValue && <span className="text-sm text-slate-500 font-medium">{subValue}</span>}
      </div>
      {trend && (
        <div className={`mt-2 text-xs font-medium flex items-center gap-1 ${trendUp ? 'text-emerald-600' : 'text-amber-600'}`}>
          {trend}
        </div>
      )}
    </div>
  );
}

function ActivityItem({ title, description, time, icon: Icon, iconColor, iconBg }: { title: string, description: string, time: string, icon: any, iconColor: string, iconBg: string }) {
  return (
    <div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
      <div className={`w-10 h-10 rounded-full ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <h5 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{title}</h5>
          <span className="text-xs text-slate-400 whitespace-nowrap">{time}</span>
        </div>
        <p className="text-sm text-slate-500 truncate">{description}</p>
      </div>
    </div>
  );
}