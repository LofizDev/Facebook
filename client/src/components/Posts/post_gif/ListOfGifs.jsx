

export default function ListOfGifs({ url, id, title }) {
    return (
        <div >
            {/* <h6 >{title}</h6> */}
            <img src={url} alt={title} />
        </div>
    )
}
