import { ISections } from "../../../shared/types/ISections";

export const sections: ISections[] = [
  { title: "Gallery", url: "/" },
  { title: "Profile", url: "/profile" },
  { title: "Statistic", url: "/statistic" },
];

export const sectionsNotAuth: ISections[] = [{ title: "Gallery", url: "/" }];
