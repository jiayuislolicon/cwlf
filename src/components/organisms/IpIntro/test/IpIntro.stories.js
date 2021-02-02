import React from "react";
import { storiesOf } from "@storybook/react";

import IpIntro from "../index";

const stories = storiesOf("organisms/IpIntro", module);

stories.add("__interactive", () => <IpIntro />);
