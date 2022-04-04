import Box from '@mui/material/Box';

export function Price({ price, ...styleProps }) {
  return <Box sx={{ padding: '1rem', fontSize: 24, fontWeight: 'bold', ...styleProps }}>{price}</Box>;
}

// export function Price({ price, ...styleProps }) {
//   return (
//     <Box padding="1rem" fontSize={24} fontWeight="bold" {...styleProps}>
//       {price}
//     </Box>
//   );
// }
