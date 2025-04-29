import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import ImageFileInput from './components/common/image-file-input'
// import ImageUploader from './service/image-uploader'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import App from 'App'

// const imageUploader = new ImageUploader()

// const FileInput = (props: {
//   imageUploader?: ImageUploader
//   name: string
//   onFileChange?: (obj: { name?: string; url?: string }) => void
// }) => {
//   return (
//     <>
//       <ImageFileInput {...props} imageUploader={imageUploader} />
//     </>
//   )
// }
// const FileInputMemo = React.memo(FileInput)

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
