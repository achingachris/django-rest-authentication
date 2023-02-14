import Link from 'next/link'

const Nav = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light fixed-top'
      id='mainNav'
    >
      <div className='container px-4 px-lg-5'>
        <Link href='/' legacyBehavior>
          <a className='navbar-brand'>iTana</a>
        </Link>
        <button
          className='navbar-toggler navbar-toggler-right'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Menu
          <i className='fas fa-bars' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link href='/about' legacyBehavior>
                <a className='nav-link'>About</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/activities' legacyBehavior>
                <a className='nav-link'>Activities</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
