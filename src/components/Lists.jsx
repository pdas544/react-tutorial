const Lists = () => {
    const userInfo = [
        {name:"Priyabrata", email:"abc1@test.com"},
        {name:"John", email:"abc2@test.com"},
        {name:"Hex", email:"abc3@test.com"}
    ];
    return <section>
        {userInfo.map(({name, email})=>
            (
                <ul key={Math.random()}>
                    <li>{name}</li>
                    <li>{email}</li>
                </ul>
            )
        )}

    </section>
}

export default Lists;