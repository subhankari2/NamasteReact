const logo=(
    <div>
        <a href="/">
<img className="logo" src="https://scontent.fhyd10-1.fna.fbcdn.net/v/t39.30808-6/300375900_587661383052236_9166723355242974276_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hp1Z0-bE9U8AX-yRhUe&_nc_ht=scontent.fhyd10-1.fna&oh=00_AfCWvp7H3KjHmfNzvkegzlr8vjQcNSZwTdQt_nBb3pFlAA&oe=63CE39B8" alt="logo" />
</a> </div>
);
const Header=() =>{
    return (
        <div className="header">
        {logo}
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Support</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
}
export default Header;
