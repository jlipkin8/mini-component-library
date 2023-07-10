import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 24 + 'px',
    '--font-size': 14 + 'px',
    '--icon-size': 16 + 'px',
    '--padding-left': 23 + 'px',
    '--border-width': 1 + 'px',
    iconSize: 16,
    strokewidth: 1,
  },
  large: {
    '--height': 36 + 'px',
    '--font-size': 18 + 'px',
    '--icon-size': 25 + 'px',
    '--padding-left': 37 + 'px',
    '--border-width': 2 + 'px',
    iconSize: 24,
    strokewidth: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  const iconSize = styles['iconSize'];
  const strokeWidth = styles['strokeWidth'];

  return (
    <Wrapper>
      <IconWrapper style={styles}>
        <Icon
          id={icon}
          size={iconSize}
          strokeWidth={strokeWidth}
        ></Icon>
      </IconWrapper>
      <InputWrapper
        width={width}
        type="text"
        id="search"
        placeholder={placeholder}
        style={styles}
      ></InputWrapper>
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto;
  width: fit-content;
  isolation: isolate;
`;

const IconWrapper = styled.div`
  height: var(--icon-size);
  width: var(--icon-size);
  position: absolute;
  top: 10%;
  color: ${COLORS.gray700};
  z-index: 1;
  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled.input`
  z-index: 2;
  position: relative;
  height: var(--height);
  width: ${(props) => props.width};
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  font-weight: 700;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-left: var(--padding-left);
  background: none;

  &:placeholder-shown {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;
