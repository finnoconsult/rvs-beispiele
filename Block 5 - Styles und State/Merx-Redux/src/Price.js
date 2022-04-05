import { Box } from '@mui/material';

const priceToNum = (price) => parseInt(price.replace(',', '.'), 10);

export function Price({ price }) {
  return (
    <Box fontSize={24} fontWeight="bold" textAlign="right" color={priceToNum(price) > 80 ? 'red' : 'green'}>
      {price}
    </Box>
  );
}
