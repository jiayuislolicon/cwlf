import React from "react";
import { storiesOf } from "@storybook/react";

import IntroBg from "../index";

const stories = storiesOf("atoms/IntroBg", module);

stories.add("__interactive", () => <IntroBg item="puff" />);
