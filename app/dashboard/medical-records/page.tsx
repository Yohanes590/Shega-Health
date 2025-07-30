"use client"
import MedicalDetails from "./details-medical/details-medical"
import MedicalTable from "./table/medical-tables"
export default function MedicalRecords() {
      return <>
                  <MedicalDetails/>
                  <div className="ml-[400px] pt-[150px]">
                        <div className="appointment-section flex items-center ">
                              <div className="header-section">
                              <h1 className="text-[22px]">Medical Info</h1>
                              <p>get your medical information's </p>
                              </div>
                  </div>
                  <MedicalTable />
                 </div>
      </>
}