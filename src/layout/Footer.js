const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <footer className='footer py-4'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4 text-lg-start'>Copyright © iTana {year}</div>
          <div className='col-lg-4 my-3 my-lg-0'>
            <a
              className='btn btn-dark btn-social mx-2'
              href='https://mobile.twitter.com/ItanaKenya/'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='btn btn-dark btn-social mx-2'
              href='https://www.facebook.com/iTanaKenya/'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='btn btn-dark btn-social mx-2'
              href='https://www.instagram.com/itana_kenya/'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
          </div>
          <div className='col-lg-4 text-lg-end'>
            <a className='link-dark text-decoration-none me-3' href='#'>
              Mombasa,
            </a>
            <a className='link-dark text-decoration-none' href='#'>
              Kenya
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
