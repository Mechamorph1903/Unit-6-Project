import React, { useState } from 'react';
import Cards from '../components/Cards';
import { supabase } from '../client'

const Gallery = () => {
    const [crewmates, setCrewmate] = useState([]);


        const fetchData = async () => {
            const {data} = await supabase
            .from('Crewmates')
            .select()
            .order('created_at', { ascending: true })
          
            // set state of posts
            setCrewmate(data);
        }

        fetchData();
    
    return (
        <div className="gallery">
            {
                crewmates && crewmates.length > 0 ?
                crewmates.map((crewmate,index) => 
                   <Cards id={crewmate.id} colour={crewmate.colour} name={crewmate.name} speed={crewmate.speed}/>
                ) : <h2>{'Recruit your Minions🛸'}</h2>
            }
        </div>  
    )
};

export default Gallery;