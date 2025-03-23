import Image from 'next/image';
import { Plane, Users, MessageSquare } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-kalice text-center mb-16 text-pitt-blue">
          How Batch Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div className="relative flex flex-col items-center text-center group">
            <div className="bg-pitt-blue rounded-full p-4 mb-4">
              <Plane className="h-8 w-8 text-pitt-gold" />
            </div>
            <h3 className="text-2xl font-kalice mb-4 text-pitt-blue">Enter Your Route</h3>
            <p className="text-gray-600 font-geist-sans leading-relaxed">
              Tell us when you're headed to the airport and when you're coming back to Pittsburgh.
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="bg-pitt-blue rounded-full p-4 mb-4">
              <Image
                src="/images/Pitt_Logo.svg"
                alt="University of Pittsburgh"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-2xl font-kalice mb-4 text-pitt-blue">Join a Ride</h3>
            <p className="text-gray-600 font-geist-sans leading-relaxed">
              We'll find other <strong className="text-pitt-blue">verified University of Pittsburgh students</strong> making the same journey at the same time and connect you with them.
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="bg-pitt-blue rounded-full p-4 mb-4">
              <MessageSquare className="h-8 w-8 text-pitt-gold" />
            </div>
            <h3 className="text-2xl font-kalice mb-4 text-pitt-blue">Save and Travel</h3>
            <p className="text-gray-600 font-geist-sans leading-relaxed">
              Enjoy huge cost savings, eco-friendly travel, and the company of new friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
