import { useState } from 'react';
import { characters } from '../../../todo/data/character';
import { Card } from '../character.item/character';

export function characterList() {
    const [character, setCharacter] = useState(characters);

    return (
        <>
            <>
                <div className="app container">
                    <ul
                        aria-labelledby="list"
                        className="characters-list row list-unstyled"
                    >
                        {character.map((item) => (
                            <Card
                                characters={item}
                                key={item.toString()}
                            ></Card>
                        ))}
                    </ul>
                </div>
            </>
        </>
    );
}
