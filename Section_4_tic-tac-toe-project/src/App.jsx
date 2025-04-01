function App() {
    return (
        <>
            <main>
                <div id="game-container">
                    <ol id='players'>
                        <li>
                            <span className='player'>
                            <span className='player-name'>Player 1</span>
                            <span className='symbol'>X</span>
                            </span>
                            <button>Edit</button>
                        </li>
                        <li>
                            <span className='player'>
                            <span className='player-name'>Player 2</span>
                            <span className='symbol'>O</span>
                            </span>
                            <button>Edit</button>
                        </li>

                    </ol>
                    PLAYERS
                    GAMEBOARD
                </div>
                LOGS
            </main>
        </>
    )
}

export default App
