import styles from './Button.module.scss'

type ButtonPropsType = {
    title: string
    callBack?: () => void
    customStyle: 'default' | 'transparent'
    customClassName?: string
}
export const Button = (props: ButtonPropsType) => {
    const {title, callBack, customStyle, customClassName} = props

    const styleButton = customStyle === 'transparent' ? styles.button__transparent : styles.button

    return <button className={customClassName ? `${styleButton} ${customClassName}` : styleButton} type="submit"
                   onClick={callBack}>
        {title}
    </button>
}