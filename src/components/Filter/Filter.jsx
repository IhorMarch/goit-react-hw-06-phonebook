import {Label,Input,Title} from './Filter.styled';


export const Filter = ({ value, onChangeFilter }) =>{
    return (

          <Label>
                <Title>Find contacts by name</Title>
                <Input type="text" value={value} onChange={onChangeFilter} />
            </Label>
 
    )
};