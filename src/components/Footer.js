import React from 'react'

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0 }} className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a href='https://github.com/AdamGallagher27'>Github</a></li>
            <li><a href='https://www.linkedin.com/in/adam-gallagher-ba3830263/'>Linkedln</a></li>
          </ul>
        </div>
      </aside>
    </footer>
  )
}

export default Footer