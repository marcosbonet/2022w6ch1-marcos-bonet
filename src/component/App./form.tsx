export function form() {
    return (
        <form>
            <input type="text" id="name" name="name" required />
            <input type="text" id="family" name="family" required />
            <input type="text" id="age" name="age" required />
            <input type="text" id="lifeStatus" name="lifeStatus" required />
            <button type="submit"></button>
        </form>
    );
}
