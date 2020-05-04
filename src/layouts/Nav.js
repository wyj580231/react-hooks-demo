import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

const Nav = ({ history }) => {
  const [current, setCurrent] = useState(history.location.pathname);
  return (
    <nav>
      <Menu
        selectedKeys={[current]}
        mode="horizontal"
        onClick={(e) => setCurrent(e.key)}
      >
        <Menu.Item key="/">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <SubMenu title="test">
          <Menu.Item key="/test/xss">
            <NavLink to="/test/xss">XSS</NavLink>
          </Menu.Item>
          <Menu.Item key="/test/event">
            <NavLink to="/test/event">event</NavLink>
          </Menu.Item>
          <Menu.Item key="/test/context">
            <NavLink to="/test/context">context</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </nav>
  );
};
export default withRouter(Nav);
