import styles from 'styles/components/CompletedChallanges.module.css';

export function CompletedChalanges () {
    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}