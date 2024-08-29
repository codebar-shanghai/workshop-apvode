import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faMicrochip,
	faTimeline,
} from "@fortawesome/free-solid-svg-icons";

import {
	faCircleQuestion,
	faLightbulb,
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCircleQuestion);
library.add(faLightbulb);
library.add(faMicrochip);
library.add(faTimeline);

export {
	FontAwesomeIcon,
}

