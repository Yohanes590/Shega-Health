export default function PrescriptionTable() {
  return (
    <>
      <div className="prescription-section mt-[50px] px-4">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden cursor-default">
          <thead className="bg-[#00566134]">
            <tr>
              <th className="py-3 px-4 border-b text-left text-gray-700">Prescription ID</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Date</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Doctor</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Medications</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">#PR-2001</td>
              <td className="py-3 px-4 border-b">2025-07-20</td>
              <td className="py-3 px-4 border-b">Dr. John Doe</td>
              <td className="py-3 px-4 border-b">Paracetamol 500mg, Ibuprofen 200mg</td>
              <td className="py-3 px-4 border-b">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">#PR-2002</td>
              <td className="py-3 px-4 border-b">2025-07-28</td>
              <td className="py-3 px-4 border-b">Dr. Jane Smith</td>
              <td className="py-3 px-4 border-b">Amoxicillin 250mg, Vitamin C 500mg</td>
              <td className="py-3 px-4 border-b">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
            <tr className="hover:bg-[#d1ecff] cursor-pointer">
              <td className="py-3 px-4 border-b">#PR-2003</td>
              <td className="py-3 px-4 border-b">2025-07-29</td>
              <td className="py-3 px-4 border-b">Dr. Ahmed Musa</td>
              <td className="py-3 px-4 border-b">Metformin 500mg, Aspirin 81mg</td>
              <td className="py-3 px-4 border-b">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
