import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "antd";
import routerConfig from "../config/route";

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
        {routerConfig.map((v) =>
          v.path ? (
            <Menu.Item key={v.path}>
              <NavLink to={v.path}>{v.name}</NavLink>
            </Menu.Item>
          ) : (
            <SubMenu title={v.name} key={v.name}>
              {v.children.map((v1) => (
                <Menu.Item key={v1.path}>
                  <NavLink to={v1.path}>{v1.name}</NavLink>
                </Menu.Item>
              ))}
            </SubMenu>
          )
        )}
      </Menu>
    </nav>
  );
};
export default withRouter(Nav);
