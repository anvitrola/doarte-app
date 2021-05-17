import {Card, Name, Review} from './UserCard.styles'

function UserCard({name, comment}) {
    return (
        <Card>
            <Name>{name}</Name>
            <Review>{comment}</Review>
        </Card>
    )
}

export default UserCard
