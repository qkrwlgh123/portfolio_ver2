interface URLInfo {
  text: string;
  link: string;
}

export interface StackInfoInterface {
  mainFeature: string[];
  URLs: URLInfo[];
  stacksList: string[];
}

export interface ProjectComponentInterface {
  title: string;
  date: string;
  imageList: string[];
  descriptions: string[];
  stackInfos: StackInfoInterface;
}
