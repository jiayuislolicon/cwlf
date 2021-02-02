import React from "react";
import { storiesOf } from "@storybook/react";

import Logo from "../index";

const stories = storiesOf("atoms/Logo", module);

stories.add("__interactive", () => <Logo />);
