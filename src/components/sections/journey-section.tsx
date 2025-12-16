"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Upload, 
  FileText, 
  MessageSquare, 
  UserPlus, 
  LayoutDashboard, 
  Smartphone,
  ArrowRight,
  Calendar,
  Video,
  Users,
  Search,
  Bell,
  ShieldCheck,
  Gavel,
  Globe,
  ChevronDown,
  Zap,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const steps = [
  {
    id: 1,
    title: "Sign Up in 2 Minutes",
    subtitle: "Quick and seamless onboarding",
    features: [
      "Email & Password signup with instant verification",
      "Google OAuth for one-click registration",
      "WhatsApp OTP for phone-based access",
      "Complete your profile with practice details",
      "Add team members and set permissions"
    ],
    icon: UserPlus,
    color: "text-blue-500"
  },
  {
    id: 2,
    title: "Import Your Cases",
    subtitle: "Migrate your existing practice data effortlessly",
    features: [
      "Bulk upload cases via CSV/Excel files",
      "Manual case entry with auto-suggestions",
      "eCourts integration for automatic case sync",
      "Import client database with contact details",
      "Upload existing documents and organize by case"
    ],
    icon: Upload,
    color: "text-amber-500"
  },
  {
    id: 3,
    title: "Organize & Manage",
    subtitle: "Your entire practice at your fingertips",
    features: [
      "AI-powered case categorization and tagging",
      "Document management with OCR and search",
      "Smart reminders for hearings and deadlines",
      "Client portal for case status updates",
      "Generate legal documents with AI assistance"
    ],
    icon: LayoutDashboard,
    color: "text-purple-500"
  },
  {
    id: 4,
    title: "Stay Connected",
    subtitle: "Communicate seamlessly from anywhere",
    features: [
      "WhatsApp integration for controlling software",
      "Video meetings everything in house",
      "Real-time chat with clients and team",
      "Automated notifications for case updates",
      "Mobile app for on-the-go access"
    ],
    icon: MessageSquare,
    color: "text-emerald-500"
  }
];

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            SIMPLE 4-STEP PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Your Journey to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Smarter Practice
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From signup to full productivity in minutes. No technical expertise required.
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300",
                  activeStep === step.id
                    ? "bg-white text-slate-900 shadow-md scale-105 ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
                )}
              >
                Step {step.id}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-auto lg:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center"
            >
              {/* Left Column: Content */}
              <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-100 border border-slate-200", steps[activeStep - 1].color)}>
                    {React.createElement(steps[activeStep - 1].icon, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                    {steps[activeStep - 1].title}
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-600">
                    {steps[activeStep - 1].subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {steps[activeStep - 1].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-slate-600 text-base sm:text-lg group-hover:text-slate-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mockup */}
              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] sm:aspect-square lg:aspect-[4/3.5]">
                  <StepCarousel stepId={activeStep} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function StepCarousel({ stepId }: { stepId: number }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Reset to first slide when step changes
  useEffect(() => {
    if (api) {
      api.scrollTo(0)
    }
  }, [stepId, api])

  const slides = getSlidesForStep(stepId);

  return (
    <div className="w-full h-full flex flex-col bg-slate-900">
      <Carousel
        setApi={setApi}
        className="w-full flex-1"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="h-full flex items-center justify-center p-6 md:p-8">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Indicators */}
      <div className="flex justify-center gap-2 pb-6">
        {Array.from({ length: count }).map((_, index) => (
          <div 
            key={index}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              index + 1 === current ? "w-8 bg-orange-500" : "w-2 bg-slate-700"
            )}
          />
        ))}
      </div>
    </div>
  )
}

function getSlidesForStep(stepId: number) {
  switch(stepId) {
    case 1: return [<Step1Slide1 />, <Step1Slide2 />, <Step1Slide3 />];
    case 2: return [<Step2Slide1 />, <Step2Slide2 />, <Step2Slide3 />];
    case 3: return [<Step3Slide1 />, <Step3Slide2 />, <Step3Slide3 />];
    case 4: return [<Step4Slide1 />, <Step4Slide2 />, <Step4Slide3 />];
    default: return [];
  }
}

