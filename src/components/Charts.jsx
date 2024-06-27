import { BarChart } from "@mui/x-charts";

export function YeahsPerYearBarChart({ width, height, colorBar }) {
	const yeahsPerYear = [
		{ year: 1990, yeahs: 2 },
		{ year: 1991, yeahs: 0 },
		{ year: 1992, yeahs: 14 },
		{ year: 1993, yeahs: 0 },
		{ year: 1994, yeahs: 25 },
		{ year: 1995, yeahs: 39 },
		{ year: 1996, yeahs: 6 },
		{ year: 1997, yeahs: 29 },
		{ year: 1998, yeahs: 114 },
		{ year: 1999, yeahs: 101 },
		{ year: 2000, yeahs: 20 },
		{ year: 2001, yeahs: 36 },
		{ year: 2002, yeahs: 67 },
		{ year: 2003, yeahs: 25 },
		{ year: 2004, yeahs: 25 },
		{ year: 2005, yeahs: 8 },
		{ year: 2006, yeahs: 10 },
		{ year: 2007, yeahs: 41 },
		{ year: 2008, yeahs: 26 },
		{ year: 2009, yeahs: 5 },
		{ year: 2010, yeahs: 0 },
		{ year: 2011, yeahs: 17 },
		{ year: 2012, yeahs: 1 },
		{ year: 2013, yeahs: 0 },
		{ year: 2014, yeahs: 12 },
		{ year: 2015, yeahs: 0 },
		{ year: 2016, yeahs: 1 },
		{ year: 2017, yeahs: 9 },
		{ year: 2018, yeahs: 14 },
		{ year: 2019, yeahs: 0 },
		{ year: 2020, yeahs: 0 },
		{ year: 2021, yeahs: 0 },
		{ year: 2022, yeahs: 0 },
		{ year: 2023, yeahs: 0 },
		{ year: 2024, yeahs: 0 },
	];

	return (
		<BarChart
			series={[
				{
					data: yeahsPerYear.map(item => item.yeahs),
					label: 'Number of yeahs'
				},
			]}
			xAxis={[
				{ scaleType: 'linear', label: 'Number of yeahs' },
			]}
			yAxis={[
				{
					scaleType: 'band',
					label: 'Year',
					data: yeahsPerYear.map(item => item.year)
				},
			]}
			colors={[colorBar]}
			margin={{left: 65}}
			layout="horizontal"
			grid={{ vertical: true }}
			width={width}
			height={height}
		/>
	);
}

export function YeahsPerDecadeBarChart({ width, height, colorBar }) {
	const yeahsPerDecade = [
		{ decade: '1990 - 1999', yeahs: 330 },
		{ decade: '2000 - 2009', yeahs: 263 },
		{ decade: '2010 - 2019', yeahs: 54 },
		{ decade: '2020 - Present', yeahs: 0 }
	];

	return (
		<BarChart
			xAxis={[
				{
					scaleType: 'band',
					data: yeahsPerDecade.map(item => item.decade)
				}
			]}
			yAxis={[
				{ scaleType: 'linear', label: 'Yeahs' },
			]}
			series={[
				{ 
					label: 'Number of yeahs',
					data: yeahsPerDecade.map(item => item.yeahs)
				}
			]}
			colors={[ colorBar ]}
			grid={{ vertical: true }}
			width={width}
			height={height}
		/>
	);
}

export function YeahsPerLabelCompanyBarChart({ width, height }) {
	return (
		<BarChart
			xAxis={[
				{ scaleType: 'band', data: ['Company Labels'] }
			]}
			yAxis={[
				{ scaleType: 'linear', label: 'Yeahs' },
			]}
			series={[
				{ 
					label: 'Captain Records (1990)',
					data: [2],
					color: "rgba(255, 188, 9, .6)"
				},
				{
					label: 'Pony Canyon (1991-1993)',
					data: [14],
					color: "#e70023"
				},
				{
					label: 'King Records (1994-2006)',
					data: [505],
					color: "#009944"
				},
				{
					label: 'Avex Trax (2006-2016)',
					data: [90],
					color: "#004ca3"
				},
				{
					label: 'Delicious Label (2016-Present)',
					data: [36],
					color: "#080808"
				}
			]}
			margin={{ top: 100 }}
			grid={{ horizontal: true }}
			width={width}
			height={height}
		/>
	)
}
