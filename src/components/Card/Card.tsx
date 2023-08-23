import style from './Card.module.css';
    
interface CardProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}
    
export const Card = ({children, id, className}: CardProps) => {
    return (
        <div className={`${style.card} ${className || ''}`} id={id}>
            {children}
        </div>
    );
};