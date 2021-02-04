import React from "react";
import { storiesOf } from "@storybook/react";

import ShareInfo from "../index";

const stories = storiesOf("atoms/ShareInfo", module);

stories.add("__interactive", () => <ShareInfo />);
