
import star from "/src/assets/Icons/star.png"
import exit from "/src/assets/Icons/close.png"
import arrowUp from "/src/assets/Icons/Chevron-Up.png"
import arrowDown from "/src/assets/Icons/Chevron-Down.png"
import close from "/src/assets/Icons/close-btn.png"
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
                  <img className="icon-tab" src={star} alt="star" />
                </div>

                <select className="select-tab">
                  <option className="select-tab-placeholder">Placeholder </option>
                </select>
                <p className="select-tab-text">Help or instruction text goes here</p>
              </div>
              <div>
                <div className="label-tab" >
                  <p className="label-tab-text">Select values</p>
                  <img className="icon-tab" src={star} alt="star" />
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
                    <img className="icon-tab" src={star} alt="star" />
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <img className="icon-tab" src={star} alt="star" />
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <img className="select-color-icon" src={exit} alt="exit" />


                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>
                      <div className="btn-icon">
                        <img src={arrowDown} alt="arrow" />

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color3">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
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
                    <img className="icon-tab" src={star} alt="star" />
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <img className="icon-tab" src={star} alt="star" />
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <img className="close-btn" src={close} alt="close" />
                        <img src={arrowUp} alt="arrow" />

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
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
                    <img className="icon-tab" src={star} alt="star" />
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <img className="icon-tab" src={star} alt="star" />
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <img className="close-btn" src={close} alt="close" />
                        <img src={arrowDown} alt="arrow" />

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
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
                    <img className="icon-tab" src={star} alt="star" />
                  </div>
                  <select className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text2">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <img className="icon-tab" src={star} alt="star" />
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn1">
                          <p className="select-color-text">Orange</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn2">
                          <p className="select-color-text">Green</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn3">
                          <p className="select-color-text">Red</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <img className="close-btn" src={close} alt="close" />
                        <img src={arrowDown} alt="arrow" />

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn4">
                          <p className="select-color-text">Yellow</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn5">
                          <p className="select-color-text">Blue</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn6">
                          <p className="select-color-text">Purple</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn7">
                          <p className="select-color-text">Pink</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn8">
                          <p className="select-color-text">Grey</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
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
                    <img className="icon-tab" src={star} alt="star" />
                  </div>
                  <select disabled={isSelectDisabled} className="select-tab">
                    <option className="select-tab-placeholder">Placeholder</option>
                  </select>
                  <p className="select-tab-text">Help or instruction text goes here</p>
                </div>
                <div>
                  <div className="label-tab" >
                    <p className="label-tab-text">Select values</p>
                    <img className="icon-tab" src={star} alt="star" />
                  </div>

                  <div className="select-color-tab">
                    <div className="color-tab-flex">
                      <div className="select-color">
                        <button className="btn9">
                          <p className="select-color-text">Orange</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn10">
                          <p className="select-color-text">Green</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn11">
                          <p className="select-color-text">Red</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>
                      <div className="btn-icon2">
                        <img className="close-btn" src={close} alt="close" />
                        <img src={arrowDown} alt="arrow" />

                      </div>

                    </div>
                    <div className="color-tab-flex2">
                      <div className="select-color2">
                        <button className="btn12">
                          <p className="select-color-text">Yellow</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn13">
                          <p className="select-color-text">Blue</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                        <button className="btn14">
                          <p className="select-color-text">Purple</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
                        </button>
                      </div>


                    </div>
                    <div className="color-tab-flex3">
                      <div className="select-color2">
                        <button className="btn15">
                          <p className="select-color-text">Pink</p>
                          <img className="select-color-icon" src={exit} alt="exit" />

                        </button>
                        <button className="btn16">
                          <p className="select-color-text">Grey</p>
                          <img className="select-color-icon" src={exit} alt="exit" />
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
