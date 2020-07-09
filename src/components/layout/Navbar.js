import React, { useEffect } from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, user } from "actions";
const Navbar = () => {
  const loginSelector = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (loginSelector.isLogin) {
      dispatch(user.loadUser());
    }
  }, [loginSelector.isLogin, dispatch]);

  return (
    <header className="nav-head">
      <nav>
        <div className="nav-brand">
          <NavLink to="/">conduit</NavLink>
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            {!loginSelector.isLogin ? (
              <>
                <li>
                  <NavLink to="/signin">Sign in</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Sign up</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Dropdown.Button
                    overlay={
                      <Menu>
                        <Menu.Item
                          key="1"
                          icon={<LogoutOutlined />}
                          onClick={handleLogout}>
                          Logout
                        </Menu.Item>
                      </Menu>
                    }
                    placement="bottomRight"
                    icon={
                      <Avatar
                        size="small"
                        src={
                          loginSelector.image ||
                          "https://static.productionready.io/images/smiley-cyrus.jpg"
                        }
                      />
                    }>
                    {loginSelector.username}
                  </Dropdown.Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
