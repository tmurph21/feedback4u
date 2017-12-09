import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: '0.5rem' }} {...input} />
      <div className="red-text" style={{ marginBottom: '1rem' }}>
        {touched && error}
      </div>
    </div>
  );
};
