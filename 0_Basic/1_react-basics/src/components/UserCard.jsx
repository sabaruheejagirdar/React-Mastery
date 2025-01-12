import './UserCard.css';
import sabapic from '../assets/SabaPic.jpg';

const UserCard= (props) => {
    return(
        <>
        <div className="usercontainer" style={props.style}>
            <div className="name">{props.name}</div>
            <div className="image">
                <img src={props.pic} alt="image" />
            </div>
            <div className="description">{props.desc}</div>
        </div>
        </>
    )
}

export default UserCard