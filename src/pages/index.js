/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
const Home = () => {
  return (
    <>
      <Head>
        <title>iTana</title>
      </Head>
      <div id='layoutDefault'>
        <div id='layoutDefault_content'>
          <main>
            {/* Navbar*/}
            <nav className='navbar navbar-marketing navbar-expand-lg bg-white navbar-light'>
              <div className='container px-5'>
                <a className='navbar-brand text-primary' href='index.html'>
                  iTana
                </a>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <i data-feather='menu' />
                </button>
                <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav ms-auto me-lg-5'>
                    <li className='nav-item'>
                      <a className='nav-link' href='index.html'>
                        About
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='index.html'>
                        Progragms &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Page Header*/}
            <header
              className='page-header-ui page-header-ui-dark bg-img-cover overlay overlay-80'
              style={{
                backgroundImage: 'url("/assets/img/iTana/TeamItana.jpg")',
              }}
            >
              <div className='page-header-ui-content py-5 position-relative'>
                <div className='container px-5'>
                  <div className='row gx-5 justify-content-center'>
                    <div className='col-xl-8 col-lg-10 text-center'>
                      <div>
                        <h1 className='page-header-ui-title'>The Youth SPA</h1>
                        <p className='page-header-ui-text'>
                          we offer integrated serviices for youthbetween 10 to
                          25 with a focus on mental heath. This include drop-in
                          counselling, primary care, art therapy, peer support,
                          in reach and outreach programs.
                        </p>
                      </div>
                      <a className='btn btn-primary fw-500' href='#get-started'>
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='svg-border-rounded text-white'>
                {/* Rounded SVG Border*/}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 144.54 17.34'
                  preserveAspectRatio='none'
                  fill='currentColor'
                >
                  <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' />
                </svg>
              </div>
            </header>
            <section className='bg-white py-10' id='get-started'>
              <div className='container px-5'>
                <div className='row gx-5 text-center'>
                  <div className='col-lg-4 mb-5 mb-lg-0'>
                    <div className='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                      <i data-feather='droplet' />
                    </div>
                    <h2>Understanding mental health</h2>
                    <p className='mb-0'>
                      Mental health conditions during adolescenes and young
                      adulhood can have a significantky negative impact on the
                      development of safe healthy relationship with peers,
                      parents, teachers, and ROmantic partners. This is the
                      reason iTana belives in having these conversations with
                      this age group as this is an important stage of their life
                    </p>
                  </div>
                  <div className='col-lg-4 mb-5 mb-lg-0'>
                    <div className='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                      <i data-feather='code' />
                    </div>
                    <h2>Develop</h2>
                    <p className='mb-0'>
                      Our award winning development team creates personalized
                      digital experiences
                    </p>
                  </div>
                  <div className='col-lg-4 mb-5 mb-lg-0'>
                    <div className='icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4'>
                      <i data-feather='droplet' />
                    </div>
                    <h2>Understanding mental health</h2>
                    <p className='mb-0'>
                      Mental health conditions during adolescenes and young
                      adulhood can have a significantky negative impact on the
                      development of safe healthy relationship with peers,
                      parents, teachers, and ROmantic partners. This is the
                      reason iTana belives in having these conversations with
                      this age group as this is an important stage of their life
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className='bg-img-cover overlay overlay-80 py-10'
              style={{ backgroundImage: 'url("/assets/img/iTana/num22.jpg")' }}
            >
              <div className='container px-5 position-relative'>
                <div className='row gx-5 justify-content-center'>
                  <div className='col-lg-10'>
                    <div className='display-6 text-center py-10 my-10 text-white'>
                      Maintaining
                      <span className='text-primary'>good mental health</span>
                      involves self-care, prioritizing sleep, managing stress,
                      eating a balanced diet, seeking social support, practicing
                      mindfulness, setting realistic goals, and seekings finding
                      that perfect balance between the way something
                      <span className='text-primary'>professional</span>
                      help when necessary. These practices can help improve
                      mental well-being and promote a healthy
                      <span className='text-primary'>lifestyle.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='bg-light py-10'>
              <div className='container px-5 z-1'>
                <div className='card mb-5'>
                  <div className='row g-0'>
                    <div className='col-md-6'>
                      <img
                        className='img-fluid'
                        src='/assets/img/iTana/num8.jpg'
                        alt='...'
                      />
                    </div>
                    <div className='col-md-6'>
                      <div className='card-body d-flex align-items-center justify-content-center h-100 flex-column'>
                        <h3 className='card-title fw-bold text-uppercase mb-2'>
                          iTana Member
                        </h3>
                        <p className='card-text fw-light mb-4'>TeamItana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card mb-5'>
                  <div className='row g-0'>
                    <div className='col-md-6 order-1 order-md-0'>
                      <div className='card-body d-flex align-items-center justify-content-center h-100 flex-column'>
                        <h3 className='card-title fw-bold text-uppercase mb-2'>
                          TeamItana
                        </h3>
                        <p className='card-text fw-light mb-4'>TeamItana</p>
                      </div>
                    </div>
                    <div className='col-md-6 order-0 order-md-1'>
                      <img
                        className='img-fluid'
                        src='/assets/img/iTana/num10.jpg'
                        alt='...'
                      />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='row g-0'>
                    <div className='col-md-6'>
                      <img
                        className='img-fluid'
                        src='/assets/img/iTana/num11.jpg'
                        alt='...'
                      />
                    </div>
                    <div className='col-md-6'>
                      <div className='card-body d-flex align-items-center justify-content-center h-100 flex-column'>
                        <h3 className='card-title fw-bold text-uppercase mb-2'>
                          TeamItana
                        </h3>
                        <p className='card-text fw-light mb-4'>TeamItana</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='svg-border-rounded text-white mt-n15'>
                {/* Rounded SVG Border*/}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 144.54 17.34'
                  preserveAspectRatio='none'
                  fill='currentColor'
                >
                  <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' />
                </svg>
              </div>
            </section>
            <section className='bg-white py-10'>
              <div className='container px-5'>
                <div className='row gx-5 justify-content-center'>
                  <div className='col-xl-6 col-lg-8 col-md-10 text-center my-10 py-10'>
                    <h2>Summarry</h2>
                    <p className='lead text-gray-500 mb-4'>
                      Mental pain is Less dramatic than physical pain,but its
                      more common and also harder to bear. The frequent attempt
                      to conceal mental pain increases the burden. <b>iTena</b>{' '}
                      tries to understand the blackness, lethargy, hopelessness,
                      and loneliness they are going through. Be there for them
                      when thry come through the other side especially when they
                      <b>iTena</b>(Call)
                    </p>
                    <a className='btn btn-primary fw-500' href='#!'>
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
              <div className='svg-border-rounded text-black'>
                {/* Rounded SVG Border*/}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 144.54 17.34'
                  preserveAspectRatio='none'
                  fill='currentColor'
                >
                  <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' />
                </svg>
              </div>
            </section>
          </main>
        </div>
        <div id='layoutDefault_footer'>
          <footer className='footer pt-10 pb-5 mt-auto bg-black footer-dark'>
            <div className='container px-5'>
              <div className='row gx-5'>
                <div className='col-lg-3'>
                  <div className='footer-brand'>iTena</div>
                  <div className='mb-3'>Behind Closed Hearts</div>
                  <div className='icon-list-social mb-5'>
                    <a className='icon-list-social-link' href='#!'>
                      <i className='fab fa-instagram' />
                    </a>
                    <a className='icon-list-social-link' href='#!'>
                      <i className='fab fa-facebook' />
                    </a>
                    <a className='icon-list-social-link' href='#!'>
                      <i className='fab fa-github' />
                    </a>
                    <a className='icon-list-social-link' href='#!'>
                      <i className='fab fa-twitter' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-9'>
                  <div className='row gx-5'>
                    <div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
                      <div className='text-uppercase-expanded text-xs mb-4'>
                        SPA conversations With Youth
                      </div>
                      <ul className='list-unstyled mb-0'>
                        <li className='mb-2'>
                          <a href='#!'>Self awerness</a>
                        </li>
                        <li className='mb-2'>
                          <a href='#!'>Life skills</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
                      <div className='text-uppercase-expanded text-xs mb-4'>
                        Mental &amp; Physical health
                      </div>
                      <ul className='list-unstyled mb-0'>
                        <li className='mb-2'>
                          <a href='#!'>Yoga &amp; Meditation</a>
                        </li>
                        <li className='mb-2'>
                          <a href='#!'>Group sessions &amp; presentations</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-5 mb-md-0'>
                      <div className='text-uppercase-expanded text-xs mb-4'>
                        Cont Us!
                      </div>
                      <ul className='list-unstyled mb-0'>
                        <li className='mb-2'>
                          <a href='#!'>Email: info@itanakenya.com</a>
                        </li>
                        <li className='mb-2'>
                          <a href='#!'>+254 722 988</a>
                        </li>
                        <li className='mb-2'>
                          <a href='#!'>iTanaKenya.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='text-uppercase-expanded text-xs mb-4'>
                        Legal
                      </div>
                      <ul className='list-unstyled mb-0'>
                        <li className='mb-2'>
                          <a href='#!'>Privacy Policy</a>
                        </li>
                        <li className='mb-2'>
                          <a href='#!'>Terms and Conditions</a>
                        </li>
                        <li>
                          <a href='#!'>License</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='my-5' />
              <div className='row gx-5 align-items-center'>
                <div className='col-md-6 small'>
                  Copyright © Your Website 2021
                </div>
                <div className='col-md-6 text-md-end small'>
                  <a href='#!'>Privacy Policy</a>·
                  <a href='#!'>Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home
