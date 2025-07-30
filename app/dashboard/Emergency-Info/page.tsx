export default function EmergencyInfoCard() {
  return (
    <div className="emergency-info pt-[150px] ml-[400px]">
      <div className="max-w-md bg-[#00566134] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#005661] mb-4">Emergency Information</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Name:</span>
            <span className="text-gray-900">John Doe</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Age / Gender:</span>
            <span className="text-gray-900">29 / Male</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Blood Type:</span>
            <span className="text-gray-900 font-semibold">O+</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Allergies:</span>
            <span className="text-gray-900">Peanuts</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Emergency Contact:</span>
            <span className="text-gray-900">Jane Doe - (123) 456-7890</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Conditions:</span>
            <span className="text-gray-900">Asthma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
