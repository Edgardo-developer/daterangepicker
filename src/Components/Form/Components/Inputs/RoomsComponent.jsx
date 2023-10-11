import styles from "./Rooms/rooms.module.css";
import FormStyles from "../../Form.module.css";
import {useEffect, useState} from "react";
import RoomItem from "./Rooms/RoomItem";
import Button from "../../../Global/Button";

const RoomsComponent = (props) => {
    const popupType = props.popup;
    const changePopup = props.changePopup;
    const popupChange = (e) => {
        e.preventDefault()
        popupType === 'rooms' ? changePopup('') : changePopup('rooms')
    }
    const [rooms, setRooms] = useState([{
        adults: 1,
        children: ['4 years', '8 years'],
    }, {
        adults: 2,
        children: ['6 years', '4 years'],
    }]);
    const updateItem = (key, updatedRoom) => {
        let oldRooms = [...rooms];
        oldRooms[key] = updatedRoom;
        setRooms(oldRooms);
    }
    const removeItem = (key) => {
        let oldRooms = [...rooms];
        oldRooms = oldRooms.filter((e, k) => {
            return k !==  key;
        })
        setRooms(oldRooms);
    }
    const [guest, setGuest] = useState(1);
    useEffect(() => {
        let guests = 0;
        rooms.map(e => {
            guests += e.adults;
            guests += e.children.length;
        })
        setGuest(guests)
    }, [rooms])
    return (
        <div className={FormStyles.input_module}>
                <div className={FormStyles.input_module_wrapper} onClick={(e) => {
                    popupChange(e);
                }}>
<label htmlFor="search" className={FormStyles.input_label}>{rooms.length} room</label>
                <div className={FormStyles.input}>{guest} guest

                    <svg width="20"
                                                                 height="20"
                                                                 viewBox="0 0 20 20"
                                                                 fill="currentColor"
                                                                 className={popupType === 'rooms' ? styles.guestsSVG_active : ''}><path
                    fillRule="nonzero"
                    d="M10.908 14.623l6.139-6.14c.5-.499.5-1.315 0-1.815l-.172-.174a1.29 1.29 0 0 0-1.817 0L10 11.553l-5.06-5.06a1.288 1.288 0 0 0-1.814 0l-.173.175c-.5.5-.5 1.316 0 1.816l6.14 6.139a1.288 1.288 0 0 0 1.815 0"></path></svg></div>
                </div>
            <div className={FormStyles.popup + ' ' + FormStyles.popup_rooms + ' ' +
                (popupType === 'rooms' ? FormStyles.popup_active : '')}>
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
            </div>
        </div>
    )
}
export default RoomsComponent