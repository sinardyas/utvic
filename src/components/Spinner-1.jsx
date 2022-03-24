export default function (props) {
  return (
    <div className='flex justify-center p-4'>
      <img src={ require('../assets/images/loading.png') }
        alt="Page loading"
        width="32"
        height="32"
        className='animate-spin'
        />
    </div>
  )
}