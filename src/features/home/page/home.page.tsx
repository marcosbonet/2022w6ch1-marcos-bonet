import { characterList } from '../components/list.character/list.character';

function HomePage() {
    return (
        <main>
            <h2>Home page</h2>
            <div>{characterList()}</div>
        </main>
    );
}

export default HomePage;
