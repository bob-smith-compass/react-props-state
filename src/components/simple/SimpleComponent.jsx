import React from 'react';
import PropTypes from 'prop-types';

export default function SimpleComponent(props) {
  return (
    <div>
      {new Date().toISOString()}
      <div>
        {props.name} - {props.title}
      </div>
    </div>
  )
}
SimpleComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string
}