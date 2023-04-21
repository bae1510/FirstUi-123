

export function Invitation({event,name,occ,mail,Names,venu})
{



    return (
        <div class="test" >
            <p> Subject :{event}</p>
            <p>To :{mail} </p>
            <p> Hii , {name}</p>
            <p>I am having a {occ} next Friday at my Home . Would you like to come ? it will be fun . Lots of people from my school are  coming.</p>
            <p>you know some our school of them - {Names}</p>

            <p>My house is behind our school , near{venu}. </p>
            <p>I hope you will come and see you soon</p>

            <p>from</p>
            <p>{name}</p>

            
        </div>
    )
}
