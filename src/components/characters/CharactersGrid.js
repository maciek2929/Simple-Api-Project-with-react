import React from 'react'
import CharacterItem from './CharacterItem'
import Spiner from '../ui/Spiner.jsx'

export default function CharactersGrid({items, isLoading}) {
    return (
     isLoading ? <Spiner/> : <section className='cards'>
         {items.map(item => (
             <CharacterItem key={item.char_id} item={item}/>
         )
            
         )}
     </section>
    )
}
