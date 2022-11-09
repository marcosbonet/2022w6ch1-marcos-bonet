import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../store/store';
import * as action from '../../my.reducer/action.creators';
import { useEffect } from 'react';
import { Card } from './character';
import { characters } from '../../models/data/character';

export function ListCharacter() {
    const charactersPaint = useSelector((state: rootState) => state.character);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(action.loadAction(characters));
    }, [dispatcher]);

    return (
        <>
            <div className="app container">
                <ul
                    aria-labelledby="list"
                    className="characters-list row list-unstyled"
                >
                    {charactersPaint.map((item) => (
                        <Card item={item} key={item.toString()}></Card>
                    ))}
                </ul>
            </div>
        </>
    );
}
