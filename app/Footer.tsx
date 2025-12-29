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
          <a href="https://instagram.com/ict_dinesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>
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
         <p className="text-center mt-3  sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-gray-400">© 2025 WarRoom. All rights reserved.</p>
      </div>
    </footer>
  );
}
