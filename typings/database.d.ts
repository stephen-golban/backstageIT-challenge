import db from '../database/data.json';

export type DataType = {
  node: {
    name: string;
    node_locate: string;
    thumbnailImage: {
      file: {
        url: string;
      };
    };
    colorFamily: { name: string }[];
    categoryTags: string[];
    shopifyProductEu: {
      variants: {
        edges: { node: { price: string } }[];
      };
    };
  };
};
export type DataItemType = keyof DataType;
