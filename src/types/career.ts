export interface Contribution {
  name: string;
  date: string;
  descriptions: string[];
}

export interface CompanyComponentInterface {
  image: string;
  title: string;
  date: string;
  descriptions: string[];
  contributionList: Contribution[];
}
