import style from './Container.module.css';
    
interface ContainerProps {
  children: React.ReactNode;
}
    
export const Container = ({children }: ContainerProps) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};