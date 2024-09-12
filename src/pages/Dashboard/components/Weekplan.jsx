import React from 'react'

function Weekplan() {
  return (
    <div className="p-4 bg-white rounded-lg border h-[290px] mt-3.5">
                <h2 className="text-base font-medium leading-[18px] mb-2">What's going on This Week</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#EFF0F6] h-[39px]">
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Project Name</th>
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Customer</th>
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Location</th>
                        <th className="px-6 py-3 text-[15px] leading-[17px] font-medium text-black">Task</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4  text-sm font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">John Stein</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">San Francisco</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Clear Lot</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4  text-[15px] leading-[17px] font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Arlene Mccoy</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Grand Canyon</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Grading</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4  text-[15px] leading-[17px] font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">John Smith</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">New York</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Stake for Excavation</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4  text-[15px] leading-[17px] font-normal text-black">Highland Meadows</td>
                        <td className="px-6 py-4 text-[15px] leading-[17px] text-black">Kathryn Murphy</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Washington</td>
                        <td className="px-6 py-4  text-[15px] leading-[17px] text-black">Excavate for Foundation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  )
}

export default Weekplan