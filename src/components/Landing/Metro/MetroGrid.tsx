import MetroGridModel from "../../../models/metro-grid";
import MetroStop from "./MetroStop";
import styles from './MetroGrid.module.css';

const MetroGrid = (props: MetroGridModel) => {
    return <table className={styles.MetroGrid}>
            <MetroStop id="1" writing="active" />
            <MetroStop id="2" visual="active" events="active" writing="active" ideas="active"/>
            <MetroStop id="3" visual="active" ideas="active"/>
            <MetroStop id="4"/>
            <MetroStop id="5"/>
            <MetroStop id="6"/>
            <MetroStop id="7"/>
    </table>
}

export default MetroGrid;