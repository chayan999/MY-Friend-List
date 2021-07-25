import React, { useState } from 'react';
import FriendList from './FriendList';


interface Istate {
    friend: {
        name: string,
        age: number,
        image: string,
        note?: string,
    }[]
}
const List = () => {


    const [friend, setFriend] = useState<Istate['friend']>([
        {
            name: 'chayan',
            age: 52,
            image: '',
            note: 'bast friend'
        }
    ])


    return (
        <div>
            <FriendList friend={friend} />
        </div>
    );
};

export default List;