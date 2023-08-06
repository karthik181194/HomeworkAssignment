
export const bylineColumn = [
    {
        Header:'Id',
        accessor:'bylines[0].id'
    },
    {
        Header:'Name',
        accessor:'bylines[0].display_name'
    },
    {
        Header:'Url',
        accessor:'bylines[0].url'
    },
    {
        Header:'Twitter',
        accessor:'bylines[0].twitter'
    },
    {
        Header:'Twitter Url',
        accessor:'bylines[0].twitter_url'
    },
]

export const imageColumn = [
    {
        Header:'Id',
        accessor:'image.id'
    },
    {
        Header:'Date',
        accessor:'image.date'
    },
    {
        Header:'Title',
        accessor:'image.title.rendered'
    },
    {
        Header:'Ratios',
        accessor:'image.ratios.16:9.100'
    },

]

export const videoColumn = [
    {
        Header:'Id',
        accessor:'video.id'
    },
    {
        Header:'Title',
        accessor:'video.title'
    },
    {
        Header:'Url',
        accessor:'video.url',
        editable: true
    }
]
