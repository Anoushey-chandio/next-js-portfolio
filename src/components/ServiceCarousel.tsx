"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Code,
  PenTool,
  Smartphone,
  MessageCircleMore,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code className="w-8 h-8 text-[#353a1c]" />,
  },
  {
    title: "UI/UX Design",
    icon: <PenTool className="w-8 h-8 text-[#353a1c]" />,
  },
  {
    title: "Social Media Marketing",
    icon: <Smartphone className="w-8 h-8 text-[#353a1c]" />,
  },
  {
    title: "Content Writing with AI",
    icon: <MessageCircleMore className="w-8 h-8 text-[#353a1c]" />,
  },
  {
    title: "Responsive Design",
    icon: <MonitorSmartphone className="w-8 h-8 text-[#353a1c]" />,
  },
];

export default function ServiceCarousel() {
  return (
    <section className="bg-[#f3f0f0b2] text-[#353a1c] min-h-[80vh] pt-24 m-4 ">
      {/* pt-24 ensures content starts below fixed header (height ~96px) */}
      <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
      <div className="max-w-5xl mx-auto pb-8 rounded-xl">
        <Carousel>
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <Card className="bg-white shadow-md ml-4 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-center">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

