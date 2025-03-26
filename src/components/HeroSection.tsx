import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-pitt-blue to-pitt-blue/90">
      <main className="w-full px-4 md:px-6 lg:px-8 font-geist-sans max-w-7xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8 lg:space-y-12">
          <h1 className="text-5xl sm:text-5xl mt-8 md:text-6xl lg:text-8xl tracking font-kalice leading-tight text-white">
            Ubers to PIT from $9
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl tracking font-kalice text-pitt-gold">
            Split your ride with other Pitt students
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="sm:mt-4 md:mt-8 p-6 md:p-8 rounded-3xl bg-white shadow-xl transition-all duration-300 md:text-lg text-sm">
              <div className="space-y-5">
                
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="group w-full px-6 py-4 rounded-xl bg-white hover:bg-pitt-blue text-pitt-blue hover:text-white border border-pitt-blue transition-all duration-300 font-geist-sans flex items-center justify-between h-auto"
                  >
                    <span>Pitt to PIT (Departure only)</span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="group w-full px-6 py-4 rounded-xl bg-white hover:bg-pitt-blue text-pitt-blue hover:text-white border border-pitt-blue transition-all duration-300 font-geist-sans flex items-center justify-between h-auto"
                  >
                    <span>PIT to Pitt (Arrival only)</span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  <Button
                    className="group w-full px-6 py-4 rounded-xl bg-pitt-blue text-white hover:bg-pitt-blue/90 transition-all duration-300 font-geist-sans flex items-center justify-between h-auto"
                  >
                    <span>Round Trip</span>
                    <ChevronRight className="h-5 w-5 text-pitt-gold" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-4 text-base sm:text-lg w-1/2 sm:w-1/3 mx-auto my-3 sm:my-4 text-white">
              <div className="flex-none">Powered by</div>
              <Image
                src="/images/uber-logo.svg"
                alt="Uber Logo"
                width={60}
                height={20}
                className="w-1/4 invert"
              />
              <div>and</div>
              <Image
                src="/images/Pitt_Logo.svg"
                alt="Pitt Logo"
                width={60}
                height={20}
                className="w-1/4"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
