import Contact from '../contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
export default function ContactList() {
    const data = useSelector((state) => state.contacts.items);
    const searchCont = useSelector(state => state.filters.name)
    const filterCont = data.filter(contact => contact.name.toLowerCase().includes(searchCont.toLowerCase()))

    return (
        <ul className={css.list}>
            {filterCont.map(user => (
                <li className={css.item} key={user.id}>
                    < Contact data={user} />
                </li>
            ))
            }
        </ul>
    )
}