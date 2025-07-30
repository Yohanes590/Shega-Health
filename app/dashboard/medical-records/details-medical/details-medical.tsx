"use client"
export default function MedicalDetails() {
      const closeWindow = () => {
            const window_element = document.querySelector(".medical-detail-focus") as HTMLElement
            window_element.style.display="none"
      }
      return <>
            <div className="medical-detail-focus fixed hidden justify-center items-center z-50 w-full h-screen bg-[#00000086] backdrop-blur-[10px]">
      {/* Wrapper Box */}
      <div className="bg-white rounded-lg shadow p-6 max-w-3xl relative">
        {/* Back Button */}
      <button
            onClick={closeWindow}
          className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-black transition"
        >
          Back
        </button>

        <h2 className="text-2xl font-bold mb-4">Medical Record Details</h2>

        {/* Patient Info Box */}
        <div className="border rounded p-4 mb-4">
          <p className="mb-2">
            <strong>Patient Name:</strong> John Doe
          </p>
          <p className="mb-2">
            <strong>Patient ID:</strong> SC-123456789
          </p>
          <p className="mb-2">
            <strong>Date of Visit:</strong> 2025-07-25
          </p>
        </div>

        {/* Diagnosis Box */}
        <div className="border rounded p-4 mb-4">
          <h3 className="font-semibold text-lg mb-2">Diagnosis</h3>
          <p className="text-gray-700">
            Acute Bronchitis - symptoms include coughing, chest congestion and
            fatigue.
          </p>
        </div>

        {/* Prescription Box */}
        <div className="border rounded p-4 mb-4">
          <h3 className="font-semibold text-lg mb-2">Prescribed Medications</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Amoxicillin 500mg - 3 times daily</li>
            <li>Cough Syrup - as needed</li>
            <li>Vitamin C - once daily</li>
          </ul>
        </div>

        {/* Doctor Info Box */}
        <div className="border rounded p-4">
          <h3 className="font-semibold text-lg mb-2">Doctor</h3>
          <p>
            <strong>Name:</strong> Dr. Jane Smith
          </p>
          <p>
            <strong>Specialization:</strong> Pulmonologist
          </p>
        </div>
      </div>
    </div>
      </>
}