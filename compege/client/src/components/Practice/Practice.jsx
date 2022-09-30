import styled from 'styled-components';
import NumTask from './NumTask';
import * as selectors from "../../redux/selectors";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { randomTasks, getAllTasks } from '../../redux/task-reducer';
import { useEffect } from 'react';

const Practice = () => {
	const isAuth = useSelector(selectors.isAuth);
	const tasks = useSelector(selectors.tasks);
	const statistic = useSelector(selectors.statistic);
	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getAllTasks());
    })

	if (!isAuth) {
        return <Navigate to="/login"/> 
    }

	const randomTasksMass = () => {
		let allTasks = [];
		console.log(tasks);
		for (let num = 1; num < tasks.length; num++) {
			let newTasks = tasks.filter(t => t.number === num);
			let randTasks = Math.floor(Math.random() * newTasks.length);
			allTasks.push(newTasks[randTasks]);
		}
		console.log(allTasks);
		dispatch(randomTasks(allTasks));

		return allTasks;
	}

	const statisticTasksMass = () => {
		let allTasks = [];
		console.log(tasks);
		for (let num = 1; num < tasks.length; num++) {
			if (statistic.statistic[num - 1] <= 50) {
				let newTasks = tasks.filter(t => t.number === num);
				let randTasks = Math.floor(Math.random() * newTasks.length);
				allTasks.push(newTasks[randTasks]);
			}
			if (statistic.statistic[num - 1] <= 30) {
				let newTasks = tasks.filter(t => t.number === num);
				let randTasks = Math.floor(Math.random() * newTasks.length);
				allTasks.push(newTasks[randTasks]);
			} /*может быть понадобится сделать функцию, чтоб не выводились одинаковые задания*/
		}
		console.log(allTasks);
		dispatch(randomTasks(allTasks));

		return allTasks;
	}

    return (
        <Container>
			<H1>Практика</H1>
			<Block>
				<H4>Сгенерировать полный вариант</H4>
				<div>Система составит полный вариант из случайных заданий и по окончании работы проверит ваши ответы.</div>
				<Link to='/practice/test'><Button onClick={() => {randomTasksMass()}}>Составить вариант</Button></Link>
			</Block>
				
			<Block>
				<H4>Конструктор заданий по типам и темам</H4>
				<div>Вы можете сами составить вариант из необходимого количества заданий по конкретным разделам, чтобы тренироваться по определённым темам.</div>
				<NumTask />
			</Block>
				
			<Block>
				<H4>Ваш персональный вариант</H4>
				<div>Система сформирует вам индивидуальный вариант в зависимости от накопленной статистики, ранее решённых, нерешённых и вызвавших затруднение заданий.</div>
				<Link to='/practice/test'><Button onClick={() => {statisticTasksMass()}}>Составить вариант</Button></Link>
			</Block>
		</Container>
    )
}

export default Practice;

const Container = styled.div`
	padding-bottom: 10px;
`

const H1 = styled.div`
	margin-top: 20px;
	margin-bottom: 30px;
	text-align: center;
	font-family: 'Montserrat', sans-serif;
	font-size: 40px;
`

const H4 = styled.div`
	margin-bottom: 10px;
	font-family: 'Montserrat', sans-serif;
	font-size: 25px;
	letter-spacing: 0.005em;
`

const Block = styled.div`
	margin-bottom: 25px;
	background: #FFFFFF;
	border: 1px solid #000000;
	box-sizing: border-box;
	border-radius: 25px;
	padding: 25px;
`

const Button = styled.button`
	margin-top: 20px;
	padding: 0px 15px;
    width: auto;
    height: 45px;
    background: rgba(219, 205, 254, 0.6);
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 25px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;

	&:hover{
		opacity: 0.8;
	}
`