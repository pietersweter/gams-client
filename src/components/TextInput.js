import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import generateUniqueId from '../helpers/generateUniqueId';

const InputGroup = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.accent.secondary};
  margin: 1rem 0;
  padding: 0 1rem;
`;

const InputLabel = styled.label`
  position: absolute;
  display: block;
  pointer-events: none;
  color: ${({ theme }) => theme.color.accent.secondary};
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  opacity: 0;
  top: 1rem;
  transition: 
    ${({ theme }) => theme.visuals.transition.quick},
    top ${({ theme }) => theme.visuals.transition.base};

  ${({ isActive, theme }) => isActive && css`
    top: -1rem;
    opacity: 1;
  `}
`;

const InputElement = styled.input`
  border: none;
  color: ${({ theme }) => theme.color.accent.primary};
  width: 100%;
  height: 2rem;
  background-color: initial;

  &::placeholder {
    color: ${({ theme }) => theme.color.text.secondary};
  }

  &:focus {
    outline: 0;
    border-bottom-color: ${({ theme }) => theme.color.accent.primary.light};
  }
`;

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.uniqueId = generateUniqueId();

    this.state = {
      isFocused: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur() {
    this.setState({ isFocused: false });
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  render() {
    const { isFocused } = this.state;
    const {
      value, placeholder, type, name, onChange, required,
    } = this.props;
    const isFilled = value !== '';

    return (
      <InputGroup>
        <InputLabel
          htmlFor={this.id}
          isActive={isFocused || isFilled}
        >
          {placeholder}
        </InputLabel>
        <InputElement
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          aria-label={name}
          id={this.uniqueId}
          // onFocus={this.handleFocus}
          // onBlur={this.handleBlur}
          onChange={onChange}
          isFilled={isFilled}
          required={required}
        />
      </InputGroup>
    );
  }
}

TextInput.defaultProps = {
  required: false,
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default TextInput;
