import * as echarts from "echarts/core";

import {
	LineChart,
} from "echarts/charts";

import {
	TitleComponent,
	GridComponent,
	//DatasetComponent,
} from "echarts/components";

import {
	CanvasRenderer,
} from "echarts/renderers";

echarts.use([
	LineChart,

	TitleComponent,
	GridComponent,
	//DatasetComponent,
	CanvasRenderer,
]);

export {
	echarts,
};

