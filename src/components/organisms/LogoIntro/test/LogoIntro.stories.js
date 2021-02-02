import React from "react";
import { storiesOf } from "@storybook/react";

import LogoIntro from "../index";

const stories = storiesOf("organisms/LogoIntro", module);

stories.add("__interactive", () => <LogoIntro />);
