export default function StarshipCard(props)
{
    const { shipInfo } = props
    return (
        <div className="StarshipCard">
            <h2>{shipInfo.name}</h2>
        </div>
    )
}
