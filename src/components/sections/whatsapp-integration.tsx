"use client";

import React from 'react';
import { CircleCheck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"

const features = [
  {
    title: "Instant Case Retrieval",
    description: "Ask 'Status of Case 302' and get live updates instantly.",
  },
  {
    title: "Control whole software",
    description: "Create invoices, add clients, and schedule hearings from WhatsApp.",
  },
  {
    title: "Client Reminders",
    description: "Automated hearing reminders sent to you and your clients automatically.",
  }
];

export default function WhatsappIntegration() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="whatsapp" className="py-16 md:py-24 bg-slate-950 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Carousel */}
          <div className="order-2 lg:order-1 w-full max-w-md mx-auto lg:mx-0">
             <Carousel 
                setApi={setApi}
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-slate-900/50 border-slate-800 relative">
                        <div className="absolute top-6 right-6 text-emerald-500 font-bold text-xl font-mono opacity-50">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <CardContent className="flex flex-col items-center justify-center p-10 text-center aspect-square">
                          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                            <CircleCheck className="w-8 h-8 text-emerald-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                          <p className="text-slate-400 text-lg">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Single Line Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: count }).map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index + 1 === current ? "w-8 bg-emerald-500" : "w-2 bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* Right Column - Heading */}
          <div className="order-1 lg:order-2 text-left">
             <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.9] mb-6 text-white flex flex-col gap-2 sm:gap-4 lg:gap-6">
                <span>Manage</span>
                <span>Software.</span>
                <span className="text-emerald-500">Without Opening</span>
                <span className="text-emerald-500">Software.</span>
            </h2>
          </div>
          
        </div>
      </div>
    </section>
  );
}