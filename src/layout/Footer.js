const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <footer className='footer bg-black small text-center text-white-50'>
      <div className='container px-4 px-lg-5'>
        Copyright © iTana {year} All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
