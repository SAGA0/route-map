const columns = [
	{
		title: 'Номер заявки',
		dataIndex: 'ID',
		key: 'ID',
	},
	{
		title: 'Координаты от Lat',
		dataIndex: 'fromLat',
		key: 'fromLat',
	},
	{
		title: 'Координаты от Lng',
		dataIndex: 'fromLng',
		key: 'fromLng',
	},
	{
		title: 'Координаты до Lat',
		dataIndex: 'toLat',
		key: 'toLat',
	},
	{
		title: 'Координаты до Lng',
		dataIndex: 'toLng',
		key: 'toLng',
	},
]

const data = [
	{
		key: 1,
		ID: '№1',
		fromLat: 59.84660399,
		fromLng: 30.29496392,
		toLat: 59.82934196,
		toLng: 30.42423701,
	},
	{
		key: 2,
		ID: '№2',
		fromLat: 59.82934196,
		fromLng: 30.42423701,
		toLat: 59.82761295,
		toLng: 30.41705607,
	},
	{
		key: 3,
		ID: '№3',
		fromLat: 59.83567701,
		fromLng: 30.38064206,
		toLat: 59.84660399,
		toLng: 30.29496392,
	},
	{
		key: 4,
		ID: '№4',
		fromLat: 59.84660399,
		fromLng: 30.29496392,
		toLat: 59.82761295,
		toLng: 30.41705607,
	},
	{
		key: 5,
		ID: '№5',
		fromLat: 59.83567701,
		fromLng: 30.38064206,
		toLat: 59.84660399,
		toLng: 30.29496392,
	},
]

export { columns, data }
