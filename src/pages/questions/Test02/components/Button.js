/** @format */

const Page = ({children, ...props}) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

export default Page
