import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const CompanyLogo = () => {
  // List of company logos
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full container mx-auto py-20 overflow-hidden flex flex-col sm:flex-row sm:items-center items-start">
      {/* Partner info section */}
      <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left mb-8 sm:mb-0">
      Official partner of <br /> HubSpot & Segment
      </div>

      {/* Scrolling logos section */}
      <div className='flex animate-marquee whitespace-nowrap'>
        {/* Display each logo once */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 transition-all object-contain  "
          />
        ))}

        {/* Duplicate logos for seamless scrolling effect */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain  transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
