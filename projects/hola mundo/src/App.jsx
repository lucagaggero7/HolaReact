import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {


return(
    <section className='App'>
            <TwitterFollowCard 
              userName ="lucagaggero7"
                initialIsFollowing={true} > 
              Stefano Luca Gaggero
            </TwitterFollowCard>

            <TwitterFollowCard 
              userName ="maurigaggero" 
                initialIsFollowing={false} >  
              Mauricio Adrian Gaggero 
              </TwitterFollowCard>

            <TwitterFollowCard 
              userName ="tomasmalvissi" 
                initialIsFollowing={false} >  
              Tomas Malvissi 
              </TwitterFollowCard>

            <TwitterFollowCard 
              userName ="epolicardo" 
                initialIsFollowing={false} >  
              Emiliano Policardo 
              </TwitterFollowCard>

    </section>
)

}