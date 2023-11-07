import {NavLink,Outlet} from "react-router-dom";


function Layout() {
    return (
        <>
          <header>
            <NavLink to ="/" className={({isActive})=>isActive?"active-class":""}>Home</NavLink>
            <NavLink to="/posts" className={({isActive})=>isActive?"active-class":""}>Blog</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive?"active-class":""}>About</NavLink>
          </header>
          <main>
            <Outlet />
          </main>
          <footer>Copyright 2023</footer>
        </>
    );
  }
  
  export default Layout;