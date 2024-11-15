import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export type TNameTab = 'colorpicker' | 'filepicker' | 'aipicker' | null;


export interface ITab {
  name: TNameTab,
  icon: string
}

export const EditorTabs: ITab[] = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export interface IDecalTypes {
  name: {
    stateProperty: string,
    filterTab: string
  }
}

interface IDecalType {
  stateProperty: string;
  filterTab: string;
}

export const DecalTypes: Record<string, IDecalType> = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
