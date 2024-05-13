import { ICard } from "../interfaces/ICard"
export default function Card({avatar, name, age ,city, followers , likes, photos} : ICard){
    return(
        <section role="user-card" className="user-card">
            <img src={avatar} alt={name} />
            <header>
                <h1>{name} <span className="accent">{age}</span></h1>
                <h2>{city}</h2>
            </header>
            <hr></hr>
            <footer>
                <div className="status">
                    <h2>{followers}K</h2>
                    <p>Followers</p>
                </div>
                <div className="status">
                    <h2>{likes}K</h2>
                    <p>Likes</p>
                </div>
                <div className="status">
                    <h2>{photos}K</h2>
                    <p>Photos</p>
                </div>
            </footer>
        </section>
    )
}