class DB {
    games = [
        { id: '1', title: "Zelda, Tears of the kingdom", platform: ['Swithch'] },
        { id: '2', title: "Final fantasy 7 remake", platform: ['PS%', 'Xbox'] },
        { id: '3', title: "Elden Ring", platform: ['PS%', 'Xbox', 'PC'] },
        { id: '4', title: "Mario Kart", platform: ['Swithch'] },
        { id: '5', title: "Pokemon Scarlet", platform: ['PS%', 'Xbox', 'PC'] },
    ]

    authors = [
        { id: '1', name: "mario", verified: true },
        { id: '2', name: "yoshi", verified: false },
        { id: '3', name: "peach", verified: true },
    ]

    reviews = [
        { id: '1', rating: 9, content: "lorem ipsum", author_id: '1', game_id: '2' },
        { id: '2', rating: 10, content: "lorem ipsum", author_id: '2', game_id: '1' },
        { id: '3', rating: 7, content: "lorem ipsum", author_id: '3', game_id: '3' },
        { id: '4', rating: 5, content: "lorem ipsum", author_id: '2', game_id: '4' },
        { id: '5', rating: 8, content: "lorem ipsum", author_id: '2', game_id: '5' },
        { id: '6', rating: 7, content: "lorem ipsum", author_id: '1', game_id: '2' },
        { id: '7', rating: 10, content: "lorem ipsum", author_id: '3', game_id: '2' },
    ]
}

export default new DB();