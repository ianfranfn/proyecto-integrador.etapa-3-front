import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagenBack, setSrcImagenBack }) => {

    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']

    arrayEventosDragDrop.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = (e) => {
        const files = e.dataTransfer.files
        handleFiles(files)

    }

    const handleChange = () => {

    }

    const handleFiles = (files) => {
        const file = files[0]
        uploadFile(file)
        previewFile(file)
    }

    const uploadFile = (file) => {

    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('loadend', () => {
            setSrcImagenBack(reader.result)
        })
    }

    return (
        <div className='drop-area' onDrop={handleDrop}>
            <p className='drop-area__text'>
                Subir imagen al servidor con <b>FileDialog</b> o con <b>drag and drop</b> dentro del area punteada.
            </p>

            <input
            type="file" 
            id='lbl-foto' 
            accept='image/*' 
            onChange={handleChange}
            className='drop-area__input'
            />
            <label 
            htmlFor='lbl-foto'
            className="drop-area__button" 
            >
                File Dialog
            </label>

            <div className='drop-area__image'>
                <img src={srcImagenBack} alt="" />
            </div>
        </div>
    )
}

export default DragDrop