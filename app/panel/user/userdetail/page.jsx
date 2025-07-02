'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Pencil, EnvelopeSimple, Phone, MapPin, Calendar, Briefcase, GraduationCap, Clock, Trophy, CaretLeft } from '@phosphor-icons/react';
import AdminNavbar from '@/components/admin-navbar';
import Footer from '@/components/admin-footer';
import { useRouter } from 'next/navigation';


const UserDetail = () => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Anand Jethava',
    employeeId: 'EMP001',
    role: 'Senior Software Engineer',
    email: 'anand.jethava@example.com',
    phone: '+91 9876543210',
    location: 'Ahmedabad, Gujarat',
    joinDate: 'January 15, 2022',
    department: 'Engineering',
    reportingTo: 'John Smith',
    workLocation: 'Main Office - 3rd Floor',
    shift: '9:00 AM - 6:00 PM',
    education: 'B.Tech in Computer Science',
    experience: '5+ years',
    salary: {
      basic: '75,000',
      hra: '30,000',
      allowances: '15,000',
      total: '120,000'
    },
    attendance: {
      present: 22,
      absent: 1,
      leaves: 2,
      totalWorkingDays: 25
    },
    performance: {
      currentRating: 4.5,
      lastReview: 'Excellent performance in leading the cloud migration project',
      reviewDate: 'March 15, 2024',
      goals: [
        'Complete AWS certification by Q2 2024',
        'Mentor 2 junior developers',
        'Improve team code quality metrics by 20%'
      ]
    },
    achievements: [
      'Employee of the Month - March 2023',
      'Best Team Lead Award 2022',
      'Innovation Excellence Award',
      'Outstanding Performance Award',
      'Top Performer Award',
      'Team Builder Award',
      'Team Leader Award'
    ],
    skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'],
    projects: [
      {
        name: 'E-Commerce Platform Redesign',
        role: 'Tech Lead',
        duration: '6 months',
        status: 'Completed',
        progress: 100,
        description: 'Led the complete redesign of the e-commerce platform using modern technologies.'
      },
      {
        name: 'Cloud Migration Project',
        role: 'Senior Developer',
        duration: '4 months',
        status: 'In Progress',
        progress: 65,
        description: 'Leading the migration of on-premise infrastructure to AWS cloud.'
      },
      {
        name: 'API Modernization',
        role: 'Technical Architect',
        duration: '3 months',
        status: 'In Progress',
        progress: 30,
        description: 'Modernizing legacy APIs to RESTful microservices architecture.'
      }
    ],
    recentActivity: [
      {
        type: 'Project Update',
        description: 'Completed the frontend migration to Next.js',
        date: '2 days ago'
      },
      {
        type: 'Achievement',
        description: 'Received appreciation for code quality improvement',
        date: '1 week ago'
      },
      {
        type: 'Task',
        description: 'Completed task #456: Implement user authentication feature',
        date: '3 days ago'
      },
      {
        type: 'Project Update',
        description: 'Completed the backend migration to Express.js',
        date: '2 days ago'
      },
      {
        type: 'Task',
        description: 'Completed task #123: Implement user registration feature',
        date: '2 days ago'
      }
    ],
    dailyUpdates: [
      {
        type: 'Project Update',
        description: 'Completed the backend migration to Express.js',
        date: '2 days ago'
      },
      {
        type: 'Task',
        description: 'Completed task #123: Implement user registration feature',
        date: '2 days ago'
      },
      {
        type: 'Task',
        description: 'Completed task #456: Implement user authentication feature',
        date: '3 days ago'
      },
      {
        type: 'Project Update',
        description: 'Completed the frontend migration to Next.js',
        date: '2 days ago'
      },
      {
        type: 'Achievement',
        description: 'Received appreciation for code quality improvement',
        date: '1 week ago'
      },
      {
        type: 'Task',
        description: 'Completed task #789: Implement user profile feature',
        date: '4 days ago'
      },
      {
        type: 'Project Update',
        description: 'Completed the backend migration to Express.js',
        date: '2 days ago'
      },
      {
        type: 'Task',
        description: 'Completed task #123: Implement user registration feature',
        date: '2 days ago'
      },
      {
        type: 'Task',
        description: 'Completed task #456: Implement user authentication feature',
        date: '3 days ago'
      },
      {
        type: 'Project Update',
        description: 'Completed the frontend migration to Next.js',
        date: '2 days ago'
      },
      {
        type: 'Achievement',
        description: 'Received appreciation for code quality improvement',
        date: '1 week ago'
      },
      {
        type: 'Task',
        description: 'Completed task #789: Implement user profile feature',
        date: '4 days ago'
      }
    ]
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
    // Implement edit functionality
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminNavbar />
      <div className="flex">
        <main className="flex-1 mt-10 p-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-2"
          >
            <CaretLeft size={20} />
            <span>Back</span>
          </button>
          {/* Employee Header Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-6">
                <Image
                  src="/image/profile.png"
                  alt={userData.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
                  <p className="text-gray-600">{userData.role} - {userData.employeeId}</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <EnvelopeSimple size={20} />
                      <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={20} />
                      <span>{userData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={20} />
                      <span>{userData.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Employment Details */}
            <div className="col-span-3 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl text-gray-800 font-semibold mb-4">Employment Details</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Reporting To</p>
                  <p className="text-gray-700">{userData.reportingTo}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Work Location</p>
                  <p className="text-gray-700">{userData.workLocation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Shift Timing</p>
                  <p className="text-gray-700">{userData.shift}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg text-gray-800 font-semibold mb-3">Salary Structure</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Basic</p>
                    <p className="text-lg font-semibold text-gray-700">₹{userData.salary.basic}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">HRA</p>
                    <p className="text-lg font-semibold text-gray-700">₹{userData.salary.hra}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Allowances</p>
                    <p className="text-lg font-semibold text-gray-700">₹{userData.salary.allowances}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-lg font-semibold text-gray-700">₹{userData.salary.total}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg text-gray-800 font-semibold mb-3">Monthly Attendance</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Present Days</p>
                    <p className="text-lg font-semibold text-gray-700">{userData.attendance.present}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Absent Days</p>
                    <p className="text-lg font-semibold text-gray-700">{userData.attendance.absent}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Leaves Taken</p>
                    <p className="text-lg font-semibold text-gray-700">{userData.attendance.leaves}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Working Days</p>
                    <p className="text-lg font-semibold text-gray-700">{userData.attendance.totalWorkingDays}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Performance Review */}
            <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl text-gray-800 font-semibold mb-4">Performance Review</h2>
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600">{userData.performance.currentRating}/5.0</div>
                  <div className="flex-1">
                    <p className="text-gray-700">{userData.performance.lastReview}</p>
                    <p className="text-sm text-gray-500">Last reviewed on {userData.performance.reviewDate}</p>
                  </div>
                </div>
                <h3 className="text-lg text-gray-800 font-semibold mb-2">Current Goals</h3>
                <ul className="list-disc list-inside space-y-2">
                  {userData.performance.goals.map((goal, index) => (
                    <li key={index} className="text-gray-700">{goal}</li>
                  ))}
                </ul>
              </div>

              {/* Work Information */}
              <h2 className="text-xl text-gray-800 font-semibold mb-4">Work Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Join Date</p>
                    <p className="text-gray-700">{userData.joinDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="text-gray-700">{userData.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={20} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="text-gray-700">{userData.education}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="text-gray-700">{userData.experience}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-6">
                <h3 className="text-lg text-gray-800 font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mt-6">
                <h3 className="text-lg text-gray-800 font-semibold mb-3">Projects</h3>
                <div className="space-y-2 overflow-y-auto max-h-115 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
                  {userData.projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-800">{project.name}</h4>
                          <p className="text-gray-600 text-sm">{project.role}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${project.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                            }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">{project.description}</p>
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-600">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${project.status === 'Completed' ? 'bg-green-600' : 'bg-blue-600'}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mt-2">Duration: {project.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements and Activity */}
            <div className="col-span-1 space-y-6">
              {/* Achievements */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl text-gray-800 font-semibold mb-4 flex items-center gap-2">
                  <Trophy size={24} className="text-yellow-500" />
                  Achievements
                </h2>
                <div className="space-y-3 overflow-y-auto max-h-60 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
                  {userData.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg text-gray-700 text-sm"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl text-gray-800 font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4 overflow-y-auto max-h-70 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
                  {userData.recentActivity.map((activity, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4 pb-4">
                      <p className="text-sm font-semibold text-gray-700">{activity.type}</p>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add more sections as needed */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className='text-xl text-gray-800 font-semibold mb-4'>Daily Updates</h2>
                <div className="space-y-4 overflow-y-auto max-h-70 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
                  {userData.dailyUpdates.map((update, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4 pb-4">
                      <h6 className='text-sm font-semibold text-gray-700'>{update.type}</h6>
                      <p className="text-sm font-semibold text-gray-700">{update.date}</p>
                      <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDetail;