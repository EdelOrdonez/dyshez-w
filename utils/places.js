import RocaLogo from "../public/restaurants/roca.jpg";
import BostonsLogo from "../public/restaurants/bostons.jpg";

export const getPlaces = () => {
  return places.filter((item) => item.type === "Restaurante");
};

export const getPlace = (id) => {
  return places.find((item) => item.id === id);
};

export const places = [
  {
    name: "Roca Steakhouse",
    type: "Restaurante",
    id: "roca",
    logoUrl: RocaLogo,
    schedule: "13:00 - 23:30",
    description:
      "Con una original combinación entre clásico y lo contemporáneo, ROCA Steakhouse es un inigualable restaurante gourmet en Mérida, Yucatán, ideal para los amantes de los cortes de carne prime.",
    address:
      "Av. Andrés García Lavin, Montebello, Luxury Place, Local-5, Mérida, Mexico",
    phone: "9999-99-99-99",
    url: "https://www.rocasteakhouse.com/",
    isActive: true,
    isCopy: false,
  },
  {
    name: "Bostons",
    type: "Restaurante",
    id: "bostons",
    logoUrl: BostonsLogo,
    schedule: "13:00 - 23:30",
    description:
      "Con una original combinación entre clásico y lo contemporáneo, ROCA Steakhouse es un inigualable restaurante gourmet en Mérida, Yucatán, ideal para los amantes de los cortes de carne prime.",
    address:
      "Av. Andrés García Lavin, Montebello, Luxury Place, Local-5, Mérida, Mexico",
    phone: "9999-99-99-99",
    url: "https://www.rocasteakhouse.com/",
    isActive: true,
    isCopy: false,
  },
];
