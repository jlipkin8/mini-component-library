import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon strokeWidth={1} id="chevron-down" size={24}></Icon>
        </IconWrapper>
      </PresentationalBit>
    </SelectWrapper>
  );
};

const NativeSelect = styled.select`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  appearance: none;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`;

export default Select;
