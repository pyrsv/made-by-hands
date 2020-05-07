export const customStyles = {
	option: provided => ({
		...provided,
		padding: 10,
		fontFamily: 'sans-serif',
	}),
	control: (provided, state) => ({
		...provided,
		display: 'flex',
		justifyContent: 'space-between',
		width: state.selectProps.isMobile ? 130 : 200,
		border: '1px solid black',
		borderRadius: 4,
		background: 'transparent',
	}),
	placeholder: provided => ({
		...provided,
		color: '#16161C',
		fontFamily: 'sans-serif',
	}),
	singleValue: () => ({
		fontFamily: 'sans-serif',
	}),
};
