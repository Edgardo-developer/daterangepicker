import styles from "./rooms.module.css";

const ChildrenComponent = (props) => {
    const item = props.item;
    const key = props.childId;
    const removeChildren = props.removeChildren;
    return (
        <div className={styles.roomChildren}>{item}
        <button className={styles.roomChildren_button}
        onClick={() => {removeChildren('remove', key)}}
        ><svg width="13" height="13" viewBox="0 0 20 20" strokeWidth="1"><path fill="currentColor" fillRule="nonzero" d="M11.6 10l5.1-5.2a1.1 1.1 0 00-1.5-1.6L10 8.4 4.8 3.2a1.1 1.1 0 00-1.6 0 1.1 1.1 0 000 1.6L8.4 10l-5.2 5.2a1.1 1.1 0 000 1.6 1.1 1.1 0 001.6 0l5.2-5.2 5.2 5.2a1.1 1.1 0 001.5-1.6L11.6 10z"></path></svg></button>
        </div>
    )
}
export default ChildrenComponent;