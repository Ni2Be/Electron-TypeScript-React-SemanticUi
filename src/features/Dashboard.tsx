import React, { Fragment, useState } from "react";

import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";

const Dashboard: React.FC = () => {
  const [activeItem, setActiveItem] = useState("search");
  return (
    <Menu vertical>
      <Menu.Item>
        <Input placeholder="Search..." />
      </Menu.Item>

      <Menu.Item>
        Home
        <Menu.Menu>
          <Menu.Item
            name="search"
            active={activeItem === "search"}
            onClick={() => setActiveItem(name)}
          >
            Search
          </Menu.Item>
          <Menu.Item
            name="add"
            active={activeItem === "add"}
            onClick={() => setActiveItem(name)}
          >
            Add
          </Menu.Item>
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={() => setActiveItem(name)}
          >
            Remove
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item
        name="browse"
        active={activeItem === "browse"}
        onClick={() => setActiveItem(name)}
      >
        <Icon name="grid layout" />
        Browse
      </Menu.Item>
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={() => setActiveItem(name)}
      >
        Messages
      </Menu.Item>

      <Dropdown item text="More">
        <Dropdown.Menu>
          <Dropdown.Item icon="edit" text="Edit Profile" />
          <Dropdown.Item icon="globe" text="Choose Language" />
          <Dropdown.Item icon="settings" text="Account Settings" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default Dashboard;
