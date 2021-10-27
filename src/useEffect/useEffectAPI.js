import React, { useState, useEffect } from 'react'
import Loading from './github/loading';
import { useHistory} from "react-router-dom";
const UseEffectAPI = () => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all/');
            setLoading(false);
           setUsers(await response.json());
          
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }
   
    const fillform = () =>{
         history.push('/Form')
           
       }
    

    return (
        <>  
            <h2>List of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    
                {
                        users.map((curElem) => {
                        
                        return (
                           
                              <div className="col-10 col-md-4 mt-5" key={curElem.show}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={ curElem.show.image.medium } className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                       
                                            <h4 className="mb-0 mt-0 textLeft"> Name: {curElem.show.name} </h4>
                                         <span className="text-left">{ }</span> 
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Genres</span> <span className="number1">{curElem.show.genres[0]}</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Language</span> <span className="number2">{curElem.show.language}</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Date</span> <span className="number3">{curElem.show.premiered}</span> </div>
                                        </div>
                                        <div className="d-flex flex-column"><button type="button" class="btn btn-light" onClick={fillform}>Booking</button></div>
                                        
                                    </div>
                             </div>
                          </div>
                    </div>
                        )
                })        

                }
                    
                </div>
            </div>

        </>
    )
}

export default UseEffectAPI
