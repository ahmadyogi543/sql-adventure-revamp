import React from "react";
import {
  MdHomeFilled,
  MdInfo,
  MdTableChart,
  MdOutlineListAlt,
} from "react-icons/md";

import { useMenuContext } from "../../context/MenuContext";

import AppButton from "../AppButton";

export default function ToolbarBox() {
  const { toTopicMenu } = useMenuContext();

  return (
    <div className="d-flex m-3">
      <AppButton
        className="p-2 me-3"
        onClick={toTopicMenu}
        title="x"
        variant="custom-blue"
      >
        <MdHomeFilled className="text-white h4 m-0" />
      </AppButton>
      <AppButton className="p-2 me-3" title="x" variant="custom-blue">
        <MdInfo className="text-white h4 m-0" />
      </AppButton>
      <AppButton className="p-2 me-3" title="x" variant="custom-blue">
        <MdTableChart className="text-white h4 m-0" />
      </AppButton>
      <AppButton className="p-2 me-3" title="x" variant="custom-blue">
        <MdOutlineListAlt className="text-white h4 m-0" />
      </AppButton>
    </div>
  );
}
