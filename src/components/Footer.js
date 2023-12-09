import React from 'react'

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0 }} className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Github</a></li>
            <li><a>Linkedln</a></li>
            {/* <li>Add Document</li> */}
          </ul>
        </div>
      </aside>
    </footer>
  )
}

export default Footer