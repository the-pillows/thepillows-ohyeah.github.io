import { YeahsPerDecadeBarChart, YeahsPerLabelCompanyBarChart, YeahsPerYearBarChart } from '../Charts';
import './YeahCharts.css';

const YeahCharts = () => {
	return (
			<>
			<section id='tp-yeahs-per-year-container'>
				<article className='tp-yeahs-per-year container'>
					<h2 className='title'>Number of 'yeahs' per year</h2>
					<YeahsPerYearBarChart width={1000} height={700} colorBar={'rgba(255, 188, 9, .6)'} />
				</article>
			</section>

			<section id='tp-yeahs-per-decade-container'>
				<article className='tp-yeahs-per-decade container'>
					<h2 className='title'>Number of 'yeahs' per decade</h2>
					<YeahsPerDecadeBarChart width={1000} height={600} colorBar={'rgba(255, 188, 9, .6)'} />
				</article>
			</section>

			<section id='tp-yeahs-per-label-company-container'>
				<article className='tp-yeahs-per-label-company container'>
					<h2 className='title'>Number of 'yeahs' per label company</h2>
					<YeahsPerLabelCompanyBarChart width={1000} height={600} />
				</article>
			</section>
		</>
	);
}

export default YeahCharts;
