import styled from 'styled-components';
import { BsFileEarmarkWord } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from "../../redux/selectors";
import { useEffect } from 'react';
import { topics } from '../../redux/task-reducer';
import { download } from '../../redux/task-reducer';

const File = () => {
    const tasks = useSelector(selectors.topics);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topics());
    }, [])

    const downloadHandler = (e, file) => {
        e.stopPropagation();
        dispatch(download(file));
    }

    return (
        <>
            {tasks && tasks.map(t => 
                <Content key={t._id}>
                    <Wrap> 
                        <span>
                            {t.number}. 
                        </span>
                        <span style={{paddingLeft: '8px'}}>
                            {t.topic}
                        </span>
                        <Span onClick={(e) => downloadHandler(e, t)}>
                            <BsFileEarmarkWord style={{color: 'black', fontSize: '18px', verticalAlign: 'middle', marginLeft: '5px'}}/>
                        </Span>
                    </Wrap>        
                </Content>
            )}
        </>
    )
}

export default File;

const Content = styled.div`
	margin-bottom: 10px;
`

const Span = styled.span`
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`

const Wrap = styled.div`
	margin-bottom: 8px;
`