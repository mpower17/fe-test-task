import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000/api/game/"
})

export const GameAPI = {
    getGameField() {
        return instance.get("")
            .then(response => response.data);
    },

    makeMove(index) {
        return instance.post("move", {index: index})
            .then(response => response.data)
    },

    resetGame(index) {
        return instance.post("move", {index: index})
            .then(response => response.data)
    },

    nextGame() {
        return instance.get("next")
            .then(response => response.data)
    }
}
