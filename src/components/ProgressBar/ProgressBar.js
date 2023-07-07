/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

let styles = {
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--border-radius': 8 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--border-radius': 4 + 'px',
    '--padding': 0 + 'px',
  },
  small: {
    '--height': 8 + 'px',
    '--border-radius': 4 + 'px',
    '--padding': 0 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  let style = styles[size];

  return (
    <Wrapper
      style={style}
      role="progresssbar"
      aria-valuenow={value}
      aria-label="progress bar"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <VisuallyHidden>{value}</VisuallyHidden>
        <ProgressBarSpan value={value}></ProgressBarSpan>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  padding: var(--padding);
  height: var(--height);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is full. */
  overflow: hidden;
  height: 100%;
  width: auton;
`;

const ProgressBarSpan = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 8px 0px 0px 8px;
  width: ${(props) => props.value + '%'};
  height: 100%;
`;

export default ProgressBar;
