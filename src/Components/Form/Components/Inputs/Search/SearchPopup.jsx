import FormStyles from "../../../Form.module.css";
import SearchItem from "./SearchItem";
import FormPopup from "../Extra/FormPopup";

const SearchPopup = (props) => {
    const hotels = props.hotels;
    const regions = props.regions;
    const popupType = props.popupType;
    const setSearch = props.setSearch;
    const isMobile = props.isMobile;
return(
    <FormPopup popupTypeCheck={popupType === 'search'} isMobile={isMobile}>
                <div className={FormStyles.popup_separator}>Regions</div>
        {
            regions.map((region, k) =>
                <SearchItem key={k} searchUpdate={setSearch} type='region' item={region}/>
            )}
        <div className={FormStyles.popup_separator}>Hotels</div>
        {
            hotels.map((hotel, k) =>
                <SearchItem key={k} searchUpdate={setSearch} type="hotel" item={hotel}/>
            )}
    </FormPopup>
)
}
export default SearchPopup;