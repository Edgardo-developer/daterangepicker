import FormStyles from "../../../Form.module.css";

const GoBackMobile = (props) => {
    return (
        <div className={FormStyles.popupSvgWrapper}>
            <svg width="16"
                                                         height="16"
                                                         viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         className={FormStyles.popupSvg}>
                <path fillRule="nonzero" d="M10.908 14.623l6.139-6.14c.5-.499.5-1.315 0-1.815l-.172-.174a1.29 1.29 0 0 0-1.817 0L10 11.553l-5.06-5.06a1.288 1.288 0 0 0-1.814 0l-.173.175c-.5.5-.5 1.316 0 1.816l6.14 6.139a1.288 1.288 0 0 0 1.815 0"></path>
            </svg>
        </div>
    )
}
export default GoBackMobile