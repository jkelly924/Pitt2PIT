import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function ComparisonTable() {
  return (
    <div className="mt-24 font-geist-sans">
      <h3 className="text-3xl sm:text-4xl font-kalice text-center mb-8 sm:mb-12 text-pitt-blue">
        Compare Your Options
      </h3>

      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-pitt-blue text-white text-left">
                <th className="p-2 sm:p-4 text-xs sm:text-lg">Service</th>
                <th className="p-2 sm:p-4 text-xs sm:text-lg">Price</th>
                <th className="p-2 sm:p-4 text-xs sm:text-lg">Travel Time</th>
                <th className="p-2 sm:p-4 text-xs sm:text-lg">Time to Pick Up</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-pitt-gold/20 hover:bg-pitt-gold/30">
                <td className="p-2 sm:p-4 text-xs sm:text-base font-bold text-pitt-blue">P2P</td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">$9 - $20</td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">25 Minutes</td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">
                  5 Minutes<br className="sm:hidden" />
                  (Uber Arrival)
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-2 sm:p-4 text-xs sm:text-base font-bold">
                  Uber
                  <span className="text-[10px] sm:text-sm text-gray-500">
                    (without P2P)
                  </span>
                </td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">$35 - $80</td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">25 Minutes</td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">
                  5 Minutes<br className="sm:hidden" />
                  (Uber Arrival)
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-2 sm:p-4 text-xs sm:text-base font-bold">
                  28X Airport Flyer
                  <span className="text-[10px] sm:text-sm text-gray-500">
                    (Public Transport)
                  </span>
                </td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">$2.75</td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">60-90 Minutes</td>
                <td className="p-2 sm:p-4 text-xs sm:text-base">
                  15-30 Minutes<br className="sm:hidden" />
                  (Commute to bus stop)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
