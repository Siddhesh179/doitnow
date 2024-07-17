import corporate from "../assets/corporate.jpg";
import privateparties from "../assets/privateparties.jpg";
import weddings from "../assets/weddings.jpg";

const services = [
  {
    title: "Weddings",
    description: "Create your dream wedding with our comprehensive wedding planning services, including venue selection, decor design, catering, and more.",
    imageUrl: weddings,
    backContent: "- Full-Service Wedding Planning : Enjoy a stress-free wedding planning experience with our comprehensive services, including venue selection, theme development, vendor management, and day-of coordination. - Destination Weddings : Whether you dream of saying on a sun-kissed beach or in a historic castle, we specialize in planning destination weddings that reflect your love story ",
  },
  {
    title: "Corporate",
    description: "Elevate your company's image with meticulously planned corporate events, from conferences and product launches to gala dinners and team-building retreats.",
    imageUrl: corporate,
    backContent: "More details about Corporate events...",
  },
  {
    title: "Private Parties",
    description: "Celebrate life's milestones in style with our bespoke private party planning, whether it's a birthday celebration, anniversary party, or intimate gatherings.",
    imageUrl: privateparties,
    backContent: "More details about Private Parties...",
  },
];

export default services;
