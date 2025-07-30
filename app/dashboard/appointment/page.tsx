"use client"
import Table from "./table/table"
export default function AppointmentFunction() {
      return <>
            <div className="ml-[400px] pt-[150px]">
                  <div className="appointment-section flex items-center ">
                        <div className="header-section">
                        <h1 className="text-[22px]">Appointment</h1>
                        <p>appointment get your appointment section</p>
                        </div>
                        <div className="button absolute right-[35px]">
                         <button className="cursor-pointer h-[50px] w-[200px] text-[white] bg-green-500 hover:bg-green-700">Add Appointment</button>
                        </div>
                  </div>
                  <Table/>
           </div>
      </>
}