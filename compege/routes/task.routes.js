const {Router} = require('express');
const Task = require('../models/Task');
const router = Router();

// /api/task/add
router.post(
    '/add', 
    async (req, res) => {
        try {
            const task = new Task({number: 1, questions: 'На рисунке справа схема дорог Н-ского района изображена в виде графа, в таблице содержатся сведения о длинах этих дорог (в километрах). Так как таблицу и схему рисовали независимо друг от друга, то нумерация населённых пунктов в таблице никак не связана с буквенными обозначениями на графе. Определите, какова длина дороги из пункта В в пункт Е. В ответе запишите целое число – так, как оно указано в таблице.', 
                photo: 'https://inf-ege.sdamgia.ru/get_file?id=19980', answer: '20', score: 1});
            await task.save();
        } catch (e) {
            console.log(e);
        }
})


// /api/task/tasks
router.get(
    '/tasks',
    async (req, res) => {
        try {
            const task = await Task.find();
            res.json(task);
        } catch (e) {
            console.log(e);
        }
})

module.exports = router;