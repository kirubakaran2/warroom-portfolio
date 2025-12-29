"use client";

import React, { useState } from "react";
import { Target, UserPlus, TrendingUp, Shield, Zap, BarChart3, Clock, Users } from "lucide-react";

const Ticket: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-orange-950/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-amber-500" />
              <span className="text-sm tracking-[0.3em] text-amber-500 font-medium">WARROOM</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-5 leading-none">
              <span className="block">1-1</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Mentorship
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-500 mb-0 max-w-2xl">
              Master institutional trading with systematic execution and live market training
            </p>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section className="relative pt-6 pb-16 border-t border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-950/30 via-transparent to-transparent"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 blur-3xl -z-10"></div>

          <div className="bg-black border-2 border-amber-600/50 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">

              {/* LEFT */}
              <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 p-12 flex flex-col justify-center">
                <UserPlus className="w-16 h-16 mb-6" />
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Lifetime Access</h3>
                <p className="text-white/90 text-lg mb-8">
                  Welcome to your trading transformation. Learn real market skills, gain deep insights,
                  and build unshakable confidence to trade smarter, manage risk better, and win consistently.
                </p>
                <span className="text-6xl font-bold">₹50,000</span>
              </div>

              {/* RIGHT */}
              <div className="bg-zinc-950 p-12">
                <div className="space-y-6 mb-10">
                  {[
                    "ICT Basic To Advance",
                    "Guidance To Profitable Trading",
                    "Private Community Discord Access",
                    "Class Recordings",
                    "Weekly Reviews & Feedback",
                    "All Future Updates"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-zinc-400 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://forms.gle/gLG6HF2XfUkoB83MA"
                  target="_blank"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:scale-105 inline-block text-center"
                >
                  Enroll Now
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ticket;
