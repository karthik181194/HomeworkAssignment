
export const bylineColumn = [
    {
        Header:'Id',
        accessor:'bylines[0].id',
        width: 150
    },
    {
        Header:'Name',
        accessor:'bylines[0].display_name',
        width: 150
    },
    {
        Header:'Url',
        accessor:'bylines[0].url',
        width: 150,
        Cell: props => <a href={props.cell.value} rel="noreferrer" target="_blank">{props.cell.value}</a>
    },
    {
        Header:'Twitter',
        accessor:'bylines[0].twitter',
        width: 150
    },
    {
        Header:'Twitter Url',
        accessor:'bylines[0].twitter_url',
        width: 150,
        Cell: props => <a href={props.cell.value} rel="noreferrer" target="_blank">{props.cell.value}</a>
    },
]

export const imageColumn = [
    {
        Header:'Id',
        accessor:'image.id',
        width: 150
    },
    {
        Header:'Date',
        accessor:'image.date',
        width: 150,
        Cell: props => <span>{(props.cell.value).replace(/T/g, " ")}</span>
        
    },
    {
        Header:'Title',
        accessor:'image.title.rendered',
        width: 150
    },
    {
        Header:'Ratios',
        accessor:'image.ratios.16:9.100',
        width: 150,
        Cell: props => <img src={props.cell.value} alt={"thumbnail"} />
    },

]

export const videoColumn = [
    {
        Header:'Id',
        accessor:'video.id',
        width: 150
    },
    {
        Header:'Title',
        accessor:'video.title',
        width: 150
    },
    {
        Header:'Url',
        accessor:'video.url',
        width: 150,
        editable: true,
        Cell:  props => <a href={props.cell.value} rel="noreferrer" target="_blank">{props.cell.value}</a>
    }
]
