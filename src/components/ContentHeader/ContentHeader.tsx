import style from './ContentHeader.module.css';
    
interface ContentHeaderProps {
  children: React.ReactNode;
}
    
export const ContentHeader = ({children }: ContentHeaderProps) => {
    return (
        <div className={style.contentHeader}>
            {children}
        </div>
    );
};