import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai';
import {Card, Profile, Review, Rate} from './UserCard.styles'
import Photo from '../../images/augusto.jpeg';

function UserCard({name, location, photo, comment, rate}) {
    return (
        <Card>
            <Profile>
                <img src={Photo} alt={name}/>

                <div>
                    <h4>{name}</h4>
                    <h6>{location}</h6>
                </div>

                <Rate>
                    {rate}
                </Rate>
                <IconContext.Provider value={{color: "var(--yellow)", size: "1.5rem"}}>
                    <AiFillStar/>
                </IconContext.Provider>
            </Profile>
            <Review>{comment}</Review>
        </Card>
    )
}

export default UserCard
