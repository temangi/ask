import scss from "./Title.module.scss"

function Title({title,color,background}){
    return <span className={scss.title} style={{color : color , background : background}} >{title}</span>
}

export default Title