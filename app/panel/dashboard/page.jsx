'use client';

import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar';
import AdminNavbar from '../../../components/admin-navbar';
import Footer from '../../../components/admin-footer';
import SummaryCard from '../../../components/summerycard';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

import { Users, Activity, ListTodo, TimerOff, CalendarCheck, CalendarClock, UserPlus, Bug, UserCircle, CheckCircle, AlertCircle, Clock } from "lucide-react";


const lineData = [
    { day: "Mon", tasks: 12 },
    { day: "Tue", tasks: 18 },
    { day: "Wed", tasks: 15 },
    { day: "Thu", tasks: 22 },
    { day: "Fri", tasks: 17 },
    { day: "Sat", tasks: 14 },
    { day: "Sun", tasks: 20 },
];

const pieData = [
    { name: "Development", value: 45 },
    { name: "HR", value: 20 },
    { name: "Sales", value: 25 },
    { name: "Interns", value: 10 },
];

const COLORS = ["#3B82F6", "#F59E0B", "#10B981", "#EF4444"];

const upcomingEvents = [
    { date: '2025-06-20', title: 'Team Meeting', assignedTo: 'Rohit', status: 'Scheduled' },
    { date: '2025-06-22', title: 'Client Presentation', assignedTo: 'Sana', status: 'Planned' },
    { date: '2025-06-25', title: 'Product Launch', assignedTo: 'Aisha', status: 'In Progress' },
];

const activities = [
    { icon: <CheckCircle className="text-green-500" size={20} />, message: 'Rohit marked Task #234 as done', time: '2 mins ago' },
    { icon: <Clock className="text-blue-500" size={20} />, message: 'Sana checked in at 9:05 AM', time: '30 mins ago' },
    { icon: <UserCircle className="text-purple-500" size={20} />, message: 'New employee Aisha added', time: '1 hour ago' },
    { icon: <AlertCircle className="text-red-500" size={20} />, message: 'Delayed Task: Task #207 (Intern Rahul)', time: '3 hours ago' },
];

const events = [
    { date: '2025-06-20', title: 'Team Meeting', assignedTo: 'Rohit', status: 'Scheduled' },
    { date: '2025-06-21', title: 'Product Review', assignedTo: 'Sana', status: 'Pending' },
    { date: '2025-06-22', title: 'Training Session', assignedTo: 'Aisha', status: 'Confirmed' },
    { date: '2025-06-23', title: 'Client Call', assignedTo: 'Rahul', status: 'Cancelled' },
];

export default function Dashboard() {
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All' ? events : events.filter(e => e.status === filter);
    const statusColor = {
        Scheduled: 'bg-blue-100 text-blue-600',
        Pending: 'bg-yellow-100 text-yellow-600',
        Confirmed: 'bg-green-100 text-green-600',
        Cancelled: 'bg-red-100 text-red-600',
    };

    return (
        <div className="bg-gray-100 min-h-screen min-w-screen ">
            <AdminNavbar />

            <main className="md:ml-64 pt-20 pb-16 px-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* Existing 4 Cards */}
                    <SummaryCard
                        title="Total Employees"
                        value="150"
                        icon={<Users className="text-blue-600" size={24} />}
                        color="from-blue-100 to-blue-50"
                    />
                    <SummaryCard
                        title="Active Users Today"
                        value="108"
                        icon={<Activity className="text-green-600" size={24} />}
                        color="from-green-100 to-green-50"
                    />
                    <SummaryCard
                        title="Ongoing Tasks"
                        value="38"
                        icon={<ListTodo className="text-yellow-600" size={24} />}
                        color="from-yellow-100 to-yellow-50"
                    />
                    <SummaryCard
                        title="Delayed Tasks"
                        value="12"
                        icon={<TimerOff className="text-red-600" size={24} />}
                        color="from-red-100 to-red-50"
                    />

                    {/* New 4 Cards */}
                    <SummaryCard
                        title="Tasks Completed"
                        value="92"
                        icon={<CheckCircle className="text-indigo-600" size={24} />}
                        color="from-indigo-100 to-indigo-50"
                    />
                    <SummaryCard
                        title="Pending Leave Requests"
                        value="6"
                        icon={<CalendarClock className="text-pink-600" size={24} />}
                        color="from-pink-100 to-pink-50"
                    />
                    <SummaryCard
                        title="New Joinees This Month"
                        value="5"
                        icon={<UserPlus className="text-teal-600" size={24} />}
                        color="from-teal-100 to-teal-50"
                    />
                    <SummaryCard
                        title="Issues Raised"
                        value="14"
                        icon={<Bug className="text-orange-600" size={24} />}
                        color="from-orange-100 to-orange-50"
                    />
                </div>

                {/* Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Line Chart */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks Completed Per Day</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="tasks"
                                    stroke="#3B82F6"
                                    strokeWidth={2}
                                    dot={{ r: 5 }}
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Department-wise Task Distribution</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Activity Feed & Events Table */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Activity Feed */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Activity Feed</h2>
                        <ul className="space-y-4 flex-1">
                            {activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="text-blue-600">{activity.icon}</div>
                                    <div>
                                        <p className="text-gray-800 font-medium">{activity.message}</p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Upcoming Events</h2>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="border border-gray-300 rounded px-3 py-1 text-sm text-black"
                            >
                                <option value="All">All</option>
                                <option value="Scheduled">Scheduled</option>
                                <option value="Pending">Pending</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <div className="overflow-x-auto flex-1">
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="text-left px-4 py-2">Date</th>
                                        <th className="text-left px-4 py-2">Title</th>
                                        <th className="text-left px-4 py-2">Assigned To</th>
                                        <th className="text-left px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {filtered.map((event, idx) => (
                                        <tr key={idx} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-2 whitespace-nowrap">{event.date}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{event.title}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{event.assignedTo}</td>
                                            <td className="px-4 py-2">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[event.status]}`}
                                                >
                                                    {event.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
