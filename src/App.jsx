import { CgAsterisk } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import "./App.css";

function App() {

  const isSelectDisabled = true;

  return (
    <section>
      <div className="container">
        <div className="section-tab" >
          <form className="form-container-tab">
            {/* section-one */}
            <div className="form-tab">
              <div>
                <div className="label-tab" >
                  <p className="label-tab-text">Select values</p>
                  <span className="icon-tab"><CgAsterisk /></span>
                </div>

                <select className="select-tab">
                  <option className="select-tab-placeholder">Placeholder </option>
                </select>
                <p className="select-tab-text">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="label-tab" >
                  <p className="label-tab-text">Select values</p>
                  <span className="icon-tab"><CgAsterisk /></span>
                </div>
                <select className="select-tab">
                  <option className="select-tab-placeholder">Placeholder</option>

                </select>
                <p className="select-tab-text">Help or instruction text goes here</p>
              </div>

            </div>
            {/* section two */}
            <div className="layer-tab">
              <div className="form-tab">
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>
                      <div className="btn-icon">
                        <MdKeyboardArrowDown />
                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <span className="select-color-ixon"><IoMdClose /></span>
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>

                      </div>


                    </div>


                  </div>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>


              </div>
            </div>


            {/* section three */}
            <div className="layer-tab">
              <div className="form-tab">
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <span className="btn-icon3"><IoCloseCircleSharp /></span>
                        <span className="btn-icon4"><MdKeyboardArrowDown /></span>

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <span className="select-color-ixon"><IoMdClose /></span>
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>

                      </div>


                    </div>


                  </div>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>


              </div>
            </div>



            {/* section four */}
            <div className="layer-tab">
              <div className="form-tab">
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <span className="btn-icon3"><IoCloseCircleSharp /></span>
                        <span className="btn-icon4"><MdKeyboardArrowDown /></span>

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <span className="select-color-ixon"><IoMdClose /></span>
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>

                      </div>


                    </div>


                  </div>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>


              </div>
            </div>


            {/* section five */}
            <div className="layer-tab">
              <div className="form-tab">
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text2">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <span className="btn-icon3"><IoCloseCircleSharp /></span>
                        <span className="btn-icon4"><MdKeyboardArrowDown /></span>

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <span className="select-color-ixon"><IoMdClose /></span>
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>

                      </div>


                    </div>


                  </div>
                  <p className="select-tab-text2">Help or instruction text goes here</p>
                </div>


              </div>
            </div>


            {/* section six */}

            <div className="layer-tab">
              <div className="form-tab">
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>
                  <select disabled={isSelectDisabled} className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <span className="icon-tab"><CgAsterisk /></span>
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn9">
                          <p className="select-color-text">Orange</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn10">
                          <p className="select-color-text">Green</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                        <button className="btn11">
                          <p className="select-color-text">Red</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <span className="btn-icon3"><IoCloseCircleSharp /></span>
                        <span className="btn-icon4"><MdKeyboardArrowDown /></span>

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn12">
                          <p className="select-color-text">Yellow</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn13">
                          <p className="select-color-text">Blue</p>
                          <span className="select-color-ixon"><IoMdClose /></span>
                        </button>
                        <button className="btn14">
                          <p className="select-color-text">Purple</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn15">
                          <p className="select-color-text">Pink</p>
                          <span className="select-color-icon" ><IoMdClose /></span>

                        </button>
                        <button className="btn16">
                          <p className="select-color-text">Grey</p>
                          <span className="select-color-icon"><IoMdClose /></span>
                        </button>

                      </div>


                    </div>


                  </div>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>


              </div>
            </div>






          </form>

        </div>


      </div>

    </section>
  )
}

export default App
