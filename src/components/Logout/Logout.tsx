function Logout() {
  const logoutHandler = () => {
    localStorage.removeItem('access-token')
    window.location.pathname = '/'
  }

  return (
    <div onClick={logoutHandler}>
      <img src="/icons/logout.svg" alt="logout" />
    </div>
  )
}

export default Logout
