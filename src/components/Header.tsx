import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-pitt-blue/95 backdrop-blur supports-[backdrop-filter]:bg-pitt-blue/60">
      <div className="flex h-12 sm:h-14 justify-between items-center w-full mt-2 sm:mt-3 px-4 sm:px-8">
        <Link href="/" className="flex items-center font-kalice text-lg sm:text-xl text-white">
          <Image
            src="/images/p2p_logo.svg"
            alt="Pitt2PIT Logo"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition-opacity invert"
          />
          &nbsp; Pitt2PIT
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="outline" className="font-geist-sans text-sm sm:text-base border-pitt-gold text-pitt-gold hover:bg-pitt-gold hover:text-pitt-blue">
            How it works
          </Button>
          <Button variant="outline" className="font-geist-sans text-sm sm:text-base border-pitt-gold text-pitt-gold hover:bg-pitt-gold hover:text-pitt-blue">
            Modify Ride
          </Button>
          <Button className="font-geist-sans text-sm sm:text-base bg-pitt-gold text-pitt-blue hover:bg-pitt-gold/90">
            Share
          </Button>
        </div>
      </div>
    </header>
  );
}
