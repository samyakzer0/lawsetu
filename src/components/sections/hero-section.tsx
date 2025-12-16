"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, Users, FileText, MessageCircle, Video, Phone, MoreVertical, Paperclip, Mic, Camera, ArrowLeft } from 'lucide-react';

// --- Sub-components for WhatsApp Mockup ---

function BlueTicks() {
  return (
    <div className="flex -space-x-[3px]">
      <svg viewBox="0 0 16 11" className="w-[11px] h-[7px] text-[#53bdeb] fill-current">
        <path d="M11.5 0L4.5 7.5L1.5 4.5L0 6L4.5 10.5L13 1.5L11.5 0Z" />
      </svg>
      <svg viewBox="0 0 16 11" className="w-[11px] h-[7px] text-[#53bdeb] fill-current">
        <path d="M11.5 0L4.5 7.5L1.5 4.5L0 6L4.5 10.5L13 1.5L11.5 0Z" />
      </svg>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-1 p-2 items-center">
      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
    </div>
  );
}

// Data types for chat
type Message = {
  id: string;
  sender: 'ai' | 'user';
  type: 'text' | 'file';
  content: string;
  subText?: string; // For file size etc.
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
};

const INITIAL_MESSAGES: Message[] = [];

export default function HeroSection() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState("Online");

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Orchestrate the Chat Sequence
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    const addMessage = (msg: Message) => {
      setMessages(prev => [...prev, msg]);
    };

    const updateStatus = (id: string, status: Message['status']) => {
      setMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
    };

    // 1. Initial AI Message (0.5s)
    timeouts.push(setTimeout(() => {
      addMessage({
        id: 'm1',
        sender: 'ai',
        type: 'text',
        content: '👋 Hello Advocate! Hearing for Case #431 is tomorrow at 10:30 AM.',
        timestamp: '10:30 AM',
        status: 'read'
      });
    }, 500));

    // 2. User Message: "Show me the case summary" (1.8s)
    timeouts.push(setTimeout(() => {
      addMessage({
        id: 'm2',
        sender: 'user',
        type: 'text',
        content: 'Show me the case summary',
        timestamp: '10:31 AM',
        status: 'sent'
      });
    }, 1800));

    // 2a. Message Delivered (2.3s)
    timeouts.push(setTimeout(() => updateStatus('m2', 'delivered'), 2300));
    // 2b. Message Read (2.8s)
    timeouts.push(setTimeout(() => updateStatus('m2', 'read'), 2800));

    // 3. AI Typing... (3.0s)
    timeouts.push(setTimeout(() => {
      setIsTyping(true);
      setOnlineStatus("typing...");
    }, 3000));

    // 4. AI Sends File (4.5s)
    timeouts.push(setTimeout(() => {
      setIsTyping(false);
      setOnlineStatus("Online");
      addMessage({
        id: 'm3',
        sender: 'ai',
        type: 'file',
        content: 'Case 431- Summary.pdf',
        subText: '12 Pages • 1.4 MB • PDF',
        timestamp: '10:31 AM',
        status: 'read'
      });
    }, 4500));

    // 5. User Message: "Status of case?" (6.0s)
    timeouts.push(setTimeout(() => {
      addMessage({
        id: 'm4',
        sender: 'user',
        type: 'text',
        content: 'Status of case?',
        timestamp: '10:32 AM',
        status: 'sent'
      });
    }, 6000));

    // 5a. Message Delivered (6.5s)
    timeouts.push(setTimeout(() => updateStatus('m4', 'delivered'), 6500));
    // 5b. Message Read (7.0s)
    timeouts.push(setTimeout(() => updateStatus('m4', 'read'), 7000));

    // 6. AI Typing... (7.5s)
    timeouts.push(setTimeout(() => {
      setIsTyping(true);
      setOnlineStatus("typing...");
    }, 7500));

    // 7. AI Final Response (9.5s)
    timeouts.push(setTimeout(() => {
      setIsTyping(false);
      setOnlineStatus("Online");
      addMessage({
        id: 'm5',
        sender: 'ai',
        type: 'text',
        content: 'Current status: 2nd Hearing scheduled. Next date: 18 Dec.',
        timestamp: '10:32 AM',
        status: 'read'
      });
    }, 9500));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-slate-50 font-sans">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[128px] animate-pulse opacity-60" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100 rounded-full blur-[128px] animate-pulse opacity-60" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="space-y-8 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-bold uppercase tracking-wider shadow-sm animate-[fadeInUp_0.5s_ease-out_forwards]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Live: eCourts Sync V2.0
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] animate-[fadeInUp_0.5s_ease-out_0.1s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
            Your Entire Firm. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Now on WhatsApp.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed animate-[fadeInUp_0.5s_ease-out_0.2s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
            The world's first AI-powered Legal OS. Import cases from eCourts instantly, send invoices via chat, and browse new leads in our premium marketplace.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.5s_ease-out_0.3s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <button className="group relative bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-slate-900/20 hover:scale-105 active:scale-95 duration-200">
              For Lawyers: Start Trial
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-lg text-slate-700 border border-slate-300 bg-white hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-sm hover:scale-105 active:scale-95 duration-200">
              <Search className="w-5 h-5 text-amber-500" strokeWidth={3} />
              For Clients: Find Lawyer
            </button>
          </div>

          {/* Trust/Social Proof */}
          <div className="flex items-center gap-4 text-sm text-slate-500 pt-4 animate-[fadeInUp_0.5s_ease-out_0.4s_forwards] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden shadow-sm relative">
                  <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-medium text-slate-900">Trusted by 2,500+ Advocates</p>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mockups - 3D Scene */}
        <div className="relative h-[600px] lg:h-[900px] w-full block perspective-[2500px] animate-[fadeInUp_0.7s_ease-out_0.2s_forwards] opacity-0 mt-0 lg:-mt-20 lg:-mr-20" style={{ animationFillMode: 'forwards' }}>

          {/* 3D Group Container */}
          <div className="relative w-full h-full transform-style-3d rotate-y-[-10deg] lg:rotate-y-[-25deg] rotate-x-[10deg] lg:rotate-x-[15deg] scale-[0.5] sm:scale-[0.6] lg:scale-[0.85] hover:rotate-y-[-15deg] hover:rotate-x-[10deg] transition-transform duration-1000 ease-out origin-center">

            {/* Phone Mockup */}
            <div className="absolute top-[5%] left-[15%] w-[330px] h-[660px] bg-slate-900 rounded-[50px] border-[10px] border-slate-900 shadow-xl z-20 overflow-hidden ring-1 ring-white/10 transform-style-3d translate-y-[-50px] translate-z-[40px]">
              {/* Side Buttons & Depth Simulation */}
              <div className="absolute right-[-12px] top-[120px] w-[4px] h-[60px] bg-slate-800 rounded-r-md"></div>
              <div className="absolute left-[-12px] top-[100px] w-[4px] h-[40px] bg-slate-800 rounded-l-md"></div>
              <div className="absolute left-[-12px] top-[160px] w-[4px] h-[90px] bg-slate-800 rounded-l-md"></div>

              {/* Notch/Top Bar */}
              <div className="w-full h-full bg-[#E4DDD6] relative flex flex-col rounded-[40px] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239CA3AF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}></div>

                {/* Header */}
                <div className="h-[80px] bg-[#008069] flex items-end p-3 pb-3 gap-2 shadow-sm z-10 text-white rounded-t-[35px]">
                  <button className="p-1">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-bold text-[#008069] text-sm shrink-0">LS</div>
                  <div className="flex-1 min-w-0 pb-0.5">
                    <div className="font-semibold text-[15px] leading-tight truncate">LawSetu AI</div>
                    <div className="text-white/80 text-[11px] truncate">{onlineStatus}</div>
                  </div>
                  <div className="flex gap-3 pr-1 pb-1">
                    <Video className="w-5 h-5" />
                    <Phone className="w-5 h-5" />
                    <MoreVertical className="w-5 h-5" />
                  </div>
                </div>

                {/* Chat Area - Scrollbar Hidden */}
                <div ref={scrollRef} className="flex-1 p-3 space-y-3 overflow-y-auto relative scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Day Separator */}
                  <div className="flex justify-center my-4 opacity-0 animate-[fadeIn_0.5s_forwards]">
                    <span className="bg-[#E1F3FB] text-slate-600 text-[10px] px-2 py-1 rounded-md shadow-sm uppercase font-medium">Today</span>
                  </div>

                  {/* Encryption Note */}
                  <div className="flex justify-center text-center opacity-0 animate-[fadeIn_0.5s_0.2s_forwards] mb-4">
                    <p className="text-[10px] text-[#5E5E5E] bg-[#FFEC8B] px-3 py-1.5 rounded-lg shadow-sm max-w-[90%]">
                      🔒 Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
                    </p>
                  </div>

                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeInUp_0.3s_ease-out_forwards]`}
                    >
                      <div
                        className={`
                              max-w-[85%] rounded-lg p-[6px] px-2.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative text-[13.5px] leading-[19px]
                              ${msg.sender === 'user' ? 'bg-[#D9FDD3] rounded-tr-none' : 'bg-white rounded-tl-none'}
                            `}
                      >
                        {/* Corner Triangles for speech bubble effect */}
                        {msg.sender === 'user' ? (
                          <div className="absolute top-0 -right-[8px] w-0 h-0 border-[8px] border-l-[#D9FDD3] border-t-transparent border-b-transparent border-r-transparent transform rotate-[0deg]"></div>
                        ) : (
                          <div className="absolute top-0 -left-[8px] w-0 h-0 border-[8px] border-r-white border-t-transparent border-b-transparent border-l-transparent transform rotate-[0deg]"></div>
                        )}

                        {msg.sender === 'ai' && (
                          <div className="text-[11px] font-bold text-[#E55934] mb-1">LawSetu AI</div>
                        )}

                        {msg.type === 'file' ? (
                          <div className="flex items-center gap-3 bg-black/5 p-2 rounded-md mb-1 cursor-pointer hover:bg-black/10 transition-colors">
                            <div className="w-8 h-10 bg-[#FF5757] rounded flex items-center justify-center shrink-0">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div className="min-w-0 overflow-hidden">
                              <div className="truncate font-medium text-slate-800">{msg.content}</div>
                              <div className="text-[10px] text-slate-500">{msg.subText}</div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-slate-900 whitespace-pre-wrap">{msg.content}</div>
                        )}

                        <div className={`flex items-end justify-end gap-1 mt-1 ${msg.type === 'file' ? '' : '-mb-1'}`}>
                          <span className="text-[10px] text-slate-500 min-w-[45px] text-right">{msg.timestamp}</span>
                          {msg.sender === 'user' && (
                            <div className="mb-[3px]">
                              {msg.status === 'sent' && <span className="text-slate-400">✓</span>}
                              {msg.status === 'delivered' && <span className="text-slate-400 font-bold">✓✓</span>}
                              {msg.status === 'read' && <BlueTicks />}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start animate-[fadeIn_0.2s_ease-out]">
                      <div className="bg-white rounded-lg rounded-tl-none p-2 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                        <div className="absolute top-0 -left-[8px] w-0 h-0 border-[8px] border-r-white border-t-transparent border-b-transparent border-l-transparent"></div>
                        <TypingIndicator />
                      </div>
                    </div>
                  )}

                  {/* Spacer for bottom */}
                  <div className="h-2"></div>
                </div>

                {/* Input Bar */}
                <div className="min-h-[70px] bg-[#F0F2F5] px-3 py-3 flex items-center gap-2 z-10 rounded-b-[35px]">
                  <div className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-full cursor-pointer transition-colors">
                    <span className="text-xl leading-none">☺</span>
                  </div>
                  <div className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-full cursor-pointer transition-colors">
                    <Paperclip className="w-5 h-5 rotate-[-45deg]" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg min-h-[40px] px-3 flex items-center text-slate-400 text-[15px] shadow-sm">
                    Type a message
                  </div>
                  {messages.length < 5 ? (
                    <div className="p-3 bg-[#008069] rounded-full text-white shadow-sm hover:bg-[#006e5a] transition-colors cursor-pointer">
                      <Mic className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="p-3 bg-[#008069] rounded-full text-white shadow-sm hover:bg-[#006e5a] transition-colors cursor-pointer">
                      <ArrowLeft className="w-5 h-5 rotate-180" /> {/* Send Icon substitute */}
                    </div>
                  )}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-20"></div>
              </div>
            </div>

            {/* Gavel Block (Wooden Base - Stacked Cylinder Effect) */}
            <div className="absolute top-[440px] left-[15%] -ml-[85px] w-[500px] h-[500px] transform-style-3d rotate-x-[90deg] translate-z-[40px] pointer-events-none">
              {/* Shadow */}
              <div className="absolute inset-0 rounded-full bg-black/40 blur-[40px] transform translate-y-[20px] translate-z-[-10px]"></div>

              <div className="w-full h-full transform-style-3d animate-[spin_20s_linear_infinite]">
                {/* Cylinder Stack for Depth */}
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full bg-[#5D4037] border border-[#4E342E]"
                    style={{
                      transform: `translateZ(${i * 2}px)`,
                      background: 'linear-gradient(to bottom right, #5D4037, #4E342E)'
                    }}
                  ></div>
                ))}

                {/* Top Face */}
                <div className="absolute inset-0 rounded-full bg-[#8B4513] border-[2px] border-[#723B10] overflow-hidden"
                  style={{
                    transform: 'translateZ(32px)',
                    background: 'radial-gradient(circle at 30% 30%, #A0522D, #8B4513)'
                  }}>
                  {/* Wood Grain Rings */}
                  <div className="absolute inset-0 rounded-full border-[20px] border-[#723B10]/20 scale-[0.9]"></div>
                  <div className="absolute inset-0 rounded-full border-[20px] border-[#723B10]/20 scale-[0.7]"></div>
                  <div className="absolute inset-0 rounded-full border-[20px] border-[#723B10]/20 scale-[0.5]"></div>
                  <div className="absolute inset-0 rounded-full border-[20px] border-[#723B10]/20 scale-[0.3]"></div>

                  {/* Texture Overlay */}
                  <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

                  {/* Shiny Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 rounded-full"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}