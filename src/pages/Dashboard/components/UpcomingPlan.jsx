import React from 'react'

function UpcomingPlan() {
  return (
    <div className="w-[359px] h-[355px] mt-2.5 ml-3.5 bg-white rounded-lg border p-[18px]">
                <h3 className="text-base font-medium leading-[18px] mb-4">Upcoming Tasks</h3>
                <div>
                  {/* Task Item */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-[#687B92] leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Design Meeting</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Time: 3:00 PM</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between my-[16px]">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-[#687B92] leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Design Meeting</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Time: 3:00 PM</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Task Item - High Priority */}
                  <div className="flex items-center justify-between my-[16px]">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-red-500 text-white rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-white leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Order kitchen cabinets</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Priority: High</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Another Task Item - High Priority */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center justify-center bg-red-500 text-white rounded-[15px] w-[60px] h-[58px]">
                        <span className="text-xl font-bold leading-[23px]">25</span>
                        <span className="text-sm font-black text-white leading-4">March</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-[18px]">Order granite countertop</p>
                        <p className="text-sm font-normal leading-4 text-[#52565B]">Priority: High</p>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default UpcomingPlan