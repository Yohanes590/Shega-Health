export default function RootLayout({ children }: { children: React.ReactNode }) {
      return <>
             <div className="side-nav-bar bg-[var(--pri_color)] h-screen w-[350px] pt-[40px] fixed">
                  <div className="heading cursor-pointer pl-[30px] text-white font-bold text-[40px] ">
                        <h1>Shega <br/> Health</h1>
                  </div>  

                  <div className="sub-buttons pl-[20px] mt-[50px]">
                        <div className="hover-buttons1 bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Home</div>
                        <div className="hover-buttons2 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Card Info</div>
                        <div className="hover-buttons3 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Medical Records</div>
                        <div className="hover-buttons4 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Lab Results</div>
                        <div className="hover-buttons5 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Prescriptions</div>
                        <div className="hover-buttons6 transition-all duration-400 hover:bg-[var(--sec_color)] w-[90%] text-[18px] flex  pl-[20px] cursor-pointer items-center h-[50px] text-white rounded-[5px]">Emergency Info</div>
                  </div>

            </div>
            <div className="fixed right-[30px] mt-[20px] ">
            </div>
      {children}
      </>
}