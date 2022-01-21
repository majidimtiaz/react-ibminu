import React from "react";
import "./style.css";


function Header() {
  return (
      <header>
          <nav>
              <img src="reactlogo.png" width="40px" />
          </nav>
      </header>
  )
}

function Footer() {
  return (
      <footer>
          <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}
export default function App() {
  return (
    <div>
      <Header />
      <MainContent/>
      <Footer/>
    </div>
  );
}
