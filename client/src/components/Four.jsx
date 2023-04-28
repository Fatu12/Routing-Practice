import { Link, useParams } from "react-router-dom"

const Four = (props) =>{
    const {number} = useParams("")
    return (
        <div>
            <h1 style={{color: "blue"}}>{number}</h1>
            </div>
    )
}
export default Four;