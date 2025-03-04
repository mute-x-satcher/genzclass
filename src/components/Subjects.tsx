import React from 'react';
import { Book, GraduationCap, Beaker } from 'lucide-react';

const SubjectSection = ({ title, subjects }: { title: string; subjects: string[] }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-2">
      {subjects.map((subject, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <Book className="w-4 h-4 mr-2 text-indigo-600" />
          {subject}
        </li>
      ))}
    </ul>
  </div>
);

const Subjects = () => {
  const subjectsData = [
    {
      title: "For 1st to 4th Standard",
      icon: <Book className="w-12 h-12 text-indigo-600" />,
      subjects: ["Maths", "Science", "English", "Marathi", "History", "Geography"]
    },
    {
      title: "For 5th to 10th Standard",
      icon: <GraduationCap className="w-12 h-12 text-indigo-600" />,
      subjects: ["Maths 1", "Maths 2", "Science 1", "Science 2", "Marathi", "English", "Geography", "History"]
    },
    {
      title: "For 11th and 12th Standard",
      icon: <Beaker className="w-12 h-12 text-indigo-600" />,
      subjects: ["Physics", "Chemistry", "Maths", "English"]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Subjects that we teach
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive curriculum designed for SSC and CBSE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjectsData.map((section, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6">{section.icon}</div>
              <SubjectSection title={section.title} subjects={section.subjects} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
