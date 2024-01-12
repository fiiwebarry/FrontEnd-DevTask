import { CgAsterisk } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";

function App() {

  const isSelectDisabled = true;

  return (
    <section>
      <div className="container mx-auto lg:w-[80%]  lg:pt-[40px] ">
        <div className="lg:flex  lg:flex-row flex flex-col justify-center mx-auto lg:w-[55%]  w-[90%] lg:p-3 p-3  shadow-lg border rounded-md " >
          <form className="pt-[20px]">
            {/* section-one */}
            <div className="lg:flex lg:flex-row flex flex-col   gap-3 lg:gap-[90px]">
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>

                <select className="w-[240px] p-1 shadow-md mt-1 h-[36px]  hover:border-[red] border rounded-md">
                  <option className="font-Roboto text-[14px] font-normal  text-[#9CA3AF]">Placeholder </option>

                </select>
                <p className="font-Roboto text-[14px]  mt-1 font-normal hover:text-[red] text-[#6B7280]">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>
                <select className="w-[240px] p-1 mt-1 shadow-md h-[36px] border rounded-md">
                  <option className="font-Roboto text-[14px] font-normal text-[#9CA3AF]">Placeholder</option>

                </select>
                <p className="font-Roboto text-[14px]  mt-1 font-normal  hover:text-[red] text-[#6B7280]">Help or instruction text goes here</p>
              </div>

            </div>
            {/* section two */}

            <div className="lg:flex lg:flex-row flex-col gap-8 lg:gap-[90px] mt-[30px]">
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>
                <select className="w-[240px] p-1 mt-1 shadow-md h-[36px] hover:border-[red] border rounded-md">
                  <option className="font-Roboto text-[14px] font-normal text-[#9CA3AF]">Placeholder</option>

                </select>
                <p className="font-Roboto text-[14px]  mt-1 font-normal hover:text-[red] text-[#6B7280]">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>

                <div className="w-[240px] h-[87px] border shadow-lg rounded-md p-2">
                  <div className="flex justify-between">
                    <div className="flex gap-[7px]">
                      <button className="flex justify-between w-[63px] h-[20px] px-1 shadow-lg rounded bg-[#FFEDD5]">
                        <p className="text-[12px] font-Roboto">Orange</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex  justify-betweenw-[56px] h-[20px]  shadow-lg px-1 rounded bg-[#DCFCE7]">
                        <p className="text-[12px] font-Roboto">Green</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex justify-between w-[45px] shadow-lg  h-[20px] px-1 rounded bg-[#FEE2E2]">
                        <p className="text-[12px] font-Roboto">Red</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>
                    <div className="text-[22px] mt-[-2px]">
                      <MdKeyboardArrowDown />
                    </div>

                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex gap-[4px]">
                      <button className="flex justify-between w-[60px] shadow-lg h-[20px] px-1 rounded bg-[#FEF9C3]">
                        <p className="text-[12px] font-Roboto">Yellow</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[48px] h-[20px] px-1   rounded bg-[#DBEAFE]">
                        <p className="text-[12px] font-Roboto">Blue</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex  shadow-lg justify-between w-[59px] h-[20px] px-1 rounded  bg-[#F3E8FF]">
                        <p className="text-[12px] font-Roboto">Purple</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>


                  </div>
                  <div className="flex justify-between mt-1">
                    <div className="flex gap-[3px]">
                      <button className="flex  shadow-lg justify-between w-[48px] h-[20px] px-1 rounded  bg-[#FCE7F3]">
                        <p className="text-[12px] font-Roboto">Pink</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[49px] h-[20px] px-1 rounded  bg-[#E5E7EB]">
                        <p className="text-[12px] font-Roboto">Grey</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>

                    </div>


                  </div>


                </div>
                <p className="font-Roboto text-[14px]  mt-1 font-normal text-[#6B7280]">Help or instruction text goes here</p>
              </div>


            </div>

            {/* section three */}
            <div className="lg:flex lg:flex-row flex flex-col gap-[90px] mt-[30px]">
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>
                <select className="w-[240px] p-1 mt-1 shadow-md h-[36px] hover:border-[red] border rounded-md">
                  <option className="font-Roboto text-[14px] font-normal  text-[#9CA3AF]">Placeholder</option>

                </select>
                <p className="font-Roboto text-[14px]  mt-1 font-normal hover:text-[red] text-[#6B7280]">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>

                <div className="w-[240px] h-[87px] border shadow-lg rounded-md p-2">
                  <div className="flex justify-between">
                    <div className="flex gap-[7px]">
                      <button className="flex justify-between w-[63px] h-[20px] px-1 shadow-lg rounded bg-[#FFEDD5]">
                        <p className="text-[12px] font-Roboto">Orange</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex  justify-betweenw-[56px] h-[20px]  shadow-lg px-1 rounded bg-[#DCFCE7]">
                        <p className="text-[12px] font-Roboto">Green</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex justify-between w-[45px] shadow-lg  h-[20px] px-1 rounded  bg-[#FEE2E2]">
                        <p className="text-[12px] font-Roboto">Red</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>
                    <div className=" flex text-[22px] mt-[-2px]">
                      <span className="text-[20px] text-[#D1D5DB]"> <IoCloseCircleSharp /></span>
                      <MdKeyboardArrowDown />
                    </div>

                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex gap-[4px]">
                      <button className="flex justify-between w-[60px] shadow-lg h-[20px] px-1 rounded bg-[#FEF9C3]">
                        <p className="text-[12px] font-Roboto">Yellow</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[48px] h-[20px] px-1   rounded bg-[#DBEAFE]">
                        <p className="text-[12px] font-Roboto">Blue</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex  shadow-lg justify-between w-[59px] h-[20px] px-1 rounded  bg-[#F3E8FF]">
                        <p className="text-[12px] font-Roboto">Purple</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>


                  </div>
                  <div className="flex justify-between mt-1">
                    <div className="flex gap-[3px]">
                      <button className="flex  shadow-lg justify-between w-[48px] h-[20px] px-1 rounded   bg-[#FCE7F3]">
                        <p className="text-[12px] font-Roboto">Pink</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[49px] h-[20px] px-1 rounded bg-[#E5E7EB]">
                        <p className="text-[12px] font-Roboto">Grey</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>

                    </div>


                  </div>


                </div>
                <p className="font-Roboto text-[14px]  mt-1 font-normal text-[#6B7280]">Help or instruction text goes here</p>
              </div>


            </div>

            {/* section four */}
            <div className="lg:flex lg:flex-row flex flex-col  gap-8 lg:gap-[90px] mt-[30px]">
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>
                <select className=" hover:[red] w-[240px] p-1 mt-1 shadow-md h-[36px]  hover:border-[red]  border rounded-md">
                  <option className="font-Roboto text-[14px] font-normal text-[#9CA3AF]">Placeholder</option>

                </select>
                <p className="font-Roboto text-[14px]  mt-1 font-normal hover:text-[red] text-[#6B7280]">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>

                <div className="w-[240px] h-[87px] hover:border-[red] border shadow-lg rounded-md p-2">
                  <div className="flex justify-between">
                    <div className="flex gap-[7px]">
                      <button className="flex justify-between w-[63px] h-[20px] px-1 shadow-lg rounded bg-[#FFEDD5]">
                        <p className="text-[12px] font-Roboto">Orange</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex  justify-betweenw-[56px] h-[20px]  shadow-lg px-1 rounded  bg-[#DCFCE7]">
                        <p className="text-[12px] font-Roboto">Green</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex justify-between w-[45px] shadow-lg  h-[20px] px-1 rounded  bg-[#FEE2E2]">
                        <p className="text-[12px] font-Roboto">Red</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>
                    <div className=" flex text-[22px] mt-[-2px]">
                      <span className="text-[20px] text-[#D1D5DB]"><IoCloseCircleSharp /></span>
                      <MdKeyboardArrowDown />
                    </div>

                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex gap-[4px]">
                      <button className="flex justify-between w-[60px] shadow-lg h-[20px] px-1 rounded  bg-[#FEF9C3]">
                        <p className="text-[12px] font-Roboto">Yellow</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[48px] h-[20px] px-1   rounded  bg-[#DBEAFE]">
                        <p className="text-[12px] font-Roboto">Blue</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex  shadow-lg justify-between w-[59px] h-[20px] px-1 rounded  bg-[#F3E8FF]">
                        <p className="text-[12px] font-Roboto">Purple</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>


                  </div>
                  <div className="flex justify-between mt-1">
                    <div className="flex gap-[3px]">
                      <button className="flex  shadow-lg justify-between w-[48px] h-[20px] px-1 rounded  bg-[#FCE7F3]">
                        <p className="text-[12px] font-Roboto">Pink</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[49px] h-[20px] px-1 rounded  bg-[#E5E7EB]">
                        <p className="text-[12px] font-Roboto">Grey</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>

                    </div>


                  </div>


                </div>
                <p className="font-Roboto text-[14px]  mt-1 font-normal hover:text-[red] text-[#6B7280]">Help or instruction text goes here</p>
              </div>


            </div>
            {/* section five */}
            <div className="lg:flex lg:flex-row flex flex-col gap-[90px] mt-[30px]">
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>
                <select className="w-[240px] p-1 mt-1 shadow-md h-[36px] border rounded-md">
                  <option className="font-Roboto text-[14px] font-normal text-[#9CA3AF]">Placeholder</option>

                </select>
                <p className="font-Roboto text-[14px]  mt-1 font-normal text-[#16A34A]">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>

                <div className="w-[240px] h-[87px] border shadow-lg rounded-md p-2">
                  <div className="flex justify-between">
                    <div className="flex gap-[7px]">
                      <button className="flex justify-between w-[63px] h-[20px] px-1 shadow-lg rounded bg-[#FFEDD5]">
                        <p className="text-[12px] font-Roboto">Orange</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex  justify-betweenw-[56px] h-[20px]  shadow-lg px-1 rounded  bg-[#DCFCE7]">
                        <p className="text-[12px] font-Roboto">Green</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex justify-between w-[45px] shadow-lg  h-[20px] px-1 rounded bg-[#FEE2E2]">
                        <p className="text-[12px] font-Roboto">Red</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>
                    <div className=" flex text-[22px] mt-[-2px]">
                      <span className="text-[20px] text-[#D1D5DB]"><IoCloseCircleSharp /></span>
                      <MdKeyboardArrowDown />
                    </div>

                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex gap-[4px]">
                      <button className="flex justify-between w-[60px] shadow-lg h-[20px] px-1 rounded bg-[#FEF9C3]">
                        <p className="text-[12px] font-Roboto">Yellow</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[48px] h-[20px] px-1   rounded  bg-[#DBEAFE]">
                        <p className="text-[12px] font-Roboto">Blue</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex  shadow-lg justify-between w-[59px] h-[20px] px-1 rounded bg-[#F3E8FF]">
                        <p className="text-[12px] font-Roboto">Purple</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>


                  </div>
                  <div className="flex justify-between mt-1">
                    <div className="flex gap-[3px]">
                      <button className="flex  shadow-lg justify-between w-[48px] h-[20px] px-1 rounded bg-[#FCE7F3]">
                        <p className="text-[12px] font-Roboto">Pink</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[49px] h-[20px] px-1 rounded  bg-[#E5E7EB]">
                        <p className="text-[12px] font-Roboto">Grey</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>

                    </div>


                  </div>


                </div>
                <p className="font-Roboto text-[14px]  mt-1 font-normal text-[#16A34A]">Help or instruction text goes here</p>
              </div>


            </div>
            {/* section six */}
            <div className="lg:flex  lg:flex-row flex flex-col gap-[90px] mt-[30px]">
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>
                <select disabled={isSelectDisabled} className="w-[240px] p-1 mt-1 shadow-md h-[36px] border rounded-md">
                  <option className="font-Roboto text-[14px] font-normal text-[#9CA3AF]">Placeholder</option>

                </select>
                <p className="font-Roboto text-[14px]  mt-1 font-normal text-[#6B7280]">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="flex font-semibold" >
                  <p className="text-[14px] font-Roboto text-[#1F2937] font-semibold">Select values</p>
                  <span className="text-[red]"><CgAsterisk /></span>
                </div>

                <div className="w-[240px] h-[87px] border shadow-lg rounded-md p-2">
                  <div className="flex justify-between">
                    <div className="flex gap-[7px]">
                      <button className="flex justify-between w-[63px] h-[20px] px-1 shadow-lg rounded  bg-[#F3F4F6] hover:bg-[#FFEDD5]">
                        <p className="text-[12px] font-Roboto">Orange</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex  justify-betweenw-[56px] h-[20px]  shadow-lg px-1 rounded hover:bg-[#DCFCE7] bg-[#F3F4F6]">
                        <p className="text-[12px] font-Roboto">Green</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex justify-between w-[45px] shadow-lg  h-[20px] px-1 rounded hover:bg-[#FEE2E2] bg-[#F3F4F6]">
                        <p className="text-[12px] font-Roboto">Red</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>
                    <div className="text-[22px] mt-[-2px]">
                      <MdKeyboardArrowDown />
                    </div>

                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex gap-[4px]">
                      <button className="flex justify-between w-[60px] shadow-lg h-[20px] px-1 rounded hover:bg-[#FEF9C3] bg-[#F3F4F6]">
                        <p className="text-[12px] font-Roboto">Yellow</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[48px] h-[20px] px-1   rounded hover:bg-[#DBEAFE] bg-[#F3F4F6]">
                        <p className="text-[12px] font-Roboto">Blue</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                      <button className="flex  shadow-lg justify-between w-[59px] h-[20px] px-1 rounded hover:bg-[#F3E8FF] bg-[#F3F4F6]">
                        <p className="text-[12px] font-Roboto">Purple</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>
                    </div>


                  </div>
                  <div className="flex justify-between mt-1">
                    <div className="flex gap-[3px]">
                      <button className="flex  shadow-lg justify-between w-[48px] h-[20px] px-1 rounded hover:bg-[#FCE7F3] bg-[#F3F4F6]">
                        <p className="text-[12px] font-Roboto">Pink</p>
                        <span className="text-[14px] mt-[1px]" ><IoMdClose /></span>

                      </button>
                      <button className="flex shadow-lg justify-between w-[49px] h-[20px] px-1 rounded hover:bg-[#E5E7EB] bg-[#F3F4F6]">
                        <p className="text-[12px] font-Roboto">Grey</p>
                        <span className="text-[14px] mt-[1px]"><IoMdClose /></span>
                      </button>

                    </div>


                  </div>


                </div>
                <p className="font-Roboto text-[14px]  mt-1 font-normal text-[#6B7280]">Help or instruction text goes here</p>
              </div>


            </div>





          </form>

        </div>


      </div>

    </section>
  )
}

export default App
