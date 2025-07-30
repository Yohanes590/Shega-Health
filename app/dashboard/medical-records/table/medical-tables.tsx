"use client"
export default function MedicalTable() {
        const OpenWindow = () => {
            const window_element = document.querySelector(".medical-detail-focus") as HTMLElement
            window_element.style.display="flex"
      }
  return (
    <>
      <div className="medical-section mt-[50px] px-4">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden cursor-default">
          <thead className="bg-[#00566134]">
            <tr>
              <th className="py-3 px-4 border-b text-left text-gray-700">Record ID</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Date</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Diagnosis</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Doctor</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">#MR-101</td>
              <td className="py-3 px-4 border-b">2025-07-20</td>
              <td className="py-3 px-4 border-b">Hypertension</td>
              <td className="py-3 px-4 border-b">Dr. John Doe</td>
              <td className="py-3 px-4 border-b">
                <button onClick={OpenWindow} className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">#MR-102</td>
              <td className="py-3 px-4 border-b">2025-07-28</td>
              <td className="py-3 px-4 border-b">Diabetes Check</td>
              <td className="py-3 px-4 border-b">Dr. Jane Smith</td>
              <td className="py-3 px-4 border-b">
                <button onClick={OpenWindow} className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">#MR-103</td>
              <td className="py-3 px-4 border-b">2025-07-29</td>
              <td className="py-3 px-4 border-b">Annual Physical</td>
              <td className="py-3 px-4 border-b">Dr. Ahmed Musa</td>
              <td className="py-3 px-4 border-b">
                <button onClick={OpenWindow} className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
