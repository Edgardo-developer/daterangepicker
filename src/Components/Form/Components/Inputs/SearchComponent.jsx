import {useState} from "react";
import styles from '../../Form.module.css'
import SearchItem from "./Search/SearchItem";
const SearchComponent = (props) => {
    const popupType = props.popup;
    const changePopup = props.changePopup;
    const [regions, setRegions] = useState(['Moscow, Russia', 'Prague, Czech Republic', 'Saint Petersburg, Russia']);
    const [search, setSearch] = useState('Moscow, Russia')
    const [show, setShow] = useState(false);
    const popupChange = (e) => {
        e.preventDefault()
        popupType === 'search' ? changePopup(e, '') : changePopup('search')
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
        <div>
            <div className={styles.input_module + ' ' + styles.input_module_search} onClick={(e) => {
                popupChange(e)}}>
                <label htmlFor="search" className={styles.input_label}>Destination</label>
                <input type="text" id={'search'} value={search}
                       className={styles.input + ' ' + styles.input_search} />
                <div className={styles.popup + ' ' +( popupType === 'search' ? styles.popup_active : '')}>
                    <div className={styles.popup_separator}>Regions</div>
                        {regions.map((region, k) => <SearchItem key={k} searchUpdate={setSearch} type='region' item={region}/>
                        )}
                        <div className={styles.popup_separator}>Hotels</div>
                        {hotels.map((hotel, k) => <SearchItem key={k} searchUpdate={setSearch} type="hotel" item={hotel}/>
                        )}
                </div>
            </div>
        </div>
    )
}
export default SearchComponent;