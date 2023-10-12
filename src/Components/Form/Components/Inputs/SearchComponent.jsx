import {useState} from "react";
import FormStyles from '../../Form.module.css'
import SearchItem from "./Search/SearchItem";
import searchStyles from './Search/Search.module.css';
import GoBackMobile from "./Extra/GoBackMobile";
const SearchComponent = (props) => {
    const popupType = props.popup;
    const changePopup = props.changePopup;
    const isMobile = props.isMobile;
    const [regions, setRegions] = useState(['Moscow, Russia', 'Prague, Czech Republic', 'Saint Petersburg, Russia']);
    const [search, setSearch] = useState('Moscow, Russia')
    const popupChange = (e) => {
        changePopup('search')
    }
    const [hotels, setHotels] = useState([
        {
            name: 'Avenue-Apart Na Malom Apart-Otel',
            address: 'Saint Petersburg, Malyij prospekt Vasil\'evskogo ostrova, 54k2',
            country: 'Canada',
            active: false,
        },
        {
            name: 'Apart-hotel Metropol',
            address: 'Sochi, Deputatskaya ulitsa, 10B/1',
            country: 'USA',
            active: false,
        },{
            name: 'Port Comfort On Ligovsky Apart-Hotel',
            address: 'Saint Petersburg, Ligovskij prospekt, 29',
            country: 'Russia',
            active: false,
        }])
    return (
        <div className={((isMobile && popupType === 'search') && FormStyles.fieldMobile) + " " + FormStyles.formDownItem + ' ' + searchStyles.input_module_searchWrapper} onClick={(e) => {
            popupChange(e)}}>
            <div className={(isMobile && FormStyles.popupMobileHeading)}>
                {(isMobile && popupType === 'search') && <GoBackMobile onClick={(e) => {popupChange(e)}} />}
                <div className={FormStyles.input_module + ' ' + searchStyles.input_module_search + ' ' + (popupType === 'search' ? FormStyles.active_field : '')}>
                    <label htmlFor="search" className={FormStyles.input_label}>Destination</label>
                    <input type="text" id={'search'} value={search}
                           className={FormStyles.input + ' ' + searchStyles.input_search} />
                </div>
            </div>
            <div className={FormStyles.popup + ' ' +
                ((isMobile && popupType === 'search') && FormStyles.popupMobile) + " " +
                ( popupType === 'search' ? FormStyles.popup_active : '')}
            >
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
            </div>
        </div>
    )
}
export default SearchComponent;