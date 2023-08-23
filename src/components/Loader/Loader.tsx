import style from './Loader.module.css';
    
export const Loader = () => {
   
    
    return (
        <div className={style.backdrop}>
            <div className={style.lds_ellipsis}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};