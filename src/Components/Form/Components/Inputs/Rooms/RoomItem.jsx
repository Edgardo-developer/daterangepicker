import styles from "./rooms.module.css";
import globalStyles from "../../../Form.module.css"
import ChildrenComponent from "./ChildrenComponent"
import AddChildrenComponent from "./AddChildrenComponent";

const RoomItem = (props) => {
    const room = props.item;
    const key = props.hasOwnProperty('id') ? props.id : '';
    const updateRoomItem = props.updateItem;
    const removeItem = props.removeItem;
    const changeAdults = (type) => {
        let adults = room.adults;
        if (type === 'minus' && room.adults !== 1){
            adults -= 1;
        }
        if (type === 'plus'){
            adults += 1;
        }
        updateRoomItem(key, {...room, adults: adults});
    }
    const manipulateChildren = (type, childrenKey = room.children.length + 1, value="") => {
        let childs = room.children;
        if (type === 'remove'){
            childs = childs.filter(e => e !== childs[childrenKey]);
        }
        if (type === 'add'){
            childs.push(value + ' years')
        }
        updateRoomItem(key, {...room, children: childs});
    }
    const removeRoom = () => {
        removeItem(key);
    }
    return(
        <div>
            {key !== 0 && <hr className={styles.roomHr}/>}
            <div className={styles.room_header}>
                <div className={styles.room_heading}>Room {key + 1}</div>
                <div className={styles.room_remove} onClick={() => {
                    removeRoom()
                }}>Remove</div>
            </div>
            <div className={styles.rooms_wrapper}>
                <div className={styles.room_adults}>
                    <span className={globalStyles.input_label +' ' + styles.inputLabel}>Adults</span>
                    <div className={styles.room_adults_buttons_wrapper}>
                        <button onClick={() => {
                            changeAdults('minus')
                        }} className={styles.room_adults_button}>−</button>
                        <div className={styles.room_adults_number}>{room.adults}</div>
                        <button onClick={() => {
                            changeAdults('plus')
                        }} className={styles.room_adults_button}>+</button>
                    </div>
                </div>
                <div className={styles.room_children}>
                    <span className={globalStyles.input_label + ' ' + styles.inputLabel}>Children</span>
                    <div className={styles.room_children_wrapper}>
                        {room.children.map((child, childId) =>
                            <ChildrenComponent key={childId} childId={childId} item={child} removeChildren={manipulateChildren} />
                        )}
                        <AddChildrenComponent id={key} addChildren={manipulateChildren} count={room.children}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RoomItem;