/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Component;

  if (size === 'large') {
    Component = LargeProgressBarWrapper;
  } else if (size === 'medium') {
    Component = MediumProgressBarWrapper;
  } else if (size === 'small') {
    Component = SmallProgressBarWrapper;
  } else {
    throw new Error(`Unrecognized Progress Bar size ${size}`);
  }

  return (
    <Component
      role="progresssbar"
      aria-valuenow={value}
      aria-label="progress bar"
    >
      <ProgressBarSpan value={value}></ProgressBarSpan>
    </Component>
  );
};

const ProgressBarWrapperBase = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  width: 370px;
  background-color: ${COLORS.transparentGray15};
`;

const ProgressBarSpan = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${(props) =>
    props.value === 100 ? 8 + 'px' : '8px 0px 0px 8px'};
  width: ${(props) => props.value + '%'};
  height: 100%;
`;

const LargeProgressBarWrapper = styled(ProgressBarWrapperBase)`
  padding: 4px;
  height: 24px;
`;
const MediumProgressBarWrapper = styled(ProgressBarWrapperBase)`
  height: 12px;
  border-radius: 4px;
`;
const SmallProgressBarWrapper = styled(ProgressBarWrapperBase)`
  height: 8px;
  border-radius: 4px;
`;

export default ProgressBar;
