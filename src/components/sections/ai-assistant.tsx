"use client"; 

import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  RefreshCw,
  Copy,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  Scale,
  BookOpen,
  Gavel
} from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const SUGGESTED_PROMPTS = [
  "What are the grounds for divorce under Hindu Marriage Act?",
  "Explain the procedure for filing a consumer complaint.",
  "What is the difference between culpable homicide and murder?",
  "Draft a legal notice for a bounced cheque (Section 138)."
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I am LawSetu AI. I'm trained on Indian Penal Code, CrPC, CPC, and case laws. How can I assist you with your legal research today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (query: string) => {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const lower = query.toLowerCase();
    let responseText = "";

    // Simple keyword-based simulation for "Real AI" feel in demo
    if (lower.includes('divorce') && lower.includes('hindu')) {
      responseText = "Under **Section 13 of the Hindu Marriage Act, 1955**, a marriage may be dissolved by a decree of divorce on several grounds. \n\nKey grounds include:\n1. **Adultery**: Voluntary sexual intercourse with any person other than the spouse.\n2. **Cruelty**: Treating the petitioner with cruelty (mental or physical).\n3. **Desertion**: Deserting the petitioner for a continuous period of not less than two years.\n4. **Conversion**: Ceasing to be a Hindu by conversion to another religion.\n\nWould you like me to cite relevant Supreme Court judgments regarding 'Cruelty'?";
    } else if (lower.includes('cheque') || lower.includes('138')) {
      responseText = "A legal notice for a bounced cheque must be sent under **Section 138 of the Negotiable Instruments Act, 1881**.\n\n**Key Requirements:**\n- The notice must be sent within **30 days** of the receipt of information from the bank regarding the return of the cheque as unpaid.\n- The drawer has **15 days** from the receipt of the notice to make the payment.\n- If payment is not made, a complaint can be filed within **one month**.\n\nShall I draft a template notice for you?";
    } else if (lower.includes('fir') || lower.includes('police')) {
      responseText = "Information regarding a cognizable offense is recorded as an **First Information Report (FIR)** under **Section 154 of the CrPC**.\n\nIf the police refuse to register an FIR, you can:\n1. Send the substance of the information to the Superintendent of Police (SP) via post.\n2. File a complaint before the Magistrate under **Section 156(3) CrPC**.\n\nIs this related to a specific incident?";
    } else {
      responseText = "I understand your query regarding \"" + query + "\". \n\nTo provide an accurate legal opinion based on Indian laws, I would need to analyze:\n- The specific statutes applicable (e.g., IPC, Contract Act).\n- Recent High Court or Supreme Court precedents.\n\nPlease provide more specific details about the facts of the case so I can assist you better.";
    }

    return responseText;
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate streaming response
    const responseText = await generateResponse(text);
    
    setIsTyping(false);
    
    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, assistantMsg]);
  };

  return (
    <section className="py-8 md:py-24 bg-slate-950 relative overflow-hidden font-sans">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-amber-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          {/* Left Content */}
          <div className="w-full xl:col-span-5 space-y-6 md:space-y-8 text-center xl:text-left order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Legal Research</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Your 24/7 <br className="hidden xl:block" />
              <span className="text-amber-500">Legal Associate.</span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Draft notices, research case laws, and summarize documents in seconds. 
              Trained on millions of Indian legal documents to give you precise, actionable insights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center sm:block text-left justify-center sm:justify-start">
                <Scale className="w-8 h-8 text-amber-500 mb-0 sm:mb-3 mr-4 sm:mr-0 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Case Law Search</h4>
                  <p className="text-sm text-slate-500">Find relevant precedents instantly.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center sm:block text-left justify-center sm:justify-start">
                <BookOpen className="w-8 h-8 text-amber-500 mb-0 sm:mb-3 mr-4 sm:mr-0 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Statute Analysis</h4>
                  <p className="text-sm text-slate-500">Simplify complex legal sections.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Chat Interface */}
          <div className="w-full xl:col-span-7 order-2">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[500px] md:h-[550px] lg:h-[600px] relative">
              {/* Chat Header */}
              <div className="px-4 md:px-6 py-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">LawSetu Intelligence</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs text-slate-400">Online • v2.4 Model</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' ? 'bg-slate-700' : 'bg-amber-500/10'
                    }`}>
                      {msg.role === 'user' ? (
                        <User className="w-5 h-5 text-slate-300" />
                      ) : (
                        <Bot className="w-5 h-5 text-amber-500" />
                      )}
                    </div>
                    
                    <div className={`flex flex-col max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user' 
                          ? 'bg-amber-600 text-white rounded-tr-none' 
                          : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                      }`}>
                        {msg.content}
                      </div>
                      {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mt-2 ml-1">
                          <button className="p-1 text-slate-500 hover:text-slate-300 transition-colors">
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1 text-slate-500 hover:text-slate-300 transition-colors">
                            <ThumbsUp className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1 text-slate-500 hover:text-slate-300 transition-colors">
                            <ThumbsDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="bg-slate-800 px-5 py-4 rounded-2xl rounded-tl-none border border-slate-700 flex items-center gap-1">
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-slate-900 border-t border-slate-800">
                <div className="flex gap-2 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {SUGGESTED_PROMPTS.map((prompt, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(prompt)}
                      className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs hover:bg-slate-700 hover:border-amber-500/50 hover:text-amber-400 transition-all flex-shrink-0"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about Indian laws..."
                    className="w-full bg-slate-950 text-white placeholder-slate-500 rounded-xl border border-slate-800 pl-4 pr-12 py-3 text-sm md:text-base focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                  <button 
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isTyping}
                    className="absolute right-2 p-1.5 md:p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-center mt-3">
                  <p className="text-[10px] text-slate-600">
                    AI can make mistakes. Please verify important legal information.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}