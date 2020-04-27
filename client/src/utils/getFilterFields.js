export const getInitialFields = (params, props) => {
	return Object.entries(props).reduce((obj, [key, items]) => {
		obj[key] = items.reduce((fields, prop) => {
			fields[prop.id ? prop.id : prop.name] =
				params[key]
					?.split(',')
					.some(param => param === (prop.id ? prop.id : prop.name)) || false;
			return fields;
		}, {});
		return obj;
	}, {});
};
