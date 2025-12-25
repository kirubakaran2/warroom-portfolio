'use client';
import React, { useState } from 'react';
import { Target, Lock, Unlock, Award, TrendingUp, Shield, Zap, BarChart3, Clock, Users } from 'lucide-react';

const Ticket: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const cards = [
    {
      icon: Shield,
      front: "Proprietary System",
      back: "Complete NQ futures framework with quantifiable edge. Rule-based entries, exits, and risk parameters designed for consistent execution.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Zap,
      front: "Live Sessions",
      back: "Daily market analysis during trading hours. Watch real-time execution, risk management, and professional decision-making processes.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: BarChart3,
      front: "Risk Management",
      back: "Institutional-grade position sizing and capital allocation. Learn to protect your account while maximizing risk-adjusted returns.",
      color: "from-amber-600 to-yellow-600"
    },
    {
      icon: TrendingUp,
      front: "Performance Review",
      back: "Weekly accountability sessions analyzing your trades. Get direct feedback on execution quality and areas for improvement.",
      color: "from-yellow-600 to-amber-500"
    },
    {
      icon: Users,
      front: "Private Community",
      back: "Network with serious traders focused on execution excellence. Share insights, setups, and maintain accountability.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Clock,
      front: "Lifetime Access",
      back: "One-time investment for continuous learning. All future system updates, recordings, and resources included forever.",
      color: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-orange-950/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-22">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-10 h-10 text-amber-500" />
              <span className="text-sm tracking-[0.3em] text-amber-500 font-medium">WARROOM</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
              <span className="block text-white">NQ Futures</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Mentorship
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-500 mb-2 max-w-2xl">
              Master institutional trading with systematic execution and live market training
            </p>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <section className="relative py-20 md:py-32 border-t border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-950/30 via-transparent to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 blur-3xl -z-10"></div>
            
            <div className="bg-black border-2 border-amber-600/50 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Side */}
                <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 p-12 flex flex-col justify-center">
                  <Award className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Lifetime Membership
                  </h3>
                  <p className="text-white/90 text-lg mb-8">
                    One payment. Forever access. Professional trading education.
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-white">₹XX,XXX</span>
                  </div>
                </div>

                {/* Right Side */}
                <div className="bg-zinc-950 p-12">
                  <div className="space-y-6 mb-10">
                    {[
                      "Complete Trading System",
                      "6 Months Daily Sessions",
                      "Weekly Reviews & Feedback",
                      "Risk Management Tools",
                      "Private Community Access",
                      "All Future Updates"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-zinc-400 group-hover:text-white transition-colors text-lg">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://forms.gle/gLG6HF2XfUkoB83MA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-block text-center"
                  >
                    Enroll Now
                  </a>

                  <p className="text-zinc-600 text-center text-sm mt-6">
                    Limited to 25 participants • Next cohort: [Date]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Ticket;
