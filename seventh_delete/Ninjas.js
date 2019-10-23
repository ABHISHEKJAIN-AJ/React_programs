import React from 'react';
const Ninjas=function (props) {

        const {ninjas,deleteNinja}=props;
        const ninjaList=ninjas.map(ninja => {
            if(ninja.age<21)
                return (
                    < div className = "ninja" key={ninja.id}>

                        < div > name :{ninja.name}</div>
                        < div > age:{ninja.age}</div>
                        < div > belt:{ninja.belt}</div>
                        <button onClick={()=>{deleteNinja(ninja.id)}}>DELETE</button>

                    < /div>

            )
            else
                return null
            }
        );
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        );
    }


export default Ninjas;
