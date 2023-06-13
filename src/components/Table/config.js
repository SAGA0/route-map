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
        ID: 'Маршрут 29А',
        fromLat: 43.326127,
        fromLng: 45.740435,
        toLat: 43.327538,
        toLng: 45.686137,
    },
    {
        key: 2,
        ID: 'Маршрут 28',
        fromLat: 43.326127,
        fromLng: 45.740435,
        toLat: 43.325831,
        toLng: 45.683846,
    },
    {
        key: 3,
        ID: 'Маршрут 6',
        fromLat: 43.314910,
        fromLng: 45.724424,
        toLat: 43.316032,
        toLng: 45.691622,
    },
    {
        key: 4,
        ID: 'Маршрут 29',
        fromLat: 43.293294,
        fromLng: 45.745721,
        toLat: 43.327538,
        toLng: 45.686137,
    },
    {
        key: 5,
        ID: 'Маршрут Урус-Мартан - Грозный',
        fromLat: 43.136663,
        fromLng: 45.540844,
        toLat: 43.326851,
        toLng: 45.683776,
    },
]

export { columns, data }
