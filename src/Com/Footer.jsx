import React from 'react';

function Footer() {
    return (
        <>
            <style>{`
        .fixed-footer {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          background: linear-gradient(90deg, #11998e, #38ef7d);
          color: #4b0082;
          text-align: center;
          padding: 12px 0;
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          z-index: 1000;
        }
        .footer-email a {
          color: #6a1b9a;
          text-decoration: none;
        }
        .footer-email a:hover {
          text-decoration: underline;
        }
      `}</style>

            <footer className="fixed-footer">
                © 2025 Mythili. All rights reserved. &nbsp;|&nbsp;
                <span className="footer-email">
                    📧 <a href="mailto:mythili.dev@gmail.com">mythilijobofficial@gmail.com</a>
                </span>
            </footer>
        </>
    );
}

export default Footer;
