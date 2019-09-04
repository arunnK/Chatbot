import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({
  placeholder, disabled, value, ...restProps
}) => {
  const blockName = 'input-container';

  return (
    <React.Fragment>
      <FormControl
        className={blockName}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        type="text"
        {...restProps}
      />
    </React.Fragment>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  value: ''
};

export default Input;
