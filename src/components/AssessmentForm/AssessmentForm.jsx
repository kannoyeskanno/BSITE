import React, { useState } from 'react';

const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Experience with Basketball Facilities</label>
        <input
          type="text"
          name="experience"
          className="form-control"
          value={formData.experience}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Feedback</label>
        <textarea
          name="feedback"
          className="form-control"
          value={formData.feedback}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AssessmentForm;
