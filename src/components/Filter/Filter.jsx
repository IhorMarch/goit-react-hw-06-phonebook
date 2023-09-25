import {Label,Input,Title} from './Filter.styled';
import {  useDispatch } from "react-redux";
// Импортируем генератор экшена

import { setStatusFilter } from "../../redux/filterSlice";



export const Filter = () =>{

// Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
    
    
    const changeFilter = event => {
         event.preventDefault();
        const form = event.target;
       
        const filter = form.value
        console.log(filter);
        dispatch(setStatusFilter(filter))
        }
  

    return (

          <Label>
                <Title>Find contacts by name</Title>
                <Input type="text" name ='filter' onChange={changeFilter} />
            </Label>
 
    )
};