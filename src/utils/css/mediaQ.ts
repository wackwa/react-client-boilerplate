import { generateMedia } from 'styled-media-query'

export type MediaQProps = {
  desktop: string
  tablet: string
  mobile: string
}

export default generateMedia<MediaQProps>({
  desktop: '1170px',
  tablet: '768px',
  mobile: '360px'
})
