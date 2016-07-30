import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';

import styles from '../css/styles.css';
import ScreenShots from './components/screenshots';

class PandaApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shots: ['jsx', 'html', 'php', 'main', 'scss', 'st_css', 'st_html', 'st_js', 'st_jsx']
		};
	}
	render () {
		return (
			<section id="siamak-was-here">
				<main className="view">
					<a href="./">
						<img className={styles.logoHatchback} src="./logo.png" alt="Panda Syntax Theme" />
					</a>
					<h1 className="title">
						Panda Syntax Theme
						<i>`A Superminimal, dark Syntax Theme for <a href='https://github.com/siamak/atom-panda-syntax' target='_blank'>Atom</a>, <a href='https://github.com/siamak/panda-syntax-sublime' target='_blank'>Sublime Text</a>, <a href='https://github.com/tinkertrain/panda-syntax-vscode' target='_blank'>Visual Studio Code</a>, <a href='https://github.com/PandaTheme/panda-syntax-iterm' target='_blank'>iTerm 2</a>, <a href='https://github.com/PandaTheme/pycharm-panda-syntax' target='_blank'>Pycharm</a>.`
						</i>
						<a className={styles.hero_link} href="https://github.com/PandaTheme">github.com/PandaTheme</a>
					</h1>
					<ScreenShots list={this.state.shots}/>
				</main>
				<section className={styles.leading}>
					<div className="wrapper">
						<h2 className={styles.title}>Installation</h2>
						{/*<p>
							Go to <code>Setting > Install</code> and choose <code>Themes</code>
							<br/>
							Search for <code>atom-panda-syntax</code> and install it.
							<br/>
							Go to <code>Setting > Themes</code> and choose <code>Atom Panda</code> as the syntax theme.
						</p>*/}
						<a href="http://atom.io/themes/atom-panda-syntax" target="_blank" className="install-atom">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="atom" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" width="512px" height="512px">
								<path d="M31.7339859,25.5925503c-3.3085938,0-6,2.6914005-6,6s2.6914062,5.9999981,6,5.9999981   c3.3086014,0,6-2.6913986,6-5.9999981S35.0425873,25.5925503,31.7339859,25.5925503z M31.7339859,35.5925484   c-2.205595,0-4-1.7944984-4-3.9999981c0-2.2056007,1.794405-4,4-4c2.2055016,0,4,1.7943993,4,4   C35.7339859,33.7980499,33.9394875,35.5925484,31.7339859,35.5925484z" fill="#584b4f"/>
								<path d="M52.6969872,31.9999504c6.2978973-6.1855011,9.1987991-12.217701,7.0154991-15.9997005   c-1.1902008-2.0613995-3.7005005-3.2005997-7.2600021-3.3615999c-0.3775978-0.9018002-1.2678986-1.5363998-2.3062973-1.5363998   c-1.1389999,0-2.0900993,0.7677002-2.391201,1.8100996c-0.3233986,0.0464001-0.648201,0.0944004-0.9819984,0.1519003   c-1.4167023,0.2440004-2.9009018,0.5937004-4.4231033,1.0183001C40.1426849,5.5317502,36.3686867,0.00025,32.0000877,0.00025   c-4.3686962,0-8.142601,5.5315003-10.3499012,14.0820999c-1.5219994-0.4243994-3.0057945-0.7742996-4.4225998-1.0180998   c-6.5967007-1.1372995-11.1908998-0.0937996-12.9398994,2.9359999c-1.0506001,1.8197002-0.9174001,4.1622009,0.1975999,6.7898998   c-0.4696002,0.4545994-0.763895,1.0887012-0.763895,1.7933006c0,1.3801994,1.1199999,2.5,2.5,2.5   c0.2428951,0,0.473-0.0454998,0.6950951-0.1102009c1.1833,1.6352997,2.6535997,3.3246002,4.3867998,5.026701   c-6.2981,6.1855011-9.1992998,12.217598-7.0155997,15.9997978c1.2880998,2.2305031,4.1180997,3.3838005,8.1537991,3.3838005   c1.4457998,0,3.0469055-0.1474991,4.7861004-0.4473c1.4168053-0.2439003,2.9006004-0.5937004,4.4225998-1.0181999   c2.2073002,8.5503998,5.9813004,14.0816994,10.3499012,14.0816994c2.2707977,0,4.3793983-1.5019989,6.1924973-4.1378975   c0.106102,0.0135994,0.2106018,0.0321999,0.3204002,0.0321999c1.3799019,0,2.5-1.1199989,2.5-2.5   c0-0.6236-0.2368011-1.1868019-0.6148987-1.6249008c0.7399979-1.7313004,1.395401-3.6959,1.9517975-5.8512001   c1.5222015,0.4245987,3.0064011,0.7742996,4.4231033,1.0182991c1.7397995,0.2998009,3.3398972,0.4473,4.7856979,0.4473   c4.035099,0,6.8661995-1.1532974,8.153801-3.3838005C61.8957863,44.2177505,58.9948845,38.1855507,52.6969872,31.9999504z    M47.1123924,15.0349503c0.3082924-0.0531006,0.6063919-0.0960999,0.9044914-0.1392002   c0.439003,0.7205,1.2246017,1.2064991,2.129303,1.2064991c1.0088997,0,1.873497-0.6015987,2.2683983-1.4626989   c2.7863998,0.1310997,4.7392006,0.9289999,5.5654984,2.3606997c1.5742035,2.7261009-0.8674965,7.9312992-6.7204971,13.6436996   c-2.0841026-1.9034996-4.4756012-3.8058987-7.1289024-5.6485996c-0.2680969-3.2070007-0.7172928-6.2185993-1.3201981-8.9668007   C44.292984,15.6129503,45.736393,15.2719498,47.1123924,15.0349503z M37.2104874,41.0251503   c-1.7340965,1.0014992-3.4773026,1.9244995-5.2102013,2.7663002c-1.7325993-0.8418007-3.4757996-1.764801-5.2101994-2.7663002   c-1.7728996-1.0237007-3.4391003-2.0703011-5.0053997-3.1268005c-0.1318016-1.8847008-0.2049999-3.8509979-0.2049999-5.898098   c0-2.0474014,0.0731983-4.0137024,0.2049999-5.8986015c1.5662994-1.0564995,3.2325001-2.1030998,5.0053997-3.1268005   c1.7343044-1.0012989,3.4773998-1.9246006,5.2101994-2.7663994c1.7327995,0.8417988,3.4759979,1.7651005,5.2102013,2.7663994   c1.7726974,1.0235996,3.4386978,2.0701008,5.0049057,3.1265011c0.131794,1.8849983,0.2050934,3.8513985,0.2050934,5.898901   c0,2.0472984-0.0732994,4.0133972-0.2050934,5.8982964C40.6491852,38.9549484,38.9831848,40.0014496,37.2104874,41.0251503z    M41.9963913,40.4367485c-0.2583046,2.5004997-0.6272049,4.8272018-1.084507,6.9574013   c-2.1400986-0.6869011-4.3504944-1.5306015-6.6007996-2.5326996c1.3008003-0.6635017,2.6028023-1.3550987,3.8994026-2.1039009   C39.5183907,42.002449,40.7789841,41.2261505,41.9963913,40.4367485z M29.6894855,44.8614502   c-2.2504997,1.0020981-4.4608994,1.8459015-6.6012993,2.5327988c-0.4573002-2.1305008-0.8262005-4.4571991-1.0846004-6.9580002   c1.217701,0.7896996,2.4784012,1.5659027,3.7865009,2.3213005C27.0868855,43.5063515,28.3886852,44.1979485,29.6894855,44.8614502z    M19.6964855,36.439949c-2.0464993-1.4814987-3.8848991-2.9716988-5.5070934-4.4399986   c1.6221943-1.4682007,3.4605942-2.9584999,5.5071945-4.4399014c-0.0748997,1.449501-0.1168995,2.9296017-0.1168995,4.4402027   C19.5796871,33.5107498,19.6214867,34.990551,19.6964855,36.439949z M22.0036869,23.5637493   c0.2582989-2.5007992,0.6271992-4.8274002,1.0844994-6.9577999c2.1403999,0.6868,4.3509998,1.5307999,6.6016006,2.5328007   c-1.3009014,0.6634998-2.6028004,1.3549995-3.8997002,2.1037006C24.481987,21.9977493,23.2212868,22.7740498,22.0036869,23.5637493   z M34.3108864,19.1387501c2.2505035-1.0020008,4.4608994-1.8458004,6.6009979-2.5326996   c0.4573021,2.1302986,0.8262024,4.4566994,1.084507,6.9571991c-1.2174072-0.7894993-2.4780006-1.5657005-3.7859039-2.3207989   C36.9136848,20.4937496,35.6117859,19.8022499,34.3108864,19.1387501z M44.3034859,27.5598507   c2.0466995,1.4814987,3.8852005,2.9717999,5.5074005,4.4400997c-1.6222,1.468399-3.460701,2.9586983-5.5072021,4.4402008   c0.0749016-1.4494019,0.1168022-2.9294014,0.1168022-4.4398994C44.4204865,30.4894505,44.3784866,29.0093498,44.3034859,27.5598507   z M32.0000877,2.0002501c3.1493034,0,6.4376984,4.7219,8.4578972,12.6535997   c-2.7320976,0.8686008-5.5755005,1.992301-8.4576988,3.3487997c-2.8822994-1.356699-5.726099-2.4803991-8.4580994-3.3490992   C25.5622864,6.7220502,28.8508854,2.0002501,32.0000877,2.0002501z M8.4334869,25.72435   c0.1779051-0.3435001,0.2879047-0.7275009,0.2879047-1.1408997c0-1.3464012-1.0687051-2.4377003-2.4027052-2.4901009   c-0.8959999-2.0884991-1.0168996-3.8494987-0.2985997-5.0930996c0.9061999-1.5703001,3.1553054-2.3877001,6.3881993-2.3877001   c1.3340006,0,2.8364,0.1392002,4.4800005,0.4224005c1.3757,0.2369995,2.8191051,0.5777998,4.3015003,0.9934998   c-0.6029015,2.7481995-1.0523014,5.7600002-1.3203011,8.9671001c-2.6533985,1.8426991-5.0446997,3.7451992-7.1288996,5.6485004   C10.9962864,28.9416504,9.5558863,27.2844505,8.4334869,25.72435z M16.8882866,48.9655495   c-5.6288948,0.9678001-9.5878944,0.2519989-10.8682003-1.9658012c-1.5742002-2.7260971,0.8673997-7.9313965,6.7204995-13.6437988   c2.0841999,1.9033012,4.4755011,3.8058014,7.1288996,5.6483994c0.2679996,3.2073021,0.7172012,6.2192001,1.3202,8.9673996   C19.7071857,48.3874512,18.2639866,48.7283516,16.8882866,48.9655495z M38.6257858,54.9055481   c-0.0382004-0.0016975-0.0741997-0.0114975-0.1128006-0.0114975c-1.3800011,0-2.5,1.1199989-2.5,2.5   c0,0.5508003,0.1838989,1.0554008,0.4859009,1.4687004c-1.4267998,2.0303001-2.9785995,3.1369972-4.4987984,3.1369972   c-3.1492023,0-6.4375019-4.7216988-8.4578018-12.6527977c2.7322006-0.8687019,5.5757008-1.9925003,8.4580002-3.3493996   c2.8821068,1.3568001,5.7256012,2.4806976,8.4575005,3.3491974C39.9267845,51.432251,39.3067856,53.2913513,38.6257858,54.9055481z    M57.9800835,46.9997482c-1.2802963,2.2178001-5.2421989,2.9336014-10.867691,1.9658012   c-1.3759995-0.2371979-2.8194084-0.5780983-4.3019066-0.9939003c0.6027985-2.7482986,1.0521011-5.7598991,1.3201981-8.9669991   c2.6534004-1.8428001,5.0447998-3.7451019,7.1289024-5.6486015C57.112587,39.0684509,59.554287,44.2736511,57.9800835,46.9997482z" fill="#584b4f"/>
							</svg>
							— INSTALL ON ATOM —
						</a>
						<a href="https://packagecontrol.io/packages/Panda%20Syntax%20Sublime" target="_blank" className="install-sublime">
							<svg width="245px" height="381px" id="sublime" viewBox="134 66 245 381" version="1.1" xmlns="http://www.w3.org/2000/svg">
								<path d="M135.2,446.005537 C314.6,453.205537 378.8,391.405537 378.8,332.605537 C378.8,243.805537 205.4,219.205537 205.4,163.405537 C205.4,136.405537 235.4,120.205537 356,128.605537 L352.4,66.8055373 C197.6,58.4055373 134,117.205537 134,173.005537 C134,258.805537 307.4,280.405537 307.4,341.005537 C307.4,372.205537 261.8,393.805537 135.2,384.205537 L135.2,446.005537 Z" id="S" stroke="none" fill="#E6E6E6"></path>
							</svg>
							— INSTALL ON SUBLIME TEXT —
						</a>
						<a href="https://marketplace.visualstudio.com/items?itemName=tinkertrain.theme-panda" target="_blank" className="install-vscode">
							<svg xmlns="http://www.w3.org/2000/svg" id="vscode" width="245px" height="381px">
								<path fill="#fff" d="M21 0l-11 12-7.333-5.666-2.667 1.682v13.984l2.667 1.666 7.333-5.666 11 11 7-3v-22.333l-7-3.667zm-18 19v-9l4 5-4 4zm11-4l7-6v12l-7-6z"/>
							</svg>
							— INSTALL ON VSCode —
						</a>
					</div>
				</section>

				<a href="https://github.com/PandaTheme" className={styles.github}>
					<svg className={styles.github_logo} viewBox="0 0 35.318 35.318" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.71,34.689c-0.172,0.062-0.345,0.137-0.522,0.168c-0.678,0.121-1.112-0.229-1.116-0.922
		c-0.009-1.287-0.009-2.572,0.012-3.859c0.022-1.48-0.012-2.941-1.139-4.162c0.67-0.12,1.266-0.204,1.849-0.338
		c3.862-0.887,5.868-3.323,6.124-7.366c0.131-2.058-0.236-3.946-1.604-5.567c-0.099-0.114-0.104-0.373-0.057-0.539
		c0.364-1.34,0.258-2.649-0.166-3.959c-0.105-0.327-0.279-0.428-0.602-0.407c-1.134,0.063-2.173,0.461-3.089,1.073
		c-0.883,0.593-1.705,0.722-2.754,0.482c-2.31-0.521-4.635-0.369-6.94,0.165c-0.261,0.062-0.612-0.021-0.851-0.161
		c-1.082-0.634-2.164-1.25-3.412-1.496c-0.965-0.188-1.049-0.14-1.305,0.793C7.816,9.77,7.784,10.947,8.113,12.13
		c0.047,0.172-0.002,0.448-0.117,0.575c-2.557,2.853-1.631,8.244,0.092,10.309c1.34,1.604,3.12,2.326,5.096,2.701
		c0.345,0.064,0.688,0.113,1.033,0.173c-0.296,0.77-0.562,1.497-0.863,2.212c-0.059,0.138-0.246,0.254-0.399,0.312
		c-1.938,0.752-3.604,0.199-4.713-1.56c-0.593-0.938-1.354-1.639-2.488-1.842c-0.036-0.007-0.073-0.026-0.106-0.021
		c-0.305,0.08-0.607,0.164-0.911,0.246c0.171,0.238,0.292,0.558,0.521,0.701c0.961,0.608,1.586,1.475,1.999,2.498
		c0.649,1.604,1.909,2.319,3.546,2.459c0.799,0.065,1.606,0.01,2.481,0.01c0,0.996,0.036,2.133-0.015,3.265
		c-0.026,0.61-0.639,0.854-1.373,0.604c-1.947-0.666-3.752-1.621-5.311-2.963C0.956,26.96-1.214,20.83,0.657,13.655
		C2.522,6.503,7.383,2.116,14.651,0.739C24.708-1.163,34.235,6.161,35.233,16.37C36.021,24.418,31.284,31.949,23.71,34.689z
		 M14.229,25.85c-0.006,0.014-0.01,0.024-0.016,0.038c0.018,0.003,0.036,0.006,0.055,0.009
		C14.282,25.898,14.294,25.923,14.229,25.85z M9.679,29.031c0.157,0.097,0.307,0.22,0.477,0.273c0.062,0.02,0.177-0.121,0.38-0.271
		c-0.282-0.107-0.448-0.201-0.623-0.225C9.845,28.8,9.757,28.953,9.679,29.031z M11.112,29.277c0.023,0.105,0.232,0.236,0.355,0.234
		c0.119-0.002,0.235-0.16,0.354-0.25c-0.108-0.099-0.216-0.195-0.548-0.494C11.201,28.975,11.082,29.143,11.112,29.277z
		 M12.87,28.854c-0.148,0.035-0.273,0.172-0.408,0.266c0.079,0.1,0.158,0.193,0.285,0.35c0.175-0.16,0.294-0.271,0.414-0.379
		C13.061,29.004,12.944,28.836,12.87,28.854z M8.512,28.261c0.082,0.155,0.209,0.289,0.381,0.508
		c0.115-0.188,0.24-0.332,0.218-0.361c-0.109-0.143-0.257-0.26-0.403-0.367C8.698,28.033,8.495,28.227,8.512,28.261z"/>
					</svg>
					<h1>PandaTheme on github.</h1>
				</a>
			</section>
		);
	}
};

render(
	<PandaApp />,
	document.querySelector('#panda')
)
