import React from 'react';
import Icon from './Icon';

const Filter = props => (
  <Icon {...props}>
    {ownProps => (
      <g>
        <path
          {...ownProps}
          d="M31,5H5A2,2,0,0,0,3,7V29a2,2,0,0,0,2,2H31a2,2,0,0,0,2-2V7A2,2,0,0,0,31,5ZM13,29H5V7h8Zm10,0H15V7h8Z"
        />
      </g>
    )}
  </Icon>
);

Filter.displayName = 'Filter';

export default Filter;
