import Hero from '@/components/Hero'

const Home = () => {
  return (
    <div>
      <>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            A free, responsive, one page Bootstrap theme created by Start
            Bootstrap.
          </h2>
          <a className="btn btn-primary" href="#about">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </header>
  {/* About*/}
  <section className="about-section text-center" id="about">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-white mb-4">Built with Bootstrap 5</h2>
          <p className="text-white-50">
            Grayscale is a free Bootstrap theme created by Start Bootstrap. It
            can be yours right now, simply download the template on
            <a href="https://startbootstrap.com/theme/grayscale/">
              the preview page.
            </a>
            The theme is open source, and you can use it for any purpose,
            personal or commercial.
          </p>
        </div>
      </div>
      <img className="img-fluid" src="assets/img/ipad.png" alt="..." />
    </div>
  </section>
  {/* Projects*/}
  <section className="projects-section bg-light" id="projects">
    <div className="container px-4 px-lg-5">
      {/* Featured Project Row*/}
      <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
        <div className="col-xl-8 col-lg-7">
          <img
            className="img-fluid mb-3 mb-lg-0"
            src="assets/img/bg-masthead.jpg"
            alt="..."
          />
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>Shoreline</h4>
            <p className="text-black-50 mb-0">
              Grayscale is open source and MIT licensed. This means you can use
              it for any project - even commercial projects! Download it,
              customize it, and publish your website!
            </p>
          </div>
        </div>
      </div>
      {/* Project One Row*/}
      <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="assets/img/demo-image-01.jpg"
            alt="..."
          />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">Misty</h4>
                <p className="mb-0 text-white-50">
                  An example of where you can put an image of a project, or
                  anything else, along with a description.
                </p>
                <hr className="d-none d-lg-block mb-0 ms-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Two Row*/}
      <div className="row gx-0 justify-content-center">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="assets/img/demo-image-02.jpg"
            alt="..."
          />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">Mountains</h4>
                <p className="mb-0 text-white-50">
                  Another example of a project with its respective description.
                  These sections work well responsively as well, try this theme
                  on a small screen!
                </p>
                <hr className="d-none d-lg-block mb-0 me-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Signup*/}
  <section className="signup-section" id="signup">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5">
        <div className="col-md-10 col-lg-8 mx-auto text-center">
          <i className="far fa-paper-plane fa-2x mb-2 text-white" />
          <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
          {/* * * * * * * * * * * * * * * **/}
          {/* * * SB Forms Contact Form * **/}
          {/* * * * * * * * * * * * * * * **/}
          {/* This form is pre-integrated with SB Forms.*/}
          {/* To make this form functional, sign up at*/}
          {/* https://startbootstrap.com/solution/contact-forms*/}
          {/* to get an API token!*/}
          <form
            className="form-signup"
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
          >
            {/* Email address input*/}
            <div className="row input-group-newsletter">
              <div className="col">
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Enter email address..."
                  aria-label="Enter email address..."
                  data-sb-validations="required,email"
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-primary disabled"
                  id="submitButton"
                  type="submit"
                >
                  Notify Me!
                </button>
              </div>
            </div>
            <div
              className="invalid-feedback mt-2"
              data-sb-feedback="emailAddress:required"
            >
              An email is required.
            </div>
            <div
              className="invalid-feedback mt-2"
              data-sb-feedback="emailAddress:email"
            >
              Email is not valid.
            </div>
            {/* Submit success message*/}
            {/**/}
            {/* This is what your users will see when the form*/}
            {/* has successfully submitted*/}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3 mt-2 text-white">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            {/* Submit error message*/}
            {/**/}
            {/* This is what your users will see when there is*/}
            {/* an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3 mt-2">
                Error sending message!
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Contact*/}
  <section className="contact-section bg-black">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2" />
              <h4 className="text-uppercase m-0">Address</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50">
                4923 Market Street, Orlando FL
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-envelope text-primary mb-2" />
              <h4 className="text-uppercase m-0">Email</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50">
                <a href="#!">hello@yourdomain.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt text-primary mb-2" />
              <h4 className="text-uppercase m-0">Phone</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50">+1 (555) 902-8832</div>
            </div>
          </div>
        </div>
      </div>
      <div className="social d-flex justify-content-center">
        <a className="mx-2" href="#!">
          <i className="fab fa-twitter" />
        </a>
        <a className="mx-2" href="#!">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="mx-2" href="#!">
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Home
