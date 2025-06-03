import { Instagram, MapPin, Phone } from "lucide-react";
import React from "react";

const Info = () => {
  return (
    <div className="xl:w-2/5  p-4 sm:p-6 lg:p-8 xl:p-12 text-white">
      <div className="space-y-6 lg:space-y-8">
        {/* Global Delivery Centre */}
        {/* <div>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Global Delivery centre
          </h3>
          <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
              <div>
                <p>Technolodge, Green Park,</p>
                <p>Eranakulam, India</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <p>+91 8285 1750 00</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <p>+91 8281 1324 00</p>
            </div>
          </div>
        </div> */}

        {/* REGD Office */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Address
          </h3>
          <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
              <div>
                <p>C2, 4th Block, VB Park, Kakkanadu,</p>
                <p>Kochi, Kerala, India</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <p>+91 82341 1780 00</p>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <div className="pt-4 sm:pt-8">
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            App4Church is a digital solution that streamlines church operations
            and data handling.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Info;
