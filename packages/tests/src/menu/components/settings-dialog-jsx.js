import React from "react";
import { Dialog, Button, List, ListTile } from "polythene-react";

const Tile = ({ title, selected, disabled }) =>
  <ListTile
    title={title}
    selected={selected}
    disabled={disabled}
    ink
    hoverable
    events={{
      onClick: () => {
        if (!disabled) {
          Dialog.hide();
        }
      }
    }}
  />;

const dialogOptions = {
  menu: <List
    tiles={[
      <Tile title="Item one" selected={true} disabled={false} />,
      <Tile title="Item two" selected={false} disabled={false} />,
      <Tile title="Item three" selected={false} disabled={true} />
    ]}
  />,
  hideDelay: .240
};

export default () => 
  <Button
    raised
    label="Open Menu Dialog"
    events={{
      onClick: () => Dialog.show(dialogOptions)
    }}
  />;
