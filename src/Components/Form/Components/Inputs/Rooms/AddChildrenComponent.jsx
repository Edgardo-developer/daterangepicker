import styles from "./rooms.module.css";
function OptionRow(props) {
    const age = props.age;
    return (<option value={age}>{age}</option>);
}

const AddChildrenComponent = (props) => {
    const count = props.count;
    const id = props.id;
    const addChildren = props.addChildren;
    const addChild = (event) => {
        addChildren('add', id ,event.target.value);
    }
    return (
        <div className={styles.childs_dropdown_wrapper}>
            <select name="child" className={styles.childs_dropdown} id={'childs_'+id} onChange={addChild} value=''>
                 {[...Array(18)].map((x, i) =>
                     <OptionRow key={i} age={i}/>
                 )}
            </select>
            <label htmlFor={'childs_'+id} className={styles.room_children_add}>
                {count.length === 0  ? 'Add new' : <svg width="18" height="18" viewBox="0 0 18 18"><path fill="rgba(0, 0, 0, .4)" fillRule="nonzero" d="M15.517 7.642h-5.16v-5.16a1.358 1.358 0 0 0-2.715 0v5.16h-5.16a1.358 1.358 0 0 0 0 2.716h5.16v5.16a1.358 1.358 0 0 0 2.716 0v-5.16h5.16a1.358 1.358 0 0 0 0-2.716"></path></svg>}
            </label>
        </div>
    )
}
export default AddChildrenComponent;