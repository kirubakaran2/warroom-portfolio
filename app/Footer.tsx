import Link from 'next/link';
import { Youtube } from "lucide-react";
import { PiDiscordLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black text-white py-6 md:py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <a href="https://www.youtube.com/@ict_dinesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Youtube size={20} className="md:w-6 md:h-6" />
          </a>
          <a href="https://x.com/ict_dinesh/status/1986090000153448690" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaXTwitter size={20} className="md:w-6 md:h-6" />
          </a>
          <a href="https://discord.gg/qnpfuETS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <PiDiscordLogoFill size={22} className="md:w-[26px] md:h-[26px]" />
          </a>
        </div>
        {/* Terms and Policy Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-gray-400">
          <Link href="/terms" className="hover:text-white transition-colors text-center">
            Terms & Conditions
          </Link>
          <Link href="/refund" className="hover:text-white transition-colors text-center">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
