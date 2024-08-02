export interface StackInfoInterface {
  mainFeature: string[];
  URLs: string[];
  stacksList: string[];
}

export interface ProjectComponentInterface {
  title: string;
  date: string;
  imageList: string[];
  descriptions: string[];
  stackInfos: StackInfoInterface;
}
