import React from "react";

export default function Registration() {
  return (
    <div>
      <section className="testimonial py-5" id="testimonial">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 py-5 bg-primary text-white text-center ">
              <div className=" ">
                <div className="card-body">
                  <img
                    src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                    style-ref="width:30%"
                  />
                  <h2 className="py-3">Registration</h2>
                  <p>
                    Tation argumentum et usu, dicit viderer evertitur te has. Eu
                    dictas concludaturque usu, facete detracto patrioque an per,
                    lucilius pertinacia eu vel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-5 border">
              <h4 className="pb-4">Please fill with your details</h4>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      id="Full Name"
                      name="Full Name"
                      placeholder="Full Name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <br></br>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <br></br>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      id="Mobile No."
                      name="Mobile No."
                      placeholder="Mobile No."
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <div className="form-group"></div>
                  </div>
                </div>
                <br></br>
                <div className="form-row">
                  <button type="button" className="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
