langArr = ["Languages learned to date:\tHTML5 | CSS | Javascript | JSON | NodeJS | Express | PostgreSQL"]
devArr = ["Tools used:\tGit | Github | Postman | Figma | CircleCI | Rollbar"]
moreArr = ["Other skills:\tAgile Software Development | RESTful API | Effecient Algorithms"]

module.exports = {
    getLanguages: (req, res) => {
        res.status(200).send(langArr[0])
    },
    getDevs: (req, res) => {
        res.status(200).send(devArr[0])
    },
    getMore: (req, res) => {
        res.status(200).send(moreArr[0])
    }
}