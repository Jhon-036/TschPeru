const WhatsApp = ({className='', phone='51951758040', text=''}) => {

    const url = `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

  return (
    <a className={`${className} w-[50px]`} href={url} target="_blank" rel="noopener noreferrer">
        <img src="/wsp-icon.png" alt="wsp-icon-tsch.png" />
    </a>
  )
}
export default WhatsApp