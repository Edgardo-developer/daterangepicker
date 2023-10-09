import {useState} from "react";
import styles from '../Form.module.css'
const SearchComponent = () => {
    const [regions, setRegions] = useState(['Moscow, Russia', 'Prague, Czech Republic', 'Saint Petersburg, Russia']);
    const [hotels, setHotels] = useState([
        {
            name: 'Avenue-Apart Na Malom Apart-Otel',
            address: 'Saint Petersburg, Malyij prospekt Vasil\'evskogo ostrova, 54k2',
        },
        {
            name: 'Apart-hotel Metropol',
            address: 'Sochi, Deputatskaya ulitsa, 10B/1',
        },{
            name: 'Port Comfort On Ligovsky Apart-Hotel',
            address: 'Saint Petersburg, Ligovskij prospekt, 29',
        }])

    return (
        <div>
            <div className={styles.input_module}>
                <label htmlFor="search" className={styles.input_label}>Destination</label>
                <input type="text" id={'search'}  className={styles.input}/>
            </div>
        </div>
    )
}
export default SearchComponent;