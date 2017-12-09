import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from './../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return (
      _.map(formFields, ({ label, name }) => {
        return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      })
    );
  }

  render() {
    return (
      <div>
        {/* handleSubmit is provided by reduxForm */}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next<i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

// if errors is returned as an empty object, everything works
function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      if (name !== 'recipients') {
        errors[name] = `Please provide a ${name}`;
      } else {
        errors[name] = 'Please provide a comma separated email list';
      }
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  // this keeps the values around
  destroyOnUnmount: false
})(SurveyForm);
