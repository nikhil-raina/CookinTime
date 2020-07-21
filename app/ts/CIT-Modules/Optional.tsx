/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ViewPropTypes,
} from 'react-native';

const Optional = (props) => {
  const { children, hide, style } = props;
  if (!hide) {
    return (
      <View style={style}>
        { children }
      </View>
    );
  }
  return null;
};

Optional.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ])),
  ]).isRequired,
  style: ViewPropTypes.style,
  hide: PropTypes.bool,
};

export default Optional;
