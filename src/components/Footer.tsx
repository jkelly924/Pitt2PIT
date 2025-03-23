import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-pitt-blue py-10 border-t border-pitt-gold">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/images/PittCSC_Logo.svg"
            alt="PittCSC Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <p className="text-sm text-pitt-gold font-geist-sans">
            Built by PittCSC
          </p>
        </div>
      </div>
    </footer>
  );
}
