import React from 'react';
import './List.css';
import { Istate as Iprops } from "./List";

const FriendList: React.FC<Iprops> = ({ friend }) => {
    const renderList = (): JSX.Element[] => {
        return friend.map(fnd => {
            return (

                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={fnd.image} alt="" />
                        <h2>{fnd.name}</h2>
                    </div>
                    <p>{fnd.age} years old</p>
                    <p className="List-note">{fnd.note}</p>
                </li>

            )
        })
    }
    return (
        <div>
            <ul>

                {renderList()}
            </ul>



        </div>
    );
};

export default FriendList;