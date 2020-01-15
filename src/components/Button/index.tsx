import styled from 'styled-components';

export const Button = styled.button<{
  alignRight?: boolean;
}>`
  background: #fff;
  border: 1px solid #5781f6;
  border-radius: 2px;
  color: #5781f6;
  float: ${(props) => (props.alignRight ? 'right' : 'none')};
`;
