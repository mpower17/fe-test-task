import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export const GameAPI = {
    getGameField() {
        return instance.get("game/")
            .then(response => response.data);
    },

    makeMove(index) {
        return instance.post("game/move", {index: index})
            .then(response => response.data)
    },

    resetGame() {
        return instance.post("game/reset")
            .then(response => response.data)
    },

    nextGame() {
        return instance.get("game/next")
            .then(response => response.data)
    }
}

export const HistoryAPI = {
    getGameHistory() {
        return instance.get("score")
            .then(response => response.data)
    },

    resetGameHistory() {
        return instance.post("score/reset")
            .then(response => response.data)
    }
}
