"use client"

import PrescriptionTable from "./table/pre-table"


export default function Prescriptions() {
      return <>
            <div className="ml-[400px] pt-[150px]">
                  <div className="appointment-section flex items-center ">
                  <div className="header-section">
                        <h1 className="text-[22px]">Medical Info</h1>
                  <p>get your medical information's </p>
                        </div>
                  </div>
                  <PrescriptionTable/>
            </div>
      </>
}