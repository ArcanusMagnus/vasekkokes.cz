import MetroGridModel from "../../../models/metro-grid";
import styles from './MetroGrid.module.css';

const MetroGrid = (props: MetroGridModel) => {
    return <table className={styles.MetroGrid}>
        <tr><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
}

export default MetroGrid;