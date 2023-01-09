import NewsLetter from "./NewsLetter";
import Logo from "../../assets/logo.png";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const Links = [
    { title: "Location", links: ["Ameerica", "Asia", "Europe", "Africa"] },
    { title: "Location", links: ["Ameerica", "Asia", "Europe", "Africa"] },
    { title: "Location", links: ["Ameerica", "Asia", "Europe", "Africa"] },
  ];
  return (
    <footer className="pt-20 md:px-24 bg-lightprimary">
      <NewsLetter />

      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <img src={Logo} alt="logo" className="h-12" />
          <p className="md:w-1/2 leading-relaxed text-sm text-gray-600 pt-7">
            We envision a world where everyone feels welcome in the american
            hiking community.
          </p>
          <SocialMedia />
        </div>
        <div className="flex-1  flex flex-wrap gap-20  ">
          {Links.map((link, i) => (
            <ul key={i}>
              <h1 className="font-semibold pb-3">{link.title}</h1>
              {link.links.map((lk, idx) => (
                <li className="py-2.5 text-sm text-gray-600" key={idx}>
                  {lk}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="text-center py-10 mt-6 text-sm text-gray-600">
        Copyright &copy; dravyafolio. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
