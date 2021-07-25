import React, { useState } from 'react';
import AddToList from './AddToList';
import FriendList from './FriendList';


export interface Istate {
    friend: {
        name: string,
        age: number | number,
        image: string,
        note?: string,
    }[]
}
const List = () => {


    const [friend, setFriend] = useState<Istate['friend']>([
        {
            name: 'chayan',
            age: 52,
            image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGFfD-mOuTjWQ/profile-displayphoto-shrink_800_800/0/1621103436438?e=1632960000&v=beta&t=HEu8hhyYQkmo92tzAykHu3bL9MwIF_BMngNqVXu2JxI',
            note: 'bast friend'
        }
    ])


    return (
        <div>
            <FriendList friend={friend} />
            <AddToList friend={friend} setFriend={setFriend} />
        </div>
    );
};

export default List;