import React from 'react';

interface Iprops {
    friend: {
        name: string,
        age: number,
        image: string,
        note?: string,
    }[]
}

const FriendList: React.FC<Iprops> = ({ friend }) => {
    return (
        <div>
            <ul>
                {
                    friend.map(frd => {
                        return (
                            frd.name
                        )
                    })
                }
            </ul>



        </div>
    );
};

export default FriendList;