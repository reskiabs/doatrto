import Image from "next/image";
import { LogoPlaceholder } from "../../lib/helper/ImagePlacholder";

const footerLinks = [
  {
    title: "Programs",
    links: [
      "All Programs",
      "Become a Member",
      "Download The App",
      "Certified Coach",
    ],
  },
  {
    title: "About DOA",
    links: ["Who We Are", "Press", "Blog", "Careers"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Status", "FAQ"],
  },
  {
    title: "Events",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Membership",
      "Code of Conduct",
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      {/* main footer */}
      <div className="bg-gradient-to-b w-[98.5%] rounded-[20px] from-primary to-secondary h-[163px] flex flex-col justify-center items-center lg:h-[319px]">
        <h1 className="font-medium text-3xl text-white lg:text-[70px]">
          Try it right now
        </h1>
        <p className="font-medium text-2xs text-neutral-400 mt-1 mb-2.5 lg:text-xl lg:mt-5 lg:mb-7">
          Upgrade Your Mind. Elevate Your Life. Shape the Future.
        </p>
        {/* buttons */}
        <div className="flex items-center gap-[10px] lg:gap-5">
          <button className="bg-gradient-to-r from-white to-[#EEEEEE] text-secondary text-2xs font-medium py-3.5 px-[22px] rounded-full lg:text-lg lg:py-[19px] lg:px-[30px]">
            Book a Session
          </button>
          <button className="border border-[#DDDDDD] text-white text-2xs font-medium py-3.5 px-[22px] rounded-full lg:text-lg lg:py-[19px] lg:px-[30px] lg:border-2">
            Pelajari Metode
          </button>
        </div>
      </div>

      {/* bottom footer */}
      <div className="bg-white w-full px-[15px] lg:h-[328px] lg:px-[150px]">
        <div className="w-full lg:flex justify-center lg:justify-start pt-[10px] lg:h-[270px]">
          {/* logo */}
          <div className="relative w-[179px] h-[73px] lg:w-[250px] lg:h-[102px]">
            <Image
              src="/logo.svg"
              alt="DOA Official Logo"
              fill
              priority
              placeholder="blur"
              blurDataURL={LogoPlaceholder}
            />
          </div>

          {/* menu footer */}
          <div className="lg:w-[60%] lg:flex lg:justify-between mt-1.5 lg:mt-6 text-body lg:mx-32">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-2 lg:gap-4 mb-4">
                <h4 className="font-extrabold text-[10px] lg:text-md">
                  {section.title}
                </h4>
                <div className="grid grid-cols-3 gap-y-1.5 lg:gap-y-5 lg:flex lg:flex-col">
                  {section.links.map((link, linkIdx) => (
                    <p
                      key={linkIdx}
                      className="text-[10px] lg:text-md font-medium"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-neutral-400 flex items-center justify-center py-[15px] lg:justify-start">
          <p className="text-2xs text-body font-medium lg:text-md">
            © 2025, All rights reserved, DOA TRTO
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
