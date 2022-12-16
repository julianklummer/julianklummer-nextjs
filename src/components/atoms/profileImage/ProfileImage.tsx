import { AdvancedImage, responsive } from '@cloudinary/react'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'

export const ProfileImage: React.FC = () => {
  const image = new CloudinaryImage(
    'v1669500241/business-2022_kkpvdf.png',
    {
      cloudName: 'dol4zcv5c'
    },
    {}
  ).resize(scale().width(6))

  return (
    <div>
      <div
        style={{
          display: 'block',
          maxWidth: 200,
          maxHeight: 200,
          borderRadius: '50%'
        }}
      >
        <AdvancedImage
          cldImg={image}
          width='200px'
          height='200px'
          plugins={[responsive({ steps: [800, 1000, 1400] })]}
        />
      </div>
    </div>
  )
}
