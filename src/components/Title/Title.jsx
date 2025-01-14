import scss from "./Title.module.scss"

function Title({title}){
    return <span className={scss.title} >{title}</span>
}

export default Title