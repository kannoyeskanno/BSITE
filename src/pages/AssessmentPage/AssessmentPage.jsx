import React from 'react';
import AssessmentForm from '../../components/AssessmentForm/AssessmentForm';

const AssessmentPage = () => {
  return (
    <div className="container my-5">
      <h2>Basketball Facility and Equipment Assessment</h2>
      <p>
        Please provide your feedback on the quality of the basketball facilities and equipment at DQLNHS.
      </p>
      <AssessmentForm />
    </div>
  );
};

export default AssessmentPage;
