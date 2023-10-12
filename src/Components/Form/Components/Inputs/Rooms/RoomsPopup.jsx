import styles from "./rooms.module.css";
import RoomItem from "./RoomItem";
import Button from "../../../../Global/Button";
import FormPopup from "../Extra/FormPopup";

const RoomsPopup = (props) => {
    const popupType = props.popupType;
    const rooms = props.rooms;
    const updateItem = props.updateItem;
    const isMobile = props.isMobile;
    const removeItem = props.removeItem;
    return(
        <FormPopup popupTypeCheck={popupType === 'rooms'} isMobile={isMobile} extraClasses={styles.popup_rooms}>
                {rooms.map((room, key) => <RoomItem
                    updateItem={updateItem}
                    id={key} key ={key} item={room} removeItem={removeItem}/>)}
            <div className={styles.room_people_bottom}>
                    <div onClick={() => {
                        updateItem(rooms.length, {
                            adults: 1,
                            children: [],
                        })
                    }} className={styles.room_add}>+ Add a room</div>
                    <Button text='Done' />
                </div>
            </FormPopup>
    )
}
export default RoomsPopup;