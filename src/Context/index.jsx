import { Context } from './Context';
import dividerDesktop from '../assets/divider-desktop.svg';
import dividerMobile from '../assets/divider-mobile.svg';
import { useEffect, useState } from 'react';
import getAdvices from '../data/adviceSlipApi';
import Loading from '../components/Loading';
import iconDice from '../assets/icon-dice.svg';

function ContextProvider({ children }) {
	const loading = 'loading';

	const [advices, setAdvices] = useState(loading);
	const [call, setCall] = useState(0);

	useEffect(() => {
		getAdvices()
			.then((res) => res.slip)
			.then((data) => setAdvices(data));
	}, [call]);

	function callAdvices() {
		setAdvices(loading);

		setTimeout(() => {
			setCall(call + 1);
		}, 1000);
	}

	const { id, advice } = advices;

	const adviceId = id === undefined ? '00' : id;
	const advicesDescription = advices === loading ? <Loading /> : <h3>{advice}</h3>;

	return (
		<Context.Provider
			value={{ dividerDesktop, dividerMobile, iconDice, callAdvices, adviceId, advicesDescription }}
		>
			{children}
		</Context.Provider>
	);
}

export default ContextProvider;