// --- Step 1 Slides ---
function Step1Slide1() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-orange-500 rounded-xl mx-auto flex items-center justify-center text-white font-bold text-xl">L</div>
        <h4 className="text-white font-bold text-xl">Create Your Account</h4>
        <p className="text-slate-500 text-sm">Join thousands of lawyers on LawSetu</p>
      </div>
      <div className="space-y-3">
        <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 flex items-center text-slate-500 text-sm">Full Name</div>
        <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 flex items-center text-slate-500 text-sm">Email address</div>
        <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 flex items-center text-slate-500 text-sm">Create password</div>
      </div>
      <button className="w-full h-10 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors">
        Create Account
      </button>
      <p className="text-center text-[10px] text-slate-500">By signing up, you agree to our Terms & Privacy Policy</p>
    </div>
  );
}

function Step1Slide2() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="w-12 h-12 bg-orange-500 rounded-xl mx-auto flex items-center justify-center text-white font-bold text-xl mb-4">L</div>
      <div>
        <h4 className="text-white font-bold text-xl">Welcome to LawSetu</h4>
        <p className="text-slate-500 text-sm">Choose your signup method</p>
      </div>
      <div className="space-y-3">
        <button className="w-full h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center gap-2 text-white text-sm hover:bg-slate-700 transition-colors">
          <Globe className="w-4 h-4 text-blue-400" />
          Continue with Google
        </button>
        <button className="w-full h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center gap-2 text-white text-sm hover:bg-slate-700 transition-colors">
          <Smartphone className="w-4 h-4 text-green-500" />
          Continue with WhatsApp
        </button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-slate-900 px-2 text-slate-500">Or use email</span>
        </div>
      </div>
      <button className="w-full h-10 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm hover:bg-slate-700 transition-colors">
        Sign up with Email
      </button>
    </div>
  );
}

function Step1Slide3() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-emerald-900/30 rounded-full mx-auto flex items-center justify-center mb-2 border border-emerald-500/30">
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
        </div>
        <h4 className="text-white font-bold text-xl">Complete Your Profile</h4>
        <p className="text-slate-500 text-sm">Tell us about your practice</p>
      </div>
      <div className="space-y-3">
        <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 flex items-center justify-between text-slate-500 text-sm">
          <span>Practice Area</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 flex items-center text-slate-500 text-sm">Bar Council Registration Number</div>
        <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 flex items-center text-slate-500 text-sm">Years of Experience</div>
        <div className="h-10 bg-slate-800 rounded-lg border border-slate-700 px-3 flex items-center text-slate-500 text-sm">Primary Court/Location</div>
      </div>
      <button className="w-full h-10 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors">
        Complete Setup
      </button>
    </div>
  );
}

// --- Step 2 Slides ---
function Step2Slide1() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="w-16 h-16 bg-slate-800 rounded-full mx-auto flex items-center justify-center mb-4">
        <Upload className="w-8 h-8 text-amber-500" />
      </div>
      <div>
        <h4 className="text-white font-bold text-xl">Bulk Import</h4>
        <p className="text-slate-500 text-sm">Drag & drop your files</p>
      </div>
      <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 bg-slate-800/30">
        <FileText className="w-8 h-8 text-slate-600 mx-auto mb-2" />
        <p className="text-slate-400 text-sm">cases_2024.csv</p>
      </div>
    </div>
  );
}

function Step2Slide2() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="w-16 h-16 bg-slate-800 rounded-full mx-auto flex items-center justify-center mb-4">
        <Gavel className="w-8 h-8 text-blue-500" />
      </div>
      <div>
        <h4 className="text-white font-bold text-xl">eCourts Sync</h4>
        <p className="text-slate-500 text-sm">Connect with court records</p>
      </div>
      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-left">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white text-sm font-bold">Syncing Cases...</span>
          <span className="text-blue-400 text-xs">85%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div className="w-[85%] h-full bg-blue-500 rounded-full" />
        </div>
        <p className="text-slate-500 text-xs mt-2">Found 12 new hearings</p>
      </div>
    </div>
  );
}

