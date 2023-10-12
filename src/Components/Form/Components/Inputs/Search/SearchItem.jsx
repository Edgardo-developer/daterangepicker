import styles from "./Search.module.css";

const SearchItem = (props) => {
    const type = props.type;
    const item = props.item;
    const updateOne = props.searchUpdate;
    function updateSearch(){
        if (typeof item === 'string'){
            updateOne(item);
        }else{
            updateOne(item.name + ', ' + item.country);
        }
    }
    if (type === 'hotel'){
        return (
            <div className={styles.search_item} onClick={function(){
                updateSearch()
            }}>
                <div className={styles.search_item_wrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="23" height="23">
                        <defs>
                            <circle id="a" cx="5.29" cy="5.524" r="2.426"/></defs>
                        <g fill="none" fillRule="evenodd">
                            <g fill="#333"><path d="M5.945 2.91a.6.6 0 0 0 .448-.192.65.65 0 0 0 .191-.447.707.707 0 0 0-.191-.46.683.683 0 0 0-.908 0 .693.693 0 0 0-.178.46c0 .166.063.332.178.447a.648.648 0 0 0 .46.192M8.488 2.91a.64.64 0 0 0 .639-.639.633.633 0 0 0-.64-.639.64.64 0 0 0-.638.64.65.65 0 0 0 .639.638M13.599 2.91a.65.65 0 0 0 .639-.639.64.64 0 0 0-.64-.639.633.633 0 0 0-.638.64.64.64 0 0 0 .639.638M11.043 2.91a.64.64 0 0 0 .64-.639.633.633 0 0 0-.64-.639.633.633 0 0 0-.638.64.64.64 0 0 0 .638.638M16.142 2.91a.648.648 0 0 0 .46-.192.639.639 0 0 0 .179-.447.693.693 0 0 0-.179-.46c-.243-.23-.677-.23-.907 0a.707.707 0 0 0-.192.46.65.65 0 0 0 .192.447.6.6 0 0 0 .447.192"/></g><g strokeWidth=".7" stroke="#333" strokeLinecap="round"><path strokeLinejoin="round" d="M5.819 20.217V4.6h10.392M2.804 20.228V9.155H4.01"/><path d="M8.095 9.155H9.22M2.816 11.701H3.94M2.816 14.257H3.94M3.155 16.684H4.28M11.81 11.701h4.266M8.095 11.701H9.22M8.095 14.257H9.22M8.095 16.813H9.22"/></g><path d="M1.529 20.543h19.678" stroke="#333" strokeWidth=".7" strokeLinecap="round"/><path d="M19.619 7.826c.539.52.931 1.086 1.175 1.696.245.61.371 1.244.38 1.903a4.718 4.718 0 0 1-.38 1.916 5.543 5.543 0 0 1-1.15 1.708c-.05.032-.27.236-.657.61-.388.374-.814.769-1.277 1.183-.464.415-.877.802-1.24 1.16-.362.357-.551.528-.568.512l-.544-.512c-.379-.358-.792-.745-1.239-1.16a198.315 198.315 0 0 1-1.908-1.793c-.54-.52-.936-1.09-1.189-1.708a5.197 5.197 0 0 1-.392-1.916 4.513 4.513 0 0 1 .392-1.903c.27-.61.657-1.176 1.163-1.696a5.904 5.904 0 0 1 1.745-1.099 5.063 5.063 0 0 1 1.985-.378 5.724 5.724 0 0 1 1.984.378c.64.244 1.222.619 1.745 1.123l-.025-.024z" fill="#216FAE"/><g transform="translate(10.612 6.097)">
                            <circle stroke="#FFF" strokeWidth=".77" cx="5.29" cy="5.524" r="2.041"/>
                        </g></g></svg>
                    <div className={styles.search_item_content}>
                        <div className={styles.search_item_heading}>{item.name}</div>
                        <div className={styles.search_item_label}>{item.address}</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={styles.search_item} onClick={
                function (){
                    updateSearch()
                }
            }>
                <div className={styles.search_item_wrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"><g stroke="#333" fill="none" fillRule="evenodd"><g strokeWidth=".7"><path strokeLinejoin="round" d="M5.707 20.645V2.175H16.1v18.633"/><path d="M8.389 9.626h1.125M8.389 6.898h1.125M8.389 4.163h1.125" strokeLinecap="round"/><g strokeLinecap="round"><path strokeLinejoin="round" d="M2.81 20.7v-8.528h1.206"/><path d="M2.821 14.728h1.125M3.043 17.154h.94"/></g><g strokeLinecap="round"><path strokeLinejoin="round" d="M20.456 20.7V7.017h-2.702"/><path d="M20.444 12.172h-2.677M20.444 9.617h-2.677M20.444 14.728h-2.675M20.444 17.154h-2.675"/></g><path d="M11.699 9.617h4.265M11.699 6.889h4.265M11.699 4.153h4.265M11.699 12.172h4.265M11.699 14.728h4.265M11.699 17.154h4.265M8.389 12.172h1.125M8.389 14.728h1.125M8.389 17.283h1.125" strokeLinecap="round"/></g><path d="M1.732 21.014H21.41" strokeWidth=".7" strokeLinecap="round"/></g><script xmlns=""/></svg>
                    <div className={styles.search_item_heading}>{item}</div>
                </div>
            </div>
        )
    }
}

export default SearchItem;