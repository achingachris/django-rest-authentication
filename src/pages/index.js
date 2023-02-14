import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProjectSection from '@/components/ProjectSection'

const Home = () => {
  return (
    <div>
      <>
        <Hero />
        <AboutSection />
        <ProjectSection />

        {/* Signup*/}
        <section className='signup-section' id='signup'>
          <div className='container px-4 px-lg-5'>
            <div className='row gx-4 gx-lg-5'>
              <div className='col-md-10 col-lg-8 mx-auto text-center'>
                <i className='far fa-paper-plane fa-2x mb-2 text-white' />
                <h2 className='text-white mb-5'>
                  Subscribe to receive updates!
                </h2>
                {/* * * * * * * * * * * * * * * **/}
                {/* * * SB Forms Contact Form * **/}
                {/* * * * * * * * * * * * * * * **/}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
                <form
                  className='form-signup'
                  id='contactForm'
                  data-sb-form-api-token='API_TOKEN'
                >
                  {/* Email address input*/}
                  <div className='row input-group-newsletter'>
                    <div className='col'>
                      <input
                        className='form-control'
                        id='emailAddress'
                        type='email'
                        placeholder='Enter email address...'
                        aria-label='Enter email address...'
                        data-sb-validations='required,email'
                      />
                    </div>
                    <div className='col-auto'>
                      <button
                        className='btn btn-primary disabled'
                        id='submitButton'
                        type='submit'
                      >
                        Notify Me!
                      </button>
                    </div>
                  </div>
                  <div
                    className='invalid-feedback mt-2'
                    data-sb-feedback='emailAddress:required'
                  >
                    An email is required.
                  </div>
                  <div
                    className='invalid-feedback mt-2'
                    data-sb-feedback='emailAddress:email'
                  >
                    Email is not valid.
                  </div>
                  {/* Submit success message*/}
                  {/**/}
                  {/* This is what your users will see when the form*/}
                  {/* has successfully submitted*/}
                  <div className='d-none' id='submitSuccessMessage'>
                    <div className='text-center mb-3 mt-2 text-white'>
                      <div className='fw-bolder'>
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <a href='https://startbootstrap.com/solution/contact-forms'>
                        https://startbootstrap.com/solution/contact-forms
                      </a>
                    </div>
                  </div>
                  {/* Submit error message*/}
                  {/**/}
                  {/* This is what your users will see when there is*/}
                  {/* an error submitting the form*/}
                  <div className='d-none' id='submitErrorMessage'>
                    <div className='text-center text-danger mb-3 mt-2'>
                      Error sending message!
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Contact*/}
        <section className='contact-section bg-black'>
          <div className='container px-4 px-lg-5'>
            <div className='row gx-4 gx-lg-5'>
              <div className='col-md-4 mb-3 mb-md-0'>
                <div className='card py-4 h-100'>
                  <div className='card-body text-center'>
                    <i className='fas fa-map-marked-alt text-primary mb-2' />
                    <h4 className='text-uppercase m-0'>Address</h4>
                    <hr className='my-4 mx-auto' />
                    <div className='small text-black-50'>
                      4923 Market Street, Orlando FL
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-3 mb-md-0'>
                <div className='card py-4 h-100'>
                  <div className='card-body text-center'>
                    <i className='fas fa-envelope text-primary mb-2' />
                    <h4 className='text-uppercase m-0'>Email</h4>
                    <hr className='my-4 mx-auto' />
                    <div className='small text-black-50'>
                      <a href='#!'>hello@yourdomain.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-3 mb-md-0'>
                <div className='card py-4 h-100'>
                  <div className='card-body text-center'>
                    <i className='fas fa-mobile-alt text-primary mb-2' />
                    <h4 className='text-uppercase m-0'>Phone</h4>
                    <hr className='my-4 mx-auto' />
                    <div className='small text-black-50'>+1 (555) 902-8832</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='social d-flex justify-content-center'>
              <a className='mx-2' href='#!'>
                <i className='fab fa-twitter' />
              </a>
              <a className='mx-2' href='#!'>
                <i className='fab fa-facebook-f' />
              </a>
              <a className='mx-2' href='#!'>
                <i className='fab fa-github' />
              </a>
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default Home
