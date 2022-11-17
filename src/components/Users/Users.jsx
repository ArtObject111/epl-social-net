import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user_image.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //округляем число страниц в большую сторону
    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i);
    }


    return <div>
        <div className={s.pageNumberBar}>
            {pagesArray.map(p => {
                return <span
                    className={`${s.page} ${props.currentPage === p && s.selectedPage}`}//скленивание двух классов
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            })}
        </div>
        {
            props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "69d028e6-b9b8-4a10-ae69-de98bcdc80eb"
                                        }
                                    })
                                        .then(responce => {
                                            if (responce.data.resultCode === 0) {
                                                props.unfollowbro(u.id)
                                            };
                                        });
                                }}>Unollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "69d028e6-b9b8-4a10-ae69-de98bcdc80eb"
                                        }
                                    }).
                                    then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.followbro(u.id)
                                        };
                                    });
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}

export default Users;