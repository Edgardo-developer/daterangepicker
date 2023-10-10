import styles from "../../../Form.module.css";

const RoomItem = (props) => {
    const room = props.item;
    const key = props.id;
    const updateRoomItem = props.updateItem;
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
    return(
        <div>
            {key !== 0 && <hr />}
            <div className={styles.room_heading}>Room {key + 1}</div>
            <div className={styles.rooms_wrapper}>
                <div className={styles.room_adults}>
                    <span className={styles.input_label}>Adults</span>
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
                    <span className={styles.input_label}>Children</span>
                    {/*{room.children.map((child, childId) =>*/}
                    {/*    <ChildrenComponent key={childId} item={child} />*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    )
}
export default RoomItem;