import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ListMarcaImagen = () => {

    const dataMarcasImg = [
        {
            img: '/public/atos.png'
        },
        {
            img: '/public/cat.png'
        },
        {
            img: '/public/danfoss.png'
        },
        {
            img: '/public/hyundai.png'
        },
        {
            img: '/public/hyster.png'
        },
        {
            img: '/public/kalmar.png'
        },
        {
            img: '/public/komatsu.png'
        },
        {
            img: '/public/konecranes.png'
        },
        {
            img: '/public/liebherr.png'
        },
        {
            img: '/public/pyf.png'
        },
        {
            img: '/public/rexroth.png'
        },
        {
            img: '/public/sennebogen.png'
        },
        {
            img: '/public/spicer.png'
        },
        {
            img: '/public/sun-hidraulics.png'
        },
        {
            img: '/public/terex.png'
        },
        {
            img: '/public/toyota.png'
        },
        {
            img: '/public/volvo.png'
        }
    ]

    return (
        <ImageList sx={{ width: 800, height: 450 }} cols={3} rowHeight={274}>
            {dataMarcasImg.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
export default ListMarcaImagen