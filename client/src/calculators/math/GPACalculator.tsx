import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultCard from "@/components/ResultCard";
import { formatNumber } from "@/lib/utils";

interface Course {
  id: number;
  name: string;
  grade: string;
  credits: number;
}

const gradePoints: { [key: string]: number } = {
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.7,
  "D+": 1.3,
  "D": 1.0,
  "F": 0.0,
};

const gradeColors: { [key: string]: string } = {
  "A": "#10b981",
  "A-": "#34d399",
  "B+": "#60a5fa",
  "B": "#3b82f6",
  "B-": "#6366f1",
  "C+": "#f59e0b",
  "C": "#f97316",
  "C-": "#ef4444",
  "D+": "#dc2626",
  "D": "#991b1b",
  "F": "#7f1d1d",
};

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: "Mathematics", grade: "A", credits: 3 },
    { id: 2, name: "Physics", grade: "B+", credits: 4 },
    { id: 3, name: "Chemistry", grade: "A-", credits: 3 },
  ]);

  const addCourse = () => {
    const newId = Math.max(...courses.map(c => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: "", grade: "B", credits: 3 }]);
  };

  const removeCourse = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const updateCourse = (id: number, field: keyof Course, value: any) => {
    setCourses(courses.map(c =>
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  // Calculate GPA
  let totalQualityPoints = 0;
  let totalCredits = 0;
  const gradeCounts: { [key: string]: number } = {};

  courses.forEach(course => {
    const points = gradePoints[course.grade] || 0;
    const qualityPoints = points * course.credits;
    totalQualityPoints += qualityPoints;
    totalCredits += course.credits;
    gradeCounts[course.grade] = (gradeCounts[course.grade] || 0) + 1;
  });

  const gpa = totalCredits > 0 ? totalQualityPoints / totalCredits : 0;

  const pieData = Object.entries(gradeCounts).map(([grade, count]) => ({
    name: grade,
    value: count,
    fill: gradeColors[grade],
  }));

  const results = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ResultCard label="Semester GPA" value={formatNumber(gpa, 2)} highlight />
      <ResultCard label="Total Quality Points" value={formatNumber(totalQualityPoints, 2)} />
      <ResultCard label="Total Credit Hours" value={totalCredits.toString()} />
      <ResultCard label="Average Grade Points" value={formatNumber(totalQualityPoints / Math.max(courses.length, 1), 2)} />
    </div>
  );

  const chart = (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Grade Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const educational = (
    <div className="space-y-4 text-gray-700">
      <p>
        A Grade Point Average (GPA) is a numerical representation of a student's academic performance, calculated by converting letter grades into numerical values and averaging them. Most educational institutions use a 4.0 scale, where A = 4.0, B = 3.0, C = 2.0, D = 1.0, and F = 0.0. GPA is a crucial metric used in college admissions, scholarship applications, hiring decisions, and academic standing determinations. A strong GPA demonstrates consistent academic achievement and commitment to learning.
      </p>

      <p>
        <strong>Calculating Weighted GPA:</strong> A weighted GPA accounts for the number of credit hours (also called units or credits) for each course. Courses with more credit hours have greater weight in the overall GPA calculation. To calculate weighted GPA, multiply each course's grade points by its credit hours, sum all the quality points, and divide by the total credit hours. For example, if you earned an A (4.0) in a 4-credit course and a B (3.0) in a 3-credit course, your GPA would be (4.0×4 + 3.0×3) ÷ 7 = 3.57.
      </p>

      <p>
        <strong>Grade Scale Variations:</strong> Different institutions may use slightly different grading scales. Some use a 4.0 scale with no +/- modifications, while others incorporate plus and minus grades (A-, B+, etc.) for more granular assessment. Some universities also use different scales for major-specific or honors courses. It's important to understand your institution's specific grading scale when calculating your GPA. Unweighted GPA simply averages grade points without considering credit hours.
      </p>

      <p>
        <strong>Impact and Applications:</strong> GPA affects eligibility for scholarships, academic honors, dean's lists, and graduate school admissions. Employers often review GPA when hiring recent graduates, especially for competitive positions. Maintaining a strong GPA (typically 3.5 or higher) opens doors to better academic and professional opportunities. However, GPA is just one metric of academic success and doesn't measure creativity, practical skills, or real-world problem-solving abilities that are equally important in education and careers.
      </p>
    </div>
  );

  return (
    <CalculatorLayout
      title="GPA Calculator"
      description="Calculate your semester GPA based on courses, grades, and credit hours"
      slug="gpa-calculator"
      results={results}
      chart={chart}
      educational={educational}
    >
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-3">Courses</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-3 rounded border border-gray-200 flex gap-2 items-end">
                <input
                  type="text"
                  placeholder="Course name"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                />
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                  {Object.keys(gradePoints).map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Credits"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, "credits", Math.max(0, parseInt(e.target.value) || 0))}
                  min="0"
                  max="6"
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                />
                <button
                  onClick={() => removeCourse(course.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={addCourse}
          disabled={courses.length >= 8}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          + Add Course (Max 8)
        </button>
      </div>
    </CalculatorLayout>
  );
}
