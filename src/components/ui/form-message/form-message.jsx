import React from 'react';
import PropTypes, { shape } from 'prop-types';

function FormMessage(props) {
  const {formErrors} = props;

  return (
    <div className='sign-in__message'>
      {formErrors.map(({field, message}) => (
        <p key={field}>{message}</p>
      ))}
    </div>
  );
}

FormMessage.propTypes = {
  formErrors: PropTypes.arrayOf(shape({
    field: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
};

export default FormMessage;
