import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className="wrapper">
      <main className="content">{<Outlet />}</main>
      <nav className="menu">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </nav>
    </div>
  )
}

export default App
