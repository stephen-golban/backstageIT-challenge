import React from 'react';

import Box from '../../Box/Box';
import Card from '../../Card/Card';

import { DataType } from '@miista/typings/database';

interface IPaginatorPageProps extends React.PropsWithChildren {
  products: DataType[];
  isLoading?: boolean;
}

const PaginatorPage: React.FC<IPaginatorPageProps> = ({ products, isLoading }) => {
  return (
    <Box className="px-5 md:px-[60px]" marginBottom={40} gap={30} justifyContent="space-evenly" flexWrap="wrap">
      {products.map(({ node }, index) => (
        <Card key={node.name + index} isLoading={isLoading}>
          <Card.Image src={'https:' + node.thumbnailImage.file.url} alt={node.name} />
          <Box justifyContent="space-between" marginTop={20}>
            <Card.Title>{node.name}</Card.Title>
            <Box width={100} justifyContent="flex-end">
              <Card.Title>&euro; {node.shopifyProductEu.variants.edges[0].node.price}</Card.Title>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default PaginatorPage;
