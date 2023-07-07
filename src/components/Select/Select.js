import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectForm value={value} onChange={onChange}>
        {children}
      </SelectForm>
      <IconWrapper id="chevron-down"></IconWrapper>
    </SelectWrapper>
  );
};

const SelectForm = styled.select`
  appearance: none;
  height: 100%;
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  width: min-content;
  font-size: 1em;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 20%;
  right: 10%;
`;

export default Select;
