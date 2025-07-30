"use client"
import Table from "./table/lab-table"
export default function LabResults() {
       return <>
             <div className="ml-[400px] pt-[150px]">
                   <div className="appointment-section flex items-center ">
                         <div className="header-section">
                         <h1 className="text-[22px]">Lab Results</h1>
                         <p> Get your lab result fast </p>
                         </div>
                   </div>
                   <Table/>
            </div>
       </>
}