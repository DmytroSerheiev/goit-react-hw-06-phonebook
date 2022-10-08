import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Filter from './Filter'
import s from './ContactList.module.css';

const element = <FontAwesomeIcon icon={faTrashAlt} />;
<Filter/>

// const Filter = ({ value, onChangeFilter }) => {
//   return (
//     <div className={s.filter}>
//       <label>
//         Find contacts by name
//         <input
//           type="text"
//           value={value}
//           onChange={e => onChangeFilter(e.target.value)}
//         />
//       </label>
//     </div>

//   );
// };

const ContactList = ({ contacts, filter, onChangeFilter, onDeleteContact }) => {
  const contactList = contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button
          className={s.btn}
          type="button"
          onClick={() => onDeleteContact(id)}
          title="delete"
        >
          {element}
        </button>
      </li>
    );
  });

  return (
    <div className={s.contacts}>
      {!!contacts.length ? (
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      ) : (
        <div>
          <p>Запрашиваемых данных "{filter}" нет в списке контактов</p>
          <button type="button" onClick={() => onChangeFilter('')}>
            Вернуться к списку
          </button>
        </div>
      )}
      <ul>{contactList.reverse()}</ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  // filter: PropTypes.number.isRequired,
  // onChangeFilter: PropTypes.string.isRequired,
  // onDeleteContact: PropTypes.string.isRequired,
 
};


export default ContactList;
