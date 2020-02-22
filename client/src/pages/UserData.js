import React, {useState, useEffect} from 'react'

export const UserData = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            let id = JSON.parse(window.localStorage.getItem('userData')).userId;
            const result = await fetch(`http://localhost:3000/users/${id}`)
                .then(result => result.json())
                .then(result => setData(result))
        };
        fetchData();
    }, []);
    return (
        <>
            {
                data !== null
                    ?
                    data.map(item => {
                        console.log(data)
                        return(
                            <div key={item.id}>
                                <li className="list-group">
                                    <ul className="p-3">
                                        <li className="list-group-item"><h2>Username - {item.username}</h2></li>
                                        <li className="list-group-item"><h4>Email : {item.email}</h4></li>
                                        <li className="list-group-item"><h4>Biography : {item.bio}</h4></li>
                                    </ul>
                                </li>
                            </div>
                        )
                        })

                    : <p>nothing</p>
            }
        </>
    );
}

// export class UserData extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: false,
//             userData: ''
//         }
//
//     }
//
//     getData() {
//         let id = JSON.parse(window.localStorage.getItem('userData')).userId;
//         fetch(`http://localhost:3000/users/${id}`)
//             .then(res => res.json())
//             .then(result => this.setState({userData: result[0]}))
//
//     };
//
//     componentDidMount(){
//         this.getData()
//     }
//
//     render () {
//         // console.log('data from state - ', this.state.userData);
//         return (
//             <div className="container">
//                 <ul>
//                     {
//                         this.state.userData.length < 0
//                             ?
//                             //this.state.userData.map(item => {
//                             console.log(this.state.userData)
//                             // return(
//                             //     <div key={item.id}>
//                             //         <li className="list-group">
//                             //             <ul className="p-3">
//                             //                 <li className="list-group-item"><h2>Name of flight - {item.name}</h2></li>
//                             //                 <li className="list-group-item"><h4>Come from : {item.come_from}</h4></li>
//                             //                 <li className="list-group-item"><h4>Come to : {item.come_to}</h4></li>
//                             //                 <li className="list-group-item"><h4>Registration info : {item.registration_info}</h4></li>
//                             //                 <li className="list-group-item"><p>Avia company is -  {item.avia_company}</p></li>
//                             //                 <li className="list-group-item"><p>Speed - {item.speed}</p></li>
//                             //                 <li className="list-group-item"><p>Flight distance - {item.flight_distance}</p></li>
//                             //             </ul>
//                             //         </li>
//                             //     </div>
//                             //)
//                             //})
//                             : <p>No data</p>
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

