import React, { useState } from 'react';
import axios from 'axios';

const COPDForm = () => {
  const [formData, setFormData] = useState({
    Age: '',
    PackHistory: '',
    MWT1Best: '',
    FEV1: '',
    gender: '',
    FEV1PRED: '',
    FVC: '',
    FVCPRED: '',
    CAT: '',
    HAD: '',
    SGRQ: '',
    AGEquartiles: '',
    smoking: '',
    Diabetes: '',
    muscular: '',
    hypertension: '',
    AtrialFib: '',
    IHD: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormFilled()) {
      try {
        const response = await axios.post('https://copd-model-cluster.onrender.com/predict-copd/', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setResult(response.data.predicted_label);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  const isInvalid = (value) => value === '';
  const isFormFilled = () => {
    for (const key in formData) {
      if (isInvalid(formData[key])) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className='flex flex-col items-center'>
            <div className='w-full md:w-3/4 lg:w-1/2'>
        {result && (
          <div className="p-4 bg-green-100 rounded-md shadow-md text-center">
            <h3 className="text-lg font-semibold mb-4">Prediction Result</h3>
            <h4 className='text-xl font-bold text-blue-700'>{result}</h4>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="md:mt-8 p-4 bg-gray-100 rounded-md shadow-md w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4">COPD Prediction Form</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="Age" className="block mb-2">Age</label>
            <input type="number" id="Age" name="Age" value={formData.Age} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.Age) ? 'border-red-500' : ''}`} />
          </div>
          <div>
  <label htmlFor="PackHistory" className="block mb-2">Pack History</label>
  <input type="number" id="PackHistory" name="PackHistory" value={formData.PackHistory} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.PackHistory) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="MWT1Best" className="block mb-2">Best distance walked in 6 minutes test (meters)</label>
  <input type="number" id="MWT1Best" name="MWT1Best" value={formData.MWT1Best} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.MWT1Best) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="FEV1" className="block mb-2">Forced Expiratory Volume in 1 second (liters)</label>
  <input type="number" id="FEV1" name="FEV1" value={formData.FEV1} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.FEV1) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="gender" className="block mb-2">Gender</label>
  <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.gender) ? 'border-red-500' : ''}`}>
    <option value="">Select Gender</option>
    <option value="0">Female</option>
    <option value="1">Male</option>
  </select>
</div>
<div>
  <label htmlFor="FEV1PRED" className="block mb-2">Predicted FEV1 (liters)</label>
  <input type="number" id="FEV1PRED" name="FEV1PRED" value={formData.FEV1PRED} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.FEV1PRED) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="FVC" className="block mb-2">Forced Vital Capacity (liters)</label>
  <input type="number" id="FVC" name="FVC" value={formData.FVC} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.FVC) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="FVCPRED" className="block mb-2">Predicted FVC (liters)</label>
  <input type="number" id="FVCPRED" name="FVCPRED" value={formData.FVCPRED} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.FVCPRED) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="CAT" className="block mb-2">COPD Assessment Test score</label>
  <input type="number" id="CAT" name="CAT" value={formData.CAT} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.CAT) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="HAD" className="block mb-2">Hospital Anxiety and Depression score</label>
  <input type="number" id="HAD" name="HAD" value={formData.HAD} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.HAD) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="SGRQ" className="block mb-2">St. George's Respiratory Questionnaire score</label>
  <input type="number" id="SGRQ" name="SGRQ" value={formData.SGRQ} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.SGRQ) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="AGEquartiles" className="block mb-2">Age Quartiles</label>
  <input type="number" id="AGEquartiles" name="AGEquartiles" value={formData.AGEquartiles} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.AGEquartiles) ? 'border-red-500' : ''}`} />
</div>
<div>
  <label htmlFor="smoking" className="block mb-2">Smoking Status</label>
  <select id="smoking" name="smoking" value={formData.smoking} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.smoking) ? 'border-red-500' : ''}`}>
    <option value="">Select Smoking Status</option>
    <option value="0">Non-smoker</option>
    <option value="1">Smoker</option>
  </select>
</div>
<div>
  <label htmlFor="Diabetes" className="block mb-2">Diabetes Status</label>
  <select id="Diabetes" name="Diabetes" value={formData.Diabetes} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.Diabetes) ? 'border-red-500' : ''}`}>
    <option value="">Select Diabetes Status</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
  </select>
</div>
<div>
  <label htmlFor="muscular" className="block mb-2">Muscular Disease Status</label>
  <select id="muscular" name="muscular" value={formData.muscular} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.muscular) ? 'border-red-500' : ''}`}>
    <option value="">Select Muscular Disease Status</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
  </select>
</div>
<div>
  <label htmlFor="hypertension" className="block mb-2">Hypertension Status</label>
  <select id="hypertension" name="hypertension" value={formData.hypertension} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.hypertension) ? 'border-red-500' : ''}`}>
    <option value="">Select Hypertension Status</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
  </select>
</div>
<div>
  <label htmlFor="AtrialFib" className="block mb-2">Atrial Fibrillation Status</label>
  <select id="AtrialFib" name="AtrialFib" value={formData.AtrialFib} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.AtrialFib) ? 'border-red-500' : ''}`}>
    <option value="">Select Atrial Fibrillation Status</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
  </select>
</div>
<div>
  <label htmlFor="IHD" className="block mb-2">Ischemic Heart Disease Status</label>
  <select id="IHD" name="IHD" value={formData.IHD} onChange={handleChange} className={`border border-gray-300 rounded-md p-2 w-full ${isInvalid(formData.IHD) ? 'border-red-500' : ''}`}>
    <option value="">Select Ischemic Heart Disease Status</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
  </select>
</div>

        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
        >
          Submit
        </button>
      </form>

    </div>
  );
};

export default COPDForm;
