import React from "react";
import { storiesOf } from "@storybook/react";

import IpIntroCircle from "../index";

const stories = storiesOf("atoms/IpIntroCircle", module);

stories.add("__interactive", () => <IpIntroCircle item="puff" />);
