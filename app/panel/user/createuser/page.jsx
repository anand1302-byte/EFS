'use client';
import { useState } from 'react';

const steps = ['Personal Info', 'Role & Department', 'Account Settings'];

export default function RegisterWizard() {
  const [step, setStep] = useState(0);
  const [sendWelcome, setSendWelcome] = useState(true);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    dateofbirth: '',
    maritalStatus: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    profile: null,
    resume: null,
    position: '',
    department: '',
    joiningDate: '',
    employeeType: '',
    reportingto: '',
    workLocation: '',
    workShift: '',
    sourcesofhire: '',
    salary: '',
    probationPeriod: '',
    status: 'Active',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => {
    const newErrors = validateStep(step);
    console.log('Validation errors:', newErrors); // ✅ See what’s blocking
    if (Object.keys(newErrors).length === 0) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      setErrors(newErrors);
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async () => {
    const finalErrors = validateStep(step, true);

    const Payload = {
      'fname': formData.firstname,
      'lname': formData.lastname,
      'email': formData.email,
      'phone': formData.phone,
      'gender': formData.gender,
      'dob': formData.dateofbirth,
      'marital': formData.maritalStatus,
      'address': formData.address,
      'city': formData.city,
      'state': formData.state,
      'country': formData.country,
      'zip': formData.zip,
      'position': formData.position,
      'department': formData.department,
      'joindate': formData.joiningDate,
      'emptype': formData.employeeType,
      'reporting': formData.reportingto,
      'worklocation': formData.workLocation,
      'workshift': formData.workShift,
      'sourceofhire': formData.sourcesofhire,
      'salary': formData.salary,
      'probation': formData.probationPeriod,
      'status': formData.status,
      'username': formData.username,
      'password': formData.password,
    }

    if (Object.keys(finalErrors).length === 0) {
      try {
        const response = await fetch('/api/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Payload),
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message || 'User created successfully!');
          setStep((prev) => Math.min(prev + 1, steps.length - 1));
          setSendWelcome(true);
        } else {
          alert(result.message || 'Something went wrong');
        }
      } catch (error) {
        alert('Error connecting to server');
        console.error(error);
      }
    } else {
      setErrors(finalErrors);
    }
  };

  const validateStep = (current, isFinal = false) => {
    const err = {};
    if (current === 0) {
      if (!formData.firstname) err.firstname = 'First name is required';
      if (!formData.lastname && !isFinal) err.lastname = 'Last name is required';
      if (!formData.lastname) err.lastname = 'Last name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) err.email = 'Valid email is required';
      if (!formData.phone) err.phone = 'Mobile number is required';
      if (!formData.gender) err.gender = 'Gender is required';
      if (!formData.dateofbirth) err.dateofbirth = 'Date of birth is required';
      if (!formData.maritalStatus) err.maritalStatus = 'Marital status is required';
      if (!formData.address) err.address = 'Address is required';
      if (!formData.city) err.city = 'City is required';
      if (!formData.state) err.state = 'State is required';
      if (!formData.country) err.country = 'Country is required';
      if (!formData.profile && !isFinal) err.profile = 'Profile picture is required';
    } else if (current === 1) {
      if (!formData.position) err.position = 'position is required';
      if (!formData.department) err.department = 'Department is required';
      if (!formData.joiningDate) err.joiningDate = 'Joining date required';
      if (!formData.employeeType) err.employeeType = 'Employee type is required';
      if (!formData.reportingto) err.reportingto = 'Reporting to is required';
      if (!formData.workLocation) err.workLocation = 'Work location is required';
      if (!formData.workShift) err.workShift = 'Work shift is required';
      if (!formData.sourcesofhire) err.sourcesofhire = 'Source of hire is required';
      if (!formData.salary) err.salary = 'Salary is required';
    } else if (current === 2) {
      if (!formData.username) err.username = 'Username is required';
      if (!formData.password) err.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) err.confirmPassword = 'Passwords do not match';
    }
    return err;
  };

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-slate-100 via-blue-100 to-white py-6 px-6 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-gray-200">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-10 relative">
          {steps.map((label, index) => (
            <div key={index} className="flex-1 text-center relative">
              {/* Connecting Line (Left) */}
              {index > 0 && (
                <div className="absolute top-5 left-0 w-1/2 h-1 z-[-1]">
                  <div className={`h-1 w-full rounded-full ${step >= index ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gray-300'
                    }`}></div>
                </div>
              )}
              {/* Connecting Line (Right) */}
              {index < steps.length - 1 && (
                <div className="absolute top-5 left-1/2 w-1/2 h-1 z-[-1]">
                  <div className={`h-1 w-full rounded-full ${step > index ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gray-300'
                    }`}></div>
                </div>
              )}

              {/* Step Circle */}
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= index
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                : 'bg-gray-200 text-gray-600'
                }`}>
                {index + 1}
              </div>
              <p className="text-sm text-gray-700 mt-2 font-medium">{label}</p>
            </div>
          ))}
        </div>



        {/* Form Sections */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 transition-all duration-300 ease-in-out">
          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <Input label="First Name*" name="firstname" type="text" value={formData.firstname} error={errors.firstname} onChange={handleChange} />
              <Input label="Last Name*" name="lastname" type="text" value={formData.lastname} error={errors.lastname} onChange={handleChange} />
              <Input label="Email Address*" name="email" type="email" value={formData.email} error={errors.email} onChange={handleChange} />
              <Input label="Phone Number*" name="phone" type="tel" pattern="[0-9]{10}" value={formData.phone} error={errors.phone} onChange={handleChange} />
              <Select label="Gender*" name="gender" value={formData.gender} onChange={handleChange} error={errors.gender} options={['Male', 'Female', 'Other']} />
              <Input label="Date of Birth*" name="dateofbirth" type="date" value={formData.dateofbirth} error={errors.dateofbirth} onChange={handleChange} />
              <Select label="Marital Status*" name="maritalStatus" value={formData.maritalStatus} error={errors.maritalStatus} onChange={handleChange} options={['Single', 'Married', 'Divorced', 'Widowed']} />
              <Input label="Address*" name="address" type="textarea" col={3} value={formData.address} error={errors.address} onChange={handleChange} />
              <Input label="City*" name="city" type="text" value={formData.city} error={errors.city} onChange={handleChange} />
              <Input label="State*" name="state" type="text" value={formData.state} error={errors.state} onChange={handleChange} />
              <Input label="Country" name="country" type="text" value={formData.country} error={errors.country} onChange={handleChange} />
              <Input label="ZIP Code" name="zip" type="text" value={formData.zip} error={errors.zip} onChange={handleChange} />
              <div className="col-span-1 md:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Profile Picture*</label>
                <label className="flex items-center justify-center px-4 py-4 bg-white border-2 border-dashed border-gray-300 rounded-xl shadow-sm hover:bg-blue-50 transition cursor-pointer">
                  <span className="text-sm text-gray-500">
                    {formData.profile ? `Uploaded: ${formData.profile.name}` : 'Click or drag to upload'}
                  </span>
                  <input
                    type="file"
                    name="profile"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
                {errors.profile && (
                  <p className="text-xs text-red-600 mt-1">{errors.profile}</p>
                )}
              </div>

              <div className="col-span-1 md:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Resume*</label>
                <label className="flex items-center justify-center px-4 py-4 bg-white border-2 border-dashed border-gray-300 rounded-xl shadow-sm hover:bg-blue-50 transition cursor-pointer">
                  <span className="text-sm text-gray-500">
                    {formData.resume ? `Uploaded: ${formData.resume.name}` : 'Click or drag to upload'}
                  </span>
                  <input
                    type="file"
                    name="resume"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
                {errors.resume && (
                  <p className="text-xs text-red-600 mt-1">{errors.resume}</p>
                )}
              </div>

            </div>
          )}

          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <Select label="Position" name="position" value={formData.jobTitle} onChange={handleChange} error={errors.jobTitle} options={["Software Engineer", "HR Manager", "Sales Executive", "Marketing Specialist", "Operations Manager"]} />
              <Select label="Department" name="department" value={formData.department} error={errors.department} onChange={handleChange} options={["Development", "HR", "Sales", "Marketing", "Operations"]} />
              <Input label="Joining Date" name="joiningDate" type="date" value={formData.joiningDate} error={errors.joiningDate} onChange={handleChange} />
              <Select label="Employee Type" name="employeeType" value={formData.employeeType} error={errors.employeeType} onChange={handleChange} options={["Full-time", "Part-time", "Contract", "Intern"]} />
              <Select label="Reporting To" name="reportingto" value={formData.reportingto} error={errors.reportingto} onChange={handleChange} options={["John Doe", "Jane Smith", "Bob Johnson", "Alice Brown"]} />
              <Input label="Work Location" name="workLocation" value={formData.workLocation} error={errors.workLocation} onChange={handleChange} />
              <Select label="Work Shift" name="workShift" value={formData.workShift} error={errors.workShift} onChange={handleChange} options={["Day", "Night", "Flexible"]} />
              <Select label="Source of Hire" name="sourcesofhire" value={formData.sourcesofhire} error={errors.sourcesofhire} onChange={handleChange} options={["Recruitment", "Referral", "Internship", "Other"]} />
              <Input label="Salary(CTC)" name="salary" type="number" value={formData.salary} error={errors.salary} onChange={handleChange} />
              <Input label="Probation Period" name="probationPeriod" value={formData.probationPeriod} error={errors.probationPeriod} onChange={handleChange} />
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <Input label="Username" name="username" value={formData.username} error={errors.username} onChange={handleChange} />
              <Input label="Password" name="password" type="password" value={formData.password} error={errors.password} onChange={handleChange} />
              <Input label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} error={errors.confirmPassword} onChange={handleChange} />

            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-5 flex justify-between">
          {step > 0 ? (
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 text-black font-semibold shadow-md hover:shadow-lg transition-all" onClick={prevStep}>
              Back
            </button>

          ) : <div />}
          {step < steps.length - 1 ? (
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition-all" onClick={nextStep}>
              Next
            </button>

          ) : (
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg transition-all" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange, type = 'text', error }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={`Enter ${label.replace('*', '')}`}
        className={`w-full px-4 py-2 rounded-xl border ${error ? 'border-red-400' : 'border-gray-300'
          } shadow-sm text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition`}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}


function Select({ label, name, value, onChange, options, error }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-xl border ${error ? 'border-red-400' : 'border-gray-300'
          } shadow-sm text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition`}
      >
        <option value="">Select {label.replace('*', '')}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
