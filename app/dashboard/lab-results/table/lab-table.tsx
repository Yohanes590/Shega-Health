"use client"
export default function Table() {
  return (
    <>
      <div className="appointment-section mt-[50px] px-4">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden cursor-default">
          <thead className="bg-[#00566134]">
            <tr>
              <th className="py-3 px-4 border-b text-left text-gray-700">Doctor / Service</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Date</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Time</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Status</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">Dr. John Doe</td>
              <td className="py-3 px-4 border-b">2025-08-01</td>
              <td className="py-3 px-4 border-b">10:00 AM</td>
              <td className="py-3 px-4 border-b text-green-600 font-medium">Confirmed</td>
              <td className="py-3 px-4 border-b">
                <button className="text-red-500 hover:underline mr-3">Cancel</button>
              </td>
            </tr>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">General Check-up</td>
              <td className="py-3 px-4 border-b">2025-08-02</td>
              <td className="py-3 px-4 border-b">02:30 PM</td>
              <td className="py-3 px-4 border-b text-yellow-500 font-medium">Pending</td>
              <td className="py-3 px-4 border-b">
                <button className="text-red-500 hover:underline">Cancel</button>
              </td>
            </tr>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">Dr. Jane Smith</td>
              <td className="py-3 px-4 border-b">2025-07-25</td>
              <td className="py-3 px-4 border-b">09:00 AM</td>
              <td className="py-3 px-4 border-b text-gray-500 font-medium">Completed</td>
              <td className="py-3 px-4 border-b">
                <button className="text-blue-500 hover:underline">View Summary</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
