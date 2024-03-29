import styled from 'styled-components';
import { compose, space, layout, typography, color, flexbox, position, border } from 'styled-system';

export const Box = styled.div(
  (props) => props.css,
  compose(space, layout, typography, color, flexbox, position, border)
);
Box.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
  ...typography.propTypes,
  ...color.propTypes,
  ...flexbox.propTypes,
  ...position.propTypes,
  ...border.propTypes,
};

export const Flex = styled(Box)``;
Flex.defaultProps = { display: 'flex' };
