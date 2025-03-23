import { Zap, Clock, Calendar, DollarSign } from 'lucide-react';

export default function WhyChooseBatch() {
  return (
    <div className="mt-24">
      <h3 className="text-4xl font-kalice text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pitt-blue to-pitt-gold">
        Why Choose Batch?
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pitt-blue/20 hover:border-pitt-blue">
          <div className="flex justify-center mb-4">
            <div className="bg-pitt-blue rounded-full p-3">
              <Zap className="h-6 w-6 text-pitt-gold" />
            </div>
          </div>
          <h4 className="font-kalice text-2xl mb-4 text-center text-pitt-blue">Speed of an Uber</h4>
          <p className="font-geist-sans text-gray-600 text-center">
            Connect with your ride in seconds, get to PIT in 25 minutes.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pitt-blue/20 hover:border-pitt-blue">
          <div className="flex justify-center mb-4">
            <div className="bg-pitt-blue rounded-full p-3">
              <Clock className="h-6 w-6 text-pitt-gold" />
            </div>
          </div>
          <h4 className="font-kalice text-2xl mb-4 text-center text-pitt-blue">Convenience of an Uber</h4>
          <p className="font-geist-sans text-gray-600 text-center">
            Book your ride when you want, not when the bus is scheduled.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pitt-blue/20 hover:border-pitt-blue">
          <div className="flex justify-center mb-4">
            <div className="bg-pitt-blue rounded-full p-3">
              <Calendar className="h-6 w-6 text-pitt-gold" />
            </div>
          </div>
          <h4 className="font-kalice text-2xl mb-4 text-center text-pitt-blue">Book Anytime</h4>
          <p className="font-geist-sans text-gray-600 text-center">
            Book your ride as soon as you book your flight!
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pitt-blue/20 hover:border-pitt-blue">
          <div className="flex justify-center mb-4">
            <div className="bg-pitt-blue rounded-full p-3">
              <DollarSign className="h-6 w-6 text-pitt-gold" />
            </div>
          </div>
          <h4 className="font-kalice text-2xl mb-4 text-center text-pitt-blue">Affordable Rides</h4>
          <p className="font-geist-sans text-gray-600 text-center">
            Forget the bus, we'll find you a ride for as low as $9.
          </p>
        </div>
      </div>
    </div>
  );
}
