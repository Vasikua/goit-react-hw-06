import Contact from '../contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
export default function ContactList() {
    const data = useSelector((state) => state.contacts.items);
    return (
        <ul className={css.list}>
            {data.map(user =>( 
                <li className={css.item} key={user.id}>
                    < Contact data={user}/>
                </li>
            ))
            }
        </ul>
    )
    
}