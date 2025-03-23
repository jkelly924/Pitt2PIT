import { Button } from './ui/button';

export default function CallToAction() {
  return (
    <div className="mt-24 text-center">
      <h3 className="text-3xl font-kalice mb-6 text-pitt-blue">Ready to Get Started?</h3>
      <Button className="px-8 py-4 bg-pitt-blue text-white hover:bg-pitt-blue/90 transition-opacity font-geist-sans text-lg h-auto border-2 border-pitt-gold">
        <span className="text-pitt-gold font-bold">Find</span> <span className="text-white">Your Ride</span>
      </Button>
    </div>
  );
}
