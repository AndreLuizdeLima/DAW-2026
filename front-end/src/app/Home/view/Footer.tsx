import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  const contacts = [
    {
      icon: <Phone />,
      value: "(46) 99999-9999",
    },
    {
      icon: <MapPin />,
      value: "Pato Branco - PR",
    },
  ];

  return (
    <footer className="bg-secondary p-5">
      <div className="flex flex-row w-full justify-between items-center">
        <section className="flex flex-col gap-2 ">
          {contacts.length
            ? contacts.map((i, index) => (
                <div
                  className="flex flex-row items-center gap-2 text-white"
                  key={index}
                >
                  {i.icon}
                  {i.value}
                </div>
              ))
            : null}
        </section>
        <div>
          <img
            src="data/logo_lanchonete.svg"
            className="h-24 p-4 rounded-3xl bg-white"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
