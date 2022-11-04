import useContexApp from '../Context/useContextApp';

function CardAdvice() {
	const { dividerMobile, adviceId, advicesDescription, iconDice, callAdvices } = useContexApp();

	return (
		<div className="advice">
			<div className="advice_id">
				<p>
					Advice #<span>{adviceId}</span>
				</p>
			</div>

			<div className="advice_description">{advicesDescription}</div>

			<div className="advice_divider">
				<img src={dividerMobile} alt="divider" />
			</div>

			<div className="advice_button" onClick={callAdvices}>
				<img src={iconDice} alt="" />
			</div>
		</div>
	);
}

export default CardAdvice;