function Step2Slide3() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <h4 className="text-white font-bold text-lg mb-2">Manual Entry</h4>
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs text-slate-500">Case Number</label>
          <div className="h-9 bg-slate-800 rounded border border-slate-700 px-3 flex items-center text-white text-sm">WP/1234/2024</div>
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-500">Court</label>
          <div className="h-9 bg-slate-800 rounded border border-slate-700 px-3 flex items-center text-white text-sm">High Court of Bombay</div>
        </div>
        <button className="w-full h-9 bg-slate-700 text-white text-sm font-medium rounded hover:bg-slate-600">
          Add Case
        </button>
      </div>
    </div>
  );
}

// --- Step 3 Slides ---
function Step3Slide1() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="mb-6">
        <div className="w-12 h-12 bg-slate-800 rounded-xl mx-auto flex items-center justify-center mb-2">
          <FileText className="w-6 h-6 text-purple-400" />
        </div>
        <h4 className="text-white font-bold text-xl">Practice Dashboard</h4>
        <p className="text-slate-500 text-sm">Your command center</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded-lg text-left">
          <div className="text-2xl font-bold text-blue-400">47</div>
          <div className="text-[10px] text-slate-400">Active</div>
        </div>
        <div className="bg-amber-900/20 border border-amber-500/30 p-3 rounded-lg text-left">
          <div className="text-2xl font-bold text-amber-500">12</div>
          <div className="text-[10px] text-slate-400">This Week</div>
        </div>
        <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded-lg text-left">
          <div className="text-2xl font-bold text-emerald-500">8</div>
          <div className="text-[10px] text-slate-400">Hearings</div>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { title: "Property Dispute", status: "Urgent", color: "bg-red-500" },
          { title: "Contract Breach", status: "Active", color: "bg-amber-500" },
          { title: "Family Matter", status: "Scheduled", color: "bg-blue-500" },
        ].map((item, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 p-3 rounded-lg flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
              <div>
                <div className="text-white text-xs font-bold">{item.title}</div>
                <div className="text-[10px] text-slate-500">{item.status}</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3Slide2() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="mb-6">
        <div className="w-12 h-12 bg-slate-800 rounded-xl mx-auto flex items-center justify-center mb-2">
          <FileText className="w-6 h-6 text-blue-400" />
        </div>
        <h4 className="text-white font-bold text-xl">Document Library</h4>
        <p className="text-slate-500 text-sm">OCR-powered search</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <div className="w-full h-10 bg-slate-800 border border-slate-700 rounded-lg pl-9 flex items-center text-sm text-slate-500">
          Search documents...
        </div>
      </div>

      <div className="space-y-2">
        {[
          { name: "Petition_Draft.pdf", meta: "2.4 MB • Today", icon: FileText, color: "text-blue-400" },
          { name: "Evidence_List.docx", meta: "156 KB • Yesterday", icon: FileText, color: "text-blue-400" },
          { name: "Court_Order.pdf", meta: "890 KB • Dec 20", icon: FileText, color: "text-blue-400" },
          { name: "Client_Agreement.pdf", meta: "445 KB • Dec 18", icon: FileText, color: "text-blue-400" },
        ].map((file, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 p-2.5 rounded-lg flex items-center gap-3 text-left">
            <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center border border-slate-700">
              <file.icon className={`w-4 h-4 ${file.color}`} />
            </div>
            <div>
              <div className="text-white text-xs font-bold">{file.name}</div>
              <div className="text-[10px] text-slate-500">{file.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3Slide3() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="mb-6">
        <div className="w-12 h-12 bg-fuchsia-500 rounded-xl mx-auto flex items-center justify-center mb-2 shadow-lg shadow-fuchsia-500/20">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-white font-bold text-xl">AI Legal Assistant</h4>
        <p className="text-slate-500 text-sm">Generate documents instantly</p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 space-y-4 text-left">
        <div>
          <p className="text-xs text-slate-400 mb-2">What do you need?</p>
          <div className="flex gap-2">
            {["Draft Petition", "Legal Notice", "Case Brief"].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded text-[10px] text-fuchsia-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="h-24 bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-500">
          Describe what you need...
        </div>

        <button className="w-full h-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          Generate with AI
        </button>
      </div>
    </div>
  );
}

// --- Step 4 Slides ---
function Step4Slide1() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="mb-6">
        <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto flex items-center justify-center mb-2 shadow-lg shadow-green-500/20">
          <Smartphone className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-white font-bold text-xl">WhatsApp Connected</h4>
        <p className="text-slate-500 text-sm">143 active conversations</p>
      </div>

      <div className="space-y-2">
        {[
          { name: "Rajesh Kumar", msg: "When is my next hearing?", time: "2m", count: 2, color: "bg-emerald-500" },
          { name: "Priya Sharma", msg: "Document uploaded ✓", time: "1h", count: 0, color: "bg-emerald-500" },
          { name: "Amit Patel", msg: "Thank you for the update", time: "3h", count: 0, color: "bg-emerald-500" },
          { name: "Team Discussion", msg: "Case strategy meeting", time: "5h", count: 5, color: "bg-emerald-500" },
        ].map((chat, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 p-3 rounded-lg flex items-center gap-3 text-left hover:bg-slate-800 transition-colors cursor-pointer">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${chat.color}`}>
              {chat.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-white text-xs font-bold truncate">{chat.name}</span>
                <span className="text-[10px] text-slate-500">{chat.time}</span>
              </div>
              <p className="text-slate-400 text-[10px] truncate">{chat.msg}</p>
            </div>
            {chat.count > 0 && (
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                {chat.count}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Step4Slide2() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto flex items-center justify-center mb-2 shadow-lg shadow-blue-500/20">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-white font-bold text-xl">Video Meetings</h4>
        <p className="text-slate-500 text-sm">Built-in video platform</p>
      </div>

      <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 text-left mb-4">
        <div className="flex justify-between items-start mb-3">
          <span className="text-white text-xs font-bold">Upcoming Meeting</span>
          <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] rounded">In 15 min</span>
        </div>
        <div className="mb-4">
          <div className="text-white font-bold text-sm">Client Consultation</div>
          <div className="text-slate-400 text-xs mt-1">Rajesh Kumar • 11:00 AM - 12:00 PM</div>
        </div>
        <button className="w-full h-8 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors">
          Join Meeting
        </button>
      </div>

      <div className="space-y-2">
        <div className="text-left text-xs text-slate-500 mb-2">Recent Meetings</div>
        {[
          { name: "Priya Sharma", meta: "Yesterday • 45 min" },
          { name: "Amit Patel", meta: "Dec 22 • 30 min" }
        ].map((meeting, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 p-2.5 rounded-lg text-left">
            <div className="text-white text-xs font-bold">{meeting.name}</div>
            <div className="text-[10px] text-slate-500">{meeting.meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step4Slide3() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <div className="mb-6">
        <div className="w-12 h-12 bg-slate-800 rounded-xl mx-auto flex items-center justify-center mb-2 border border-slate-700">
          <MessageSquare className="w-6 h-6 text-purple-400" />
        </div>
        <h4 className="text-white font-bold text-xl">Team Workspace</h4>
        <p className="text-slate-500 text-sm">Collaborate in real-time</p>
      </div>

      <div className="border border-slate-700 rounded-xl p-4 bg-slate-800/30 text-left mb-4">
        <div className="text-xs text-slate-400 mb-3">Team Members</div>
        <div className="space-y-3">
          {[
            { name: "You (Owner)", role: "Senior Advocate", initial: "Y", color: "bg-purple-500", status: "bg-green-500" },
            { name: "Associate 1", role: "Junior Lawyer", initial: "A", color: "bg-purple-500", status: "bg-green-500" },
            { name: "Paralegal", role: "Support Staff", initial: "P", color: "bg-purple-500", status: "bg-orange-500" },
          ].map((member, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-bold relative`}>
                {member.initial}
                <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${member.status} rounded-full border-2 border-slate-900`} />
              </div>
              <div>
                <div className="text-white text-xs font-bold">{member.name}</div>
                <div className="text-[10px] text-slate-500">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="h-9 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg transition-colors">
          Start Discussion
        </button>
        <button className="h-9 border border-slate-600 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors">
          Invite Member
        </button>
      </div>
    </div>
  );
}







