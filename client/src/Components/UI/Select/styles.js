export const customStyles = {
	option: provided => ({
		...provided,
		padding: 10,
		fontFamily: 'sans-serif',
	}),
	control: () => ({
		display: 'flex',
		justifyContent: 'space-between',
		width: 200,
		border: '1px solid black',
		borderRadius: 4,
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
