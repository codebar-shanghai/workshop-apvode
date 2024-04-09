<script setup lang="ts">
import { Timeline, ITimelineSlideData } from "@knight-lab/timelinejs";
import "@knight-lab/timelinejs/dist/css/timeline.css";
import {
	ref,
	onMounted,
} from "vue";
import moment from "moment";

const timeline = ref<HTMLDivElement | null>(null);

const GRP_HW = "Hardware",
	GRP_OS = "Operating Systems",
	GRP_PL = "Programming Languages",
	GRP_SW = "Softwares and Libraries",
	GRP_WF = "Web Frontend",
	GRP_DB = "Databases",
	GRP_DL = "Deep Learning & 3D",
	GRP_CO = "Companies",
	GRP_NP = "Network Protocols",
	GRP_MC = "Misc.";

type GROUP =
	| typeof GRP_HW
	| typeof GRP_OS
	| typeof GRP_PL
	| typeof GRP_SW
	| typeof GRP_WF
	| typeof GRP_DB
	| typeof GRP_DL
	| typeof GRP_CO
	| typeof GRP_MC
	| typeof GRP_NP
	;

const RAW_EVENTS: { name: string; day: string; group: GROUP; text?: string }[] = [
	{ day: "1939",       group: GRP_HW, name: "Bombe" },
	{ day: "1945-06-30", group: GRP_MC, name: "von Neumann architecture" },
	{ day: "1946-02-15", group: GRP_HW, name: "ENIAC" },
	{ day: "1947",       group: GRP_PL, name: "Assembly language" },
	{ day: "1951-03-31", group: GRP_HW, name: "UNIVAC" },
	{ day: "1956-09-14", group: GRP_HW, name: "IBM 350 HDD" },
	{ day: "1957",       group: GRP_PL, name: "Fortran" },
	{ day: "1957",       group: GRP_CO, name: "Digital Equipment Corp." },
	{ day: "1960-11",    group: GRP_HW, name: "DEC PDP-1" },
	{ day: "1960",       group: GRP_MC, name: "Quick Sort" },
	{ day: "1961",       group: GRP_MC, name: "Compatible Time-Sharing System" },
	{ day: "1964-04-07", group: GRP_MC, name: "IBM System/360" },
	{ day: "1965-03-22", group: GRP_HW, name: "DEC PDP-8" },
	{ day: "1968-07-18", group: GRP_CO, name: "Intel" },
	{ day: "1969",       group: GRP_OS, name: "UNIX" },
	{ day: "1969-05-01", group: GRP_CO, name: "AMD" },
	{ day: "1969-07-20", group: GRP_HW, name: "Apollo 11" },
	{ day: "1969-11-21", group: GRP_NP, name: "ARPANET" },
	{ day: "1970",       group: GRP_PL, name: "Pascal" },
	{ day: "1971-11-15", group: GRP_HW, name: "Intel 4004" },
	{ day: "1972",       group: GRP_PL, name: "C" },
	{ day: "1973-03-05", group: GRP_NP, name: "Telnet" },
	{ day: "1973-05-22", group: GRP_NP, name: "Ethernet" },
	{ day: "1974",       group: GRP_MC, name: "Xerox PARC Alto GUI" },
	{ day: "1974-04-01", group: GRP_HW, name: "Intel 8008" },
	{ day: "1975-04-04", group: GRP_CO, name: "Microsoft" },
	{ day: "1976",       group: GRP_HW, name: "Apple-1" },
	{ day: "1978-03-09", group: GRP_OS, name: "BSD" },
	{ day: "1979",       group: GRP_DB, name: "Oracle" },
	{ day: "1981",       group: GRP_HW, name: "IBM PC" },
	{ day: "1981",       group: GRP_OS, name: "MS-DOS" },
	{ day: "1983-01-01", group: GRP_NP, name: "TCP/IP (Internet)" },
	{ day: "1982",       group: GRP_OS, name: "HP-UX" },
	{ day: "1982-02-24", group: GRP_MC, name: "Sun Microsystems" },
	{ day: "1983-06-07", group: GRP_DB, name: "DB2" },
	{ day: "1983-07-15", group: GRP_HW, name: "Nintendo Entertainment System" },
	{ day: "1983-09-27", group: GRP_OS, name: "GNU" },
	{ day: "1983-10",    group: GRP_SW, name: "Word" },
	{ day: "1984-02-01", group: GRP_CO, name: "Dell" },
	{ day: "1984-01-24", group: GRP_HW, name: "Macintosh" },
	{ day: "1984",       group: GRP_PL, name: "Verilog, Matlab" },
	{ day: "1985",       group: GRP_PL, name: "C++" },
	{ day: "1985-04-26", group: GRP_HW, name: "ARM" },
	{ day: "1987-02-21", group: GRP_CO, name: "TSMC" },
	{ day: "1987-12-18", group: GRP_PL, name: "Perl" },
	{ day: "1986-02",    group: GRP_OS, name: "IBM AIX" },
	{ day: "1988",       group: GRP_OS, name: "POSIX" },
	{ day: "1990-02-19", group: GRP_SW, name: "Photoshop" },
	{ day: "1991",       group: GRP_NP, name: "HTTP/0.9" },
	{ day: "1991-02-20", group: GRP_PL, name: "Python" },
	{ day: "1991-09-17", group: GRP_OS, name: "GNU/Linux" },
	{ day: "1992-06",    group: GRP_OS, name: "Solaris" },
	{ day: "1993-03-22", group: GRP_HW, name: "Intel Pentium" },
	{ day: "1993-09-15", group: GRP_OS, name: "Debian" },
	{ day: "1994-10-13", group: GRP_WF, name: "Netscape" },
	{ day: "1994-12-03", group: GRP_HW, name: "PlayStation" },
	{ day: "1995-08-24", group: GRP_WF, name: "Internet Explorer" },
	{ day: "1995-08-24", group: GRP_OS, name: "Windows 95" },
	{ day: "1995",       group: GRP_PL, name: "Java, JavaScript, PHP" },
	{ day: "1995-05-23", group: GRP_DB, name: "MySQL" },
	{ day: "1995-07",    group: GRP_NP, name: "Secure Shell (SSH)" },
	{ day: "1995-07-16", group: GRP_CO, name: "Amazon" },
	{ day: "1996-05",    group: GRP_NP, name: "HTTP/1.0 (RFC1945)" },
	{ day: "1996-07-08", group: GRP_DB, name: "PostgreSQL" },
	{ day: "1996-12-25", group: GRP_PL, name: "Ruby" },
	{ day: "1997-06-05", group: GRP_OS, name: "Symbian" },
	{ day: "1998-09-04", group: GRP_CO, name: "Google" },
	{ day: "1999-10-11", group: GRP_HW, name: "GeForce 256" },
	{ day: "2000-03-06", group: GRP_HW, name: "AMD Athlon 1Ghz" },
	{ day: "2000-05",    group: GRP_NP, name: "HTTPS (RFC2818)" },
	{ day: "2000-08-17", group: GRP_DB, name: "SQLite" },
	{ day: "2001-01-15", group: GRP_MC, name: "Wikipedia" },
	{ day: "2001-03-24", group: GRP_OS, name: "OS X 10" },
	{ day: "2001-10-25", group: GRP_OS, name: "Windows XP" },
	{ day: "2001-11-15", group: GRP_HW, name: "Xbox" },
	{ day: "2003-06",    group: GRP_SW, name: "Spring Framework" },
	{ day: "2004-10-20", group: GRP_OS, name: "Ubuntu" },
	{ day: "2004-02-04", group: GRP_CO, name: "Facebook" },
	{ day: "2004-11-09", group: GRP_WF, name: "Firefox" },
	{ day: "2005-04-07", group: GRP_MC, name: "Git" },
	{ day: "2005-07-21", group: GRP_SW, name: "Django" },
	{ day: "2006-04-01", group: GRP_DB, name: "Hadoop" },
	{ day: "2006-01",    group: GRP_HW, name: "Intel Core Duo" },
	{ day: "2006-08-26", group: GRP_WF, name: "jQuery" },
	{ day: "2007",       group: GRP_HW, name: "1TB HDD, iPhone" },
	{ day: "2007-07-23", group: GRP_DL, name: "CUDA" },
	{ day: "2007-07-29", group: GRP_OS, name: "iOS" },
	{ day: "2007-10-19", group: GRP_MC, name: "GitHub" },
	{ day: "2008-09-02", group: GRP_WF, name: "Chrome" },
	{ day: "2008-09-23", group: GRP_OS, name: "Android" },
	{ day: "2009-02-11", group: GRP_DB, name: "MongoDB" },
	{ day: "2009-04-10", group: GRP_DB, name: "Redis" },
	{ day: "2009-05-27", group: GRP_PL, name: "Node.js" },
	{ day: "2012-02-29", group: GRP_HW, name: "Raspberry Pi" },
	{ day: "2012-03",    group: GRP_PL, name: "Go" },
	{ day: "2012-10-01", group: GRP_PL, name: "TypeScript" },
	{ day: "2013-05-29", group: GRP_WF, name: "React" },
	{ day: "2014-02",    group: GRP_WF, name: "Vue.js" },
	{ day: "2015-04-10", group: GRP_HW, name: "Apple Watch" },
	{ day: "2015-05-15", group: GRP_PL, name: "Rust" },
	{ day: "2015-09-14", group: GRP_WF, name: "Angular" },
	{ day: "2015-11-09", group: GRP_DL, name: "TensorFlow" },
	{ day: "2016-09",    group: GRP_DL, name: "PyTorch" },
	{ day: "2017-03-03", group: GRP_HW, name: "Nintendo Switch" },
	{ day: "2020-11-10", group: GRP_HW, name: "Apple M1" },
	{ day: "2022-04-20", group: GRP_HW, name: "AMD Ryzen 5800X3D" },
];

const events: ITimelineSlideData[] = RAW_EVENTS.map(x => {
	const date = moment(x.day).toDate();
	return {
		start_date: { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDay() },
		text: { headline: x.name, },
		group: x.group,
	};
});

onMounted(() => {
	new Timeline(timeline.value!, {
		events,
	});
});

</script>

<template>
	<div ref="timeline"></div>
</template>

<style>
.tl-storyslider {
	display: none;
}
.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major .tl-timeaxis-tick {
	color: #fefefe !important;
}
.tl-headline {
	color: #000 !important;
}
.tl-timemarker-content-container {
	background-color: #fff !important;
	z-index: 9 !important;
	border-color: rgba(51, 51, 51, 0.5) !important;
	box-shadow: 1px 1px 3px rgba(145, 145, 145, 0.5) !important;
}
.tl-timemarker .tl-timemarker-line-left,
.tl-timemarker .tl-timemarker-line-right {
	border-color: rgba(51,51,51,0.5) !important;
	border-width: 1px !important;
	z-index: 8 !important;
	box-shadow: 0px 1px 3px rgba(145, 145, 145, 0.5) !important;
}
.tl-timemarker:hover {
	z-index: 200;
}
</style>

