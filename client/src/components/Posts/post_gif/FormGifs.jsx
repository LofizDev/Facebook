import { useStyles } from "../../header/style"
import { Search } from '@material-ui/icons'
import { useTranslation } from "react-i18next"
const FormGifs = ({ changeKeyword }) => {
    const classes = useStyles();
    const { t } = useTranslation()
    const handleSubmit = (e) => {
        e.preventDefault()
        changeKeyword(e.target.search.value)
    }

    return (
        < >
            <form onSubmit={(e) => handleSubmit(e)} style={{ margin: '12px auto' }}>
                <div
                    style={{ marginRight: '12px' }}
                    className={classes.searchBar}>
                    <Search className={classes.searchIcon} />
                    <input
                        name="search"
                        type="text"
                        id="search-gif"
                        className={classes.searchInput}
                        placeholder={t('timkiemprofile')} />
                </div>
            </form>
        </>
    )
}

export default FormGifs