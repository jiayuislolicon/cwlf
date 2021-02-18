import React from "react";
import { storiesOf } from "@storybook/react";

import { boolean } from "@storybook/addon-knobs";
import ArticlePopup from "../index";

const stories = storiesOf("organisms/ArticlePopup", module);

stories.add("__interactive", () => (
  <ArticlePopup open={boolean("open", false)} />
));
