import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope className="text-primary" size={28} />,
    title: "E-mail",
    info: "matheusbriandeoliveira@gmail.com",
    bg: "bg-background-tertiary",
  },
  {
    icon: <FaPhone className="text-primary" size={28} />,
    title: "Telefone",
    info: "(14) 99175-2130",
    bg: "bg-background-tertiary",
  },
  {
    icon: <FaLinkedin className="text-primary" size={28} />,
    title: "Linkedin",
    info: "@matheusbriandeoliveira",
    bg: "bg-background-tertiary",
  },
  {
    icon: <FaGithub className="text-primary" size={28} />,
    title: "GitHub",
    info: "@matheusbriandeoliveira",
    bg: "bg-background-tertiary",
  },
];

export function Contact() {
  return (
    <section className="md:px-72 px-6 py-10">
      {/* container escuro */}
      <div className="bg-background-secundary md:py-46 py-16 rounded-md text-white">
        <h2 className="text-center text-3xl font-bold mb-12 md:mb-32">
          Contato<span className="text-primary">.</span>
        </h2>

        <div className="flex flex-col gap-12 md:flex-row justify-center items-center md:gap-24">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className={`${contact.bg} p-4 rounded-full`}>
                {contact.icon}
              </span>
              <p className="font-semibold">{contact.title}</p>
              <p className="text-sm text-secundary">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Fim container escuro */}
    </section>
  );
}
